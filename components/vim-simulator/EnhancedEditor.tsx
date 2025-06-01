import React, { useMemo, useState } from "react";
import { EditorState } from "./types";
import { VirtualizedEditor } from "./VirtualizedEditor";
import {
  SyntaxHighlightedLine,
  JavaScriptHighlighter,
  SyntaxHighlighter,
} from "./SyntaxHighlighter";
import {
  PythonHighlighter,
  JSONHighlighter,
  MarkdownHighlighter,
} from "./syntax-highlighters";

interface EnhancedEditorProps {
  state: EditorState;
  isActive: boolean;
  editorRef: React.RefObject<HTMLDivElement | null>;
  isInVisualSelection: (lineIndex: number, charIndex: number) => boolean;
  onEditorClick: () => void;
  enableVirtualization?: boolean;
  enableSyntaxHighlighting?: boolean;
  syntaxLanguage?:
    | "javascript"
    | "typescript"
    | "python"
    | "json"
    | "markdown"
    | "plain";
  maxLinesBeforeVirtualization?: number;
}

export const EnhancedEditor: React.FC<EnhancedEditorProps> = ({
  state,
  isActive,
  editorRef,
  isInVisualSelection,
  onEditorClick,
  enableVirtualization = true,
  enableSyntaxHighlighting = true,
  syntaxLanguage = "javascript",
  maxLinesBeforeVirtualization = 100,
}) => {
  const [showPerformanceStats, setShowPerformanceStats] = useState(false);

  // Create syntax highlighter based on language
  const syntaxHighlighter = useMemo((): SyntaxHighlighter | undefined => {
    if (!enableSyntaxHighlighting) return undefined;

    switch (syntaxLanguage) {
      case "javascript":
      case "typescript":
        return new JavaScriptHighlighter();
      case "python":
        return new PythonHighlighter();
      case "json":
        return new JSONHighlighter();
      case "markdown":
        return new MarkdownHighlighter();
      default:
        return undefined;
    }
  }, [enableSyntaxHighlighting, syntaxLanguage]);

  // Determine if virtualization should be used
  const shouldUseVirtualization = useMemo(() => {
    return (
      enableVirtualization && state.lines.length > maxLinesBeforeVirtualization
    );
  }, [enableVirtualization, state.lines.length, maxLinesBeforeVirtualization]);

  // If using virtualization, render VirtualizedEditor
  if (shouldUseVirtualization) {
    return (
      <VirtualizedEditor
        state={state}
        isActive={isActive}
        editorRef={editorRef}
        isInVisualSelection={isInVisualSelection}
        onEditorClick={onEditorClick}
      />
    );
  }

  // Render traditional editor with syntax highlighting
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
      {/* Enhanced Header with Performance Toggle */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 flex items-center justify-between border-b border-slate-600/30">
        <div className="flex items-center space-x-3">
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-sm"></div>
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-sm"></div>
          <div className="w-3.5 h-3.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-sm"></div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-slate-200 text-sm font-semibold tracking-wide">
            VIM Editor {enableSyntaxHighlighting && `(${syntaxLanguage})`}
          </div>

          {/* Syntax Highlighting Indicator */}
          {enableSyntaxHighlighting && (
            <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-md text-xs">
              Syntax
            </div>
          )}

          {/* Mode Badge */}
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

          {/* Performance Stats Toggle */}
          <button
            onClick={() => setShowPerformanceStats(!showPerformanceStats)}
            className="px-2 py-1 bg-slate-600/50 hover:bg-slate-600/70 text-slate-300 border border-slate-500/30 rounded-md text-xs transition-colors"
          >
            Stats
          </button>
        </div>
      </div>

      {/* Enhanced Editor Content */}
      <div
        ref={editorRef}
        tabIndex={0}
        className={`
          font-mono text-sm leading-relaxed p-6 min-h-[450px] outline-none cursor-text
          bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900
          text-slate-100 selection:bg-blue-500/30
          ${isActive ? "ring-2 ring-blue-400/40 ring-inset" : ""}
        `}
        onClick={onEditorClick}
        style={{
          fontFamily:
            '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
        }}
      >
        {state.lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="flex hover:bg-slate-800/30 rounded-sm"
          >
            {/* Enhanced Line Numbers with Current Line Highlight */}
            <div
              className={`
                w-12 text-right pr-4 select-none font-medium text-xs pt-0.5
                ${
                  state.cursor.line === lineIndex
                    ? "text-blue-400 font-bold bg-blue-500/10"
                    : "text-slate-500"
                }
              `}
            >
              {lineIndex + 1}
            </div>

            {/* Line Content with Syntax Highlighting */}
            <div className="flex-1 relative">
              <SyntaxHighlightedLine
                line={line}
                lineIndex={lineIndex}
                highlighter={syntaxHighlighter}
                cursor={state.cursor}
                isActive={isActive}
                isInVisualSelection={isInVisualSelection}
              />

              {/* Enhanced Cursor at End of Line */}
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
        ))}
      </div>

      {/* Enhanced Footer with Performance Stats */}
      <div className="bg-slate-800/50 px-6 py-3 border-t border-slate-700/30">
        <div className="flex justify-between items-center text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span>Lines: {state.lines.length}</span>
            <span>Mode: {state.mode}</span>
            {enableSyntaxHighlighting && (
              <span className="text-emerald-400">Syntax: {syntaxLanguage}</span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span>
              Position: {state.cursor.line + 1}:{state.cursor.column + 1}
            </span>
            {showPerformanceStats && (
              <>
                <span>Rendering: All lines</span>
                <span
                  className={
                    state.lines.length > maxLinesBeforeVirtualization
                      ? "text-orange-400"
                      : "text-green-400"
                  }
                >
                  {state.lines.length > maxLinesBeforeVirtualization
                    ? "Consider virtualization"
                    : "Performance: Good"}
                </span>
              </>
            )}
          </div>
        </div>

        {showPerformanceStats && (
          <div className="mt-2 pt-2 border-t border-slate-700/30 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>
                Virtualization:{" "}
                {shouldUseVirtualization ? "Enabled" : "Disabled"}
              </span>
              <span>Threshold: {maxLinesBeforeVirtualization} lines</span>
              <span>
                Syntax Highlighting:{" "}
                {enableSyntaxHighlighting ? "Enabled" : "Disabled"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
