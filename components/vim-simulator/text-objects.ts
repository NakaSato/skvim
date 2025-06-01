import { CursorPosition, TextObject, EditorState } from "./types";
import { isWordChar, isWhitespace } from "./utils";

// Select text object (returns start and end positions)
export const selectTextObject = (
  lines: string[],
  cursor: CursorPosition,
  textObject: TextObject
): { start: CursorPosition; end: CursorPosition } | null => {
  switch (textObject.type) {
    case "w":
    case "W":
      return selectWordObject(lines, cursor, textObject.scope);
    case "p":
      return selectParagraphObject(lines, cursor, textObject.scope);
    case "s":
    case "S":
      return selectSentenceObject(lines, cursor, textObject.scope);
    case "(":
    case ")":
      return selectBracketObject(lines, cursor, "(", ")", textObject.scope);
    case "{":
    case "}":
      return selectBracketObject(lines, cursor, "{", "}", textObject.scope);
    case "[":
    case "]":
      return selectBracketObject(lines, cursor, "[", "]", textObject.scope);
    case "<":
    case ">":
      return selectBracketObject(lines, cursor, "<", ">", textObject.scope);
    case '"':
      return selectQuoteObject(lines, cursor, '"', textObject.scope);
    case "'":
      return selectQuoteObject(lines, cursor, "'", textObject.scope);
    case "`":
      return selectQuoteObject(lines, cursor, "`", textObject.scope);
    default:
      return null;
  }
};

// Word text object (iw = inner word, aw = around word)
export const selectWordObject = (
  lines: string[],
  cursor: CursorPosition,
  scope: "inner" | "around"
): { start: CursorPosition; end: CursorPosition } | null => {
  const currentLine = lines[cursor.line];
  if (!currentLine) return null;

  let startCol = cursor.column;
  let endCol = cursor.column;

  // Move to start of word
  while (startCol > 0 && isWordChar(currentLine[startCol - 1])) {
    startCol--;
  }

  // Move to end of word
  while (
    endCol < currentLine.length - 1 &&
    isWordChar(currentLine[endCol + 1])
  ) {
    endCol++;
  }

  // If scope is "around", include surrounding whitespace
  if (scope === "around") {
    // Include trailing whitespace
    while (
      endCol < currentLine.length - 1 &&
      isWhitespace(currentLine[endCol + 1])
    ) {
      endCol++;
    }

    // If no trailing whitespace, include leading whitespace
    if (endCol === cursor.column) {
      while (startCol > 0 && isWhitespace(currentLine[startCol - 1])) {
        startCol--;
      }
    }
  }

  return {
    start: { line: cursor.line, column: startCol },
    end: { line: cursor.line, column: endCol },
  };
};

// Bracket/parenthesis text object (i( = inner parentheses, a( = around parentheses)
export const selectBracketObject = (
  lines: string[],
  cursor: CursorPosition,
  openBracket: string,
  closeBracket: string,
  scope: "inner" | "around"
): { start: CursorPosition; end: CursorPosition } | null => {
  const currentLine = lines[cursor.line];
  if (!currentLine) return null;

  let openPos = -1;
  let closePos = -1;
  let depth = 0;

  // Find opening bracket (search backwards from cursor)
  for (let i = cursor.column; i >= 0; i--) {
    if (currentLine[i] === closeBracket) {
      depth++;
    } else if (currentLine[i] === openBracket) {
      if (depth === 0) {
        openPos = i;
        break;
      }
      depth--;
    }
  }

  if (openPos === -1) return null;

  // Find closing bracket (search forwards from opening bracket)
  depth = 0;
  for (let i = openPos; i < currentLine.length; i++) {
    if (currentLine[i] === openBracket) {
      depth++;
    } else if (currentLine[i] === closeBracket) {
      depth--;
      if (depth === 0) {
        closePos = i;
        break;
      }
    }
  }

  if (closePos === -1) return null;

  // Adjust positions based on scope
  const startCol = scope === "inner" ? openPos + 1 : openPos;
  const endCol = scope === "inner" ? closePos - 1 : closePos;

  return {
    start: { line: cursor.line, column: startCol },
    end: { line: cursor.line, column: endCol },
  };
};

// Quote text object (i" = inner quotes, a" = around quotes)
export const selectQuoteObject = (
  lines: string[],
  cursor: CursorPosition,
  quoteChar: string,
  scope: "inner" | "around"
): { start: CursorPosition; end: CursorPosition } | null => {
  const currentLine = lines[cursor.line];
  if (!currentLine) return null;

  let openPos = -1;
  let closePos = -1;

  // Find opening quote (search backwards from cursor)
  for (let i = cursor.column; i >= 0; i--) {
    if (currentLine[i] === quoteChar) {
      openPos = i;
      break;
    }
  }

  if (openPos === -1) return null;

  // Find closing quote (search forwards from opening quote + 1)
  for (let i = openPos + 1; i < currentLine.length; i++) {
    if (currentLine[i] === quoteChar) {
      closePos = i;
      break;
    }
  }

  if (closePos === -1) return null;

  // Adjust positions based on scope
  const startCol = scope === "inner" ? openPos + 1 : openPos;
  const endCol = scope === "inner" ? closePos - 1 : closePos;

  return {
    start: { line: cursor.line, column: startCol },
    end: { line: cursor.line, column: endCol },
  };
};

// Paragraph text object (ip = inner paragraph, ap = around paragraph)
export const selectParagraphObject = (
  lines: string[],
  cursor: CursorPosition,
  scope: "inner" | "around"
): { start: CursorPosition; end: CursorPosition } | null => {
  let startLine = cursor.line;
  let endLine = cursor.line;

  // Find start of paragraph (go up until empty line or start of file)
  while (startLine > 0 && lines[startLine].trim() !== "") {
    startLine--;
  }
  if (lines[startLine].trim() === "" && scope === "inner") {
    startLine++;
  }

  // Find end of paragraph (go down until empty line or end of file)
  while (endLine < lines.length - 1 && lines[endLine].trim() !== "") {
    endLine++;
  }
  if (lines[endLine].trim() === "" && scope === "inner") {
    endLine--;
  }

  return {
    start: { line: startLine, column: 0 },
    end: { line: endLine, column: lines[endLine]?.length - 1 || 0 },
  };
};

// Sentence text object (is = inner sentence, as = around sentence)
export const selectSentenceObject = (
  lines: string[],
  cursor: CursorPosition,
  scope: "inner" | "around"
): { start: CursorPosition; end: CursorPosition } | null => {
  const currentLine = lines[cursor.line];
  if (!currentLine) return null;

  // Simplified sentence detection: look for . ! ?
  const sentenceEnders = /[.!?]/;
  let startCol = 0;
  let endCol = currentLine.length - 1;

  // Find sentence start (search backwards for sentence ender)
  for (let i = cursor.column; i >= 0; i--) {
    if (sentenceEnders.test(currentLine[i])) {
      startCol = i + 1;
      break;
    }
  }

  // Find sentence end (search forwards for sentence ender)
  for (let i = cursor.column; i < currentLine.length; i++) {
    if (sentenceEnders.test(currentLine[i])) {
      endCol = i;
      break;
    }
  }

  // Skip leading whitespace for inner scope
  if (scope === "inner") {
    while (startCol < endCol && isWhitespace(currentLine[startCol])) {
      startCol++;
    }
  }

  return {
    start: { line: cursor.line, column: startCol },
    end: { line: cursor.line, column: endCol },
  };
};

// Process text object operation (delete, change, yank with text objects)
export const processTextObjectOperation = (
  state: EditorState,
  operator: string,
  textObject: TextObject
): EditorState => {
  const selection = selectTextObject(state.lines, state.cursor, textObject);
  if (!selection) {
    return {
      ...state,
      statusMessage: "Invalid text object",
      operatorPending: undefined,
    };
  }

  const { start, end } = selection;
  const newLines = [...state.lines];

  // Handle different scopes for text object adjustment
  let actualStart = start;
  let actualEnd = end;

  // For "around" scope, include surrounding whitespace/delimiters
  if (textObject.scope === "around") {
    // Adjust based on text object type
    if (["w", "W"].includes(textObject.type)) {
      // For words, include trailing whitespace
      const currentLine = newLines[end.line];
      while (
        actualEnd.column < currentLine.length &&
        isWhitespace(currentLine[actualEnd.column])
      ) {
        actualEnd = { ...actualEnd, column: actualEnd.column + 1 };
      }
    }
  }

  switch (operator) {
    case "d": // Delete
      if (actualStart.line === actualEnd.line) {
        // Single line deletion
        const line = newLines[actualStart.line];
        newLines[actualStart.line] =
          line.substring(0, actualStart.column) +
          line.substring(actualEnd.column);
      } else {
        // Multi-line deletion
        const firstLine = newLines[actualStart.line].substring(
            0,
            actualStart.column
          ),
          lastLine = newLines[actualEnd.line].substring(actualEnd.column);
        newLines[actualStart.line] = firstLine + lastLine;
        newLines.splice(
          actualStart.line + 1,
          actualEnd.line - actualStart.line
        );
      }

      return {
        ...state,
        lines: newLines,
        cursor: actualStart,
        statusMessage: `Deleted ${textObject.scope} ${textObject.type}`,
        operatorPending: undefined,
        lastOperator: "d",
        lastTextObject: textObject,
      };

    case "c": // Change (delete and enter insert mode)
      if (actualStart.line === actualEnd.line) {
        // Single line change
        const line = newLines[actualStart.line];
        newLines[actualStart.line] =
          line.substring(0, actualStart.column) +
          line.substring(actualEnd.column);
      } else {
        // Multi-line change
        const firstLine = newLines[actualStart.line].substring(
            0,
            actualStart.column
          ),
          lastLine = newLines[actualEnd.line].substring(actualEnd.column);
        newLines[actualStart.line] = firstLine + lastLine;
        newLines.splice(
          actualStart.line + 1,
          actualEnd.line - actualStart.line
        );
      }

      return {
        ...state,
        lines: newLines,
        cursor: actualStart,
        mode: "INSERT",
        statusMessage: "-- INSERT --",
        operatorPending: undefined,
        lastOperator: "c",
        lastTextObject: textObject,
      };

    case "y": // Yank
      let yankText = "";
      if (actualStart.line === actualEnd.line) {
        // Single line yank
        yankText = newLines[actualStart.line].substring(
          actualStart.column,
          actualEnd.column
        );
      } else {
        // Multi-line yank
        const lines = [];
        for (let i = actualStart.line; i <= actualEnd.line; i++) {
          if (i === actualStart.line) {
            lines.push(newLines[i].substring(actualStart.column));
          } else if (i === actualEnd.line) {
            lines.push(newLines[i].substring(0, actualEnd.column));
          } else {
            lines.push(newLines[i]);
          }
        }
        yankText = lines.join("\n");
      }

      return {
        ...state,
        registers: { ...state.registers, '"': yankText },
        statusMessage: `Yanked ${textObject.scope} ${textObject.type}`,
        operatorPending: undefined,
        lastOperator: "y",
        lastTextObject: textObject,
      };

    default:
      return {
        ...state,
        statusMessage: "Unknown operator",
        operatorPending: undefined,
      };
  }
};
