import React from "react";
import { EditorState, VimMode } from "./types";
import { getModeColor } from "./utils";

interface StatusLineProps {
  state: EditorState;
  getModeColor: (mode: VimMode) => string;
}

export const StatusLine: React.FC<StatusLineProps> = ({ state }) => {
  return (
    <div className="bg-gray-800 text-white p-2 text-sm font-mono flex justify-between items-center">
      <div className="flex gap-4">
        <span className={getModeColor(state.mode)}>{state.statusMessage}</span>
        {state.mode === "COMMAND" && (
          <span className="text-yellow-300">{state.commandBuffer}</span>
        )}
      </div>
      <div className="text-gray-400">
        {state.cursor.line + 1},{state.cursor.column + 1}
      </div>
    </div>
  );
};
