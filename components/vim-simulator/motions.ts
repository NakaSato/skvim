import { CursorPosition, EditorState } from "./types";
import { isWordChar, isWhitespace } from "./utils";

// Get next word position (for 'w' motion)
export const findNextWordStart = (
  lines: string[],
  startLine: number,
  startCol: number
): CursorPosition => {
  let line = startLine;
  let col = startCol + 1; // Start from next character

  while (line < lines.length) {
    const currentLine = lines[line];

    // If we're at the end of line, move to next line
    if (col >= currentLine.length) {
      if (line === lines.length - 1) {
        // At the end of the file
        return { line, column: Math.max(0, currentLine.length - 1) };
      }
      line++;
      col = 0;
      continue;
    }

    const prevChar = col > 0 ? currentLine[col - 1] : "";
    const currentChar = currentLine[col];

    // Word start is defined as:
    // - First character of line
    // - First non-whitespace after whitespace
    // - First word-char after non-word-char
    // - First non-word-char after word-char
    if (
      col === 0 ||
      (isWhitespace(prevChar) && !isWhitespace(currentChar)) ||
      (!isWordChar(prevChar) && isWordChar(currentChar)) ||
      (isWordChar(prevChar) &&
        !isWordChar(currentChar) &&
        !isWhitespace(currentChar))
    ) {
      return { line, column: col };
    }

    col++;
  }

  // If we get here, return end of file
  return {
    line: lines.length - 1,
    column: Math.max(0, lines[lines.length - 1].length - 1),
  };
};

// Get previous word start position (for 'b' motion)
export const findPrevWordStart = (
  lines: string[],
  startLine: number,
  startCol: number
): CursorPosition => {
  let line = startLine;
  let col = startCol - 1; // Start from previous character

  while (line >= 0) {
    const currentLine = lines[line];

    // If we're at the start of line, move to previous line
    if (col < 0) {
      if (line === 0) {
        // At the start of the file
        return { line: 0, column: 0 };
      }
      line--;
      col = lines[line].length - 1;
      continue;
    }

    const currentChar = currentLine[col];
    const nextChar = col < currentLine.length - 1 ? currentLine[col + 1] : "";

    if (
      col === 0 ||
      (isWhitespace(nextChar) && !isWhitespace(currentChar)) ||
      (!isWordChar(nextChar) && isWordChar(currentChar)) ||
      (isWordChar(nextChar) &&
        !isWordChar(currentChar) &&
        !isWhitespace(currentChar))
    ) {
      return { line, column: col };
    }

    col--;
  }

  // If we get here, return start of file
  return { line: 0, column: 0 };
};

// Get end of word position (for 'e' motion)
export const findWordEnd = (
  lines: string[],
  startLine: number,
  startCol: number
): CursorPosition => {
  let line = startLine;
  let col = startCol + 1; // Start from next character

  while (line < lines.length) {
    const currentLine = lines[line];

    // If we're at the end of line, move to next line
    if (col >= currentLine.length) {
      if (line === lines.length - 1) {
        // At the end of the file
        return { line, column: Math.max(0, currentLine.length - 1) };
      }
      line++;
      col = 0;
      continue;
    }

    const currentChar = currentLine[col];
    const nextChar = col < currentLine.length - 1 ? currentLine[col + 1] : "";

    // Word end is defined as last character before:
    // - A whitespace
    // - A transition from word to non-word char
    // - A transition from non-word to word char
    if (
      (isWordChar(currentChar) &&
        (!isWordChar(nextChar) ||
          isWhitespace(nextChar) ||
          col === currentLine.length - 1)) ||
      (!isWordChar(currentChar) &&
        !isWhitespace(currentChar) &&
        (isWordChar(nextChar) ||
          isWhitespace(nextChar) ||
          col === currentLine.length - 1))
    ) {
      return { line, column: col };
    }

    col++;
  }

  // If we get here, return end of file
  return {
    line: lines.length - 1,
    column: Math.max(0, lines[lines.length - 1].length - 1),
  };
};

// Find character in current line
export const findCharInLine = (
  line: string,
  char: string,
  startCol: number,
  direction: "forward" | "backward",
  inclusive: boolean
): number => {
  if (direction === "forward") {
    for (let i = startCol + 1; i < line.length; i++) {
      if (line[i] === char) {
        return inclusive ? i : i - 1;
      }
    }
  } else {
    for (let i = startCol - 1; i >= 0; i--) {
      if (line[i] === char) {
        return inclusive ? i : i + 1;
      }
    }
  }
  return -1; // Not found
};

// Main motion functions that update editor state
export const moveCursorDirection = (
  state: EditorState,
  direction: string,
  count: number = 1
): EditorState => {
  const { cursor, lines } = state;
  let newCursor = { ...cursor };

  for (let i = 0; i < count; i++) {
    switch (direction) {
      case "h": // Left
        if (newCursor.column > 0) {
          newCursor.column--;
        }
        break;
      case "j": // Down
        if (newCursor.line < lines.length - 1) {
          newCursor.line++;
          // Adjust column if new line is shorter
          const newLineLength = lines[newCursor.line].length;
          if (newCursor.column >= newLineLength) {
            newCursor.column = Math.max(0, newLineLength - 1);
          }
        }
        break;
      case "k": // Up
        if (newCursor.line > 0) {
          newCursor.line--;
          // Adjust column if new line is shorter
          const newLineLength = lines[newCursor.line].length;
          if (newCursor.column >= newLineLength) {
            newCursor.column = Math.max(0, newLineLength - 1);
          }
        }
        break;
      case "l": // Right
        const currentLineLength = lines[newCursor.line].length;
        if (newCursor.column < currentLineLength - 1) {
          newCursor.column++;
        }
        break;
    }
  }

  return { ...state, cursor: newCursor };
};

export const moveByWord = (
  state: EditorState,
  direction: string,
  count: number = 1
): EditorState => {
  let newCursor = { ...state.cursor };

  for (let i = 0; i < count; i++) {
    switch (direction) {
      case "w":
        newCursor = findNextWordStart(
          state.lines,
          newCursor.line,
          newCursor.column
        );
        break;
      case "b":
        newCursor = findPrevWordStart(
          state.lines,
          newCursor.line,
          newCursor.column
        );
        break;
      case "e":
        newCursor = findWordEnd(state.lines, newCursor.line, newCursor.column);
        break;
    }
  }

  return { ...state, cursor: newCursor };
};

export const moveToLinePosition = (
  state: EditorState,
  position: string
): EditorState => {
  const { cursor, lines } = state;
  let newCursor = { ...cursor };
  const currentLine = lines[cursor.line];

  switch (position) {
    case "start":
      newCursor.column = 0;
      break;
    case "end":
      newCursor.column = Math.max(0, currentLine.length - 1);
      break;
    case "first-non-blank":
      newCursor.column = 0;
      while (
        newCursor.column < currentLine.length &&
        isWhitespace(currentLine[newCursor.column])
      ) {
        newCursor.column++;
      }
      break;
  }

  return { ...state, cursor: newCursor };
};

export const moveToFile = (
  state: EditorState,
  position: string,
  count?: number
): EditorState => {
  const { lines } = state;
  let newCursor = { ...state.cursor };

  switch (position) {
    case "start":
      if (count !== undefined && count > 0 && count <= lines.length) {
        // Go to specific line number
        newCursor.line = count - 1;
      } else {
        // Go to first line
        newCursor.line = 0;
      }
      newCursor.column = 0;
      break;
    case "end":
      if (count !== undefined && count > 0 && count <= lines.length) {
        // Go to specific line number
        newCursor.line = count - 1;
      } else {
        // Go to last line
        newCursor.line = lines.length - 1;
      }
      newCursor.column = 0;
      break;
  }

  // Ensure column is within bounds
  const targetLineLength = lines[newCursor.line].length;
  if (newCursor.column >= targetLineLength) {
    newCursor.column = Math.max(0, targetLineLength - 1);
  }

  return { ...state, cursor: newCursor };
};

export const moveToParagraph = (
  state: EditorState,
  direction: string,
  count: number = 1
): EditorState => {
  const { cursor, lines } = state;
  let newCursor = { ...cursor };

  for (let i = 0; i < count; i++) {
    if (direction === "next") {
      // Find next empty line (paragraph separator)
      let foundEmpty = false;
      for (let line = newCursor.line + 1; line < lines.length; line++) {
        if (lines[line].trim() === "") {
          if (!foundEmpty) {
            foundEmpty = true;
          }
        } else if (foundEmpty) {
          newCursor.line = line;
          newCursor.column = 0;
          break;
        }
      }
      if (!foundEmpty || newCursor.line === cursor.line) {
        // No paragraph found, go to end of file
        newCursor.line = lines.length - 1;
        newCursor.column = 0;
      }
    } else if (direction === "prev") {
      // Find previous empty line (paragraph separator)
      let foundEmpty = false;
      for (let line = newCursor.line - 1; line >= 0; line--) {
        if (lines[line].trim() === "") {
          if (!foundEmpty) {
            foundEmpty = true;
          }
        } else if (foundEmpty) {
          newCursor.line = line;
          newCursor.column = 0;
          break;
        }
      }
      if (!foundEmpty || newCursor.line === cursor.line) {
        // No paragraph found, go to start of file
        newCursor.line = 0;
        newCursor.column = 0;
      }
    }
  }

  return { ...state, cursor: newCursor };
};

export const moveToScreenPosition = (
  state: EditorState,
  position: string
): EditorState => {
  const { lines } = state;
  let newCursor = { ...state.cursor };

  // For simplicity, we'll approximate screen positions
  // In a real implementation, this would depend on the visible area
  const screenHeight = 20; // Approximate screen height in lines
  const firstVisibleLine = Math.max(
    0,
    newCursor.line - Math.floor(screenHeight / 2)
  );
  const lastVisibleLine = Math.min(
    lines.length - 1,
    firstVisibleLine + screenHeight - 1
  );

  switch (position) {
    case "top":
      newCursor.line = firstVisibleLine;
      break;
    case "middle":
      newCursor.line = Math.floor((firstVisibleLine + lastVisibleLine) / 2);
      break;
    case "bottom":
      newCursor.line = lastVisibleLine;
      break;
  }

  newCursor.column = 0;
  return { ...state, cursor: newCursor };
};

export const findChar = (
  state: EditorState,
  char: string,
  direction: string,
  inclusive: boolean
): EditorState => {
  const { cursor, lines } = state;
  const currentLine = lines[cursor.line];
  let newCursor = { ...cursor };

  const directionType = direction === "forward" ? "forward" : "backward";
  const result = findCharInLine(
    currentLine,
    char,
    cursor.column,
    directionType,
    inclusive
  );
  if (result !== -1) {
    newCursor.column = result;
  }

  return { ...state, cursor: newCursor };
};
