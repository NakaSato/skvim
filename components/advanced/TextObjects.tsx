import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Square, Type, Layers } from "lucide-react";

interface TextObjectCommand {
  operator: string;
  textObject: string;
  description: string;
  example: string;
}

interface TextObjectCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  commands: TextObjectCommand[];
}

export const TextObjects: React.FC = () => {
  const textObjectCategories: TextObjectCategory[] = [
    {
      title: "Word Text Objects",
      icon: <Type className="w-5 h-5" />,
      description: "การทำงานกับคำและข้อความ",
      commands: [
        {
          operator: "d",
          textObject: "iw",
          description: "ลบคำ (inner word)",
          example: "diw - ลบคำที่ cursor อยู่",
        },
        {
          operator: "d",
          textObject: "aw",
          description: "ลบคำพร้อม space",
          example: "daw - ลบคำและ space ข้างหลัง",
        },
        {
          operator: "c",
          textObject: "iw",
          description: "เปลี่ยนคำ",
          example: "ciw - เปลี่ยนคำที่ cursor อยู่",
        },
        {
          operator: "y",
          textObject: "aw",
          description: "คัดลอกคำ",
          example: "yaw - คัดลอกคำพร้อม space",
        },
        {
          operator: "d",
          textObject: "iW",
          description: "ลบ WORD (non-whitespace)",
          example: "diW - ลบ WORD ปัจจุบัน",
        },
        {
          operator: "c",
          textObject: "aW",
          description: "เปลี่ยน WORD",
          example: "caW - เปลี่ยน WORD พร้อม space",
        },
      ],
    },
    {
      title: "Sentence & Paragraph",
      icon: <Square className="w-5 h-5" />,
      description: "การทำงานกับประโยคและย่อหน้า",
      commands: [
        {
          operator: "d",
          textObject: "is",
          description: "ลบประโยค",
          example: "dis - ลบประโยคปัจจุบัน",
        },
        {
          operator: "c",
          textObject: "as",
          description: "เปลี่ยนประโยค",
          example: "cas - เปลี่ยนประโยคพร้อม space",
        },
        {
          operator: "d",
          textObject: "ip",
          description: "ลบย่อหน้า",
          example: "dip - ลบย่อหน้าปัจจุบัน",
        },
        {
          operator: "y",
          textObject: "ap",
          description: "คัดลอกย่อหน้า",
          example: "yap - คัดลอกย่อหน้าพร้อมบรรทัดว่าง",
        },
        {
          operator: "v",
          textObject: "is",
          description: "เลือกประโยค",
          example: "vis - เลือกประโยคใน visual mode",
        },
        {
          operator: "g",
          textObject: "qap",
          description: "จัดรูปแบบย่อหน้า",
          example: "gqap - จัดรูปแบบย่อหน้าให้พอดี",
        },
      ],
    },
    {
      title: "Delimiter Text Objects",
      icon: <Target className="w-5 h-5" />,
      description: "การทำงานกับเครื่องหมายครอบ",
      commands: [
        {
          operator: "d",
          textObject: 'i"',
          description: "ลบข้อความใน double quotes",
          example: 'di" - ลบ "hello world"',
        },
        {
          operator: "c",
          textObject: "a'",
          description: "เปลี่ยนข้อความใน single quotes",
          example: "ca' - เปลี่ยน 'text' ทั้งหมด",
        },
        {
          operator: "d",
          textObject: "i(",
          description: "ลบข้อความใน parentheses",
          example: "di( หรือ dib - ลบ (content)",
        },
        {
          operator: "y",
          textObject: "a[",
          description: "คัดลอกข้อความใน brackets",
          example: "ya[ - คัดลอก [content] ทั้งหมด",
        },
        {
          operator: "c",
          textObject: "i{",
          description: "เปลี่ยนข้อความใน braces",
          example: "ci{ หรือ ciB - เปลี่ยน {content}",
        },
        {
          operator: "d",
          textObject: "i<",
          description: "ลบข้อความใน angle brackets",
          example: "di< - ลบ <tag>content</tag>",
        },
        {
          operator: "c",
          textObject: "it",
          description: "เปลี่ยนข้อความใน tag",
          example: "cit - เปลี่ยนเนื้อหาใน HTML tag",
        },
        {
          operator: "d",
          textObject: "at",
          description: "ลบ tag ทั้งหมด",
          example: "dat - ลบ <div>content</div> ทั้งหมด",
        },
      ],
    },
    {
      title: "Special Text Objects",
      icon: <Layers className="w-5 h-5" />,
      description: "Text objects พิเศษอื่นๆ",
      commands: [
        {
          operator: "v",
          textObject: "i_",
          description: "เลือกข้อความระหว่าง underscore",
          example: "vi_ - เลือก _text_here_",
        },
        {
          operator: "c",
          textObject: "a-",
          description: "เปลี่ยนข้อความระหว่าง dash",
          example: "ca- - เปลี่ยน -text-here-",
        },
        {
          operator: "d",
          textObject: "i`",
          description: "ลบข้อความใน backticks",
          example: "di` - ลบ `code`",
        },
        {
          operator: "y",
          textObject: "a`",
          description: "คัดลอกข้อความใน backticks",
          example: "ya` - คัดลอก `code` ทั้งหมด",
        },
        {
          operator: "g",
          textObject: "i{",
          description: "เลือกทั้ง block",
          example: "gii - เลือกทั้ง indentation level",
        },
        {
          operator: "d",
          textObject: "il",
          description: "ลบทั้งบรรทัด (ไม่รวม newline)",
          example: "dil - ลบเนื้อหาในบรรทัด",
        },
      ],
    },
  ];

  const operatorExamples = [
    {
      title: "การรวม Operators",
      examples: [
        "d = ลบ (delete)",
        "c = เปลี่ยน (change)",
        "y = คัดลอก (yank)",
        "v = เลือก (visual)",
        "= = จัดรูปแบบ (format)",
        "gq = จัดรูปแบบข้อความ",
      ],
    },
    {
      title: "การรวม Text Objects",
      examples: [
        "i = inside (ข้างใน)",
        "a = around (รอบๆ รวม delimiter)",
        "w = word (คำ)",
        "s = sentence (ประโยค)",
        "p = paragraph (ย่อหน้า)",
        "t = tag (HTML/XML tag)",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-400" />
            🎯 Text Objects - การทำงานกับข้อความอย่างฉลาด
          </CardTitle>
          <CardDescription className="text-blue-200">
            Text Objects ช่วยให้คุณสามารถเลือก แก้ไข
            และจัดการข้อความได้อย่างแม่นยำ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-lg p-4 border border-emerald-400/30 mb-6">
            <h3 className="text-lg font-semibold text-emerald-300 mb-2">
              💡 หลักการ Text Objects
            </h3>
            <p className="text-emerald-100 text-sm mb-2">
              Text Objects ใช้รูปแบบ:{" "}
              <span className="font-mono bg-emerald-800/30 px-2 py-1 rounded">
                operator + i/a + object
              </span>
            </p>
            <ul className="text-emerald-100 text-sm space-y-1">
              <li>
                • <code className="text-emerald-300">i</code> = inside (ข้างใน)
              </li>
              <li>
                • <code className="text-emerald-300">a</code> = around (รอบๆ รวม
                delimiter)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {textObjectCategories.map((category, index) => (
        <Card
          key={index}
          className="bg-white/5 backdrop-blur-sm border-white/10"
        >
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              {category.icon}
              {category.title}
            </CardTitle>
            <CardDescription className="text-blue-200">
              {category.description}
            </CardDescription>
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
                  {category.commands.map((cmd, cmdIndex) => (
                    <tr
                      key={cmdIndex}
                      className="border-b border-white/10 hover:bg-white/5"
                    >
                      <td className="py-2 px-4">
                        <code className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded font-mono">
                          {cmd.operator}
                          {cmd.textObject}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {operatorExamples.map((section, index) => (
          <Card
            key={index}
            className="bg-white/5 backdrop-blur-sm border-white/10"
          >
            <CardHeader>
              <CardTitle className="text-white text-lg">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {section.examples.map((example, exIndex) => (
                  <div key={exIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80 text-sm font-mono">
                      {example}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-400/30">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
            🎯 ตัวอย่างการใช้งานจริง
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-purple-300 mb-1">
                  การแก้ไขโค้ด
                </h5>
                <code className="text-purple-100 text-sm block bg-purple-800/20 p-2 rounded">
                  ci&quot; - เปลี่ยนข้อความใน quotes
                  <br />
                  cit - เปลี่ยนข้อความใน HTML tag
                  <br />
                  ci( - เปลี่ยนข้อความใน parentheses
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-indigo-300 mb-1">
                  การลบข้อความ
                </h5>
                <code className="text-indigo-100 text-sm block bg-indigo-800/20 p-2 rounded">
                  daw - ลบคำพร้อม space
                  <br />
                  dip - ลบย่อหน้าทั้งหมด
                  <br />
                  dat - ลบ HTML tag ทั้งหมด
                </code>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-cyan-300 mb-1">การคัดลอก</h5>
                <code className="text-cyan-100 text-sm block bg-cyan-800/20 p-2 rounded">
                  yiw - คัดลอกคำ
                  <br />
                  yap - คัดลอกย่อหน้า
                  <br />
                  ya&#123; - คัดลอก block code
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-1">
                  การเลือกข้อความ
                </h5>
                <code className="text-green-100 text-sm block bg-green-800/20 p-2 rounded">
                  viw - เลือกคำ
                  <br />
                  vis - เลือกประโยค
                  <br />
                  vi( - เลือกข้อความใน parentheses
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
