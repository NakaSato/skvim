import React, { useMemo, useRef, useEffect, useState } from "react";
import { EditorState } from "./types";

interface VirtualizedEditorProps {
  state: EditorState;
  isActive: boolean;
  editorRef: React.RefObject<HTMLDivElement | null>;
  isInVisualSelection: (lineIndex: number, charIndex: number) => boolean;
  onEditorClick: () => void;
  height?: number; // Viewport height in pixels
  lineHeight?: number; // Height of each line in pixels
  overscan?: number; // Number of lines to render outside viewport
}

interface VirtualizedLine {
  index: number;
  top: number;
  height: number;
}

export const VirtualizedEditor: React.FC<VirtualizedEditorProps> = ({
  state,
  isActive,
  editorRef,
  isInVisualSelection,
  onEditorClick,
  height = 450,
  lineHeight = 24,
  overscan = 5,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate visible range
  const visibleRange = useMemo(() => {
    const startIndex = Math.max(
      0,
      Math.floor(scrollTop / lineHeight) - overscan
    );
    const endIndex = Math.min(
      state.lines.length - 1,
      Math.ceil((scrollTop + height) / lineHeight) + overscan
    );
    return { startIndex, endIndex };
  }, [scrollTop, height, lineHeight, overscan, state.lines.length]);

  // Generate virtual lines for visible range
  const virtualLines = useMemo((): VirtualizedLine[] => {
    const lines: VirtualizedLine[] = [];
    for (let i = visibleRange.startIndex; i <= visibleRange.endIndex; i++) {
      lines.push({
        index: i,
        top: i * lineHeight,
        height: lineHeight,
      });
    }
    return lines;
  }, [visibleRange, lineHeight]);

  // Auto-scroll to cursor
  useEffect(() => {
    if (isActive && containerRef.current) {
      const cursorTop = state.cursor.line * lineHeight;
      const cursorBottom = cursorTop + lineHeight;
      const viewportTop = scrollTop;
      const viewportBottom = scrollTop + height;

      if (cursorTop < viewportTop) {
        setScrollTop(cursorTop - lineHeight);
      } else if (cursorBottom > viewportBottom) {
        setScrollTop(cursorBottom - height + lineHeight);
      }
    }
  }, [state.cursor.line, isActive, lineHeight, height, scrollTop]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const totalHeight = state.lines.length * lineHeight;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
      {/* Header - Same as original */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 flex items-center justify-between border-b border-slate-600/30">
        <div className="flex items-center space-x-3">
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-sm"></div>
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-sm"></div>
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-sm"></div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-slate-200 text-sm font-semibold tracking-wide">
            VIM Editor (Virtualized)
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
              state.mode === "COMMAND"
                ? "bg-orange-500/20 text-orange-300 border border-orange-400/30"
                : ""
            }
          `}
          >
            {state.mode}
          </div>
        </div>
      </div>

      {/* Virtualized Editor Content */}
      <div
        ref={containerRef}
        className="relative overflow-auto"
        style={{ height }}
        onScroll={handleScroll}
        onClick={onEditorClick}
      >
        <div
          ref={editorRef}
          tabIndex={0}
          className={`
            font-mono text-sm leading-relaxed outline-none cursor-text
            bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900
            text-slate-100 selection:bg-blue-500/30 relative
            ${isActive ? "ring-2 ring-blue-400/40 ring-inset" : ""}
          `}
          style={{
            height: totalHeight,
            fontFamily:
              'Anuphan, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
          }}
        >
          {/* Render only visible lines */}
          {virtualLines.map(({ index: lineIndex, top }) => {
            const line = state.lines[lineIndex] || "";

            return (
              <div
                key={lineIndex}
                className="absolute left-0 right-0 flex hover:bg-slate-800/30 px-6"
                style={{
                  top,
                  height: lineHeight,
                }}
              >
                {/* Line Numbers */}
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
                          relative inline-block
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
                          ${
                            !isCursor && !isVisualSelected
                              ? "text-slate-100"
                              : ""
                          }
                        `}
                      >
                        {char}
                      </span>
                    );
                  })}

                  {/* Cursor at End of Line */}
                  {state.cursor.line === lineIndex &&
                    state.cursor.column >= line.length && (
                      <span
                        className={`
                          inline-block w-2 h-5 relative
                          ${
                            isActive
                              ? "bg-gradient-to-b from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/25 rounded-sm"
                              : "bg-slate-600 rounded-sm"
                          }
                        `}
                      >
                        &nbsp;
                      </span>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Performance Stats Footer */}
      <div className="bg-slate-800/50 px-6 py-2 border-t border-slate-700/30 flex justify-between text-xs text-slate-500">
        <div>
          Rendering: {virtualLines.length} / {state.lines.length} lines
        </div>
        <div>
          Viewport: {visibleRange.startIndex + 1}-{visibleRange.endIndex + 1}
        </div>
        <div>
          Position: {state.cursor.line + 1}:{state.cursor.column + 1}
        </div>
      </div>
    </div>
  );
};
