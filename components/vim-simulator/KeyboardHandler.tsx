import { useCallback, useEffect, useState } from "react";
import { EditorState, VimMode, TextObject } from "./types";
import {
  moveCursorDirection,
  moveByWord,
  moveToLinePosition,
  moveToFile,
  moveToParagraph,
  moveToScreenPosition,
  findChar,
} from "./motions";
import {
  insertChar,
  deleteChar,
  deleteLine,
  yankLine,
  putText,
  switchMode,
  undo,
  redo,
  executeCommand,
} from "./operations";
import { processTextObjectOperation, selectTextObject } from "./text-objects";

interface KeyboardHandlerProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  isActive: boolean;
  saveState: () => void;
}

export function useKeyboardHandler({
  state,
  setState,
  isActive,
  saveState,
}: KeyboardHandlerProps) {
  const [keySequence, setKeySequence] = useState<string[]>([]);

  // Helper functions that work with state
  const moveCursor = useCallback(
    (direction: string, count: number = 1) => {
      setState((prev) => moveCursorDirection(prev, direction, count));
    },
    [setState]
  );

  const moveByWordAction = useCallback(
    (direction: string, count: number = 1) => {
      setState((prev) => moveByWord(prev, direction, count));
    },
    [setState]
  );

  const moveToLinePositionAction = useCallback(
    (position: string) => {
      setState((prev) => moveToLinePosition(prev, position));
    },
    [setState]
  );

  const moveToFileAction = useCallback(
    (position: string, count?: number) => {
      setState((prev) => moveToFile(prev, position, count));
    },
    [setState]
  );

  const moveToParagraphAction = useCallback(
    (direction: string, count: number = 1) => {
      setState((prev) => moveToParagraph(prev, direction, count));
    },
    [setState]
  );

  const moveToScreenPositionAction = useCallback(
    (position: string) => {
      setState((prev) => moveToScreenPosition(prev, position));
    },
    [setState]
  );

  const findCharAction = useCallback(
    (char: string, direction: string, inclusive: boolean) => {
      setState((prev) => findChar(prev, char, direction, inclusive));
    },
    [setState]
  );

  const insertCharAction = useCallback(
    (char: string) => {
      setState((prev) => insertChar(prev, char));
    },
    [setState]
  );

  const deleteCharAction = useCallback(() => {
    setState((prev) => deleteChar(prev));
  }, [setState]);

  const deleteLineAction = useCallback(() => {
    setState((prev) => deleteLine(prev));
  }, [setState]);

  const yankLineAction = useCallback(() => {
    setState((prev) => yankLine(prev));
  }, [setState]);

  const putTextAction = useCallback(() => {
    setState((prev) => putText(prev));
  }, [setState]);

  const switchModeAction = useCallback(
    (mode: VimMode, message: string) => {
      setState((prev) => switchMode(prev, mode, message));
    },
    [setState]
  );

  const undoAction = useCallback(() => {
    setState((prev) => undo(prev));
  }, [setState]);

  const redoAction = useCallback(() => {
    setState((prev) => redo(prev));
  }, [setState]);

  const executeCommandAction = useCallback(
    (command: string) => {
      setState((prev) => executeCommand(prev, command));
    },
    [setState]
  );

  const processTextObjectOperationAction = useCallback(
    (operator: string, textObject: TextObject) => {
      setState((prev) =>
        processTextObjectOperation(prev, operator, textObject)
      );
    },
    [setState]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActive) return;

      event.preventDefault();
      const key = event.key;
      const ctrl = event.ctrlKey;
      const shift = event.shiftKey;

      // Update key sequence for multi-key commands
      setKeySequence((prev) => {
        const newSequence = [...prev, key];
        if (newSequence.length > 10) {
          return newSequence.slice(-10);
        }
        return newSequence;
      });

      // Clear key sequence after delay
      setTimeout(() => {
        setKeySequence([]);
      }, 1000);

      // Global shortcuts (work in any mode)
      if (ctrl) {
        switch (key) {
          case "z":
            undoAction();
            return;
          case "r":
            redoAction();
            return;
        }
      }

      switch (state.mode) {
        case "NORMAL":
          // Handle text object operations
          if (
            state.operatorPending &&
            ["d", "c", "y"].includes(state.operatorPending)
          ) {
            const lastKey = keySequence[keySequence.length - 1];
            const secondLastKey = keySequence[keySequence.length - 2];

            // Check for text object patterns: operator + [a|i] + object
            if (["a", "i"].includes(secondLastKey) && lastKey) {
              setTimeout(() => {
                const scope = secondLastKey as "a" | "i";
                const objectKey = lastKey;

                const validObjects = [
                  "w",
                  "W",
                  "p",
                  "s",
                  "(",
                  ")",
                  "{",
                  "}",
                  "[",
                  "]",
                  "<",
                  ">",
                  '"',
                  "'",
                  "`",
                ];

                if (validObjects.includes(objectKey)) {
                  const textObject: TextObject = {
                    type: objectKey as any,
                    scope: scope === "a" ? "around" : "inner",
                  };

                  processTextObjectOperationAction(
                    state.operatorPending!,
                    textObject
                  );
                }
              }, 50);
              break;
            }
          }

          switch (key) {
            // Movement
            case "h":
            case "ArrowLeft":
              moveCursor("h", parseInt(state.countPrefix) || 1);
              setState((prev) => ({ ...prev, countPrefix: "" }));
              break;
            case "j":
            case "ArrowDown":
              moveCursor("j", parseInt(state.countPrefix) || 1);
              setState((prev) => ({ ...prev, countPrefix: "" }));
              break;
            case "k":
            case "ArrowUp":
              moveCursor("k", parseInt(state.countPrefix) || 1);
              setState((prev) => ({ ...prev, countPrefix: "" }));
              break;
            case "l":
            case "ArrowRight":
              moveCursor("l", parseInt(state.countPrefix) || 1);
              setState((prev) => ({ ...prev, countPrefix: "" }));
              break;

            // Word and line navigation
            case "w":
              moveByWordAction("w", parseInt(state.countPrefix) || 1);
              setState((prev) => ({
                ...prev,
                countPrefix: "",
                lastMotion: "w",
              }));
              break;
            case "b":
              moveByWordAction("b", parseInt(state.countPrefix) || 1);
              setState((prev) => ({
                ...prev,
                countPrefix: "",
                lastMotion: "b",
              }));
              break;
            case "e":
              moveByWordAction("e", parseInt(state.countPrefix) || 1);
              setState((prev) => ({
                ...prev,
                countPrefix: "",
                lastMotion: "e",
              }));
              break;
            case "0":
              if (state.countPrefix === "") {
                moveToLinePositionAction("start");
              } else {
                setState((prev) => ({
                  ...prev,
                  countPrefix: prev.countPrefix + key,
                }));
              }
              break;
            case "$":
              moveToLinePositionAction("end");
              setState((prev) => ({
                ...prev,
                countPrefix: "",
                lastMotion: "$",
              }));
              break;
            case "^":
              moveToLinePositionAction("first-non-blank");
              setState((prev) => ({
                ...prev,
                countPrefix: "",
                lastMotion: "^",
              }));
              break;

            // File navigation
            case "g":
              setTimeout(() => {
                if (keySequence[keySequence.length - 2] === "g") {
                  const count = parseInt(state.countPrefix);
                  moveToFileAction("start", count);
                  setState((prev) => ({
                    ...prev,
                    countPrefix: "",
                    lastMotion: "gg",
                  }));
                }
              }, 100);
              break;
            case "G":
              const count = parseInt(state.countPrefix);
              moveToFileAction("end", count);
              setState((prev) => ({
                ...prev,
                countPrefix: "",
                lastMotion: "G",
              }));
              break;

            // Character search
            case "f":
              setState((prev) => ({
                ...prev,
                statusMessage: "Find character: ",
                operatorPending: "f",
              }));
              setTimeout(() => {
                const char = keySequence[keySequence.length - 1];
                if (char !== "f") {
                  findCharAction(char, "forward", true);
                }
              }, 100);
              break;
            case "F":
              setState((prev) => ({
                ...prev,
                statusMessage: "Find character backward: ",
                operatorPending: "F",
              }));
              setTimeout(() => {
                const char = keySequence[keySequence.length - 1];
                if (char !== "F") {
                  findCharAction(char, "backward", true);
                }
              }, 100);
              break;
            case "t":
              setState((prev) => ({
                ...prev,
                statusMessage: "Till character: ",
                operatorPending: "t",
              }));
              setTimeout(() => {
                const char = keySequence[keySequence.length - 1];
                if (char !== "t") {
                  findCharAction(char, "forward", false);
                }
              }, 100);
              break;
            case "T":
              setState((prev) => ({
                ...prev,
                statusMessage: "Till character backward: ",
                operatorPending: "T",
              }));
              setTimeout(() => {
                const char = keySequence[keySequence.length - 1];
                if (char !== "T") {
                  findCharAction(char, "backward", false);
                }
              }, 100);
              break;

            // Mode switching
            case "i":
              switchModeAction("INSERT", "-- INSERT --");
              break;
            case "I":
              moveToLinePositionAction("first-non-blank");
              switchModeAction("INSERT", "-- INSERT --");
              break;
            case "a":
              setState((prevState) => {
                const { line, column } = prevState.cursor;
                const lineLength = prevState.lines[line].length;
                const newColumn = Math.min(column + 1, lineLength);
                return {
                  ...prevState,
                  cursor: { line, column: newColumn },
                  mode: "INSERT",
                  statusMessage: "-- INSERT --",
                };
              });
              break;
            case "A":
              moveToLinePositionAction("end");
              setState((prevState) => {
                const { line, column } = prevState.cursor;
                return {
                  ...prevState,
                  cursor: { line, column: column + 1 },
                  mode: "INSERT",
                  statusMessage: "-- INSERT --",
                };
              });
              break;
            case "o":
              setState((prevState) => {
                const { line } = prevState.cursor;
                const newLines = [...prevState.lines];
                newLines.splice(line + 1, 0, "");
                return {
                  ...prevState,
                  lines: newLines,
                  cursor: { line: line + 1, column: 0 },
                  mode: "INSERT",
                  statusMessage: "-- INSERT --",
                };
              });
              break;
            case "O":
              setState((prevState) => {
                const { line } = prevState.cursor;
                const newLines = [...prevState.lines];
                newLines.splice(line, 0, "");
                return {
                  ...prevState,
                  lines: newLines,
                  cursor: { line, column: 0 },
                  mode: "INSERT",
                  statusMessage: "-- INSERT --",
                };
              });
              break;
            case "v":
              switchModeAction("VISUAL", "-- VISUAL --");
              break;
            case "V":
              switchModeAction("VISUAL_LINE", "-- VISUAL LINE --");
              break;
            case ":":
              switchModeAction("COMMAND", "-- COMMAND --");
              break;

            // Text operations
            case "x":
              deleteCharAction();
              break;
            case "d":
              if (!state.operatorPending) {
                setState((prev) => ({
                  ...prev,
                  operatorPending: "d",
                  statusMessage: "Operator pending: d",
                }));

                setTimeout(() => {
                  if (
                    keySequence[keySequence.length - 2] === "d" &&
                    keySequence[keySequence.length - 1] === "d"
                  ) {
                    deleteLineAction();
                    setState((prev) => ({
                      ...prev,
                      operatorPending: undefined,
                      lastOperator: "d",
                      lastMotion: "d",
                    }));
                  }
                }, 100);
              }
              break;
            case "y":
              if (!state.operatorPending) {
                setState((prev) => ({
                  ...prev,
                  operatorPending: "y",
                  statusMessage: "Operator pending: y",
                }));

                setTimeout(() => {
                  if (
                    keySequence[keySequence.length - 2] === "y" &&
                    keySequence[keySequence.length - 1] === "y"
                  ) {
                    yankLineAction();
                    setState((prev) => ({
                      ...prev,
                      operatorPending: undefined,
                      lastOperator: "y",
                      lastMotion: "y",
                    }));
                  }
                }, 100);
              }
              break;
            case "c":
              if (!state.operatorPending) {
                setState((prev) => ({
                  ...prev,
                  operatorPending: "c",
                  statusMessage: "Operator pending: c",
                }));
              }
              break;
            case "p":
              putTextAction();
              break;
            case "u":
              if (!ctrl) undoAction();
              break;

            // Number keys for count prefix
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              setState((prev) => ({
                ...prev,
                countPrefix: prev.countPrefix + key,
              }));
              break;

            // Paragraph motions
            case "{":
              moveToParagraphAction("prev", parseInt(state.countPrefix) || 1);
              setState((prev) => ({
                ...prev,
                countPrefix: "",
                lastMotion: "{",
              }));
              break;
            case "}":
              moveToParagraphAction("next", parseInt(state.countPrefix) || 1);
              setState((prev) => ({
                ...prev,
                countPrefix: "",
                lastMotion: "}",
              }));
              break;

            // Screen position motions
            case "H":
              moveToScreenPositionAction("top");
              setState((prev) => ({ ...prev, lastMotion: "H" }));
              break;
            case "M":
              moveToScreenPositionAction("middle");
              setState((prev) => ({ ...prev, lastMotion: "M" }));
              break;
            case "L":
              moveToScreenPositionAction("bottom");
              setState((prev) => ({ ...prev, lastMotion: "L" }));
              break;
          }
          break;

        case "INSERT":
          switch (key) {
            case "Escape":
              switchModeAction("NORMAL", "-- NORMAL --");
              setState((prev) => ({
                ...prev,
                cursor: {
                  ...prev.cursor,
                  column: Math.max(0, prev.cursor.column - 1),
                },
              }));
              break;
            case "Enter":
              insertCharAction("\n");
              break;
            case "Backspace":
              setState((prevState) => {
                const newLines = [...prevState.lines];
                const { line, column } = prevState.cursor;

                if (column > 0) {
                  const currentLine = newLines[line];
                  newLines[line] =
                    currentLine.substring(0, column - 1) +
                    currentLine.substring(column);
                  return {
                    ...prevState,
                    lines: newLines,
                    cursor: { line, column: column - 1 },
                  };
                } else if (line > 0) {
                  const prevLineLength = newLines[line - 1].length;
                  newLines[line - 1] += newLines[line];
                  newLines.splice(line, 1);
                  return {
                    ...prevState,
                    lines: newLines,
                    cursor: { line: line - 1, column: prevLineLength },
                  };
                }
                return prevState;
              });
              break;
            default:
              if (key.length === 1) {
                insertCharAction(key);
              }
              break;
          }
          break;

        case "VISUAL":
        case "VISUAL_LINE":
          switch (key) {
            case "Escape":
              switchModeAction("NORMAL", "-- NORMAL --");
              break;
            case "h":
            case "ArrowLeft":
              moveCursor("h");
              break;
            case "j":
            case "ArrowDown":
              moveCursor("j");
              break;
            case "k":
            case "ArrowUp":
              moveCursor("k");
              break;
            case "l":
            case "ArrowRight":
              moveCursor("l");
              break;

            // Word navigation in visual mode
            case "w":
              moveByWordAction("w");
              break;
            case "b":
              moveByWordAction("b");
              break;
            case "e":
              moveByWordAction("e");
              break;
            case "0":
              moveToLinePositionAction("start");
              break;
            case "$":
              moveToLinePositionAction("end");
              break;
            case "^":
              moveToLinePositionAction("first-non-blank");
              break;
            case "G":
              const gCount = parseInt(state.countPrefix);
              moveToFileAction("end", gCount);
              setState((prev) => ({ ...prev, countPrefix: "" }));
              break;

            // Visual mode operations (simplified - you can expand these later)
            case "d":
              // Delete visual selection and return to normal mode
              setState((prev) => ({
                ...prev,
                mode: "NORMAL",
                statusMessage: "-- NORMAL --",
                visualStart: undefined,
              }));
              saveState();
              break;
            case "y":
              // Yank visual selection and return to normal mode
              setState((prev) => ({
                ...prev,
                mode: "NORMAL",
                statusMessage: "Yanked selection",
                visualStart: undefined,
              }));
              break;
            case "c":
              // Change visual selection and enter insert mode
              setState((prev) => ({
                ...prev,
                mode: "INSERT",
                statusMessage: "-- INSERT --",
                visualStart: undefined,
              }));
              saveState();
              break;
            case ">":
              // Indent selection
              setState((prev) => ({
                ...prev,
                mode: "NORMAL",
                statusMessage: "Indented",
                visualStart: undefined,
              }));
              break;
            case "<":
              // Outdent selection
              setState((prev) => ({
                ...prev,
                mode: "NORMAL",
                statusMessage: "Outdented",
                visualStart: undefined,
              }));
              break;
          }
          break;

        case "COMMAND":
          switch (key) {
            case "Escape":
              switchModeAction("NORMAL", "-- NORMAL --");
              break;
            case "Enter":
              executeCommandAction(state.commandBuffer);
              break;
            case "Backspace":
              setState((prev) => ({
                ...prev,
                commandBuffer:
                  prev.commandBuffer.length > 1
                    ? prev.commandBuffer.slice(0, -1)
                    : ":",
              }));
              break;
            default:
              if (key.length === 1) {
                setState((prev) => ({
                  ...prev,
                  commandBuffer: prev.commandBuffer + key,
                }));
              }
              break;
          }
          break;
      }
    },
    [
      isActive,
      state,
      keySequence,
      saveState,
      moveCursor,
      moveByWordAction,
      moveToLinePositionAction,
      moveToFileAction,
      moveToParagraphAction,
      moveToScreenPositionAction,
      findCharAction,
      insertCharAction,
      deleteCharAction,
      deleteLineAction,
      yankLineAction,
      putTextAction,
      switchMode,
      undoAction,
      redoAction,
      executeCommandAction,
      processTextObjectOperationAction,
      setState,
    ]
  );

  return { handleKeyDown, keySequence };
}
