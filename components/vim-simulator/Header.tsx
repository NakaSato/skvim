import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Terminal } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Terminal className="w-6 h-6 text-cyan-400" />
          🎮 Vim Simulator - Interactive Learning Environment
        </CardTitle>
        <CardDescription className="text-blue-200">
          Experience Vim's modal editing in your browser. Click on the editor to
          start, use Escape to switch modes.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
