import React from "react";

export interface SyntaxToken {
  type:
    | "keyword"
    | "string"
    | "comment"
    | "number"
    | "operator"
    | "function"
    | "variable"
    | "default";
  value: string;
  start: number;
  end: number;
}

export interface SyntaxHighlighter {
  tokenize(line: string): SyntaxToken[];
}

// Simple JavaScript syntax highlighter
export class JavaScriptHighlighter implements SyntaxHighlighter {
  private keywords = new Set([
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "class",
    "extends",
    "import",
    "export",
    "default",
    "from",
    "async",
    "await",
    "try",
    "catch",
    "finally",
    "throw",
    "new",
    "this",
    "super",
    "static",
  ]);

  tokenize(line: string): SyntaxToken[] {
    const tokens: SyntaxToken[] = [];
    let i = 0;

    while (i < line.length) {
      const char = line[i];

      // Skip whitespace
      if (/\s/.test(char)) {
        i++;
        continue;
      }

      // Comments
      if (char === "/" && line[i + 1] === "/") {
        const start = i;
        i = line.length;
        tokens.push({
          type: "comment",
          value: line.slice(start, i),
          start,
          end: i,
        });
        continue;
      }

      // String literals
      if (char === '"' || char === "'" || char === "`") {
        const quote = char;
        const start = i;
        i++; // Skip opening quote

        while (i < line.length && line[i] !== quote) {
          if (line[i] === "\\") i++; // Skip escaped characters
          i++;
        }
        if (i < line.length) i++; // Skip closing quote

        tokens.push({
          type: "string",
          value: line.slice(start, i),
          start,
          end: i,
        });
        continue;
      }

      // Numbers
      if (/\d/.test(char)) {
        const start = i;
        while (i < line.length && /[\d.]/.test(line[i])) {
          i++;
        }
        tokens.push({
          type: "number",
          value: line.slice(start, i),
          start,
          end: i,
        });
        continue;
      }

      // Operators
      if (/[+\-*/%=<>!&|^~?:]/.test(char)) {
        const start = i;
        // Handle multi-character operators
        if (i + 1 < line.length) {
          const twoChar = line.slice(i, i + 2);
          if (
            [
              "==",
              "!=",
              "<=",
              ">=",
              "&&",
              "||",
              "++",
              "--",
              "=>",
              "??",
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
          end: i,
        });
        continue;
      }

      // Identifiers (keywords, functions, variables)
      if (/[a-zA-Z_$]/.test(char)) {
        const start = i;
        while (i < line.length && /[a-zA-Z0-9_$]/.test(line[i])) {
          i++;
        }

        const value = line.slice(start, i);
        const isKeyword = this.keywords.has(value);

        // Check if it's a function call
        let isFunction = false;
        let j = i;
        while (j < line.length && /\s/.test(line[j])) j++; // Skip whitespace
        if (j < line.length && line[j] === "(") {
          isFunction = true;
        }

        tokens.push({
          type: isKeyword ? "keyword" : isFunction ? "function" : "variable",
          value,
          start,
          end: i,
        });
        continue;
      }

      // Everything else
      const start = i;
      i++;
      tokens.push({
        type: "default",
        value: line.slice(start, i),
        start,
        end: i,
      });
    }

    return tokens;
  }
}

interface SyntaxHighlightedLineProps {
  line: string;
  lineIndex: number;
  highlighter?: SyntaxHighlighter;
  cursor: { line: number; column: number };
  isActive: boolean;
  isInVisualSelection: (lineIndex: number, charIndex: number) => boolean;
}

export const SyntaxHighlightedLine: React.FC<SyntaxHighlightedLineProps> = ({
  line,
  lineIndex,
  highlighter,
  cursor,
  isActive,
  isInVisualSelection,
}) => {
  const getTokenStyle = (type: SyntaxToken["type"]): string => {
    switch (type) {
      case "keyword":
        return "text-blue-400 font-semibold";
      case "string":
        return "text-green-400";
      case "comment":
        return "text-slate-500 italic";
      case "number":
        return "text-orange-400";
      case "operator":
        return "text-purple-400";
      case "function":
        return "text-yellow-400";
      case "variable":
        return "text-slate-200";
      default:
        return "text-slate-200";
    }
  };

  // If no highlighter provided, render as plain text
  if (!highlighter) {
    return (
      <>
        {line.split("").map((char, charIndex) => {
          const isCursor =
            cursor.line === lineIndex && cursor.column === charIndex;
          const isVisualSelected = isInVisualSelection(lineIndex, charIndex);

          return (
            <span
              key={charIndex}
              className={`
                relative inline-block
                ${
                  isCursor && isActive
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 shadow-lg shadow-blue-400/25 rounded-sm"
                    : ""
                }
                ${
                  isVisualSelected
                    ? "bg-gradient-to-r from-purple-500/60 to-blue-500/60 text-white backdrop-blur-sm"
                    : ""
                }
                ${!isCursor && !isVisualSelected ? "text-slate-100" : ""}
              `}
            >
              {char}
            </span>
          );
        })}
      </>
    );
  }

  // Render with syntax highlighting
  const tokens = highlighter.tokenize(line);
  const chars = line.split("");
  let tokenIndex = 0;
  let currentToken = tokens[tokenIndex];

  return (
    <>
      {chars.map((char, charIndex) => {
        // Update current token if we've moved past it
        while (currentToken && charIndex >= currentToken.end) {
          tokenIndex++;
          currentToken = tokens[tokenIndex];
        }

        const isCursor =
          cursor.line === lineIndex && cursor.column === charIndex;
        const isVisualSelected = isInVisualSelection(lineIndex, charIndex);

        // Determine the token type for this character
        const tokenType =
          currentToken &&
          charIndex >= currentToken.start &&
          charIndex < currentToken.end
            ? currentToken.type
            : "default";

        const baseStyle = getTokenStyle(tokenType);

        return (
          <span
            key={charIndex}
            className={`
              relative inline-block
              ${
                isCursor && isActive
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 shadow-lg shadow-blue-400/25 rounded-sm"
                  : ""
              }
              ${
                isVisualSelected
                  ? "bg-gradient-to-r from-purple-500/60 to-blue-500/60 text-white backdrop-blur-sm"
                  : ""
              }
              ${!isCursor && !isVisualSelected ? baseStyle : ""}
            `}
          >
            {char}
          </span>
        );
      })}
    </>
  );
};
