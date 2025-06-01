import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bookmark, MapPin, Star, Navigation } from "lucide-react";

interface MarkCommand {
  command: string;
  description: string;
  example: string;
  category: "set" | "jump" | "special";
}

export const MarksAndBookmarks: React.FC = () => {
  const markCommands: MarkCommand[] = [
    // Setting marks
    {
      command: "m[a-z]",
      description: "ตั้ง local mark (a-z)",
      example: "ma - ตั้งเครื่องหมาย a",
      category: "set",
    },
    {
      command: "m[A-Z]",
      description: "ตั้ง global mark (A-Z)",
      example: "mA - ตั้งเครื่องหมาย A ข้ามไฟล์",
      category: "set",
    },

    // Jumping to marks
    {
      command: "'[mark]",
      description: "กระโดดไปยังบรรทัดของ mark",
      example: "'a - ไปบรรทัดของเครื่องหมาย a",
      category: "jump",
    },
    {
      command: "`[mark]",
      description: "กระโดดไปยังตำแหน่งแม่นยำของ mark",
      example: "`a - ไปตำแหน่งที่แม่นยำของ a",
      category: "jump",
    },
    {
      command: "''",
      description: "กลับไปตำแหน่งก่อนหน้า",
      example: "'' - กลับไปตำแหน่งที่กระโดดมา",
      category: "jump",
    },
    {
      command: "``",
      description: "กลับไปตำแหน่งแม่นยำก่อนหน้า",
      example: "`` - กลับไปตำแหน่งแม่นยำ",
      category: "jump",
    },

    // Special marks
    {
      command: "'.",
      description: "ไปตำแหน่งที่แก้ไขล่าสุด",
      example: "'. - ไปยังการแก้ไขล่าสุด",
      category: "special",
    },
    {
      command: "'0",
      description: "ไปตำแหน่งที่ออกจาก Vim ล่าสุด",
      example: "'0 - ไปยังตำแหน่งที่ออกล่าสุด",
      category: "special",
    },
    {
      command: "'^",
      description: "ไปตำแหน่งที่ insert ล่าสุด",
      example: "'. - ไปยัง insert ล่าสุด",
      category: "special",
    },
    {
      command: "'[",
      description: "ไปจุดเริ่มต้นของการเปลี่ยนแปลงล่าสุด",
      example: "'[ - ไปจุดเริ่มต้นการแก้ไข",
      category: "special",
    },
    {
      command: "']",
      description: "ไปจุดสิ้นสุดของการเปลี่ยนแปลงล่าสุด",
      example: "'] - ไปจุดสิ้นสุดการแก้ไข",
      category: "special",
    },
  ];

  const specialMarks = [
    { mark: ".", description: "ตำแหน่งการแก้ไขล่าสุด", usage: "'." },
    {
      mark: "^",
      description: "ตำแหน่งที่ออกจาก insert mode ล่าสุด",
      usage: "'^",
    },
    {
      mark: "[",
      description: "จุดเริ่มต้นของการเปลี่ยนแปลงล่าสุด",
      usage: "'[",
    },
    {
      mark: "]",
      description: "จุดสิ้นสุดของการเปลี่ยนแปลงล่าสุด",
      usage: "']",
    },
    {
      mark: "<",
      description: "จุดเริ่มต้นของการเลือกใน visual mode ล่าสุด",
      usage: "'<",
    },
    {
      mark: ">",
      description: "จุดสิ้นสุดของการเลือกใน visual mode ล่าสุด",
      usage: "'>",
    },
    { mark: "0-9", description: "ตำแหน่งใน viminfo (0=ล่าสุด)", usage: "'0" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "set":
        return "text-green-300";
      case "jump":
        return "text-blue-300";
      case "special":
        return "text-purple-300";
      default:
        return "text-white";
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "set":
        return "bg-green-900/30";
      case "jump":
        return "bg-blue-900/30";
      case "special":
        return "bg-purple-900/30";
      default:
        return "bg-white/5";
    }
  };

  const groupedCommands = {
    set: markCommands.filter((cmd) => cmd.category === "set"),
    jump: markCommands.filter((cmd) => cmd.category === "jump"),
    special: markCommands.filter((cmd) => cmd.category === "special"),
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-cyan-400" />
            🔖 Marks และ Bookmarks - การนำทางอย่างแม่นยำ
          </CardTitle>
          <CardDescription className="text-blue-200">
            ใช้ marks เพื่อบันทึกตำแหน่งและกระโดดกลับไปได้อย่างรวดเร็ว
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg p-4 border border-cyan-400/30 mb-6">
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              💡 ประโยชน์ของ Marks
            </h3>
            <ul className="text-cyan-100 text-sm space-y-1">
              <li>• บันทึกตำแหน่งสำคัญในไฟล์</li>
              <li>• กระโดดข้ามไฟล์ได้ด้วย Global Marks</li>
              <li>• กลับไปตำแหน่งเก่าได้รวดเร็ว</li>
              <li>• ช่วยในการนำทางในไฟล์ขนาดใหญ่</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Commands by Category */}
      {Object.entries(groupedCommands).map(([category, commands]) => (
        <Card
          key={category}
          className="bg-white/5 backdrop-blur-sm border-white/10"
        >
          <CardHeader>
            <CardTitle
              className={`flex items-center gap-2 ${getCategoryColor(
                category
              )}`}
            >
              {category === "set" && (
                <>
                  <Bookmark className="w-5 h-5" />
                  การตั้ง Marks
                </>
              )}
              {category === "jump" && (
                <>
                  <Navigation className="w-5 h-5" />
                  การกระโดดไป Marks
                </>
              )}
              {category === "special" && (
                <>
                  <Star className="w-5 h-5" />
                  Special Marks
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2 px-4 text-white/80">
                      คำสั่ง
                    </th>
                    <th className="text-left py-2 px-4 text-white/80">
                      คำอธิบาย
                    </th>
                    <th className="text-left py-2 px-4 text-white/80">
                      ตัวอย่าง
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {commands.map((cmd, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/10 hover:bg-white/5"
                    >
                      <td className="py-2 px-4">
                        <code
                          className={`${getCategoryBg(
                            category
                          )} ${getCategoryColor(
                            category
                          )} px-2 py-1 rounded font-mono`}
                        >
                          {cmd.command}
                        </code>
                      </td>
                      <td className="py-2 px-4 text-white/80">
                        {cmd.description}
                      </td>
                      <td className="py-2 px-4 text-gray-300 text-xs">
                        {cmd.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Special Marks Reference */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            Special Marks ที่ VIM ตั้งให้อัตโนมัติ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specialMarks.map((mark, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <code className="bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded font-mono">
                    {mark.usage}
                  </code>
                  <span className="text-yellow-400 font-semibold">
                    &apos;{mark.mark}
                  </span>
                </div>
                <p className="text-white/80 text-sm">{mark.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Practical Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-400/30">
          <CardHeader>
            <CardTitle className="text-green-300 flex items-center gap-2">
              <Bookmark className="w-5 h-5" />
              ตัวอย่างการใช้งาน
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  1. การทำงานในฟังก์ชัน
                </h5>
                <code className="text-green-100 text-sm block bg-green-800/20 p-2 rounded">
                  ma # ตั้งเครื่องหมาย a ที่จุดเริ่มต้น
                  <br />
                  /function # ค้นหาฟังก์ชัน
                  <br />
                  mb # ตั้งเครื่องหมาย b ที่ฟังก์ชัน
                  <br />
                  &apos;a # กลับไปจุดเริ่มต้น
                  <br />
                  &apos;b # ไปที่ฟังก์ชัน
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  2. การทำงานข้ามไฟล์
                </h5>
                <code className="text-green-100 text-sm block bg-green-800/20 p-2 rounded">
                  mA # ตั้งเครื่องหมาย A (global)
                  <br />
                  :e other.js # เปิดไฟล์อื่น
                  <br />
                  &apos;A # กลับไปไฟล์เดิม
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  3. การใช้ Special Marks
                </h5>
                <code className="text-green-100 text-sm block bg-green-800/20 p-2 rounded">
                  &apos;. # ไปตำแหน่งแก้ไขล่าสุด
                  <br />
                  &apos;^ # ไปตำแหน่ง insert ล่าสุด
                  <br />
                  &apos;&apos; # toggle ระหว่าง 2 ตำแหน่ง
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-400/30">
          <CardHeader>
            <CardTitle className="text-blue-300 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              เทคนิคขั้นสูง
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-blue-300 mb-2">
                  การดู Marks ทั้งหมด
                </h5>
                <code className="text-blue-100 text-sm block bg-blue-800/20 p-2 rounded">
                  :marks # แสดง marks ทั้งหมด
                  <br />
                  :marks aB # แสดงเฉพาะ mark a และ B<br />
                  :delmarks a # ลบ mark a<br />
                  :delmarks! # ลบ local marks ทั้งหมด
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-indigo-300 mb-2">
                  Jump List
                </h5>
                <code className="text-indigo-100 text-sm block bg-indigo-800/20 p-2 rounded">
                  Ctrl-O # กลับไปตำแหน่งก่อนหน้า
                  <br />
                  Ctrl-I # ไปตำแหน่งถัดไป
                  <br />
                  :jumps # แสดง jump list
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-purple-300 mb-2">เคล็ดลับ</h5>
                <ul className="text-purple-100 text-sm space-y-1">
                  <li>• ใช้ตัวพิมพ์ใหญ่ (A-Z) สำหรับไฟล์สำคัญ</li>
                  <li>• ใช้ `` เพื่อ toggle ระหว่าง 2 ตำแหน่ง</li>
                  <li>• ใช้ &apos;. เพื่อกลับไปแก้ไขต่อ</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-400/30">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold text-orange-300 mb-4 flex items-center gap-2">
            🎯 แนวทางปฏิบัติที่ดี
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-orange-300 mb-2">
                Local Marks (a-z)
              </h5>
              <ul className="text-orange-100 text-sm space-y-1">
                <li>• ใช้ a, b, c สำหรับงานชั่วคราว</li>
                <li>• ใช้ f สำหรับฟังก์ชันสำคัญ</li>
                <li>• ใช้ t สำหรับ top ของไฟล์</li>
                <li>• ใช้ e สำหรับ end ของไฟล์</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-300 mb-2">
                Global Marks (A-Z)
              </h5>
              <ul className="text-red-100 text-sm space-y-1">
                <li>• ใช้ M สำหรับ main file</li>
                <li>• ใช้ C สำหรับ config file</li>
                <li>• ใช้ T สำหรับ test file</li>
                <li>• ใช้ R สำหรับ README</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
