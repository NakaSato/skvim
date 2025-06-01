"use client";

import React, { useState, useEffect, useRef } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import all modular components and utilities
import { EditorState } from "./vim-simulator/types";
import { createInitialState } from "./vim-simulator/initial-state";
import { useKeyboardHandler } from "./vim-simulator/KeyboardHandler";
import { ControlPanel } from "./vim-simulator/ControlPanel";
import { Editor } from "./vim-simulator/Editor";
import { StatusLine } from "./vim-simulator/StatusLine";
import { HelpPanel } from "./vim-simulator/HelpPanel";

export function VimSimulator() {
  // Core state
  const [state, setState] = useState<EditorState>(createInitialState());
  const [isActive, setIsActive] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
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
        {/* Control Panel */}

        {/* Help Panel */}
        {showHelp && <HelpPanel />}

        {/* Editor */}
        <Editor
          editorRef={editorRef}
          state={state}
          isActive={isActive}
          isInVisualSelection={isInVisualSelection}
          onEditorClick={handleEditorClick}
        />

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

        {/* Status Line */}
        <StatusLine state={state} />
      </div>
    </TooltipProvider>
  );
}
