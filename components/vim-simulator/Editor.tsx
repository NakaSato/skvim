import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EditorState } from "./types";

interface EditorProps {
  state: EditorState;
  isActive: boolean;
  editorRef: React.RefObject<HTMLDivElement>;
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
    <Card className="bg-black/80 backdrop-blur-sm border-white/10">
      <CardContent className="p-0">
        <div
          ref={editorRef}
          tabIndex={0}
          className={`
            font-mono text-sm leading-relaxed p-4 min-h-[400px] outline-none cursor-text
            ${isActive ? "bg-black/90" : "bg-black/50"}
            ${isActive ? "ring-2 ring-cyan-400/50" : ""}
          `}
          onClick={onEditorClick}
        >
          {state.lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex">
              {/* Line number */}
              <div className="text-gray-500 w-8 text-right pr-2 select-none">
                {lineIndex + 1}
              </div>

              {/* Line content */}
              <div className="flex-1">
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
                        ${isCursor && isActive ? "bg-white text-black" : ""}
                        ${isVisualSelected ? "bg-purple-600 text-white" : ""}
                        ${!isCursor && !isVisualSelected ? "text-white" : ""}
                      `}
                    >
                      {char}
                    </span>
                  );
                })}

                {/* Cursor at end of line */}
                {state.cursor.line === lineIndex &&
                  state.cursor.column >= line.length && (
                    <span
                      className={`${
                        isActive ? "bg-white text-black" : "bg-gray-600"
                      } w-2`}
                    >
                      &nbsp;
                    </span>
                  )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
