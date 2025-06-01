import { CommandTooltip } from "./types";

// Tooltip data organized by mode and category
export const commandTooltips: CommandTooltip[] = [
  // Normal mode - Basic motions
  {
    command: "h",
    description: "Move cursor left",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "j",
    description: "Move cursor down",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "k",
    description: "Move cursor up",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "l",
    description: "Move cursor right",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "w",
    description: "Move to start of next word",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "b",
    description: "Move to start of previous word",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "e",
    description: "Move to end of current word",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "0",
    description: "Move to start of line",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "$",
    description: "Move to end of line",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "gg",
    description: "Move to first line",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "G",
    description: "Move to last line",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "f",
    description: "Move to next occurrence of character",
    mode: "NORMAL",
    category: "motion",
    example: 'fa - move to next "a"',
  },
  {
    command: "F",
    description: "Move to previous occurrence of character",
    mode: "NORMAL",
    category: "motion",
    example: 'Fa - move to previous "a"',
  },
  {
    command: "t",
    description: "Move to before next occurrence of character",
    mode: "NORMAL",
    category: "motion",
  },
  {
    command: "T",
    description: "Move to after previous occurrence of character",
    mode: "NORMAL",
    category: "motion",
  },

  // Normal mode - Operators
  {
    command: "d",
    description: "Delete operator (follows with motion)",
    mode: "NORMAL",
    category: "operator",
    example: "dw - delete word",
  },
  {
    command: "c",
    description: "Change operator (deletes and enters Insert mode)",
    mode: "NORMAL",
    category: "operator",
    example: "cw - change word",
  },
  {
    command: "y",
    description: "Yank (copy) operator",
    mode: "NORMAL",
    category: "operator",
    example: "yy - copy line",
  },
  {
    command: "p",
    description: "Put (paste) after cursor",
    mode: "NORMAL",
    category: "edit",
  },
  {
    command: "P",
    description: "Put (paste) before cursor",
    mode: "NORMAL",
    category: "edit",
  },
  {
    command: "x",
    description: "Delete character under cursor",
    mode: "NORMAL",
    category: "edit",
  },
  {
    command: "u",
    description: "Undo last change",
    mode: "NORMAL",
    category: "edit",
  },
  {
    command: "Ctrl+r",
    description: "Redo last undone change",
    mode: "NORMAL",
    category: "edit",
  },
  {
    command: ".",
    description: "Repeat last change",
    mode: "NORMAL",
    category: "edit",
  },

  // Mode switching
  {
    command: "i",
    description: "Enter Insert mode before cursor",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: "I",
    description: "Enter Insert mode at start of line",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: "a",
    description: "Enter Insert mode after cursor",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: "A",
    description: "Enter Insert mode at end of line",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: "o",
    description: "Open new line below and enter Insert mode",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: "O",
    description: "Open new line above and enter Insert mode",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: "v",
    description: "Enter Visual mode",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: "V",
    description: "Enter Visual Line mode",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: ":",
    description: "Enter Command-line mode",
    mode: "NORMAL",
    category: "mode",
  },
  {
    command: "Esc",
    description: "Exit to Normal mode",
    mode: "INSERT",
    category: "mode",
  },
  {
    command: "Esc",
    description: "Exit to Normal mode",
    mode: "VISUAL",
    category: "mode",
  },
  {
    command: "Esc",
    description: "Exit to Normal mode",
    mode: "COMMAND",
    category: "mode",
  },

  // Command mode commands
  {
    command: ":w",
    description: "Write (save) file",
    mode: "COMMAND",
    category: "file",
  },
  {
    command: ":q",
    description: "Quit editor",
    mode: "COMMAND",
    category: "file",
  },
  {
    command: ":q!",
    description: "Quit without saving changes",
    mode: "COMMAND",
    category: "file",
  },
  {
    command: ":wq",
    description: "Write and quit",
    mode: "COMMAND",
    category: "file",
  },
];
