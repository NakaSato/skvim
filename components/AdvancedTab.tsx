import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CommandSection } from "./CommandSection";
import { advancedCommands } from "../lib/vim-data";

export const AdvancedTab: React.FC = () => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          🚀 เทคนิคขั้นสูง
        </CardTitle>
        <CardDescription className="text-blue-200">
          คำสั่งขั้นสูงสำหรับผู้ใช้ที่มีประสบการณ์
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg p-4 border border-orange-400/30">
          <h3 className="text-lg font-semibold text-orange-300 mb-2">
            ⚡ คำเตือน
          </h3>
          <p className="text-orange-100 text-sm">
            คำสั่งเหล่านี้ต้องการความเข้าใจพื้นฐานของ VIM แล้ว
            ควรฝึกคำสั่งพื้นฐานให้ชำนาญก่อน
          </p>
        </div>

        <div className="grid gap-6">
          <CommandSection
            title="🎯 Text Objects"
            commands={advancedCommands}
            category="text-objects"
            gradientFrom="from-emerald-400"
            gradientTo="to-green-300"
            bgColor="bg-emerald-900/20"
            borderColor="border-emerald-400/30"
            textColor="text-emerald-100"
          />

          <CommandSection
            title="🔍 การเคลื่อนไหวขั้นสูง"
            commands={advancedCommands}
            category="navigation"
            gradientFrom="from-cyan-400"
            gradientTo="to-blue-300"
            bgColor="bg-cyan-900/20"
            borderColor="border-cyan-400/30"
            textColor="text-cyan-100"
          />

          <CommandSection
            title="🔎 การค้นหาขั้นสูง"
            commands={advancedCommands}
            category="search"
            gradientFrom="from-yellow-400"
            gradientTo="to-orange-300"
            bgColor="bg-yellow-900/20"
            borderColor="border-yellow-400/30"
            textColor="text-yellow-100"
          />

          <CommandSection
            title="🔄 การทำซ้ำ"
            commands={advancedCommands}
            category="repeat"
            gradientFrom="from-pink-400"
            gradientTo="to-red-300"
            bgColor="bg-pink-900/20"
            borderColor="border-pink-400/30"
            textColor="text-pink-100"
          />

          <CommandSection
            title="🎬 Macros"
            commands={advancedCommands}
            category="macros"
            gradientFrom="from-indigo-400"
            gradientTo="to-purple-300"
            bgColor="bg-indigo-900/20"
            borderColor="border-indigo-400/30"
            textColor="text-indigo-100"
          />

          <CommandSection
            title="👁️ Visual Mode"
            commands={advancedCommands}
            category="visual"
            gradientFrom="from-violet-400"
            gradientTo="to-purple-300"
            bgColor="bg-violet-900/20"
            borderColor="border-violet-400/30"
            textColor="text-violet-100"
          />

          <CommandSection
            title="🪟 Windows"
            commands={advancedCommands}
            category="windows"
            gradientFrom="from-slate-400"
            gradientTo="to-gray-300"
            bgColor="bg-slate-900/20"
            borderColor="border-slate-400/30"
            textColor="text-slate-100"
          />

          <CommandSection
            title="📑 Tabs"
            commands={advancedCommands}
            category="tabs"
            gradientFrom="from-amber-400"
            gradientTo="to-yellow-300"
            bgColor="bg-amber-900/20"
            borderColor="border-amber-400/30"
            textColor="text-amber-100"
          />

          <CommandSection
            title="📝 Registers"
            commands={advancedCommands}
            category="registers"
            gradientFrom="from-teal-400"
            gradientTo="to-cyan-300"
            bgColor="bg-teal-900/20"
            borderColor="border-teal-400/30"
            textColor="text-teal-100"
          />
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg p-6 border border-purple-400/30">
          <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
            🎓 เส้นทางการเรียนรู้ขั้นสูง
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-purple-300 mb-2">
                1. เรียนรู้ Text Objects
              </h5>
              <p className="text-purple-100 text-sm mb-2">
                เริ่มจาก ci" ca( diw เหล่านี้จะเปลี่ยนการทำงานของคุณไปเลย
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-indigo-300 mb-2">
                2. ฝึกใช้ Macros
              </h5>
              <p className="text-indigo-100 text-sm mb-2">
                qa...q @a @@ สำหรับงานซ้ำๆ ที่ซับซ้อน
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-cyan-300 mb-2">
                3. เชี่ยวชาญ Visual Mode
              </h5>
              <p className="text-cyan-100 text-sm mb-2">
                v V Ctrl+v สำหรับการเลือกและแก้ไขข้อความ
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
