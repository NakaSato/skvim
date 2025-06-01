import { SyntaxHighlighter, SyntaxToken } from "../SyntaxHighlighter";

export class MarkdownHighlighter implements SyntaxHighlighter {
  tokenize(line: string): SyntaxToken[] {
    const tokens: SyntaxToken[] = [];
    let i = 0;

    // Empty line
    if (line.trim() === "") {
      return [];
    }

    // Process a single line
    while (i < line.length) {
      // Headers
      if (i === 0 && line[i] === "#") {
        const start = i;
        while (i < line.length && line[i] === "#") {
          i++;
        }

        // Skip space after hashes
        if (i < line.length && line[i] === " ") {
          i++;
        }

        // Read rest of header
        const headerStart = i;
        while (i < line.length) {
          i++;
        }

        tokens.push({
          type: "keyword",
          value: line.slice(start, headerStart),
          start: start,
          end: headerStart,
        });

        tokens.push({
          type: "variable",
          value: line.slice(headerStart, i),
          start: headerStart,
          end: i,
        });

        continue;
      }

      // Lists
      if (
        i === 0 &&
        (line[i] === "-" || line[i] === "*" || line[i] === "+") &&
        i + 1 < line.length &&
        line[i + 1] === " "
      ) {
        tokens.push({
          type: "operator",
          value: line[i],
          start: i,
          end: i + 1,
        });
        i += 2; // Skip the bullet and space
        continue;
      }

      // Numbered lists
      if (i === 0 && /\d/.test(line[i])) {
        const start = i;
        while (i < line.length && /\d/.test(line[i])) {
          i++;
        }

        if (
          i < line.length &&
          line[i] === "." &&
          i + 1 < line.length &&
          line[i + 1] === " "
        ) {
          tokens.push({
            type: "number",
            value: line.slice(start, i + 1), // Include the dot
            start: start,
            end: i + 1,
          });
          i += 2; // Skip the dot and space
          continue;
        } else {
          // Reset if it's not a list
          i = start;
        }
      }

      // Block quotes
      if (
        i === 0 &&
        line[i] === ">" &&
        i + 1 < line.length &&
        line[i + 1] === " "
      ) {
        tokens.push({
          type: "comment",
          value: line.slice(0, 2),
          start: 0,
          end: 2,
        });
        i += 2;
        continue;
      }

      // Code blocks
      if (i === 0 && line.startsWith("```")) {
        return [
          {
            type: "string",
            value: line,
            start: 0,
            end: line.length,
          },
        ];
      }

      // Bold text
      if (i < line.length - 1 && line.slice(i, i + 2) === "**") {
        const start = i;
        i += 2; // Skip opening **

        while (i < line.length - 1 && line.slice(i, i + 2) !== "**") {
          i++;
        }

        if (i < line.length - 1) {
          i += 2; // Skip closing **
          tokens.push({
            type: "keyword",
            value: line.slice(start, i),
            start: start,
            end: i,
          });
          continue;
        } else {
          // No closing **, treat as normal text
          i = start + 1;
        }
      }

      // Inline code
      if (line[i] === "`") {
        const start = i;
        i++; // Skip opening backtick

        while (i < line.length && line[i] !== "`") {
          i++;
        }

        if (i < line.length) {
          i++; // Skip closing backtick
          tokens.push({
            type: "string",
            value: line.slice(start, i),
            start: start,
            end: i,
          });
          continue;
        } else {
          // No closing backtick, treat as normal text
          i = start + 1;
        }
      }

      // Links
      if (line[i] === "[") {
        const start = i;
        i++; // Skip opening bracket

        // Find closing bracket
        let foundClosingBracket = false;
        while (i < line.length && line[i] !== "]") {
          i++;
        }

        if (i < line.length) {
          i++; // Skip closing bracket
          foundClosingBracket = true;
        }

        // Look for URL part
        if (foundClosingBracket && i < line.length && line[i] === "(") {
          i++; // Skip opening parenthesis

          while (i < line.length && line[i] !== ")") {
            i++;
          }

          if (i < line.length) {
            i++; // Skip closing parenthesis
            tokens.push({
              type: "function",
              value: line.slice(start, i),
              start: start,
              end: i,
            });
            continue;
          }
        }

        // If we didn't find a properly formatted link, go back and treat as normal text
        i = start + 1;
      }

      // Regular text
      const start = i;
      while (
        i < line.length &&
        !["*", "_", "`", "#", ">", "[", "]", "!"].includes(line[i]) &&
        !(i < line.length - 1 && line.slice(i, i + 2) === "**")
      ) {
        i++;
      }

      if (i > start) {
        tokens.push({
          type: "default",
          value: line.slice(start, i),
          start: start,
          end: i,
        });
      } else {
        // Single character that didn't match any pattern
        tokens.push({
          type: "default",
          value: line[i],
          start: i,
          end: i + 1,
        });
        i++;
      }
    }

    return tokens;
  }
}
