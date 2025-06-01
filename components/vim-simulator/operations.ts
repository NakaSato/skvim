import {
  EditorState,
  EditorStateSnapshot,
  CursorPosition,
  VimMode,
} from "./types";
import { clampCursor } from "./utils";

// Create state snapshot for undo/redo
export const createStateSnapshot = (
  state: EditorState
): EditorStateSnapshot => {
  return {
    lines: [...state.lines],
    cursor: { ...state.cursor },
    mode: state.mode,
    registers: { ...state.registers },
    visualStart: state.visualStart ? { ...state.visualStart } : undefined,
    commandBuffer: state.commandBuffer,
    statusMessage: state.statusMessage,
    lastCommand: state.lastCommand,
    countPrefix: state.countPrefix,
    operatorPending: state.operatorPending,
    lastMotion: state.lastMotion,
    lastOperator: state.lastOperator,
    lastTextObject: state.lastTextObject
      ? { ...state.lastTextObject }
      : undefined,
  };
};

// Insert character at cursor
export const insertChar = (state: EditorState, char: string): EditorState => {
  const newLines = [...state.lines];
  const { line, column } = state.cursor;

  if (char === "\n") {
    // Handle new line
    const currentLine = newLines[line];
    const beforeCursor = currentLine.substring(0, column);
    const afterCursor = currentLine.substring(column);

    newLines[line] = beforeCursor;
    newLines.splice(line + 1, 0, afterCursor);

    return {
      ...state,
      lines: newLines,
      cursor: { line: line + 1, column: 0 },
    };
  } else {
    // Handle regular character
    const currentLine = newLines[line];
    const beforeCursor = currentLine.substring(0, column);
    const afterCursor = currentLine.substring(column);
    newLines[line] = beforeCursor + char + afterCursor;

    return {
      ...state,
      lines: newLines,
      cursor: { line, column: column + 1 },
    };
  }
};

// Delete character at cursor
export const deleteChar = (state: EditorState): EditorState => {
  const newLines = [...state.lines];
  const { line, column } = state.cursor;

  if (column < newLines[line].length) {
    // Delete character at cursor
    const currentLine = newLines[line];
    newLines[line] =
      currentLine.substring(0, column) + currentLine.substring(column + 1);
  } else if (line < newLines.length - 1) {
    // Join with next line if at end of line
    newLines[line] += newLines[line + 1];
    newLines.splice(line + 1, 1);
  }

  return {
    ...state,
    lines: newLines,
    cursor: clampCursor(state.cursor, newLines),
  };
};

// Delete line
export const deleteLine = (state: EditorState): EditorState => {
  const newLines = [...state.lines];
  const { line } = state.cursor;

  if (newLines.length > 1) {
    const deletedLine = newLines[line];
    newLines.splice(line, 1);

    return {
      ...state,
      lines: newLines,
      cursor: clampCursor(
        { line: Math.min(line, newLines.length - 1), column: 0 },
        newLines
      ),
      registers: { ...state.registers, '"': deletedLine },
      statusMessage: "Line deleted",
    };
  }

  return state;
};

// Yank (copy) line
export const yankLine = (state: EditorState): EditorState => {
  const line = state.lines[state.cursor.line];
  return {
    ...state,
    registers: { ...state.registers, '"': line },
    statusMessage: "Line yanked",
  };
};

// Put (paste) text
export const putText = (state: EditorState): EditorState => {
  const textToPaste = state.registers['"'];
  if (!textToPaste) {
    return { ...state, statusMessage: "Nothing to paste" };
  }

  const newLines = [...state.lines];
  const { line } = state.cursor;

  newLines.splice(line + 1, 0, textToPaste);

  return {
    ...state,
    lines: newLines,
    statusMessage: "Text pasted",
  };
};

// Undo operation
export const undo = (state: EditorState): EditorState => {
  if (state.undoStack.length === 0) {
    return { ...state, statusMessage: "Nothing to undo" };
  }

  const previousState = state.undoStack[state.undoStack.length - 1];
  const newUndoStack = state.undoStack.slice(0, -1);

  // Create state snapshot for redo
  const currentStateForRedo = createStateSnapshot(state);

  return {
    ...previousState,
    undoStack: newUndoStack,
    redoStack: [currentStateForRedo, ...state.redoStack.slice(0, 49)],
    statusMessage: "Undone",
  };
};

// Redo operation
export const redo = (state: EditorState): EditorState => {
  if (state.redoStack.length === 0) {
    return { ...state, statusMessage: "Nothing to redo" };
  }

  const nextState = state.redoStack[0];
  const newRedoStack = state.redoStack.slice(1);

  // Create state snapshot for undo
  const currentStateForUndo = createStateSnapshot(state);

  return {
    ...nextState,
    undoStack: [...state.undoStack, currentStateForUndo],
    redoStack: newRedoStack,
    statusMessage: "Redone",
  };
};

// Delete text range (for text objects and visual mode)
export const deleteRange = (
  state: EditorState,
  start: CursorPosition,
  end: CursorPosition
): EditorState => {
  const newLines = [...state.lines];

  if (start.line === end.line) {
    // Single line deletion
    const line = newLines[start.line];
    const minCol = Math.min(start.column, end.column);
    const maxCol = Math.max(start.column, end.column);

    const deletedText = line.substring(minCol, maxCol + 1);
    newLines[start.line] =
      line.substring(0, minCol) + line.substring(maxCol + 1);

    return {
      ...state,
      lines: newLines,
      cursor: { line: start.line, column: minCol },
      registers: { ...state.registers, '"': deletedText },
      statusMessage: "Text deleted",
    };
  } else {
    // Multi-line deletion (simplified - would need more complex logic for full implementation)
    const deletedLines = newLines.slice(start.line, end.line + 1);
    newLines.splice(
      start.line,
      end.line - start.line + 1,
      newLines[start.line].substring(0, start.column) +
        newLines[end.line].substring(end.column + 1)
    );

    return {
      ...state,
      lines: newLines,
      cursor: { line: start.line, column: start.column },
      registers: { ...state.registers, '"': deletedLines.join("\n") },
      statusMessage: "Text deleted",
    };
  }
};

// Switch vim mode
export const switchMode = (
  state: EditorState,
  mode: VimMode,
  message?: string
): EditorState => {
  return {
    ...state,
    mode,
    statusMessage: message || `-- ${mode.toUpperCase()} --`,
    visualStart: mode.startsWith("VISUAL") ? state.cursor : undefined,
    operatorPending: undefined,
    countPrefix: "",
    commandBuffer: mode === "COMMAND" ? ":" : "",
  };
};

// Execute command mode command
export const executeCommand = (
  state: EditorState,
  command: string
): EditorState => {
  const cmd = command.slice(1); // Remove the ':' prefix

  if (cmd === "q") {
    return {
      ...state,
      mode: "NORMAL",
      statusMessage: "Use :q! to force quit or save first",
      commandBuffer: "",
    };
  } else if (cmd === "w") {
    return {
      ...state,
      mode: "NORMAL",
      statusMessage: "File saved",
      commandBuffer: "",
    };
  } else if (cmd === "wq") {
    return {
      ...state,
      mode: "NORMAL",
      statusMessage: "File saved and closed",
      commandBuffer: "",
    };
  } else {
    return {
      ...state,
      mode: "NORMAL",
      statusMessage: `Unknown command: ${cmd}`,
      commandBuffer: "",
    };
  }
};
