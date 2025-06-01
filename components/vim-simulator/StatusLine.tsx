import React from "react";
import { EditorState, VimMode } from "./types";

interface StatusLineProps {
  state: EditorState;
}

export const StatusLine: React.FC<StatusLineProps> = ({ state }) => {
  const getModeStyle = (mode: VimMode) => {
    switch (mode) {
      case "NORMAL":
        return "bg-blue-500/20 text-blue-300 border border-blue-400/30";
      case "INSERT":
        return "bg-green-500/20 text-green-300 border border-green-400/30";
      case "VISUAL":
      case "VISUAL_LINE":
        return "bg-purple-500/20 text-purple-300 border border-purple-400/30";
      case "COMMAND":
        return "bg-orange-500/20 text-orange-300 border border-orange-400/30";
      default:
        return "bg-slate-500/20 text-slate-300 border border-slate-400/30";
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-slate-100 px-6 py-3 text-sm font-mono flex justify-between items-center border-t border-slate-600/30">
      <div className="flex items-center gap-4">
        <div
          className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${getModeStyle(
            state.mode
          )}`}
        >
          {state.mode.replace("_", " ")}
        </div>
        <span className="text-slate-200 font-medium">
          {state.statusMessage}
        </span>
        {state.mode === "COMMAND" && (
          <div className="px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-400/30 rounded-lg font-mono">
            {state.commandBuffer}
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 text-slate-400">
        <span className="px-2 py-1 bg-slate-700/50 rounded-md text-xs">
          Ln {state.cursor.line + 1}, Col {state.cursor.column + 1}
        </span>
        <span className="px-2 py-1 bg-slate-700/50 rounded-md text-xs">
          {state.lines.length} lines
        </span>
      </div>
    </div>
  );
};
