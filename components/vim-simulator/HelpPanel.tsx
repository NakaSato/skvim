"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HelpPanel: React.FC = () => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white text-lg">Quick Reference</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="text-cyan-300 font-semibold mb-2">Normal Mode</h4>
            <ul className="space-y-1 text-white/80">
              <li>
                <code className="bg-white/10 px-1 rounded">h/j/k/l</code> - Move
                cursor
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">w/b/e</code> - Word
                navigation
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">0/$</code> - Line
                navigation
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">gg/G</code> - File
                navigation
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">f/F/t/T</code> - Find
                in line
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">i/a/o</code> - Insert
                mode
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">v/V</code> - Visual
                mode
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">x</code> - Delete
                char
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">dd</code> - Delete
                line
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">yy</code> - Copy line
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">p</code> - Paste
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">u/Ctrl+r</code> -
                Undo/Redo
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-300 font-semibold mb-2">
              Text Objects & Operators
            </h4>
            <ul className="space-y-1 text-white/80">
              <li>
                <code className="bg-white/10 px-1 rounded">d[object]</code> -
                Delete object
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">c[object]</code> -
                Change object
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">y[object]</code> -
                Yank (copy) object
              </li>
              <li className="mt-2 text-cyan-200">Inner Objects (i):</li>
              <li>
                <code className="bg-white/10 px-1 rounded">iw</code> - Inner
                word
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">ip</code> - Inner
                paragraph
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">i"</code> - Inside
                quotes
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">i(</code> - Inside
                parentheses
              </li>
              <li className="mt-2 text-cyan-200">Around Objects (a):</li>
              <li>
                <code className="bg-white/10 px-1 rounded">aw</code> - Around
                word
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">ap</code> - Around
                paragraph
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-300 font-semibold mb-2">
              Insert & Visual Modes
            </h4>
            <ul className="space-y-1 text-white/80">
              <li>
                <code className="bg-white/10 px-1 rounded">Escape</code> -
                Normal mode
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">Enter</code> - New
                line
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">Backspace</code> -
                Delete back
              </li>
            </ul>

            <h4 className="text-purple-300 font-semibold mt-4 mb-2">
              Command Mode
            </h4>
            <ul className="space-y-1 text-white/80">
              <li>
                <code className="bg-white/10 px-1 rounded">:w</code> - Write
                (save)
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">:q</code> - Quit
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">:wq</code> - Write
                and quit
              </li>
            </ul>

            <h4 className="text-yellow-300 font-semibold mt-4 mb-2">Counts</h4>
            <ul className="space-y-1 text-white/80">
              <li>
                <code className="bg-white/10 px-1 rounded">5j</code> - Move down
                5 lines
              </li>
              <li>
                <code className="bg-white/10 px-1 rounded">3dw</code> - Delete 3
                words
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
