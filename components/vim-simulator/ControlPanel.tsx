"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  RotateCcw,
  Info,
  Square,
  Type,
  MousePointer,
} from "lucide-react";
import { VimMode } from "./types";
import { getModeColor } from "./utils";

interface ControlPanelProps {
  isActive: boolean;
  mode: VimMode;
  showHelp: boolean;
  showNotes: boolean;
  keySequence: string[];
  onActivate: () => void;
  onToggleHelp: () => void;
  onToggleNotes: () => void;
  onReset: () => void;
  onFocus: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  isActive,
  mode,
  showHelp,
  showNotes,
  keySequence,
  onActivate,
  onReset,
  onToggleHelp,
  onToggleNotes,
  onFocus,
}) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            <Button
              onClick={onActivate}
              className="bg-green-600 hover:bg-green-700"
              size="sm"
            >
              <Play className="w-4 h-4 mr-1" />
              Activate
            </Button>
            <Button
              onClick={onReset}
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10"
              size="sm"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </Button>
            <Button
              onClick={onToggleHelp}
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10"
              size="sm"
            >
              <Info className="w-4 h-4 mr-1" />
              Help
            </Button>
          </div>

          {/* Status indicators */}
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Square
                className={`w-3 h-3 ${
                  isActive ? "text-green-400" : "text-red-400"
                }`}
              />
              <span className="text-white">
                {isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Type className="w-3 h-3 text-blue-400" />
              <span className={`font-mono ${getModeColor(mode)}`}>{mode}</span>
            </div>
            {keySequence.length > 0 && (
              <div className="flex items-center gap-1">
                <MousePointer className="w-3 h-3 text-purple-400" />
                <span className="text-purple-300 font-mono">
                  {keySequence.join("")}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
