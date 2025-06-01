import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CommandSection } from "./CommandSection";
import { searchCommands } from "../lib/vim-data";

export const SearchTab: React.FC = () => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          🔍 การค้นหาและแทนที่
        </CardTitle>
        <CardDescription className="text-blue-200">
          คำสั่งสำหรับการค้นหาและแทนที่ข้อความขั้นสูง
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-4 border border-blue-400/30">
          <h3 className="text-lg font-semibold text-blue-300 mb-2">
            🎯 การค้นหาอย่างมีประสิทธิภาพ
          </h3>
          <p className="text-blue-100 text-sm">
            VIM มีเครื่องมือการค้นหาที่ทรงพลังมาก รองรับ Regular Expression
            และมีตัวเลือกการแทนที่ที่หลากหลาย
          </p>
        </div>

        <div className="grid gap-6">
          <CommandSection
            title="🔎 การค้นหาพื้นฐาน"
            commands={searchCommands}
            category="basic"
            gradientFrom="from-blue-400"
            gradientTo="to-cyan-300"
            bgColor="bg-blue-900/20"
            borderColor="border-blue-400/30"
            textColor="text-blue-100"
          />

          <CommandSection
            title="🔄 การแทนที่ (Substitute)"
            commands={searchCommands}
            category="substitute"
            gradientFrom="from-green-400"
            gradientTo="to-emerald-300"
            bgColor="bg-green-900/20"
            borderColor="border-green-400/30"
            textColor="text-green-100"
          />

          <CommandSection
            title="⚙️ การตั้งค่าการค้นหา"
            commands={searchCommands}
            category="settings"
            gradientFrom="from-purple-400"
            gradientTo="to-violet-300"
            bgColor="bg-purple-900/20"
            borderColor="border-purple-400/30"
            textColor="text-purple-100"
          />

          <CommandSection
            title="🔧 Regular Expression"
            commands={searchCommands}
            category="regex"
            gradientFrom="from-red-400"
            gradientTo="to-pink-300"
            bgColor="bg-red-900/20"
            borderColor="border-red-400/30"
            textColor="text-red-100"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg p-6 border border-green-400/30">
            <h4 className="text-lg font-semibold text-green-300 mb-4 flex items-center gap-2">
              💡 ตัวอย่างการใช้งาน
            </h4>
            <div className="space-y-3 text-sm">
              <div className="bg-black/20 p-3 rounded">
                <div className="text-green-400 font-mono">:%s/old/new/g</div>
                <div className="text-green-200">
                  แทนที่ "old" ด้วย "new" ทั้งไฟล์
                </div>
              </div>
              <div className="bg-black/20 p-3 rounded">
                <div className="text-green-400 font-mono">
                  :5,10s/foo/bar/gc
                </div>
                <div className="text-green-200">
                  แทนที่บรรทัด 5-10 โดยถามยืนยัน
                </div>
              </div>
              <div className="bg-black/20 p-3 rounded">
                <div className="text-green-400 font-mono">/\&lt;word\&gt;</div>
                <div className="text-green-200">ค้นหาคำที่ตรงทั้งคำ</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg p-6 border border-orange-400/30">
            <h4 className="text-lg font-semibold text-orange-300 mb-4 flex items-center gap-2">
              🎯 เคล็ดลับการค้นหา
            </h4>
            <ul className="space-y-2 text-sm text-orange-100">
              <li>• ใช้ * เพื่อค้นหาคำที่ cursor อยู่</li>
              <li>• กด n/N เพื่อไปยังผลลัพธ์ถัดไป/ก่อนหน้า</li>
              <li>• :noh เพื่อยกเลิกการเน้นสี</li>
              <li>• /\c pattern เพื่อค้นหาแบบไม่สนใจ case</li>
              <li>• ใช้ ? แทน / เพื่อค้นหาย้อนกลับ</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg p-6 border border-purple-400/30">
          <h4 className="text-lg font-semibold text-purple-300 mb-4">
            🔧 Regular Expression พื้นฐาน
          </h4>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <h5 className="font-semibold text-purple-300 mb-3">
                Metacharacters:
              </h5>
              <div className="space-y-2">
                <div className="bg-black/20 p-2 rounded flex justify-between">
                  <code className="text-cyan-400">^</code>
                  <span className="text-purple-100">ต้นบรรทัด</span>
                </div>
                <div className="bg-black/20 p-2 rounded flex justify-between">
                  <code className="text-cyan-400">$</code>
                  <span className="text-purple-100">ท้ายบรรทัด</span>
                </div>
                <div className="bg-black/20 p-2 rounded flex justify-between">
                  <code className="text-cyan-400">.</code>
                  <span className="text-purple-100">ตัวอักษรใดๆ</span>
                </div>
                <div className="bg-black/20 p-2 rounded flex justify-between">
                  <code className="text-cyan-400">*</code>
                  <span className="text-purple-100">0 หรือมากกว่า</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-purple-300 mb-3">
                ตัวอย่างรูปแบบ:
              </h5>
              <div className="space-y-2">
                <div className="bg-black/20 p-2 rounded">
                  <code className="text-green-400">/^#.*</code>
                  <div className="text-purple-100 text-xs">
                    บรรทัดที่ขึ้นต้นด้วย #
                  </div>
                </div>
                <div className="bg-black/20 p-2 rounded">
                  <code className="text-green-400">/[0-9]\+</code>
                  <div className="text-purple-100 text-xs">
                    ตัวเลข 1 หลักขึ้นไป
                  </div>
                </div>
                <div className="bg-black/20 p-2 rounded">
                  <code className="text-green-400">/\w\+@\w\+\.</code>
                  <div className="text-purple-100 text-xs">
                    รูปแบบ email พื้นฐาน
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-lg p-6 border border-yellow-400/30">
          <h4 className="text-lg font-semibold text-yellow-300 mb-4">
            📚 สถานการณ์การใช้งานจริง
          </h4>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <h5 className="font-semibold text-yellow-300 mb-2">
                การแก้ไขโค้ด:
              </h5>
              <ul className="space-y-1 text-yellow-100">
                <li>• เปลี่ยนชื่อตัวแปรทั้งไฟล์</li>
                <li>• แก้ไข URL หรือ path</li>
                <li>• เปลี่ยน format วันที่</li>
                <li>• ลบ comment หรือ debug code</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-300 mb-2">
                การจัดการข้อมูล:
              </h5>
              <ul className="space-y-1 text-yellow-100">
                <li>• แปลง CSV format</li>
                <li>• ลบ whitespace ส่วนเกิน</li>
                <li>• จัดรูปแบบข้อความ</li>
                <li>• ค้นหาและแก้ไข pattern</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
