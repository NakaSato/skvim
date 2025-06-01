// Vim Mode Types
export type VimMode =
  | "NORMAL"
  | "INSERT"
  | "VISUAL"
  | "VISUAL_LINE"
  | "VISUAL_BLOCK"
  | "COMMAND";

// Text Object Type
export interface TextObject {
  type:
    | "w"
    | "W"
    | "p"
    | "s"
    | "S"
    | "("
    | ")"
    | "{"
    | "}"
    | "["
    | "]"
    | "<"
    | ">"
    | '"'
    | "'"
    | "`";
  scope: "inner" | "around";
}

// Cursor Position Type
export interface CursorPosition {
  line: number;
  column: number;
}

// Editor State Interface
export interface EditorState {
  lines: string[];
  cursor: CursorPosition;
  mode: VimMode;
  registers: { [key: string]: string };
  undoStack: EditorStateSnapshot[];
  redoStack: EditorStateSnapshot[];
  visualStart?: CursorPosition;
  commandBuffer: string;
  statusMessage: string;
  lastCommand: string;
  countPrefix: string;
  operatorPending?: string;
  lastMotion?: string;
  lastOperator?: string;
  lastTextObject?: TextObject;
}

// State snapshot for undo/redo (without undo/redo stacks to prevent circular references)
export interface EditorStateSnapshot {
  lines: string[];
  cursor: CursorPosition;
  mode: VimMode;
  registers: { [key: string]: string };
  visualStart?: CursorPosition;
  commandBuffer: string;
  statusMessage: string;
  lastCommand: string;
  countPrefix: string;
  operatorPending?: string;
  lastMotion?: string;
  lastOperator?: string;
  lastTextObject?: TextObject;
}

// Vim command reference for tooltips
export interface CommandTooltip {
  command: string;
  description: string;
  mode: VimMode;
  category?: "motion" | "operator" | "edit" | "mode" | "file";
  example?: string;
}
