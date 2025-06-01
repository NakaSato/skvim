import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Edit, Eye, Terminal, RefreshCw } from "lucide-react";

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
        {/* Section: Main Modes */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-cyan-300 mb-4">
            2.1. โหมดหลักใน Vim และการสลับโหมด
          </h3>

          {/* Normal Mode */}
          <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-green-400" />
              <h4 className="text-xl font-bold text-green-300">
                Normal Mode (โหมดปกติ หรือ Command Mode)
              </h4>
            </div>
            <div className="space-y-3 text-gray-200">
              <p>
                <strong className="text-green-300">วัตถุประสงค์:</strong>{" "}
                เป็นโหมดเริ่มต้นเมื่อเปิด Vim ใช้สำหรับการนำทาง (navigation)
                ในไฟล์ และการเรียกใช้คำสั่งต่างๆ เช่น การลบ (delete) คัดลอก
                (copy) วาง (paste) ยกเลิก (undo) ทำซ้ำ (redo)
              </p>
              <p>
                <strong className="text-green-300">การเข้าสู่โหมด:</strong> Vim
                จะเริ่มต้นในโหมดนี้โดยอัตโนมัติ หากอยู่ในโหมดอื่น ให้กดปุ่ม{" "}
                <kbd className="px-2 py-1 bg-gray-700 rounded text-sm">Esc</kbd>{" "}
                เพื่อกลับสู่ Normal Mode
              </p>
              <p>
                <strong className="text-green-300">การระบุโหมด:</strong>{" "}
                เคอร์เซอร์มักจะเป็นรูปสี่เหลี่ยมทึบ (blinking rectangular block
                cursor) เช่น █
              </p>
            </div>
          </div>

          {/* Insert Mode */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Edit className="h-6 w-6 text-blue-400" />
              <h4 className="text-xl font-bold text-blue-300">
                Insert Mode (โหมดแทรก)
              </h4>
            </div>
            <div className="space-y-3 text-gray-200">
              <p>
                <strong className="text-blue-300">วัตถุประสงค์:</strong>{" "}
                ใช้สำหรับพิมพ์หรือป้อนข้อความเข้าไปในไฟล์
                เหมือนกับโปรแกรมแก้ไขข้อความทั่วไป
              </p>
              <div>
                <p className="font-semibold text-blue-300 mb-2">
                  การเข้าสู่โหมด (จาก Normal Mode):
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">i</kbd>{" "}
                    แทรกข้อความก่อนตำแหน่งเคอร์เซอร์ปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">I</kbd>{" "}
                    แทรกข้อความที่จุดเริ่มต้นของบรรทัดปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">a</kbd>{" "}
                    แทรกข้อความหลังตำแหน่งเคอร์เซอร์ปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">A</kbd>{" "}
                    แทรกข้อความที่จุดสิ้นสุดของบรรทัดปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">o</kbd>{" "}
                    เปิดบรรทัดใหม่ด้านล่างบรรทัดปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">O</kbd>{" "}
                    เปิดบรรทัดใหม่ด้านบนบรรทัดปัจจุบัน
                  </div>
                </div>
              </div>
              <p>
                <strong className="text-blue-300">การออกจากโหมด:</strong> กด{" "}
                <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd>{" "}
                เพื่อกลับสู่ Normal Mode
              </p>
              <p>
                <strong className="text-blue-300">การระบุโหมด:</strong>{" "}
                เคอร์เซอร์จะเป็นเส้นกะพริบ | และมักจะมีข้อความ -- INSERT --
                แสดงที่มุมล่างซ้าย
              </p>
            </div>
          </div>

          {/* Visual Mode */}
          <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-purple-400" />
              <h4 className="text-xl font-bold text-purple-300">
                Visual Mode (โหมดวิชวล)
              </h4>
            </div>
            <div className="space-y-3 text-gray-200">
              <p>
                <strong className="text-purple-300">วัตถุประสงค์:</strong>{" "}
                ใช้สำหรับเลือก (highlight) ส่วนของข้อความเพื่อดำเนินการเป็นกลุ่ม
                เช่น การลบ คัดลอก หรือเปลี่ยนแปลงข้อความที่เลือก
              </p>
              <div>
                <p className="font-semibold text-purple-300 mb-2">
                  การเข้าสู่โหมด (จาก Normal Mode):
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">v</kbd>{" "}
                    เข้าสู่ Visual Mode แบบเลือกทีละตัวอักษร (character-wise
                    visual mode)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">V</kbd>{" "}
                    เข้าสู่ Visual Mode แบบเลือกทีละบรรทัด (line-wise visual
                    mode)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded">Ctrl-v</kbd>{" "}
                    เข้าสู่ Visual Mode แบบเลือกเป็นบล็อกสี่เหลี่ยม (block-wise
                    visual mode)
                  </div>
                </div>
              </div>
              <p>
                <strong className="text-purple-300">การออกจากโหมด:</strong> กด{" "}
                <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd>{" "}
                เพื่อกลับสู่ Normal Mode
              </p>
              <p>
                <strong className="text-purple-300">การระบุโหมด:</strong>{" "}
                ที่มุมล่างซ้ายจะแสดงข้อความ -- VISUAL --, -- VISUAL LINE --,
                หรือ -- VISUAL BLOCK --
              </p>
            </div>
          </div>

          {/* Command-Line Mode */}
          <div className="bg-gradient-to-r from-orange-900/40 to-orange-800/20 border border-orange-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-orange-400" />
              <h4 className="text-xl font-bold text-orange-300">
                Command-Line Mode (โหมดบรรทัดคำสั่ง หรือ Ex Mode)
              </h4>
            </div>
            <div className="space-y-3 text-gray-200">
              <p>
                <strong className="text-orange-300">วัตถุประสงค์:</strong>{" "}
                ใช้สำหรับป้อนคำสั่งที่ซับซ้อนขึ้น เช่น การบันทึกไฟล์ (:w)
                การออกจาก Vim (:q) การค้นหาและแทนที่ (:s) การตั้งค่าต่างๆ (:set)
              </p>
              <p>
                <strong className="text-orange-300">การเข้าสู่โหมด:</strong> กด{" "}
                <kbd className="px-2 py-1 bg-gray-700 rounded">:</kbd> (colon)
                เคอร์เซอร์จะไปปรากฏที่บรรทัดล่างสุดของหน้าจอ
              </p>
              <p>
                <strong className="text-orange-300">การออกจากโหมด:</strong>{" "}
                หลังจากป้อนคำสั่งและกด Enter Vim จะดำเนินการตามคำสั่งและกลับสู่
                Normal Mode
              </p>
            </div>
          </div>

          {/* Replace Mode */}
          <div className="bg-gradient-to-r from-red-900/40 to-red-800/20 border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="h-6 w-6 text-red-400" />
              <h4 className="text-xl font-bold text-red-300">
                Replace Mode (โหมดแทนที่)
              </h4>
            </div>
            <div className="space-y-3 text-gray-200">
              <p>
                <strong className="text-red-300">วัตถุประสงค์:</strong> คล้ายกับ
                Insert Mode
                แต่ข้อความที่พิมพ์เข้าไปจะเขียนทับข้อความเดิมที่มีอยู่
              </p>
              <p>
                <strong className="text-red-300">การเข้าสู่โหมด:</strong> กด{" "}
                <kbd className="px-2 py-1 bg-gray-700 rounded">R</kbd>{" "}
                (ตัวพิมพ์ใหญ่) จาก Normal Mode
              </p>
              <p>
                <strong className="text-red-300">การออกจากโหมด:</strong> กด{" "}
                <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd>{" "}
                เพื่อกลับสู่ Normal Mode
              </p>
            </div>
          </div>
        </div>

        {/* Mode Switching Table */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-cyan-300">
            ตารางสรุปการสลับโหมดหลักใน Vim
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
              <thead>
                <tr className="bg-white/10">
                  <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                    จากโหมด
                  </th>
                  <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                    ไปยังโหมด
                  </th>
                  <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                    คีย์ลัด
                  </th>
                  <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                    วัตถุประสงค์
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-200 text-sm">
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Insert</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">i</kbd>
                  </td>
                  <td className="px-4 py-2">แทรกก่อนเคอร์เซอร์</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Insert</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">a</kbd>
                  </td>
                  <td className="px-4 py-2">แทรกหลังเคอร์เซอร์ (append)</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Insert</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">I</kbd>
                  </td>
                  <td className="px-4 py-2">แทรกที่จุดเริ่มต้นบรรทัด</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Insert</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">A</kbd>
                  </td>
                  <td className="px-4 py-2">แทรกที่จุดสิ้นสุดบรรทัด</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Insert</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">o</kbd>
                  </td>
                  <td className="px-4 py-2">เปิดบรรทัดใหม่ด้านล่าง</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Insert</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">O</kbd>
                  </td>
                  <td className="px-4 py-2">เปิดบรรทัดใหม่ด้านบน</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Insert</td>
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">Esc</kbd>
                  </td>
                  <td className="px-4 py-2">กลับสู่ Normal Mode</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Visual</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">v</kbd>
                  </td>
                  <td className="px-4 py-2">เลือกแบบตัวอักษร</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Visual</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">V</kbd>
                  </td>
                  <td className="px-4 py-2">เลือกแบบบรรทัด</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Visual</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      Ctrl-v
                    </kbd>
                  </td>
                  <td className="px-4 py-2">เลือกแบบบล็อก</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Command-Line</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">:</kbd>
                  </td>
                  <td className="px-4 py-2">เข้าสู่โหมดบรรทัดคำสั่ง</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Normal</td>
                  <td className="px-4 py-2">Replace</td>
                  <td className="px-4 py-2">
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">R</kbd>
                  </td>
                  <td className="px-4 py-2">เข้าสู่โหมดแทนที่</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mode Identification Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-cyan-300">
            2.2. การระบุโหมดปัจจุบัน
          </h3>
          <div className="bg-gradient-to-r from-indigo-900/40 to-indigo-800/20 border border-indigo-500/30 rounded-lg p-6">
            <p className="text-gray-200 mb-4">
              Vim มักจะแสดงสถานะของโหมดปัจจุบันที่มุมล่างซ้ายของหน้าจอ นอกจากนี้
              ลักษณะของเคอร์เซอร์ยังช่วยบ่งบอกโหมดได้ด้วย:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-300 font-semibold">
                    Normal Mode:
                  </span>
                  <span className="text-gray-200">
                    เคอร์เซอร์เป็นบล็อกสี่เหลี่ยมกะพริบ (█)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-300 font-semibold">
                    Insert Mode:
                  </span>
                  <span className="text-gray-200">
                    เคอร์เซอร์เป็นเส้นแนวตั้งกะพริบ (|) และมีข้อความ -- INSERT
                    --
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-purple-300 font-semibold">
                    Visual Mode:
                  </span>
                  <span className="text-gray-200">
                    มีข้อความ -- VISUAL -- แสดงอยู่
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-300 font-semibold">
                    Command-Line Mode:
                  </span>
                  <span className="text-gray-200">
                    เคอร์เซอร์อยู่ที่บรรทัดล่างสุดของหน้าจอ
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded">
              <p className="text-yellow-200 text-sm">
                💡 <strong>เคล็ดลับ:</strong>{" "}
                การตระหนักอยู่เสมอว่ากำลังอยู่ในโหมดใดเป็นสิ่งสำคัญอย่างยิ่งในการใช้งาน
                Vim เพื่อหลีกเลี่ยงการป้อนคำสั่งผิดพลาด
              </p>
            </div>
          </div>
        </div>

        {/* File Management Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-cyan-300">
            3. คำสั่งพื้นฐานและการจัดการไฟล์ใน Vim
          </h3>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-yellow-300">
              3.1. การจัดการไฟล์เบื้องต้น
            </h4>

            {/* Opening Files */}
            <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 border border-green-500/30 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-green-300 mb-3">
                การเปิดหรือสร้างไฟล์
              </h5>
              <div className="space-y-3 text-gray-200 text-sm">
                <div>
                  <strong className="text-green-300">จาก Terminal:</strong>
                  <div className="mt-1 p-2 bg-black/30 rounded font-mono">
                    $ vim filename
                  </div>
                  <p className="mt-1">
                    หากไฟล์ filename มีอยู่ Vim จะเปิดไฟล์นั้นขึ้นมา หากยังไม่มี
                    Vim จะสร้างไฟล์ใหม่ชื่อนั้น
                  </p>
                </div>
                <div>
                  <strong className="text-green-300">ภายใน Vim:</strong>
                  <div className="mt-1 p-2 bg-black/30 rounded font-mono">
                    :e filename
                  </div>
                  <p className="mt-1">
                    ใช้คำสั่งใน Command-Line Mode เพื่อเปิดไฟล์อื่น
                  </p>
                </div>
              </div>
            </div>

            {/* Saving Files */}
            <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-blue-300 mb-3">
                การบันทึกไฟล์ (Write)
              </h5>
              <div className="space-y-3 text-gray-200 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="p-2 bg-black/30 rounded font-mono mb-1">
                      :w
                    </div>
                    <p>บันทึกการเปลี่ยนแปลงลงในไฟล์ปัจจุบัน</p>
                  </div>
                  <div>
                    <div className="p-2 bg-black/30 rounded font-mono mb-1">
                      :w new_filename
                    </div>
                    <p>บันทึกเนื้อหาปัจจุบันลงในไฟล์ใหม่</p>
                  </div>
                  <div>
                    <div className="p-2 bg-black/30 rounded font-mono mb-1">
                      :sav filename
                    </div>
                    <p>บันทึกไฟล์ปัจจุบันเป็นชื่อใหม่ (save as)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quitting Vim */}
            <div className="bg-gradient-to-r from-red-900/40 to-red-800/20 border border-red-500/30 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-red-300 mb-3">
                การออกจาก Vim (Quit)
              </h5>
              <div className="space-y-3 text-gray-200 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="p-2 bg-black/30 rounded font-mono mb-1">
                      :q
                    </div>
                    <p>ออกจาก Vim (ถ้าไม่มีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก)</p>
                  </div>
                  <div>
                    <div className="p-2 bg-black/30 rounded font-mono mb-1">
                      :q!
                    </div>
                    <p>ออกจาก Vim โดยไม่บันทึกการเปลี่ยนแปลงล่าสุด</p>
                  </div>
                  <div>
                    <div className="p-2 bg-black/30 rounded font-mono mb-1">
                      :wq
                    </div>
                    <p>บันทึกการเปลี่ยนแปลงแล้วออกจาก Vim</p>
                  </div>
                  <div>
                    <div className="p-2 bg-black/30 rounded font-mono mb-1">
                      :x หรือ ZZ
                    </div>
                    <p>บันทึกหากมีการเปลี่ยนแปลงแล้วจึงออก</p>
                  </div>
                  <div>
                    <div className="p-2 bg-black/30 rounded font-mono mb-1">
                      :wqa
                    </div>
                    <p>บันทึกทุกไฟล์ที่เปิดอยู่แล้วออกจาก Vim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Commands Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-cyan-300">
            4. คำสั่งนำทางขั้นสูงใน Normal Mode
          </h3>

          {/* Screen Scrolling */}
          <div className="bg-gradient-to-r from-indigo-900/40 to-indigo-800/20 border border-indigo-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-indigo-300 mb-3">
              การเลื่อนหน้าจอ (Screen Scrolling)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200 text-sm">
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-f
                  </kbd>
                  เลื่อนหน้าจอลงหนึ่งหน้า (forward, cursor to first line)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-b
                  </kbd>
                  เลื่อนหน้าจอขึ้นหนึ่งหน้า (backward, cursor to last line)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-d
                  </kbd>
                  เลื่อนเคอร์เซอร์และหน้าจอลงครึ่งหน้า (down)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-u
                  </kbd>
                  เลื่อนเคอร์เซอร์และหน้าจอขึ้นครึ่งหน้า (up)
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-e
                  </kbd>
                  เลื่อนหน้าจอลงหนึ่งบรรทัด (โดยไม่ย้ายเคอร์เซอร์)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-y
                  </kbd>
                  เลื่อนหน้าจอขึ้นหนึ่งบรรทัด (โดยไม่ย้ายเคอร์เซอร์)
                </div>
              </div>
            </div>
          </div>

          {/* Screen Position Navigation */}
          <div className="bg-gradient-to-r from-teal-900/40 to-teal-800/20 border border-teal-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-teal-300 mb-3">
              การนำทางตามตำแหน่งหน้าจอ
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200 text-sm">
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">H</kbd>
                  เลื่อนเคอร์เซอร์ไปบรรทัดบนสุดของหน้าจอที่มองเห็น (High)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">M</kbd>
                  เลื่อนเคอร์เซอร์ไปบรรทัดกลางของหน้าจอที่มองเห็น (Middle)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">L</kbd>
                  เลื่อนเคอร์เซอร์ไปบรรทัดล่างสุดของหน้าจอที่มองเห็น (Low)
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">zt</kbd>
                  เลื่อนหน้าจอให้บรรทัดปัจจุบันอยู่บนสุด (top)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">zz</kbd>
                  เลื่อนหน้าจอให้บรรทัดปัจจุบันอยู่ตรงกลาง (center)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">zb</kbd>
                  เลื่อนหน้าจอให้บรรทัดปัจจุบันอยู่ล่างสุด (bottom)
                </div>
              </div>
            </div>
          </div>

          {/* Character Search in Line */}
          <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/20 border border-amber-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-amber-300 mb-3">
              การค้นหาตัวอักษรในบรรทัดปัจจุบัน
            </h4>
            <div className="space-y-3 text-gray-200 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      f{"{char}"}
                    </kbd>
                    ค้นหาตัวอักษร {"{char}"} ไปข้างหน้าในบรรทัดปัจจุบัน
                    และย้ายเคอร์เซอร์ไปที่ตัวอักษรนั้น
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      F{"{char}"}
                    </kbd>
                    ค้นหาตัวอักษร {"{char}"} ไปข้างหลังในบรรทัดปัจจุบัน
                    และย้ายเคอร์เซอร์ไปที่ตัวอักษรนั้น
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      t{"{char}"}
                    </kbd>
                    ค้นหาตัวอักษร {"{char}"} ไปข้างหน้า และย้ายเคอร์เซอร์ไป{" "}
                    <strong>ก่อนหน้า</strong> ตัวอักษรนั้น (till)
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      T{"{char}"}
                    </kbd>
                    ค้นหาตัวอักษร {"{char}"} ไปข้างหลัง และย้ายเคอร์เซอร์ไป{" "}
                    <strong>หลัง</strong> ตัวอักษรนั้น
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">;</kbd>
                    ทำซ้ำการค้นหา f, F, t, หรือ T ครั้งล่าสุดในทิศทางเดิม
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">,</kbd>
                    ทำซ้ำการค้นหา f, F, t, หรือ T ครั้งล่าสุดในทิศทางตรงกันข้าม
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jump Navigation */}
          <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-emerald-300 mb-3">
              การกระโดด (Jumps)
            </h4>
            <div className="space-y-3 text-gray-200 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      Ctrl-o
                    </kbd>
                    กระโดดกลับไปยังตำแหน่งก่อนหน้าใน jump list (older position)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      Ctrl-i
                    </kbd>
                    กระโดดไปยังตำแหน่งถัดไปใน jump list (newer position){" "}
                    <span className="text-gray-400">
                      (มักจะทำงานเหมือนปุ่ม Tab)
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      :jumps
                    </kbd>
                    แสดง jump list
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bracket Matching */}
          <div className="bg-gradient-to-r from-violet-900/40 to-violet-800/20 border border-violet-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-violet-300 mb-3">
              การจับคู่เครื่องหมายวงเล็บ
            </h4>
            <div className="space-y-3 text-gray-200 text-sm">
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">%</kbd>
                กระโดดไปยังเครื่องหมายวงเล็บ (), {"{}"}, [] ที่คู่กัน
              </div>
              <div className="mt-2 p-3 bg-violet-900/20 border border-violet-500/20 rounded text-xs">
                <strong className="text-violet-300">เพิ่มเติม:</strong>{" "}
                สามารถตั้งค่าเพิ่มเติมสำหรับคู่เครื่องหมายอื่นๆ ได้ด้วย{" "}
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                  :h matchpairs
                </kbd>
              </div>
            </div>
          </div>

          {/* Navigation Summary Table */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-300">
              ตารางสรุปคำสั่งนำทางพื้นฐานใน Normal Mode
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      หมวดหมู่
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      คำสั่ง
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      การทำงาน
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm">
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">พื้นฐาน</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        h, j, k, l
                      </kbd>
                    </td>
                    <td className="px-4 py-2">ซ้าย, ลง, ขึ้น, ขวา</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ภายในบรรทัด</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        0, ^, $
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      ต้นบรรทัด, ตัวอักษรแรกที่ไม่ใช่ช่องว่าง, ท้ายบรรทัด
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ระหว่างคำ</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        w, b, e
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      ต้นคำถัดไป, ต้นคำก่อนหน้า, ท้ายคำ
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ไปยังบรรทัด</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        gg, G, [N]G, :[N]
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      บรรทัดแรก, บรรทัดสุดท้าย, บรรทัดที่ N
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">เลื่อนหน้าจอ</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        Ctrl-f, Ctrl-b, Ctrl-d, Ctrl-u
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      ลงหนึ่งหน้า, ขึ้นหนึ่งหน้า, ลงครึ่งหน้า, ขึ้นครึ่งหน้า
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ค้นหาตัวอักษร</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        f{"{char}"}, F{"{char}"}, t{"{char}"}, T{"{char}"}
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      ค้นหา {"{char}"} ไปข้างหน้า/หลัง, ไปยังก่อน/หลัง{" "}
                      {"{char}"}
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">จับคู่เครื่องหมาย</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">%</kbd>
                    </td>
                    <td className="px-4 py-2">
                      กระโดดไปยังวงเล็บ (), {"{}"}, [] ที่คู่กัน
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Text Editing Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-cyan-300">
            3.3. การแก้ไขข้อความ (Editing - ส่วนใหญ่ใน Normal Mode)
          </h3>

          <div className="bg-gradient-to-r from-slate-900/40 to-slate-800/20 border border-slate-500/30 rounded-lg p-6">
            <p className="text-gray-200 mb-4">
              Vim มีชุดคำสั่งที่มีประสิทธิภาพสำหรับการแก้ไขข้อความ
              ซึ่งหลายคำสั่งสามารถใช้ร่วมกับ "motions" (คำสั่งการเคลื่อนที่)
              เพื่อระบุขอบเขตการทำงาน
            </p>
          </div>

          {/* Delete Commands */}
          <div className="bg-gradient-to-r from-red-900/40 to-red-800/20 border border-red-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">
              การลบข้อความ (Delete/Cut)
            </h4>
            <div className="space-y-3 text-gray-200 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">x</kbd>
                    ลบตัวอักษรใต้เคอร์เซอร์ (เหมือนปุ่ม Delete)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">Nx</kbd>
                    ลบ N ตัวอักษรใต้เคอร์เซอร์และถัดไป (เช่น 3x ลบ 3 ตัวอักษร)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">X</kbd>
                    ลบตัวอักษรก่อนหน้าเคอร์เซอร์ (เหมือนปุ่ม Backspace)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">dw</kbd>
                    ลบตั้งแต่เคอร์เซอร์จนถึงต้นคำถัดไป (delete word)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      diw
                    </kbd>
                    ลบคำปัจจุบันที่เคอร์เซอร์อยู่ (delete inner word)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      daw
                    </kbd>
                    ลบคำปัจจุบันและช่องว่างตามหลัง (delete a word)
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      d$ หรือ D
                    </kbd>
                    ลบตั้งแต่เคอร์เซอร์จนถึงท้ายบรรทัด
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">d0</kbd>
                    ลบตั้งแต่เคอร์เซอร์จนถึงต้นบรรทัด
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">d^</kbd>
                    ลบตั้งแต่เคอร์เซอร์จนถึงตัวอักษรแรกที่ไม่ใช่ช่องว่าง
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">dd</kbd>
                    ลบบรรทัดปัจจุบันทั้งบรรทัด
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      Ndd
                    </kbd>
                    ลบ N บรรทัด (เช่น 2dd ลบ 2 บรรทัด)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      dG / dgg
                    </kbd>
                    ลบถึงท้าย/ต้นไฟล์
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-900/20 border border-red-500/20 rounded text-xs">
                <strong className="text-red-300">หมายเหตุ:</strong>{" "}
                ข้อความที่ถูกลบจะถูกเก็บไว้ใน register (เหมือน clipboard)
                และสามารถนำมาวาง (paste) ได้
              </div>
            </div>
          </div>

          {/* Change Commands */}
          <div className="bg-gradient-to-r from-orange-900/40 to-orange-800/20 border border-orange-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-orange-300 mb-3">
              การเปลี่ยนแปลงข้อความ (Change)
            </h4>
            <div className="space-y-3 text-gray-200 text-sm">
              <p className="text-orange-200 mb-3">
                คำสั่ง Change จะลบข้อความที่กำหนดแล้วเข้าสู่ Insert Mode
                โดยอัตโนมัติ
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      cw หรือ ce
                    </kbd>
                    เปลี่ยนตั้งแต่เคอร์เซอร์จนถึงท้ายคำ
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      ciw
                    </kbd>
                    เปลี่ยนคำปัจจุบันที่เคอร์เซอร์อยู่ (change inner word)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      caw
                    </kbd>
                    เปลี่ยนคำปัจจุบันและช่องว่างตามหลัง
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      c$ หรือ C
                    </kbd>
                    เปลี่ยนตั้งแต่เคอร์เซอร์จนถึงท้ายบรรทัด
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      cc หรือ S
                    </kbd>
                    เปลี่ยนทั้งบรรทัดปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">s</kbd>
                    ลบตัวอักษรใต้เคอร์เซอร์แล้วเข้าสู่ Insert Mode
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Yank Commands */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">
              การคัดลอกข้อความ (Yank/Copy)
            </h4>
            <div className="space-y-3 text-gray-200 text-sm">
              <p className="text-blue-200 mb-3">
                ใน Vim การคัดลอกเรียกว่า "yank"
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">yw</kbd>
                    คัดลอกคำ (yank word)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      yiw
                    </kbd>
                    คัดลอกคำปัจจุบัน (yank inner word)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      yaw
                    </kbd>
                    คัดลอกคำปัจจุบันและช่องว่างตามหลัง
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">y$</kbd>
                    คัดลอกตั้งแต่เคอร์เซอร์จนถึงท้ายบรรทัด
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      yy หรือ Y
                    </kbd>
                    คัดลอกทั้งบรรทัดปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">yG</kbd>
                    คัดลอกตั้งแต่บรรทัดปัจจุบันจนถึงท้ายไฟล์
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paste and Other Commands */}
          <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 border border-green-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">
              การวางข้อความและคำสั่งอื่นๆ
            </h4>
            <div className="space-y-4 text-gray-200 text-sm">
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  การวางข้อความ (Paste):
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">p</kbd>{" "}
                    วางหลังเคอร์เซอร์/บรรทัดถัดไป
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">P</kbd>{" "}
                    วางก่อนเคอร์เซอร์/บรรทัดก่อนหน้า
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  การยกเลิกและทำซ้ำ:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">u</kbd>{" "}
                    ยกเลิกการกระทำล่าสุด (undo)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      Ctrl-r
                    </kbd>{" "}
                    ทำซ้ำการกระทำที่ยกเลิกไป (redo)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">U</kbd>{" "}
                    ยกเลิกการเปลี่ยนแปลงทั้งบรรทัด
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">.</kbd>{" "}
                    ทำซ้ำคำสั่งเปลี่ยนแปลงล่าสุด
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-2">
                  การแทนที่และอื่นๆ:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      r{"{char}"}
                    </kbd>{" "}
                    แทนที่ตัวอักษรใต้เคอร์เซอร์
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">~</kbd>{" "}
                    สลับตัวพิมพ์เล็ก/ใหญ่
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">xp</kbd>{" "}
                    สลับตัวอักษร 2 ตัว
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">J</kbd>{" "}
                    รวมบรรทัดปัจจุบันกับบรรทัดถัดไป
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editing Summary Table */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-300">
              ตารางสรุปคำสั่งแก้ไขข้อความทั่วไปใน Normal Mode
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      การกระทำ
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      คำสั่งหลัก
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      ตัวอย่างการใช้งาน (Operator + Motion)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm">
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ลบ (Delete)</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        x, X, d, dd, D
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      dw (ลบคำ), d$ (ลบถึงท้ายบรรทัด), diw (ลบคำภายใน)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">เปลี่ยน (Change)</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        c, cc, C, s, S
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      cw (เปลี่ยนคำ), c$ (เปลี่ยนถึงท้ายบรรทัด), ciw
                      (เปลี่ยนคำภายใน)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">คัดลอก (Yank)</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        y, yy, Y
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      yw (คัดลอกคำ), y$ (คัดลอกถึงท้ายบรรทัด)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">วาง (Paste)</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        p, P
                      </kbd>
                    </td>
                    <td className="px-4 py-2">3p (วาง 3 ครั้ง)</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ยกเลิก/ทำซ้ำ</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        u, U, Ctrl-r, .
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      u (undo), Ctrl-r (redo), . (repeat)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">แทนที่</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        r{"{char}"}, R
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      r (แทนที่ตัวอักษร), R (Replace Mode)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">เปลี่ยนตัวพิมพ์</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        ~, gU{"{motion}"}, gu{"{motion}"}
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      gUw (คำเป็นตัวใหญ่), ~ (สลับตัวพิมพ์)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">เยื้อง</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        {">>"}, {"<<"}, {">"} (Visual), {"<"} (Visual)
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      {">>"} (เยื้องขวา), V%{"<"} (ลดการเยื้องบล็อกที่เลือก)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">รวมบรรทัด</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        J, gJ
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      J (รวมพร้อมช่องว่าง), gJ (รวมไม่มีช่องว่าง)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Search and Replace Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-cyan-300">
            3.4. การค้นหาและแทนที่ (Search and Replace)
          </h3>

          <div className="bg-gradient-to-r from-slate-900/40 to-slate-800/20 border border-slate-500/30 rounded-lg p-6">
            <p className="text-gray-200 mb-4">
              Vim มีเครื่องมือค้นหาและแทนที่ที่มีประสิทธิภาพสูง
              ช่วยให้สามารถนำทางและแก้ไขไฟล์ขนาดใหญ่ได้อย่างรวดเร็ว
            </p>
          </div>

          {/* Search Commands */}
          <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">
              การค้นหา (Search - Normal Mode)
            </h4>
            <div className="space-y-3 text-gray-200 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      /pattern
                    </kbd>
                    ค้นหา pattern ไปข้างหน้า (ลง)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      ?pattern
                    </kbd>
                    ค้นหา pattern ไปข้างหลัง (ขึ้น)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">n</kbd>
                    ค้นหา pattern เดิมซ้ำในทิศทางเดิม
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">N</kbd>
                    ค้นหา pattern เดิมซ้ำในทิศทางตรงกันข้าม
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">*</kbd>
                    ค้นหาคำใต้เคอร์เซอร์ไปข้างหน้า (ทั้งคำ)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">#</kbd>
                    ค้นหาคำใต้เคอร์เซอร์ไปข้างหลัง (ทั้งคำ)
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      :noh
                    </kbd>
                    ล้างการเน้นสีจากการค้นหา
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-900/20 border border-purple-500/20 rounded">
                <h5 className="font-semibold text-purple-300 mb-2">
                  ตัวเลือกการค้นหา:
                </h5>
                <div className="space-y-1 text-xs">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">\c</kbd>{" "}
                    ต่อท้าย pattern เพื่อไม่สนใจตัวพิมพ์เล็ก/ใหญ่
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">\C</kbd>{" "}
                    ต่อท้าย pattern เพื่อสนใจตัวพิมพ์เล็ก/ใหญ่
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :set hlsearch
                    </kbd>{" "}
                    เน้นสีผลลัพธ์การค้นหา
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :set incsearch
                    </kbd>{" "}
                    แสดงผลลัพธ์แบบทันทีขณะพิมพ์
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Substitute Commands */}
          <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/20 border border-amber-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-amber-300 mb-3">
              การแทนที่ (Substitute - Command-Line Mode)
            </h4>
            <div className="space-y-4 text-gray-200 text-sm">
              <div>
                <h5 className="font-semibold text-amber-300 mb-2">
                  รูปแบบคำสั่งหลัก:{" "}
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                    :[range]s/old/new/[flags]
                  </kbd>
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div>
                      <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                        :s/old/new/
                      </kbd>
                      แทนที่ครั้งแรกในบรรทัดปัจจุบัน
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                        :s/old/new/g
                      </kbd>
                      แทนที่ทุกครั้งในบรรทัดปัจจุบัน
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                        :%s/old/new/g
                      </kbd>
                      แทนที่ทุกครั้งในทั้งไฟล์
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                        :%s/old/new/gc
                      </kbd>
                      แทนที่ทั้งไฟล์โดยยืนยันแต่ละครั้ง
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                        :%s/\&lt;word\&gt;/new/g
                      </kbd>
                      แทนที่เฉพาะทั้งคำ
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-amber-300 mb-2">
                  การระบุช่วง (Range):
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :1,10s/old/new/g
                    </kbd>{" "}
                    บรรทัด 1-10
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :.,$s/old/new/g
                    </kbd>{" "}
                    ปัจจุบันถึงท้ายไฟล์
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :.,+Ns/old/new/g
                    </kbd>{" "}
                    ปัจจุบัน + N บรรทัด
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :'&lt;,'&gt;s/old/new/g
                    </kbd>{" "}
                    ข้อความที่เลือกใน Visual
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-amber-300 mb-2">
                  การยืนยันการแทนที่ (Confirm flags):
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">y</kbd>{" "}
                    แทนที่อันนี้
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">n</kbd>{" "}
                    ไม่แทนที่อันนี้
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">a</kbd>{" "}
                    แทนที่ทั้งหมด
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">q</kbd>{" "}
                    หยุดการแทนที่
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">l</kbd>{" "}
                    แทนที่แล้วหยุด
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">^E</kbd>{" "}
                    เลื่อนหน้าจอลง
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">^Y</kbd>{" "}
                    เลื่อนหน้าจอขึ้น
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Search Techniques */}
          <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-emerald-300 mb-3">
              เทคนิคการแทนที่ขั้นสูง
            </h4>
            <div className="space-y-3 text-gray-200 text-sm">
              <div>
                <h5 className="font-semibold text-emerald-300 mb-2">
                  การแทนที่อย่างรวดเร็วด้วย cgn:
                </h5>
                <div className="space-y-1">
                  <div>
                    1. ค้นหาด้วย{" "}
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      /pattern
                    </kbd>
                  </div>
                  <div>
                    2. พิมพ์{" "}
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">cgn</kbd>{" "}
                    เพื่อเปลี่ยน pattern ปัจจุบัน
                  </div>
                  <div>
                    3. พิมพ์คำแทนที่และกด{" "}
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">Esc</kbd>
                  </div>
                  <div>
                    4. กด{" "}
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">.</kbd>{" "}
                    เพื่อทำซ้ำการแทนที่ถัดไป
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-emerald-300 mb-2">
                  การทำซ้ำการแทนที่:
                </h5>
                <div className="space-y-1">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">&</kbd>{" "}
                    ทำซ้ำคำสั่ง :s ล่าสุดบนบรรทัดปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">g&</kbd>{" "}
                    ทำซ้ำคำสั่ง :s ล่าสุดบนทุกบรรทัด
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :s//new/
                    </kbd>{" "}
                    แทนที่รูปแบบการค้นหาล่าสุดด้วย new
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Replace Summary Table */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-300">
              ตารางสรุปคำสั่งค้นหาและแทนที่
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      การกระทำ
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      คำสั่ง/รูปแบบ
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      ขอบเขต/แฟล็ก
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm">
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ค้นหาไปข้างหน้า</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        /pattern
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      \c (ไม่สนตัวพิมพ์), \C (สนตัวพิมพ์)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ค้นหาไปข้างหลัง</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        ?pattern
                      </kbd>
                    </td>
                    <td className="px-4 py-2">\c, \C</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ทำซ้ำการค้นหา</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        n (ทิศทางเดิม), N (ทิศทางตรงข้าม)
                      </kbd>
                    </td>
                    <td className="px-4 py-2">-</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">
                      แทนที่ (บรรทัดปัจจุบัน)
                    </td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :s/old/new/
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      g (ทุกครั้งในบรรทัด), i (ไม่สนตัวพิมพ์), I (สนตัวพิมพ์)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">แทนที่ (ทั้งไฟล์)</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :%s/old/new/
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      g (ทุกครั้งในไฟล์), c (ยืนยัน), i, I
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">แทนที่ (ช่วง)</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :[range]s/old/new/
                      </kbd>
                    </td>
                    <td className="px-4 py-2">เช่น 1,10, .,$, '&lt;,'&gt;</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">แทนที่ทั้งคำ</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :%s/\&lt;old\&gt;/new/g
                      </kbd>
                    </td>
                    <td className="px-4 py-2">ใช้ word boundaries</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">ล้างการเน้นสี</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :noh หรือ :nohlsearch
                      </kbd>
                    </td>
                    <td className="px-4 py-2">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-gradient-to-r from-indigo-900/40 to-indigo-800/20 border border-indigo-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-indigo-300 mb-3 flex items-center gap-2">
              💡 ข้อมูลเชิงลึกสำคัญ
            </h4>
            <div className="space-y-2 text-gray-200 text-sm">
              <p>
                • โครงสร้างคำสั่งแบบ <strong>operator + motion</strong> (เช่น d
                {"{motion}"}, c{"{motion}"}, y{"{motion}"})
                เป็นหัวใจสำคัญของประสิทธิภาพใน Vim
              </p>
              <p>
                • คำสั่ง <strong>. (จุด)</strong>{" "}
                สำหรับทำซ้ำการเปลี่ยนแปลงล่าสุดนั้นทรงพลังอย่างไม่น่าเชื่อ
                โดยเฉพาะเมื่อใช้ร่วมกับการออกแบบการแก้ไขที่ดี
              </p>
              <p>
                • <strong>Register เริ่มต้น</strong> ("") เชื่อมโยงการลบ
                การคัดลอก และการวางเข้าด้วยกัน ทำให้การลบ (dd) ก็เป็นการ
                "คัดลอก" ไปด้วย
              </p>
              <p>
                • การมีหลายวิธีในการทำงานที่คล้ายกัน (เช่น d$ กับ D)
                ไม่ใช่ความซ้ำซ้อน
                แต่เป็นการให้ความยืดหยุ่นและปรับให้เหมาะกับบริบทที่แตกต่างกัน
              </p>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
            💡 เคล็ดลับสำหรับมือใหม่
          </h4>
          <div className="space-y-2 text-gray-200 text-sm">
            <p>
              • การสลับโหมดเป็นหัวใจสำคัญของการใช้ Vim
              ผู้ใช้ควรฝึกฝนการเปลี่ยนโหมดเหล่านี้ให้เป็นธรรมชาติ
            </p>
            <p>
              • การใช้ปุ่ม Esc บ่อยครั้งทำให้บางคนเลือกที่จะ remap ปุ่ม Caps
              Lock ให้เป็น Esc เพื่อความสะดวก
            </p>
            <p>
              • หากสับสนเกี่ยวกับโหมดปัจจุบัน ให้กด Esc หลายครั้งเพื่อกลับสู่
              Normal Mode ที่แน่นอน
            </p>
            <p>
              • เมื่อเริ่มต้นใช้ Vim ให้จำคำสั่งพื้นฐาน: i (insert), Esc
              (normal), :w (save), :q (quit) ก่อน
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
