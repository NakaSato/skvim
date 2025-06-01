import { SyntaxHighlighter, SyntaxToken } from "../SyntaxHighlighter";

export class JSONHighlighter implements SyntaxHighlighter {
  private readonly keywords = new Set(["true", "false", "null"]);

  tokenize(line: string): SyntaxToken[] {
    const tokens: SyntaxToken[] = [];
    let i = 0;

    while (i < line.length) {
      // Skip whitespace
      if (/\s/.test(line[i])) {
        i++;
        continue;
      }

      // String literals (including property names)
      if (line[i] === '"') {
        const start = i;
        i++; // Skip opening quote

        while (i < line.length && line[i] !== '"') {
          if (line[i] === "\\") {
            i += 2; // Skip escaped character
          } else {
            i++;
          }
        }

        if (i < line.length) {
          i++; // Skip closing quote
        }

        // Determine if this is a property name or value
        let j = i;
        while (j < line.length && /\s/.test(line[j])) {
          j++;
        }

        const isProperty = j < line.length && line[j] === ":";

        tokens.push({
          type: isProperty ? "variable" : "string",
          value: line.slice(start, i),
          start: start,
          end: i,
        });
        continue;
      }

      // Numbers
      if (/[\d-]/.test(line[i])) {
        const start = i;

        // Handle negative sign
        if (line[i] === "-") {
          i++;
        }

        // Parse integer part
        while (i < line.length && /\d/.test(line[i])) {
          i++;
        }

        // Parse decimal part
        if (i < line.length && line[i] === ".") {
          i++;
          while (i < line.length && /\d/.test(line[i])) {
            i++;
          }
        }

        // Parse exponent part
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
          start: start,
          end: i,
        });
        continue;
      }

      // Keywords (true, false, null)
      if (/[a-zA-Z]/.test(line[i])) {
        const start = i;
        while (i < line.length && /[a-zA-Z]/.test(line[i])) {
          i++;
        }

        const identifier = line.slice(start, i);
        const type = this.keywords.has(identifier) ? "keyword" : "default";

        tokens.push({
          type: type as "keyword" | "default",
          value: identifier,
          start: start,
          end: i,
        });
        continue;
      }

      // Punctuation
      if (/[{}[\],:]/.test(line[i])) {
        tokens.push({
          type: "operator",
          value: line[i],
          start: i,
          end: i + 1,
        });
        i++;
        continue;
      }

      // Any other character (shouldn't occur in valid JSON)
      tokens.push({
        type: "default",
        value: line[i],
        start: i,
        end: i + 1,
      });
      i++;
    }

    return tokens;
  }
}
