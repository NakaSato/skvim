import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MultipleFilesAndViews,
  MarksAndBookmarks,
  MacrosAndAutomation,
  TextObjects,
  TextFolding,
} from "./advanced";
import { Zap, BookOpen, Target, Minimize2, Command } from "lucide-react";

export const AdvancedFeaturesTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            🚀 การใช้ประโยชน์จากคุณสมบัติขั้นสูงของ VIM
          </CardTitle>
          <CardDescription className="text-blue-200">
            เรียนรู้เทคนิคขั้นสูงที่จะเปลี่ยนการทำงานของคุณไปอย่างสิ้นเชิง
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-4 border border-yellow-400/30">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">
              💡 ทำไมต้องเรียนรู้ขั้นสูง?
            </h3>
            <ul className="text-yellow-100 text-sm space-y-1">
              <li>• เพิ่มประสิทธิภาพในการแก้ไขโค้ดได้อย่างมาก</li>
              <li>• จัดการไฟล์หลายๆ ไฟล์พร้อมกันได้อย่างง่ายดาย</li>
              <li>• ทำงานซ้ำๆ ได้อัตโนมัติด้วย Macros</li>
              <li>• เข้าใจโครงสร้างโค้ดได้ดีขึ้นด้วย Text Objects</li>
              <li>• จัดการโค้ดใหญ่ๆ ได้สะดวกด้วย Folding</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Menu */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            📖 เนื้อหาในหน้านี้
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg p-4 border border-blue-400/30">
              <div className="flex items-center gap-2 mb-2">
                <Command className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-blue-300">
                  Multiple Files & Views
                </h4>
              </div>
              <p className="text-blue-100 text-sm">
                Buffers, Windows, และ Tabs
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg p-4 border border-green-400/30">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold text-green-300">
                  Marks & Bookmarks
                </h4>
              </div>
              <p className="text-green-100 text-sm">การจำตำแหน่งและนำทาง</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-lg p-4 border border-purple-400/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold text-purple-300">
                  Macros & Automation
                </h4>
              </div>
              <p className="text-purple-100 text-sm">การทำงานซ้ำอัตโนมัติ</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg p-4 border border-orange-400/30">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-orange-400" />
                <h4 className="font-semibold text-orange-300">Text Objects</h4>
              </div>
              <p className="text-orange-100 text-sm">
                การทำงานกับข้อความอย่างฉลาด
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg p-4 border border-pink-400/30">
              <div className="flex items-center gap-2 mb-2">
                <Minimize2 className="w-5 h-5 text-pink-400" />
                <h4 className="font-semibold text-pink-300">Text Folding</h4>
              </div>
              <p className="text-pink-100 text-sm">
                การพับและจัดการโครงสร้างโค้ด
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg p-4 border border-cyan-400/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h4 className="font-semibold text-cyan-300">เทคนิคขั้นสูง</h4>
              </div>
              <p className="text-cyan-100 text-sm">
                การผสมผสานทุกอย่างเข้าด้วยกัน
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Multiple Files and Views Section */}
      <section id="multiple-files">
        <MultipleFilesAndViews />
      </section>

      {/* Marks and Bookmarks Section */}
      <section id="marks-bookmarks">
        <MarksAndBookmarks />
      </section>

      {/* Macros and Automation Section */}
      <section id="macros-automation">
        <MacrosAndAutomation />
      </section>

      {/* Text Objects Section */}
      <section id="text-objects">
        <TextObjects />
      </section>

      {/* Text Folding Section */}
      <section id="text-folding">
        <TextFolding />
      </section>

      {/* Summary and Next Steps */}
      <Card className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-400/30">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-indigo-300 mb-4 flex items-center gap-2">
            🎯 สรุปและขั้นตอนต่อไป
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-indigo-300 mb-3">
                🚀 ทักษะที่ควรฝึกก่อน
              </h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-indigo-100 text-sm">
                    Text Objects - เริ่มจาก diw, ciw, da&quot;
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-indigo-100 text-sm">
                    Buffers - :ls, :b, Ctrl-^
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-indigo-100 text-sm">
                    Marks - ma, 'a, `a
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-indigo-100 text-sm">
                    Basic Folding - zf, za, zo, zc
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-indigo-100 text-sm">
                    Simple Macros - qq...q, @q
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-purple-300 mb-3">
                🎓 เส้นทางการเรียนรู้
              </h5>
              <div className="space-y-3">
                <div>
                  <h6 className="font-semibold text-purple-300 text-sm">
                    สัปดาห์ที่ 1-2
                  </h6>
                  <p className="text-purple-100 text-xs">
                    เรียนรู้ Text Objects และ Basic Navigation
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-indigo-300 text-sm">
                    สัปดาห์ที่ 3-4
                  </h6>
                  <p className="text-indigo-100 text-xs">
                    ฝึกใช้ Buffers, Windows และ Tabs
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-cyan-300 text-sm">
                    สัปดาห์ที่ 5-6
                  </h6>
                  <p className="text-cyan-100 text-xs">
                    เรียนรู้ Marks และ Macros
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-green-300 text-sm">
                    สัปดาห์ที่ 7-8
                  </h6>
                  <p className="text-green-100 text-xs">
                    เชี่ยวชาญ Folding และการผสมผสานทุกอย่าง
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-indigo-800/20 rounded-lg p-4">
            <h6 className="font-semibold text-indigo-300 mb-2">
              🔥 ความลับของ VIM Master
            </h6>
            <p className="text-indigo-100 text-sm">
              ไม่จำเป็นต้องเรียนรู้ทุกคำสั่ง
              แต่ให้เลือกเรียนรู้สิ่งที่ใช้บ่อยและฝึกจนชำนาญ การเป็น VIM Master
              ไม่ได้อยู่ที่การรู้คำสั่งเยอะ
              แต่อยู่ที่การใช้คำสั่งพื้นฐานได้อย่างคล่องแคล่วและเร็ว
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
