"use client";

import React, { useState, useEffect, useRef } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import all modular components and utilities
import { EditorState } from "./vim-simulator/types";
import { createInitialState } from "./vim-simulator/initial-state";
import { useKeyboardHandler } from "./vim-simulator/KeyboardHandler";
import { ControlPanel } from "./vim-simulator/ControlPanel";
import { Editor } from "./vim-simulator/Editor";
import { EnhancedEditor } from "./vim-simulator/EnhancedEditor";
import { StatusLine } from "./vim-simulator/StatusLine";
import { EnhancedStatusLine } from "./vim-simulator/EnhancedStatusLine";
import { HelpPanel } from "./vim-simulator/HelpPanel";
import {
  createPerformanceTestSuite,
  demoContent,
  createTestState,
} from "./vim-simulator/test-data-generator";

export function VimSimulator() {
  // Core state
  const [state, setState] = useState<EditorState>(createInitialState());
  const [isActive, setIsActive] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [useEnhancedComponents, setUseEnhancedComponents] = useState(true);
  const [demoMode, setDemoMode] = useState<"normal" | "performance" | "syntax">(
    "normal"
  );
  const editorRef = useRef<HTMLDivElement>(null);

  // State management for undo/redo
  const saveState = () => {
    setState((prev) => ({
      ...prev,
      undoStack: [
        ...prev.undoStack,
        {
          lines: [...prev.lines],
          cursor: { ...prev.cursor },
          mode: prev.mode,
          registers: { ...prev.registers },
          visualStart: prev.visualStart ? { ...prev.visualStart } : undefined,
          commandBuffer: prev.commandBuffer,
          statusMessage: prev.statusMessage,
          lastCommand: prev.lastCommand,
          countPrefix: prev.countPrefix,
          operatorPending: prev.operatorPending,
          lastMotion: prev.lastMotion,
          lastOperator: prev.lastOperator,
          lastTextObject: prev.lastTextObject,
        },
      ].slice(-50), // Keep only last 50 states
      redoStack: [],
    }));
  };

  // Initialize keyboard handler
  const { handleKeyDown, keySequence } = useKeyboardHandler({
    state,
    setState,
    isActive,
    saveState,
  });

  // Reset simulator
  const resetSimulator = () => {
    setState(createInitialState());
    setIsActive(false);
    setShowHelp(false);
  };

  const toggleEnhancedComponents = () => {
    setUseEnhancedComponents(!useEnhancedComponents);
  };

  const loadDemoContent = (type: "normal" | "performance" | "syntax") => {
    setDemoMode(type);

    const testSuite = createPerformanceTestSuite();
    let lines: string[];

    switch (type) {
      case "performance":
        lines = testSuite.large; // 1000 lines for performance demo
        break;
      case "syntax":
        lines = demoContent.javascript.split("\n");
        break;
      default:
        lines = demoContent.readme.split("\n");
        break;
    }

    const newState = createTestState(lines, 0, 0);
    setState((prev) => ({
      ...prev,
      ...newState,
      statusMessage: `Loaded ${type} demo (${lines.length} lines)`,
    }));
  };

  // Focus management
  useEffect(() => {
    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(false);

    if (editorRef.current) {
      editorRef.current.addEventListener("focus", handleFocus);
      editorRef.current.addEventListener("blur", handleBlur);

      return () => {
        editorRef.current?.removeEventListener("focus", handleFocus);
        editorRef.current?.removeEventListener("blur", handleBlur);
      };
    }
  }, []);

  // Keyboard event listener
  useEffect(() => {
    if (isActive) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isActive, handleKeyDown]);

  // Helper functions for Editor component
  const isInVisualSelection = (
    lineIndex: number,
    charIndex: number
  ): boolean => {
    if (
      !state.visualStart ||
      (state.mode !== "VISUAL" && state.mode !== "VISUAL_LINE")
    ) {
      return false;
    }

    const { visualStart, cursor } = state;
    const start = {
      line: Math.min(visualStart.line, cursor.line),
      column: Math.min(visualStart.column, cursor.column),
    };
    const end = {
      line: Math.max(visualStart.line, cursor.line),
      column: Math.max(visualStart.column, cursor.column),
    };

    if (state.mode === "VISUAL_LINE") {
      return lineIndex >= start.line && lineIndex <= end.line;
    }

    if (lineIndex < start.line || lineIndex > end.line) {
      return false;
    }

    if (lineIndex === start.line && lineIndex === end.line) {
      return charIndex >= start.column && charIndex <= end.column;
    } else if (lineIndex === start.line) {
      return charIndex >= start.column;
    } else if (lineIndex === end.line) {
      return charIndex <= end.column;
    }

    return true;
  };

  const handleEditorClick = () => {
    setIsActive(true);
    editorRef.current?.focus();
  };

  return (
    <TooltipProvider>
      <div className="space-y-2">
        {/* Enhanced Controls */}
        <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="text-slate-200 text-sm font-medium">Demo Mode:</div>
            <div className="flex gap-2">
              <button
                onClick={() => loadDemoContent("normal")}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  demoMode === "normal"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-slate-200"
                }`}
              >
                README
              </button>
              <button
                onClick={() => loadDemoContent("syntax")}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  demoMode === "syntax"
                    ? "bg-green-600 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-slate-200"
                }`}
              >
                JavaScript
              </button>
              <button
                onClick={() => loadDemoContent("performance")}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  demoMode === "performance"
                    ? "bg-purple-600 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-slate-200"
                }`}
              >
                Performance (1000 lines)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-slate-400 text-xs">
              Rendering: {useEnhancedComponents ? "Enhanced" : "Basic"}
            </div>
            <button
              onClick={toggleEnhancedComponents}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs rounded-md transition-colors"
            >
              {useEnhancedComponents ? "Use Basic" : "Use Enhanced"}
            </button>
          </div>
        </div>

        {/* Help Panel */}
        {showHelp && <HelpPanel />}

        {/* Editor - Enhanced or Basic */}
        {useEnhancedComponents ? (
          <EnhancedEditor
            editorRef={editorRef}
            state={state}
            isActive={isActive}
            isInVisualSelection={isInVisualSelection}
            onEditorClick={handleEditorClick}
            enableVirtualization={true}
            enableSyntaxHighlighting={true}
            syntaxLanguage="javascript"
            maxLinesBeforeVirtualization={50}
          />
        ) : (
          <Editor
            editorRef={editorRef}
            state={state}
            isActive={isActive}
            isInVisualSelection={isInVisualSelection}
            onEditorClick={handleEditorClick}
          />
        )}

        <ControlPanel
          isActive={isActive}
          mode={state.mode}
          showHelp={showHelp}
          keySequence={keySequence}
          onActivate={() => setIsActive(true)}
          onToggleHelp={() => setShowHelp(!showHelp)}
          onReset={resetSimulator}
          onFocus={() => {
            setIsActive(true);
            editorRef.current?.focus();
          }}
        />

        {/* Status Line - Enhanced or Basic */}
        {useEnhancedComponents ? (
          <EnhancedStatusLine
            state={state}
            showExtendedInfo={true}
            fileName="example.js"
            isModified={true}
            encoding="utf-8"
            fileType="javascript"
          />
        ) : (
          <StatusLine state={state} />
        )}
      </div>
    </TooltipProvider>
  );
}
