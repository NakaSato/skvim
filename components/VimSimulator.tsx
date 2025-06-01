"use client";

import React, { useState, useEffect, useRef } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import all modular components and utilities
import { EditorState } from "./vim-simulator/types";
import { createInitialState } from "./vim-simulator/initial-state";
import { useKeyboardHandler } from "./vim-simulator/KeyboardHandler";
import { Header } from "./vim-simulator/Header";
import { ControlPanel } from "./vim-simulator/ControlPanel";
import { Editor } from "./vim-simulator/Editor";
import { StatusLine } from "./vim-simulator/StatusLine";
import { HelpPanel } from "./vim-simulator/HelpPanel";
import { TechnicalNotes } from "./vim-simulator/TechnicalNotes";

export function VimSimulator() {
  // Core state
  const [state, setState] = useState<EditorState>(createInitialState());
  const [isActive, setIsActive] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
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
  const { handleKeyDown } = useKeyboardHandler({
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
    setShowNotes(false);
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

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header */}
        <Header />

        {/* Control Panel */}
        <ControlPanel
          isActive={isActive}
          showHelp={showHelp}
          showNotes={showNotes}
          onToggleHelp={() => setShowHelp(!showHelp)}
          onToggleNotes={() => setShowNotes(!showNotes)}
          onReset={resetSimulator}
          onFocus={() => {
            setIsActive(true);
            editorRef.current?.focus();
          }}
        />

        {/* Help Panel */}
        {showHelp && <HelpPanel />}

        {/* Editor */}
        <Editor
          editorRef={editorRef}
          state={state}
          isActive={isActive}
          onFocus={() => setIsActive(true)}
        />

        {/* Status Line */}
        <StatusLine state={state} />

        {/* Technical Notes */}
        {showNotes && <TechnicalNotes />}
      </div>
    </TooltipProvider>
  );
}
