import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";

export const TechnicalNotes: React.FC = () => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Eye className="w-5 h-5 text-blue-400" />
          Implementation Notes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-white/80 space-y-2">
          <p>
            <strong className="text-cyan-300">Architecture:</strong> This
            simulator demonstrates the core challenges of building Vim in React
            - modal state management, cursor positioning, and keyboard event
            handling.
          </p>
          <p>
            <strong className="text-green-300">Features Implemented:</strong>{" "}
            Basic modal editing, cursor movement, text insertion/deletion,
            visual selection, undo/redo, and command parsing.
          </p>
          <p>
            <strong className="text-yellow-300">Limitations:</strong> Simplified
            command parsing (no counts/operators), basic regex support, and
            limited text objects. A full implementation would require extensive
            parsing logic.
          </p>
          <p>
            <strong className="text-purple-300">Web Considerations:</strong>{" "}
            Browser event handling differs from terminal environments. This
            simulator balances Vim fidelity with web platform constraints.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
