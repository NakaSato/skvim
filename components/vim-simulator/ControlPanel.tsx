"use client";

import React from "react";
import { Play, RotateCcw, Info, Type, MousePointer } from "lucide-react";
import { VimMode } from "./types";

interface ControlPanelProps {
  isActive: boolean;
  mode: VimMode;
  showHelp: boolean;
  keySequence: string[];
  onActivate: () => void;
  onToggleHelp: () => void;
  onReset: () => void;
  onFocus: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  isActive,
  mode,
  showHelp,
  keySequence,
  onActivate,
  onReset,
  onToggleHelp,
  onFocus,
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 border-b border-slate-600/30">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onActivate}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white text-sm font-medium rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Activate</span>
              </div>
            </button>

            <button
              onClick={onReset}
              className="px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-slate-200 text-sm font-medium rounded-xl border border-slate-500/30 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </div>
            </button>

            <button
              onClick={onToggleHelp}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-medium rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Info className="w-4 h-4" />
                <span>Help</span>
              </div>
            </button>
          </div>

          {/* Modern Status Indicators */}
          <div className="flex gap-6 text-sm">
            {/* Connection Status */}
            <div className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  isActive
                    ? "bg-green-400 shadow-lg shadow-green-400/50"
                    : "bg-red-400 shadow-lg shadow-red-400/50"
                }`}
              ></div>
              <span className="text-slate-200 font-medium">
                {isActive ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Mode Status */}
            <div className="flex items-center space-x-2">
              <Type className="w-4 h-4 text-blue-400" />
              <div
                className={`
                px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider
                ${
                  mode === "NORMAL"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                    : ""
                }
                ${
                  mode === "INSERT"
                    ? "bg-green-500/20 text-green-300 border border-green-400/30"
                    : ""
                }
                ${
                  mode === "VISUAL"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                    : ""
                }
                ${
                  mode === "VISUAL_LINE"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                    : ""
                }
                ${
                  mode === "COMMAND"
                    ? "bg-orange-500/20 text-orange-300 border border-orange-400/30"
                    : ""
                }
              `}
              >
                {mode.replace("_", " ")}
              </div>
            </div>

            {/* Key Sequence */}
            {keySequence.length > 0 && (
              <div className="flex items-center space-x-2">
                <MousePointer className="w-4 h-4 text-purple-400" />
                <div className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-400/30 rounded-full text-xs font-mono font-medium">
                  {keySequence.join("")}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
