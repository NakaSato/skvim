import React from "react";
import { EditorState, VimMode } from "./types";

interface EnhancedStatusLineProps {
  state: EditorState;
  showExtendedInfo?: boolean;
  fileName?: string;
  isModified?: boolean;
  encoding?: string;
  fileType?: string;
}

export const EnhancedStatusLine: React.FC<EnhancedStatusLineProps> = ({
  state,
  showExtendedInfo = true,
  fileName = "untitled",
  isModified = false,
  encoding = "utf-8",
  fileType = "javascript",
}) => {
  const getModeInfo = (mode: VimMode) => {
    switch (mode) {
      case "NORMAL":
        return {
          style: "bg-blue-500/20 text-blue-300 border border-blue-400/30",
          text: "NORMAL",
          description: "Navigate and command",
        };
      case "INSERT":
        return {
          style: "bg-green-500/20 text-green-300 border border-green-400/30",
          text: "INSERT",
          description: "Insert text",
        };
      case "VISUAL":
        return {
          style: "bg-purple-500/20 text-purple-300 border border-purple-400/30",
          text: "VISUAL",
          description: "Select text",
        };
      case "VISUAL_LINE":
        return {
          style: "bg-purple-500/20 text-purple-300 border border-purple-400/30",
          text: "V-LINE",
          description: "Select lines",
        };
      case "VISUAL_BLOCK":
        return {
          style: "bg-purple-500/20 text-purple-300 border border-purple-400/30",
          text: "V-BLOCK",
          description: "Select block",
        };
      case "COMMAND":
        return {
          style: "bg-orange-500/20 text-orange-300 border border-orange-400/30",
          text: "COMMAND",
          description: "Execute command",
        };
      default:
        return {
          style: "bg-slate-500/20 text-slate-300 border border-slate-400/30",
          text: mode,
          description: "Unknown mode",
        };
    }
  };

  const modeInfo = getModeInfo(state.mode);

  // Calculate file statistics
  const totalChars = state.lines.reduce((acc, line) => acc + line.length, 0);
  const currentLineLength = state.lines[state.cursor.line]?.length || 0;
  const progressPercentage =
    state.lines.length > 0
      ? Math.round((state.cursor.line / (state.lines.length - 1)) * 100)
      : 0;

  // Get visual selection info
  const getVisualSelectionInfo = () => {
    if (
      !state.visualStart ||
      (state.mode !== "VISUAL" && state.mode !== "VISUAL_LINE")
    ) {
      return null;
    }

    const startLine = Math.min(state.visualStart.line, state.cursor.line);
    const endLine = Math.max(state.visualStart.line, state.cursor.line);
    const selectedLines = endLine - startLine + 1;

    if (state.mode === "VISUAL_LINE") {
      return `${selectedLines} lines selected`;
    }

    // For character-wise visual mode, calculate selected characters
    let selectedChars = 0;
    for (let i = startLine; i <= endLine; i++) {
      const line = state.lines[i] || "";
      if (i === startLine && i === endLine) {
        // Selection within single line
        const startCol = Math.min(
          state.visualStart.column,
          state.cursor.column
        );
        const endCol = Math.max(state.visualStart.column, state.cursor.column);
        selectedChars += endCol - startCol + 1;
      } else if (i === startLine) {
        selectedChars += line.length - state.visualStart.column;
      } else if (i === endLine) {
        selectedChars += state.cursor.column + 1;
      } else {
        selectedChars += line.length;
      }
    }

    return `${selectedChars} chars, ${selectedLines} lines`;
  };

  const visualInfo = getVisualSelectionInfo();

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-slate-100 font-mono border-t border-slate-600/30">
      {/* Main Status Line */}
      <div className="px-6 py-3 text-sm flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mode Badge */}
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${modeInfo.style}`}
            title={modeInfo.description}
          >
            {modeInfo.text}
          </div>

          {/* File Info */}
          <div className="flex items-center gap-2 text-slate-200">
            <span className="font-medium">
              {fileName}
              {isModified && <span className="text-orange-400 ml-1">●</span>}
            </span>
            {showExtendedInfo && (
              <span className="text-slate-400 text-xs px-2 py-0.5 bg-slate-700/50 rounded">
                {fileType}
              </span>
            )}
          </div>

          {/* Status Message */}
          {state.statusMessage && (
            <span className="text-slate-300 font-medium">
              {state.statusMessage}
            </span>
          )}

          {/* Command Buffer */}
          {state.mode === "COMMAND" && state.commandBuffer && (
            <div className="px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-400/30 rounded-lg font-mono">
              :{state.commandBuffer}
            </div>
          )}

          {/* Visual Selection Info */}
          {visualInfo && (
            <div className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-400/30 rounded-lg text-xs">
              {visualInfo}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-slate-400">
          {/* Position Info */}
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-slate-700/50 rounded-md text-xs">
              Ln {state.cursor.line + 1}, Col {state.cursor.column + 1}
            </span>

            {showExtendedInfo && (
              <>
                <span className="px-2 py-1 bg-slate-700/50 rounded-md text-xs">
                  {progressPercentage}%
                </span>

                <span className="px-2 py-1 bg-slate-700/50 rounded-md text-xs">
                  {state.lines.length} lines
                </span>

                <span className="px-2 py-1 bg-slate-700/50 rounded-md text-xs">
                  {totalChars} chars
                </span>
              </>
            )}
          </div>

          {/* Encoding and additional info */}
          {showExtendedInfo && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>{encoding}</span>
              <span>•</span>
              <span>LF</span>
            </div>
          )}
        </div>
      </div>

      {/* Extended Info Bar (when in specific modes) */}
      {showExtendedInfo && (state.lastCommand || state.countPrefix) && (
        <div className="px-6 py-1 bg-slate-900/50 border-t border-slate-700/30 text-xs text-slate-500 flex justify-between">
          <div className="flex items-center gap-4">
            {state.countPrefix && (
              <span>
                Count:{" "}
                <span className="text-blue-400">{state.countPrefix}</span>
              </span>
            )}
            {state.operatorPending && (
              <span>
                Operator:{" "}
                <span className="text-purple-400">{state.operatorPending}</span>
              </span>
            )}
            {state.lastCommand && (
              <span>
                Last:{" "}
                <span className="text-green-400">{state.lastCommand}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Registers info could go here */}
            {Object.keys(state.registers).length > 0 && (
              <span>Registers: {Object.keys(state.registers).length}</span>
            )}

            {/* Undo/Redo stack info */}
            <span>
              Undo: {state.undoStack.length} | Redo: {state.redoStack.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
