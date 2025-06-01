import { CursorPosition, VimMode } from "./types";

// Clamp cursor position to valid bounds
export const clampCursor = (
  cursor: CursorPosition,
  lines: string[]
): CursorPosition => {
  const line = Math.max(0, Math.min(cursor.line, lines.length - 1));
  const column = Math.max(0, Math.min(cursor.column, lines[line]?.length || 0));
  return { line, column };
};

// Check if character is a word character (alphanumeric or underscore)
export const isWordChar = (char: string): boolean => {
  return /[a-zA-Z0-9_]/.test(char);
};

// Check if character is a whitespace character
export const isWhitespace = (char: string): boolean => {
  return /\s/.test(char);
};

// Get mode color for UI styling
export const getModeColor = (mode: VimMode) => {
  switch (mode) {
    case "NORMAL":
      return "text-green-400";
    case "INSERT":
      return "text-blue-400";
    case "VISUAL":
    case "VISUAL_LINE":
    case "VISUAL_BLOCK":
      return "text-purple-400";
    case "COMMAND":
      return "text-yellow-400";
    default:
      return "text-gray-400";
  }
};
