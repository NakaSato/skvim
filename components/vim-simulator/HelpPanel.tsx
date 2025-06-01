"use client";

import React from "react";

export const HelpPanel: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
      {/* Modern Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 border-b border-slate-600/30">
        <h2 className="text-slate-200 text-lg font-semibold tracking-wide">
          Quick Reference Guide
        </h2>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Normal Mode */}
          <div className="space-y-4">
            <h4 className="text-cyan-300 font-semibold text-base flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              Normal Mode
            </h4>
            <div className="space-y-3 text-slate-200">
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                  h/j/k/l
                </code>
                <span className="text-slate-300">Move cursor</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                  w/b/e
                </code>
                <span className="text-slate-300">Word navigation</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                  0/$
                </code>
                <span className="text-slate-300">Line navigation</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                  gg/G
                </code>
                <span className="text-slate-300">File navigation</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                  f/F/t/T
                </code>
                <span className="text-slate-300">Find in line</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-green-300 font-mono text-xs">
                  i/a/o
                </code>
                <span className="text-slate-300">Insert mode</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-purple-300 font-mono text-xs">
                  v/V
                </code>
                <span className="text-slate-300">Visual mode</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-red-300 font-mono text-xs">
                  x
                </code>
                <span className="text-slate-300">Delete char</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-red-300 font-mono text-xs">
                  dd
                </code>
                <span className="text-slate-300">Delete line</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-blue-300 font-mono text-xs">
                  yy
                </code>
                <span className="text-slate-300">Copy line</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-blue-300 font-mono text-xs">
                  p
                </code>
                <span className="text-slate-300">Paste</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-yellow-300 font-mono text-xs">
                  u/Ctrl+r
                </code>
                <span className="text-slate-300">Undo/Redo</span>
              </div>
            </div>
          </div>

          {/* Text Objects */}
          <div className="space-y-4">
            <h4 className="text-green-300 font-semibold text-base flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Text Objects & Operators
            </h4>
            <div className="space-y-3 text-slate-200">
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-red-300 font-mono text-xs">
                  d[object]
                </code>
                <span className="text-slate-300">Delete object</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-yellow-300 font-mono text-xs">
                  c[object]
                </code>
                <span className="text-slate-300">Change object</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-blue-300 font-mono text-xs">
                  y[object]
                </code>
                <span className="text-slate-300">Yank object</span>
              </div>

              <div className="pt-2 border-t border-slate-600/30">
                <div className="text-cyan-200 font-medium mb-2 text-xs uppercase tracking-wider">
                  Inner Objects (i):
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                      iw
                    </code>
                    <span className="text-slate-300">Inner word</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                      ip
                    </code>
                    <span className="text-slate-300">Inner paragraph</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                      i"
                    </code>
                    <span className="text-slate-300">Inside quotes</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                      i(
                    </code>
                    <span className="text-slate-300">Inside parens</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-600/30">
                <div className="text-cyan-200 font-medium mb-2 text-xs uppercase tracking-wider">
                  Around Objects (a):
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                      aw
                    </code>
                    <span className="text-slate-300">Around word</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-cyan-300 font-mono text-xs">
                      ap
                    </code>
                    <span className="text-slate-300">Around paragraph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Modes */}
          <div className="space-y-4">
            <h4 className="text-blue-300 font-semibold text-base flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Insert & Visual Modes
            </h4>
            <div className="space-y-3 text-slate-200">
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-red-300 font-mono text-xs">
                  Escape
                </code>
                <span className="text-slate-300">Normal mode</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-green-300 font-mono text-xs">
                  Enter
                </code>
                <span className="text-slate-300">New line</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-yellow-300 font-mono text-xs">
                  Backspace
                </code>
                <span className="text-slate-300">Delete back</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-600/30">
              <h4 className="text-purple-300 font-semibold text-base flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Command Mode
              </h4>
              <div className="space-y-3 text-slate-200">
                <div className="flex justify-between items-center py-1">
                  <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-purple-300 font-mono text-xs">
                    :w
                  </code>
                  <span className="text-slate-300">Write (save)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-purple-300 font-mono text-xs">
                    :q
                  </code>
                  <span className="text-slate-300">Quit</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-purple-300 font-mono text-xs">
                    :wq
                  </code>
                  <span className="text-slate-300">Write and quit</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-600/30">
              <h4 className="text-yellow-300 font-semibold text-base flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                Counts
              </h4>
              <div className="space-y-3 text-slate-200">
                <div className="flex justify-between items-center py-1">
                  <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-yellow-300 font-mono text-xs">
                    5j
                  </code>
                  <span className="text-slate-300">Move down 5 lines</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <code className="bg-slate-700/50 px-2 py-1 rounded-lg text-yellow-300 font-mono text-xs">
                    3dw
                  </code>
                  <span className="text-slate-300">Delete 3 words</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
