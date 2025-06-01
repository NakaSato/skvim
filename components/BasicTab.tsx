import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CommandSection } from "./CommandSection";
import { basicCommands } from "../lib/vim-data";

export const BasicTab: React.FC = () => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          🎮 คำสั่งพื้นฐานของ VIM
        </CardTitle>
        <CardDescription className="text-blue-200">
          คำสั่งสำคัญที่ใช้บ่อยที่สุดใน VIM จัดกลุ่มตามหน้าที่การใช้งาน
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-4 border border-green-400/30">
          <h3 className="text-lg font-semibold text-green-300 mb-2">
            💡 สำหรับผู้เริ่มต้น
          </h3>
          <p className="text-green-100 text-sm">
            เริ่มต้นด้วยคำสั่งพื้นฐานเหล่านี้ ฝึกฝนให้ช้ำ จนกลายเป็นธรรมชาติ
            แล้วค่อยไปขั้นสูงต่อ
          </p>
        </div>

        <div className="grid gap-6">
          <CommandSection
            title="🧭 การเคลื่อนไหว (Navigation)"
            commands={basicCommands}
            category="navigation"
            gradientFrom="from-blue-400"
            gradientTo="to-cyan-300"
            bgColor="bg-blue-900/20"
            borderColor="border-blue-400/30"
            textColor="text-blue-100"
          />

          <CommandSection
            title="✏️ การแทรกข้อความ (Insert)"
            commands={basicCommands}
            category="insert"
            gradientFrom="from-green-400"
            gradientTo="to-emerald-300"
            bgColor="bg-green-900/20"
            borderColor="border-green-400/30"
            textColor="text-green-100"
          />

          <CommandSection
            title="🗑️ การลบ (Delete)"
            commands={basicCommands}
            category="delete"
            gradientFrom="from-red-400"
            gradientTo="to-pink-300"
            bgColor="bg-red-900/20"
            borderColor="border-red-400/30"
            textColor="text-red-100"
          />

          <CommandSection
            title="📋 การคัดลอก (Copy)"
            commands={basicCommands}
            category="copy"
            gradientFrom="from-purple-400"
            gradientTo="to-violet-300"
            bgColor="bg-purple-900/20"
            borderColor="border-purple-400/30"
            textColor="text-purple-100"
          />

          <CommandSection
            title="📌 การวาง (Paste)"
            commands={basicCommands}
            category="paste"
            gradientFrom="from-indigo-400"
            gradientTo="to-blue-300"
            bgColor="bg-indigo-900/20"
            borderColor="border-indigo-400/30"
            textColor="text-indigo-100"
          />

          <CommandSection
            title="↩️ การยกเลิก (Undo)"
            commands={basicCommands}
            category="undo"
            gradientFrom="from-orange-400"
            gradientTo="to-yellow-300"
            bgColor="bg-orange-900/20"
            borderColor="border-orange-400/30"
            textColor="text-orange-100"
          />

          <CommandSection
            title="💾 การจัดการไฟล์ (File)"
            commands={basicCommands}
            category="file"
            gradientFrom="from-gray-400"
            gradientTo="to-slate-300"
            bgColor="bg-gray-900/20"
            borderColor="border-gray-400/30"
            textColor="text-gray-100"
          />
        </div>

        <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-lg p-6 border border-yellow-400/30">
          <h4 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center gap-2">
            🎯 เคล็ดลับการเรียนรู้
          </h4>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <h5 className="font-semibold text-yellow-300 mb-2">เริ่มต้น:</h5>
              <ul className="space-y-1 text-yellow-100">
                <li>• ฝึก h j k l แทนลูกศรก่อน</li>
                <li>• จำ i สำหรับแทรกข้อความ</li>
                <li>• ใช้ Esc กลับ Normal Mode</li>
                <li>• :wq บันทึกและออก</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-300 mb-2">ผสมคำสั่ง:</h5>
              <ul className="space-y-1 text-yellow-100">
                <li>• 3w - ข้าม 3 คำ</li>
                <li>• 5dd - ลบ 5 บรรทัด</li>
                <li>• 2yy - คัดลอก 2 บรรทัด</li>
                <li>• 10j - ลงไป 10 บรรทัด</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg p-6 border border-blue-400/30">
          <h4 className="text-lg font-semibold text-blue-300 mb-4">
            📚 ลำดับการเรียนรู้แนะนำ
          </h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div className="text-blue-100">
                <span className="font-semibold text-cyan-300">
                  การเคลื่อนที่พื้นฐาน:
                </span>
                <span className="ml-2">h j k l, w b, 0 $</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div className="text-blue-100">
                <span className="font-semibold text-green-300">
                  การแทรกและแก้ไข:
                </span>
                <span className="ml-2">i a o, x dd, u</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-gradient-to-r from-purple-500 to-violet-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div className="text-blue-100">
                <span className="font-semibold text-purple-300">
                  การคัดลอกและวาง:
                </span>
                <span className="ml-2">yy yw, p P</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div className="text-blue-100">
                <span className="font-semibold text-orange-300">
                  การจัดการไฟล์:
                </span>
                <span className="ml-2">:w :q :wq</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
