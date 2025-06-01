import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  BookOpen, 
  Target, 
  Users, 
  Globe, 
  HelpCircle, 
  Zap,
  GraduationCap,
  PlayCircle,
  Brain,
  Star
} from "lucide-react";

export const LearningPathTab: React.FC = () => {
  const helpCommands = [
    {
      command: ":help",
      shortcut: ":h",
      description: "เปิดหน้าหลักของระบบช่วยเหลือ (ไฟล์ help.txt)",
      example: ":help"
    },
    {
      command: ":help {topic}",
      shortcut: ":h {topic}",
      description: "ค้นหาข้อมูลสำหรับหัวข้อ, คำสั่ง, หรือตัวเลือกที่ต้องการ (case-sensitive)",
      example: ":h x (สำหรับคำสั่ง x ใน Normal Mode)"
    },
    {
      command: ":helpgrep {pattern}",
      shortcut: "",
      description: "ค้นหา {pattern} ในไฟล์ help ทั้งหมด ผลลัพธ์จะแสดงใน quickfix list",
      example: ":helpgrep insert"
    },
    {
      command: ":help helphelp",
      shortcut: "",
      description: "แสดงข้อมูลเกี่ยวกับวิธีการใช้ระบบ help เอง",
      example: ":help helphelp"
    }
  ];

  const helpExamples = [
    {
      command: ":h x",
      description: "สำหรับคำสั่ง x ใน Normal Mode"
    },
    {
      command: ":h :w",
      description: "สำหรับคำสั่ง :w ใน Command-Line Mode"
    },
    {
      command: ":h 'number'",
      description: "สำหรับตัวเลือก number (ต้องมี single quotes)"
    },
    {
      command: ":h i_CTRL-R",
      description: "สำหรับคำสั่ง Ctrl-R ใน Insert Mode (ต้องมี prefix i_)"
    },
    {
      command: ":h v_o",
      description: "สำหรับคำสั่ง o ใน Visual Mode (ต้องมี prefix v_)"
    },
    {
      command: ":h ctrl-a",
      description: "สำหรับคำสั่ง Ctrl-A ใน Normal Mode"
    }
  ];

  const navigationCommands = [
    {
      command: "Ctrl-]",
      description: "ตามลิงก์ (tag) ที่เคอร์เซอร์อยู่"
    },
    {
      command: "Ctrl-t",
      description: "กลับไปยังตำแหน่งก่อนหน้าใน help stack"
    },
    {
      command: "Ctrl-o",
      description: "กลับไปยังตำแหน่งก่อนหน้า"
    },
    {
      command: "/pattern",
      description: "ค้นหาข้อความภายในหน้า help ปัจจุบัน"
    }
  ];

  const quickfixCommands = [
    {
      command: ":cn",
      description: "ไปยังผลการค้นหาถัดไป"
    },
    {
      command: ":cp",
      description: "กลับไปยังผลการค้นหาก่อนหน้า"
    },
    {
      command: ":copen",
      description: "เปิด quickfix list"
    }
  ];

  const books = [
    {
      title: "Practical Vim: Edit Text at the Speed of Thought",
      author: "Drew Neil",
      description: "คู่มือการใช้ Vim อย่างมีประสิทธิภาพ"
    },
    {
      title: "Mastering Vim Quickly",
      author: "Jovica Ilic",
      description: "เรียนรู้ Vim อย่างรวดเร็ว"
    },
    {
      title: "Learn Vimscript the Hard Way",
      author: "Steve Losh",
      description: "สำหรับการเขียนสคริปต์ Vim"
    }
  ];

  const onlineResources = [
    {
      name: "Vimcasts",
      url: "vimcasts.org",
      description: "วิดีโอสอนเทคนิคต่างๆ"
    },
    {
      name: "Vim Galore",
      url: "github.com/mhinz/vim-galore",
      description: "คู่มือที่ครอบคลุมมาก"
    },
    {
      name: "Learn by Example",
      url: "learnbyexample.github.io/vim_reference/",
      description: "มีทั้งหนังสือและบทความ"
    },
    {
      name: "Official Vim documentation",
      url: "vimhelp.org",
      description: "เอกสารอย่างเป็นทางการ"
    }
  ];

  const interactivePlatforms = [
    {
      name: "OpenVim",
      url: "www.openvim.com",
      description: "เรียนรู้ Vim แบบอินเทอร์แอคทีฟ"
    },
    {
      name: "Vim Adventures",
      url: "vim-adventures.com",
      description: "เรียนรู้ Vim ผ่านเกม"
    }
  ];

  const cheatSheets = [
    {
      name: "Vim Cheat Sheet",
      url: "vim.rtorr.com",
      description: "สรุปคำสั่งที่สำคัญ"
    },
    {
      name: "Devhints Vim Cheatsheet",
      url: "devhints.io/vim",
      description: "คำสั่งและเทคนิคต่างๆ"
    }
  ];

  const communities = [
    {
      name: "r/vim",
      url: "reddit.com/r/vim",
      description: "ชุมชนผู้ใช้ Vim บน Reddit"
    },
    {
      name: "Vi and Vim Stack Exchange",
      url: "vi.stackexchange.com",
      description: "เว็บไซต์ถาม-ตอบปัญหา"
    },
    {
      name: "#vim IRC channel",
      url: "",
      description: "สำหรับการสนทนาแบบเรียลไทม์"
    }
  ];

  const learningPrinciples = [
    {
      title: "Vim คือการเดินทาง",
      description: "การเรียนรู้ Vim ไม่ใช่สิ่งที่สามารถทำได้สำเร็จในชั่วข้ามคืน แต่เป็นการลงทุนที่ให้ผลตอบแทนในระยะยาว"
    },
    {
      title: "เริ่มต้นจากพื้นฐาน",
      description: "ทำความเข้าใจโหมดต่างๆ และคำสั่งพื้นฐานให้แน่นก่อน จากนั้นจึงค่อยๆ เพิ่มเติมคำสั่งและคุณสมบัติที่ซับซ้อนขึ้น"
    },
    {
      title: "เข้าใจ \"ภาษา Vim\"",
      description: "มองว่าคำสั่งต่างๆ ของ Vim เป็นเหมือนคำศัพท์และไวยากรณ์ของภาษา การผสมผสานคำสั่ง (composability) เป็นหัวใจสำคัญ"
    },
    {
      title: "สร้างความจำของกล้ามเนื้อ",
      description: "การฝึกฝนใช้คำสั่งต่างๆ เป็นประจำจะช่วยให้สามารถใช้งานได้อย่างเป็นธรรมชาติและรวดเร็วโดยไม่ต้องคิด"
    },
    {
      title: "อย่าพยายามเรียนรู้ทุกอย่างพร้อมกัน",
      description: "Vim มีคุณสมบัติมากมาย ให้เลือกเรียนรู้สิ่งที่เกี่ยวข้องกับงานที่ทำอยู่ก่อน แล้วค่อยขยายขอบเขตความรู้ไปเรื่อยๆ"
    }
  ];
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            🎓 เส้นทางสู่ความเชี่ยวชาญ Vim: การเรียนรู้และอื่นๆ
          </CardTitle>
          <CardDescription className="text-blue-200">
            การเรียนรู้ Vim เป็นการเดินทางที่ต้องใช้เวลาและความมุ่งมั่น แต่ผลตอบแทนที่ได้คือประสิทธิภาพในการแก้ไขข้อความที่เพิ่มขึ้นอย่างมาก
          </CardDescription>
        </CardHeader>
      </Card>

      {/* 6.1 Help System */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            6.1 การใช้ระบบช่วยเหลือในตัวของ Vim อย่างมีประสิทธิภาพ
          </CardTitle>
          <CardDescription className="text-blue-200">
            Vim มาพร้อมกับระบบเอกสารช่วยเหลือที่ครอบคลุมและละเอียดอย่างยิ่ง เป็นแหล่งข้อมูลอันล้ำค่าสำหรับการเรียนรู้และแก้ไขปัญหา
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Basic Help Commands */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-4">คำสั่งพื้นฐาน</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 px-4 text-white/80">คำสั่ง</th>
                      <th className="text-left py-2 px-4 text-white/80">รูปแบบสั้น</th>
                      <th className="text-left py-2 px-4 text-white/80">คำอธิบาย</th>
                    </tr>
                  </thead>
                  <tbody>
                    {helpCommands.map((cmd, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                        <td className="py-2 px-4">
                          <code className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded font-mono">
                            {cmd.command}
                          </code>
                        </td>
                        <td className="py-2 px-4">
                          {cmd.shortcut && (
                            <code className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded font-mono">
                              {cmd.shortcut}
                            </code>
                          )}
                        </td>
                        <td className="py-2 px-4 text-white/80">{cmd.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Help Examples */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-green-300 mb-3">ตัวอย่างการใช้งาน</h5>
                <div className="space-y-2">
                  {helpExamples.map((example, index) => (
                    <div key={index} className="bg-green-900/20 rounded-lg p-3">
                      <code className="text-green-300 font-mono block mb-1">
                        {example.command}
                      </code>
                      <p className="text-green-100 text-sm">{example.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-purple-300 mb-3">การนำทางในระบบช่วยเหลือ</h5>
                <div className="space-y-2">
                  {navigationCommands.map((nav, index) => (
                    <div key={index} className="bg-purple-900/20 rounded-lg p-3">
                      <code className="text-purple-300 font-mono block mb-1">
                        {nav.command}
                      </code>
                      <p className="text-purple-100 text-sm">{nav.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-400/30">
              <h5 className="font-semibold text-indigo-300 mb-3">Quickfix List Commands</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {quickfixCommands.map((cmd, index) => (
                  <div key={index} className="bg-indigo-800/20 rounded p-2">
                    <code className="text-indigo-300 font-mono block">
                      {cmd.command}
                    </code>
                    <p className="text-indigo-100 text-xs mt-1">{cmd.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 6.2 Vimtutor */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-green-400" />
            6.2 vimtutor: จุดเริ่มต้นแบบอินเทอร์แอคทีฟ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-6 border border-green-400/30">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-300 mb-2">วิธีการเข้าถึง</h4>
                  <code className="bg-green-800/30 text-green-200 px-3 py-1 rounded">
                    vimtutor
                  </code>
                  <p className="text-green-100 text-sm mt-2">
                    พิมพ์คำสั่งนี้ใน command line ของระบบ
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-green-300 mb-2">คุณสมบัติ</h5>
                  <ul className="text-green-100 text-sm space-y-1">
                    <li>• บทเรียนแบบอินเทอร์แอคทีฟ 30 นาที</li>
                    <li>• ครอบคลุมพื้นฐานการนำทาง</li>
                    <li>• การแก้ไขข้อความและโหมดต่างๆ</li>
                    <li>• ติดตั้งมาพร้อมกับ Vim</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-emerald-300 mb-2">เหมาะสำหรับ</h5>
                  <ul className="text-emerald-100 text-sm space-y-1">
                    <li>• ผู้ใช้ใหม่ทุกคน</li>
                    <li>• การทบทวนพื้นฐาน</li>
                    <li>• จุดเริ่มต้นที่แนะนำ</li>
                    <li>• การฝึกฝนเป็นประจำ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 6.3 Learning Principles */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-orange-400" />
            6.3 ความสำคัญของการฝึกฝนและการเรียนรู้แบบค่อยเป็นค่อยไป
          </CardTitle>
          <CardDescription className="text-blue-200">
            การเชี่ยวชาญ Vim ต้องอาศัยการฝึกฝนอย่างสม่ำเสมอและการเรียนรู้อย่างค่อยเป็นค่อยไป
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {learningPrinciples.map((principle, index) => (
              <div key={index} className="bg-orange-900/20 rounded-lg p-4 border border-orange-400/30">
                <h5 className="font-semibold text-orange-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {principle.title}
                </h5>
                <p className="text-orange-100 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 6.4 Additional Resources */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            6.4 แหล่งข้อมูลเพิ่มเติมที่คัดสรรมาเพื่อการพัฒนาอย่างต่อเนื่อง
          </CardTitle>
          <CardDescription className="text-blue-200">
            ชุมชนผู้ใช้ Vim และทรัพยากรจากภายนอกที่ช่วยในการพัฒนาอย่างต่อเนื่อง
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Books */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                หนังสือแนะนำ
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {books.map((book, index) => (
                  <div key={index} className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-400/30">
                    <h5 className="font-semibold text-cyan-300 mb-2">{book.title}</h5>
                    <p className="text-cyan-200 text-sm mb-2">โดย {book.author}</p>
                    <p className="text-cyan-100 text-sm">{book.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Online Resources */}
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                บทช่วยสอนและคู่มือออนไลน์
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {onlineResources.map((resource, index) => (
                  <div key={index} className="bg-green-900/20 rounded-lg p-4 border border-green-400/30">
                    <h5 className="font-semibold text-green-300 mb-1">{resource.name}</h5>
                    <code className="text-green-200 text-sm bg-green-800/20 px-2 py-1 rounded">
                      {resource.url}
                    </code>
                    <p className="text-green-100 text-sm mt-2">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Platforms */}
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                แพลตฟอร์มการเรียนรู้แบบอินเทอร์แอคทีฟ
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interactivePlatforms.map((platform, index) => (
                  <div key={index} className="bg-purple-900/20 rounded-lg p-4 border border-purple-400/30">
                    <h5 className="font-semibold text-purple-300 mb-1">{platform.name}</h5>
                    <code className="text-purple-200 text-sm bg-purple-800/20 px-2 py-1 rounded">
                      {platform.url}
                    </code>
                    <p className="text-purple-100 text-sm mt-2">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cheat Sheets */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Cheat Sheets
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cheatSheets.map((sheet, index) => (
                  <div key={index} className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-400/30">
                    <h5 className="font-semibold text-yellow-300 mb-1">{sheet.name}</h5>
                    <code className="text-yellow-200 text-sm bg-yellow-800/20 px-2 py-1 rounded">
                      {sheet.url}
                    </code>
                    <p className="text-yellow-100 text-sm mt-2">{sheet.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Communities */}
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                ชุมชนออนไลน์
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {communities.map((community, index) => (
                  <div key={index} className="bg-blue-900/20 rounded-lg p-4 border border-blue-400/30">
                    <h5 className="font-semibold text-blue-300 mb-1">{community.name}</h5>
                    {community.url && (
                      <code className="text-blue-200 text-sm bg-blue-800/20 px-2 py-1 rounded block mb-2">
                        {community.url}
                      </code>
                    )}
                    <p className="text-blue-100 text-sm">{community.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-400/30">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold text-indigo-300 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5" />
            💡 สรุปเส้นทางการเรียนรู้
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-indigo-300 mb-3">เริ่มต้น</h5>
              <ul className="text-indigo-100 text-sm space-y-2">
                <li>• เริ่มด้วย <code className="bg-indigo-800/30 px-1 rounded">vimtutor</code></li>
                <li>• ใช้ <code className="bg-indigo-800/30 px-1 rounded">:help</code> เป็นประจำ</li>
                <li>• ฝึกคำสั่งพื้นฐานให้คล่อง</li>
                <li>• อดทนและฝึกฝนสม่ำเสมอ</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-purple-300 mb-3">พัฒนาต่อ</h5>
              <ul className="text-purple-100 text-sm space-y-2">
                <li>• เรียนรู้แบบค่อยเป็นค่อยไป</li>
                <li>• เข้าร่วมชุมชน Vim</li>
                <li>• อ่านหนังสือและบทความ</li>
                <li>• แชร์ความรู้กับคนอื่น</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
