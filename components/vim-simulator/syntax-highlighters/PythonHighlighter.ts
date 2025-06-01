import { SyntaxHighlighter, SyntaxToken } from "../SyntaxHighlighter";

export class PythonHighlighter implements SyntaxHighlighter {
  private readonly keywords = new Set([
    "def",
    "class",
    "if",
    "elif",
    "else",
    "for",
    "while",
    "break",
    "continue",
    "return",
    "yield",
    "try",
    "except",
    "finally",
    "with",
    "as",
    "import",
    "from",
    "global",
    "nonlocal",
    "lambda",
    "and",
    "or",
    "not",
    "in",
    "is",
    "True",
    "False",
    "None",
    "async",
    "await",
    "pass",
    "del",
    "raise",
    "assert",
  ]);

  private readonly builtins = new Set([
    "print",
    "len",
    "range",
    "str",
    "int",
    "float",
    "bool",
    "list",
    "dict",
    "tuple",
    "set",
    "type",
    "isinstance",
    "hasattr",
    "getattr",
    "setattr",
    "delattr",
    "dir",
    "vars",
    "callable",
    "iter",
    "next",
    "enumerate",
    "zip",
    "map",
    "filter",
    "sorted",
    "reversed",
    "sum",
    "min",
    "max",
    "abs",
    "round",
    "pow",
    "divmod",
    "open",
    "input",
    "eval",
    "exec",
  ]);

  private readonly operators = /[+\-*/%=<>!&|^~@]/;

  tokenize(line: string): SyntaxToken[] {
    const tokens: SyntaxToken[] = [];
    let i = 0;

    while (i < line.length) {
      // Skip whitespace
      if (/\s/.test(line[i])) {
        i++;
        continue;
      }

      // Comments
      if (line[i] === "#") {
        const start = i;
        while (i < line.length) {
          i++;
        }
        tokens.push({
          type: "comment",
          value: line.slice(start, i),
          start,
          end: i
        });
        continue;
      }

      // Triple-quoted strings
      if (
        i < line.length - 2 &&
        (line.slice(i, i + 3) === '"""' || line.slice(i, i + 3) === "'''")
      ) {
        const quote = line.slice(i, i + 3);
        const start = i;
        i += 3;
        // In a single line context, just go to the end if we find a triple-quoted string
        // (This is a simplification as triple-quoted strings are multi-line)
        while (i < line.length - 2 && line.slice(i, i + 3) !== quote) {
          i++;
        }
        if (i < line.length - 2) {
          i += 3;
        } else {
          // If we don't find the closing triple-quote, go to the end
          i = line.length;
        }
        tokens.push({
          type: "string",
          value: line.slice(start, i),
          start,
          end: i
        });
        continue;
      }

      // String literals
      if (
        line[i] === '"' ||
        line[i] === "'" ||
        (line[i] === "f" &&
          i + 1 < line.length &&
          (line[i + 1] === '"' || line[i + 1] === "'"))
      ) {
        const start = i;
        let isFormatted = false;

        if (line[i] === "f") {
          isFormatted = true;
          i++;
        }

        const quote = line[i];
        i++; // Skip opening quote

        while (i < line.length && line[i] !== quote) {
          if (line[i] === "\\") {
            i += 2; // Skip escaped character
          } else {
            i++;
          }
        }

        if (i < line.length) {
          i++; // Skip closing quote
        }

        tokens.push({
          type: "string",
          value: line.slice(start, i),
          start,
          end: i
        });
        continue;
      }

      // Numbers
      if (/\d/.test(line[i])) {
        const start = i;
        while (i < line.length && /[\d.]/.test(line[i])) {
          i++;
        }
        
        // Check for scientific notation
        if (i < line.length && (line[i] === "e" || line[i] === "E")) {
          i++;
          if (i < line.length && (line[i] === "+" || line[i] === "-")) {
            i++;
          }
          while (i < line.length && /\d/.test(line[i])) {
            i++;
          }
        }
        
        tokens.push({
          type: "number",
          value: line.slice(start, i),
          start,
          end: i
        });
        continue;
      }

      // Operators
      if (this.operators.test(line[i])) {
        const start = i;
        // Handle multi-character operators
        if (i < line.length - 1) {
          const twoChar = line.slice(i, i + 2);
          if (
            [
              "==",
              "!=",
              "<=",
              ">=",
              "//",
              "**",
              "<<",
              ">>",
              "+=",
              "-=",
              "*=",
              "/=",
              "%=",
              "&=",
              "|=",
              "^=",
              "<<=",
              ">>=",
              "//=",
              "**=",
            ].includes(twoChar)
          ) {
            i += 2;
          } else {
            i++;
          }
        } else {
          i++;
        }
        
        tokens.push({
          type: "operator",
          value: line.slice(start, i),
          start,
          end: i
        });
        continue;
      }

      // Decorators (handle as a special kind of function)
      if (line[i] === "@") {
        const start = i;
        i++; // Skip @
        
        while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) {
          i++;
        }
        
        tokens.push({
          type: "function",
          value: line.slice(start, i),
          start,
          end: i
        });
        continue;
      }

      // Identifiers (keywords, builtins, functions, variables)
      if (/[a-zA-Z_]/.test(line[i])) {
        const start = i;
        while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) {
          i++;
        }

        const identifier = line.slice(start, i);
        let type: SyntaxToken["type"] = "variable";

        if (this.keywords.has(identifier)) {
          type = "keyword";
        } else if (this.builtins.has(identifier)) {
          type = "function";
        } else if (i < line.length && line[i] === "(") {
          type = "function";
        }

        tokens.push({
          type,
          value: identifier,
          start,
          end: i
        });
        continue;
      }

      // Punctuation (handle as operators for highlighting purposes)
      if (/[()[\]{},.:;]/.test(line[i])) {
        tokens.push({
          type: "operator",
          value: line[i],
          start: i,
          end: i + 1
        });
        i++;
        continue;
      }

      // Any other character
      tokens.push({
        type: "default",
        value: line[i],
        start: i,
        end: i + 1
      });
      i++;
    }

    return tokens;
  }
}
