import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target } from "lucide-react";
import {
  VimModes,
  ModeSwitchingTable,
  ModeIdentification,
  FileManagement,
  NavigationCommands,
  TextEditing,
  SearchAndReplace,
  ModeSummary,
} from "./modes";

export const ModesTab: React.FC = () => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Target className="h-5 w-5" />
          ทำความเข้าใจโหมดต่างๆ ของ Vim
        </CardTitle>
        <CardDescription className="text-blue-200">
          หัวใจสำคัญของ Vim คือการทำงานแบบ Modal Editor
          ซึ่งแต่ละโหมดถูกออกแบบมาสำหรับงานเฉพาะ
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* VIM Modes Section */}
        <VimModes />

        {/* Mode Switching Table */}
        <ModeSwitchingTable />

        {/* Mode Identification Guide */}
        <ModeIdentification />

        {/* File Management Commands */}
        <FileManagement />

        {/* Navigation Commands */}
        <NavigationCommands />

        {/* Text Editing Commands */}
        <TextEditing />

        {/* Search and Replace */}
        <SearchAndReplace />

        {/* Summary and Tips */}
        <ModeSummary />
      </CardContent>
    </Card>
  );
};
