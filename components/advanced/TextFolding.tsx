import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Minimize2,
  Maximize2,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface FoldingCommand {
  command: string;
  description: string;
  example: string;
  category: "create" | "navigate" | "toggle" | "delete" | "options";
}

export const TextFolding: React.FC = () => {
  const foldingCommands: FoldingCommand[] = [
    // Create folds
    {
      command: "zf{motion}",
      description: "สร้าง fold ตาม motion",
      example: "zf5j - fold 5 บรรทัดถัดไป",
      category: "create",
    },
    {
      command: "zF",
      description: "สร้าง fold สำหรับบรรทัดปัจจุบัน",
      example: "5zF - fold 5 บรรทัดจากตำแหน่งปัจจุบัน",
      category: "create",
    },
    {
      command: ":{range}fold",
      description: "สร้าง fold ในช่วงที่กำหนด",
      example: ":5,10fold - fold บรรทัด 5-10",
      category: "create",
    },
    {
      command: "zfi{",
      description: "สร้าง fold ใน bracket",
      example: "zfi{ - fold ข้อความใน {}",
      category: "create",
    },
    {
      command: "zfip",
      description: "สร้าง fold สำหรับ paragraph",
      example: "zfip - fold ย่อหน้าปัจจุบัน",
      category: "create",
    },

    // Navigate folds
    {
      command: "zj",
      description: "ไปที่ fold ถัดไป",
      example: "zj - เลื่อนไปยัง fold ที่อยู่ข้างล่าง",
      category: "navigate",
    },
    {
      command: "zk",
      description: "ไปที่ fold ก่อนหน้า",
      example: "zk - เลื่อนไปยัง fold ที่อยู่ข้างบน",
      category: "navigate",
    },
    {
      command: "[z",
      description: "ไปที่จุดเริ่มต้นของ fold",
      example: "[z - ไปที่บรรทัดแรกของ fold",
      category: "navigate",
    },
    {
      command: "]z",
      description: "ไปที่จุดสิ้นสุดของ fold",
      example: "]z - ไปที่บรรทัดสุดท้ายของ fold",
      category: "navigate",
    },

    // Toggle folds
    {
      command: "za",
      description: "เปิด/ปิด fold ปัจจุบัน",
      example: "za - toggle fold ที่ cursor อยู่",
      category: "toggle",
    },
    {
      command: "zA",
      description: "เปิด/ปิด fold ทั้งหมดใน fold ปัจจุบัน",
      example: "zA - toggle ทุก fold ใน nested fold",
      category: "toggle",
    },
    {
      command: "zo",
      description: "เปิด fold ปัจจุบัน",
      example: "zo - เปิด fold ที่ cursor อยู่",
      category: "toggle",
    },
    {
      command: "zO",
      description: "เปิด fold ทั้งหมดใน fold ปัจจุบัน",
      example: "zO - เปิดทุก nested fold",
      category: "toggle",
    },
    {
      command: "zc",
      description: "ปิด fold ปัจจุบัน",
      example: "zc - ปิด fold ที่ cursor อยู่",
      category: "toggle",
    },
    {
      command: "zC",
      description: "ปิด fold ทั้งหมดใน fold ปัจจุบัน",
      example: "zC - ปิดทุก nested fold",
      category: "toggle",
    },
    {
      command: "zm",
      description: "เพิ่ม fold level (ปิด fold มากขึ้น)",
      example: "zm - ปิด fold ระดับต่อไป",
      category: "toggle",
    },
    {
      command: "zM",
      description: "ปิด fold ทั้งหมด",
      example: "zM - ปิดทุก fold ในไฟล์",
      category: "toggle",
    },
    {
      command: "zr",
      description: "ลด fold level (เปิด fold มากขึ้น)",
      example: "zr - เปิด fold ระดับหนึ่ง",
      category: "toggle",
    },
    {
      command: "zR",
      description: "เปิด fold ทั้งหมด",
      example: "zR - เปิดทุก fold ในไฟล์",
      category: "toggle",
    },

    // Delete folds
    {
      command: "zd",
      description: "ลบ fold ปัจจุบัน",
      example: "zd - ลบ fold ที่ cursor อยู่",
      category: "delete",
    },
    {
      command: "zD",
      description: "ลบ fold ทั้งหมดใน fold ปัจจุบัน",
      example: "zD - ลบทุก nested fold",
      category: "delete",
    },
    {
      command: "zE",
      description: "ลบ fold ทั้งหมดในไฟล์",
      example: "zE - ลบทุก fold ในไฟล์",
      category: "delete",
    },

    // Options and info
    {
      command: "zi",
      description: "เปิด/ปิดการใช้งาน folding",
      example: "zi - toggle folding on/off",
      category: "options",
    },
    {
      command: "zn",
      description: "ปิดการใช้งาน folding",
      example: "zn - แสดงข้อความทั้งหมด",
      category: "options",
    },
    {
      command: "zN",
      description: "เปิดการใช้งาน folding",
      example: "zN - กลับไปใช้ folding",
      category: "options",
    },
    {
      command: "zv",
      description: "เปิด fold เท่าที่จำเป็นให้เห็น cursor",
      example: "zv - แสดงบรรทัดที่ cursor อยู่",
      category: "options",
    },
  ];

  const foldMethods = [
    {
      method: "manual",
      description: "สร้าง fold ด้วยตนเอง",
      usage: ":set foldmethod=manual",
      pros: "ควบคุมได้เต็มที่",
      cons: "ต้องสร้างเอง",
    },
    {
      method: "indent",
      description: "สร้าง fold ตาม indentation",
      usage: ":set foldmethod=indent",
      pros: "ทำงานอัตโนมัติ เหมาะกับ Python",
      cons: "อาจ fold มากเกินไป",
    },
    {
      method: "syntax",
      description: "สร้าง fold ตาม syntax",
      usage: ":set foldmethod=syntax",
      pros: "เข้าใจโครงสร้างโค้ด",
      cons: "ช้าในไฟล์ใหญ่",
    },
    {
      method: "marker",
      description: "สร้าง fold ตาม marker ในโค้ด",
      usage: ":set foldmethod=marker",
      pros: "แม่นยำ ใช้ {{{ และ }}}",
      cons: "ต้องเพิ่ม marker ในโค้ด",
    },
    {
      method: "expr",
      description: "สร้าง fold ตาม expression",
      usage: ":set foldmethod=expr",
      pros: "ยืดหยุ่นสูงสุด",
      cons: "ซับซ้อนในการตั้งค่า",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "create":
        return <ChevronDown className="w-4 h-4 text-green-400" />;
      case "navigate":
        return <ChevronRight className="w-4 h-4 text-blue-400" />;
      case "toggle":
        return <Eye className="w-4 h-4 text-yellow-400" />;
      case "delete":
        return <EyeOff className="w-4 h-4 text-red-400" />;
      case "options":
        return <Minimize2 className="w-4 h-4 text-purple-400" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "create":
        return "text-green-300";
      case "navigate":
        return "text-blue-300";
      case "toggle":
        return "text-yellow-300";
      case "delete":
        return "text-red-300";
      case "options":
        return "text-purple-300";
      default:
        return "text-white";
    }
  };

  const groupedCommands = {
    create: foldingCommands.filter((cmd) => cmd.category === "create"),
    navigate: foldingCommands.filter((cmd) => cmd.category === "navigate"),
    toggle: foldingCommands.filter((cmd) => cmd.category === "toggle"),
    delete: foldingCommands.filter((cmd) => cmd.category === "delete"),
    options: foldingCommands.filter((cmd) => cmd.category === "options"),
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Minimize2 className="w-6 h-6 text-purple-400" />
            📁 Text Folding - การพับข้อความ
          </CardTitle>
          <CardDescription className="text-blue-200">
            การซ่อนและแสดงส่วนของข้อความเพื่อให้มองเห็นโครงสร้างได้ชัดเจน
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg p-4 border border-purple-400/30 mb-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">
              💡 ประโยชน์ของ Folding
            </h3>
            <ul className="text-purple-100 text-sm space-y-1">
              <li>• มองเห็นโครงสร้างโค้ดได้ชัดเจน</li>
              <li>• ซ่อนส่วนที่ไม่ต้องการชั่วคราว</li>
              <li>• นำทางในไฟล์ใหญ่ได้สะดวก</li>
              <li>• โฟกัสกับส่วนที่กำลังแก้ไข</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Fold Methods */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Maximize2 className="w-5 h-5 text-cyan-400" />
            วิธีการ Folding
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foldMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <h4 className="font-semibold text-cyan-300 mb-2">
                  {method.method}
                </h4>
                <p className="text-white/80 text-sm mb-3">
                  {method.description}
                </p>
                <code className="bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded text-xs block mb-2">
                  {method.usage}
                </code>
                <div className="text-xs space-y-1">
                  <div className="text-green-400">✓ {method.pros}</div>
                  <div className="text-orange-400">! {method.cons}</div>
                </div>
              </div>
            ))}
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
              {getCategoryIcon(category)}
              {category === "create" && "การสร้าง Fold"}
              {category === "navigate" && "การนำทางใน Fold"}
              {category === "toggle" && "การเปิด/ปิด Fold"}
              {category === "delete" && "การลบ Fold"}
              {category === "options" && "ตัวเลือกและข้อมูล"}
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
                          className={`bg-${
                            getCategoryColor(category).split("-")[1]
                          }-900/30 ${getCategoryColor(
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

      {/* Examples and Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-400/30">
          <CardHeader>
            <CardTitle className="text-green-300 flex items-center gap-2">
              <ChevronDown className="w-5 h-5" />
              ตัวอย่างการใช้งาน
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  1. Fold Function
                </h5>
                <code className="text-green-100 text-sm block bg-green-800/20 p-2 rounded">
                  # วางเคอร์เซอร์ที่ function
                  <br />
                  zfi&#123; # fold ข้อความใน function
                  <br />
                  za # toggle เปิด/ปิด
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  2. Fold Comment Block
                </h5>
                <code className="text-green-100 text-sm block bg-green-800/20 p-2 rounded">
                  # เลือก comment block
                  <br />
                  V5j # visual mode 5 บรรทัด
                  <br />
                  zf # สร้าง fold
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  3. Quick Navigation
                </h5>
                <code className="text-green-100 text-sm block bg-green-800/20 p-2 rounded">
                  zM # ปิดทุก fold
                  <br />
                  zj # ไปยัง fold ถัดไป
                  <br />
                  zo # เปิด fold ปัจจุบัน
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-400/30">
          <CardHeader>
            <CardTitle className="text-blue-300 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              เทคนิคขั้นสูง
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-blue-300 mb-2">
                  การตั้งค่าใน .vimrc
                </h5>
                <code className="text-blue-100 text-sm block bg-blue-800/20 p-2 rounded">
                  set foldmethod=indent
                  <br />
                  set foldlevel=2
                  <br />
                  set foldnestmax=3
                  <br />
                  nnoremap &lt;space&gt; za
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-indigo-300 mb-2">
                  Fold Markers
                </h5>
                <code className="text-indigo-100 text-sm block bg-indigo-800/20 p-2 rounded">
                  {`// Section 1 {{{`}
                  <br />
                  code here...
                  <br />
                  {`// }}}`}
                  <br />
                  :set foldmethod=marker
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-purple-300 mb-2">
                  Save/Load Folds
                </h5>
                <code className="text-purple-100 text-sm block bg-purple-800/20 p-2 rounded">
                  :mkview # บันทึก fold
                  <br />
                  :loadview # โหลด fold
                  <br /># Auto save/load ใน .vimrc
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-400/30">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold text-orange-300 mb-4 flex items-center gap-2">
            🎯 เคล็ดลับการใช้ Folding
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="font-semibold text-orange-300">สำหรับ Beginner</h5>
              <ul className="text-orange-100 text-sm space-y-1">
                <li>
                  • เริ่มด้วย{" "}
                  <code className="bg-orange-800/30 px-1 rounded">zfip</code>{" "}
                  เพื่อ fold paragraph
                </li>
                <li>
                  • ใช้{" "}
                  <code className="bg-orange-800/30 px-1 rounded">za</code>{" "}
                  เป็นหลักในการ toggle
                </li>
                <li>
                  • ตั้ง{" "}
                  <code className="bg-orange-800/30 px-1 rounded">
                    foldmethod=indent
                  </code>{" "}
                  สำหรับเริ่มต้น
                </li>
                <li>
                  • ใช้{" "}
                  <code className="bg-orange-800/30 px-1 rounded">zR</code>{" "}
                  เมื่อไม่เห็นอะไร
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-red-300">สำหรับ Advanced</h5>
              <ul className="text-red-100 text-sm space-y-1">
                <li>
                  • ใช้{" "}
                  <code className="bg-red-800/30 px-1 rounded">foldexpr</code>{" "}
                  สำหรับ custom folding
                </li>
                <li>
                  • Map{" "}
                  <code className="bg-red-800/30 px-1 rounded">spacebar</code>{" "}
                  กับ <code className="bg-red-800/30 px-1 rounded">za</code>
                </li>
                <li>
                  • ใช้{" "}
                  <code className="bg-red-800/30 px-1 rounded">foldtext</code>{" "}
                  เพื่อ customize fold display
                </li>
                <li>
                  • Auto save folds ด้วย{" "}
                  <code className="bg-red-800/30 px-1 rounded">
                    viewoptions
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
