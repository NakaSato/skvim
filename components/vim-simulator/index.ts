// Main component
export { VimSimulator } from "../VimSimulator";

// Types
export type {
  VimMode,
  CursorPosition,
  EditorState,
  TextObject,
  CommandTooltip,
} from "./types";

// UI Components
export { ControlPanel } from "./ControlPanel";
export { HelpPanel } from "./HelpPanel";
export { Editor } from "./Editor";
export { StatusLine } from "./StatusLine";
export { TechnicalNotes } from "./TechnicalNotes";

export { useKeyboardHandler } from "./KeyboardHandler";
export { clampCursor, isWordChar, isWhitespace, getModeColor } from "./utils";

export { commandTooltips } from "./command-tooltips";

export { createInitialState } from "./initial-state";

// Operations
export * from "./operations";
export * from "./motions";
export * from "./text-objects";
