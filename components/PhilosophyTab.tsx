import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export function PhilosophyTab() {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          ปรัชญา VIM: ความคิดพื้นฐาน
        </CardTitle>
        <CardDescription className="text-blue-200">
          ทำความเข้าใจแนวคิดและปรัชญาที่อยู่เบื้องหลัง VIM
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              💡 VIM คืออะไร?
            </h3>
            <p className="text-blue-100 leading-relaxed">
              VIM (Vi Improved) เป็น text editor ที่มีประสิทธิภาพสูง
              ออกแบบมาเพื่อให้ผู้ใช้สามารถแก้ไขข้อความได้อย่างรวดเร็วและมีประสิทธิภาพ
              โดยไม่ต้องใช้เมาส์
            </p>

            <h3 className="text-xl font-semibold text-green-300 mt-6 mb-3">
              🎯 จุดประสงค์หลัก
            </h3>
            <ul className="text-blue-100 space-y-2">
              <li>
                • <span className="text-cyan-400">ความเร็ว:</span>{" "}
                แก้ไขข้อความได้เร็วกว่า text editor ทั่วไป
              </li>
              <li>
                • <span className="text-cyan-400">ประสิทธิภาพ:</span>{" "}
                ใช้งานได้บนระบบใดๆ โดยใช้ทรัพยากรน้อย
              </li>
              <li>
                • <span className="text-cyan-400">ความยืดหยุ่น:</span>{" "}
                ปรับแต่งได้ตามความต้องการ
              </li>
              <li>
                • <span className="text-cyan-400">การเรียนรู้:</span> ยิ่งใช้นาน
                ยิ่งใช้เก่ง
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              ⚡ ทำไมต้อง VIM?
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-400/20">
                <h4 className="font-semibold text-purple-300 mb-1">
                  Modal Editing
                </h4>
                <p className="text-sm text-blue-100">
                  แยกโหมดการทำงาน ทำให้แต่ละโหมดมีความเฉพาะเจาะจง
                </p>
              </div>
              <div className="p-3 bg-cyan-900/20 rounded-lg border border-cyan-400/20">
                <h4 className="font-semibold text-cyan-300 mb-1">
                  Composability
                </h4>
                <p className="text-sm text-blue-100">
                  คำสั่งสามารถผสมผสานกันได้ เช่น d2w = ลบ 2 คำ
                </p>
              </div>
              <div className="p-3 bg-green-900/20 rounded-lg border border-green-400/20">
                <h4 className="font-semibold text-green-300 mb-1">
                  Repeatability
                </h4>
                <p className="text-sm text-blue-100">
                  ทำงานซ้ำได้ง่าย ด้วยคำสั่ง . (dot command)
                </p>
              </div>
              <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-400/20">
                <h4 className="font-semibold text-yellow-300 mb-1">Ubiquity</h4>
                <p className="text-sm text-blue-100">
                  มีอยู่ในระบบ Unix/Linux เกือบทุกเครื่อง
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-400/30">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            🧠 หลักการคิดแบบ VIM
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">🎪</div>
              <h4 className="font-semibold text-cyan-300 mb-2">
                Think in Motions
              </h4>
              <p className="text-sm text-blue-100">
                คิดในรูปแบบการเคลื่อนไหว เช่น "ไปท้ายคำ" "ลงบรรทัด"
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔧</div>
              <h4 className="font-semibold text-green-300 mb-2">
                Build Commands
              </h4>
              <p className="text-sm text-blue-100">
                สร้างคำสั่งจากชิ้นส่วนเล็กๆ เช่น operator + motion
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-semibold text-purple-300 mb-2">
                Repeat & Undo
              </h4>
              <p className="text-sm text-blue-100">
                ทำซ้ำสิ่งที่ดี undo สิ่งที่ผิด
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
