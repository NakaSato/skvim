import React from "react";
import { EditorState } from "./types";

interface EditorProps {
  state: EditorState;
  isActive: boolean;
  editorRef: React.RefObject<HTMLDivElement | null>;
  isInVisualSelection: (lineIndex: number, charIndex: number) => boolean;
  onEditorClick: () => void;
}

export const Editor: React.FC<EditorProps> = ({
  state,
  isActive,
  editorRef,
  isInVisualSelection,
  onEditorClick,
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
      {/* Modern Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 flex items-center justify-between border-b border-slate-600/30">
        {/* Window Controls */}
        <div className="flex items-center space-x-3">
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"></div>
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"></div>
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"></div>
        </div>

        {/* Modern Title with Status */}
        <div className="flex items-center space-x-3">
          <div className="text-slate-200 text-sm font-semibold tracking-wide">
            VIM Editor
          </div>
          <div
            className={`
            px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider
            ${
              state.mode === "NORMAL"
                ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                : ""
            }
            ${
              state.mode === "INSERT"
                ? "bg-green-500/20 text-green-300 border border-green-400/30"
                : ""
            }
            ${
              state.mode === "VISUAL"
                ? "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                : ""
            }
            ${
              state.mode === "VISUAL_LINE"
                ? "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                : ""
            }
            ${
              state.mode === "COMMAND"
                ? "bg-orange-500/20 text-orange-300 border border-orange-400/30"
                : ""
            }
          `}
          >
            {state.mode.replace("_", " ")}
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isActive ? "bg-green-400 animate-pulse" : "bg-gray-500"
            }`}
          ></div>
          <span className="text-xs text-slate-400 font-medium">
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </div>

      {/* Modern Editor Content */}
      <div
        ref={editorRef}
        tabIndex={0}
        className={`
          font-mono text-sm leading-relaxed p-6 min-h-[450px] outline-none cursor-text
          bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900
          text-slate-100 selection:bg-blue-500/30
          ${isActive ? "ring-2 ring-blue-400/40 ring-inset" : ""}
          transition-all duration-200 ease-in-out
        `}
        onClick={onEditorClick}
        style={{
          fontFamily:
            'Anuphan, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
        }}
      >
        {state.lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="flex hover:bg-slate-800/30 transition-colors duration-150 rounded-sm"
          >
            {/* Modern Line Numbers */}
            <div className="text-slate-500 w-12 text-right pr-4 select-none font-medium text-xs pt-0.5">
              {lineIndex + 1}
            </div>

            {/* Line Content */}
            <div className="flex-1 relative">
              {line.split("").map((char, charIndex) => {
                const isCursor =
                  state.cursor.line === lineIndex &&
                  state.cursor.column === charIndex;
                const isVisualSelected = isInVisualSelection(
                  lineIndex,
                  charIndex
                );

                return (
                  <span
                    key={charIndex}
                    className={`
                      relative inline-block transition-all duration-150
                      ${
                        isCursor && isActive
                          ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 shadow-lg shadow-blue-400/25 rounded-sm"
                          : ""
                      }
                      ${
                        isVisualSelected
                          ? "bg-gradient-to-r from-purple-500/60 to-blue-500/60 text-white backdrop-blur-sm"
                          : ""
                      }
                      ${!isCursor && !isVisualSelected ? "text-slate-100" : ""}
                    `}
                  >
                    {char}
                  </span>
                );
              })}

              {/* Modern Cursor at End of Line */}
              {state.cursor.line === lineIndex &&
                state.cursor.column >= line.length && (
                  <span
                    className={`
                      inline-block w-2 h-5 relative
                      ${
                        isActive
                          ? "bg-gradient-to-b from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/25 animate-pulse rounded-sm"
                          : "bg-slate-600 rounded-sm"
                      }
                      transition-all duration-200
                    `}
                  >
                    &nbsp;
                  </span>
                )}
            </div>
          </div>
        ))}

        {/* Modern Footer Info */}
        <div className="mt-6 pt-4 border-t border-slate-700/30 flex justify-between text-xs text-slate-500">
          <div>Lines: {state.lines.length}</div>
          <div>
            Position: {state.cursor.line + 1}:{state.cursor.column + 1}
          </div>
        </div>
      </div>
    </div>
  );
};
