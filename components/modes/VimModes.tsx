import React from "react";
import { Terminal, Edit, Eye, Target, RefreshCw } from "lucide-react";

export const VimModes: React.FC = () => {
  return (
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
            เป็นโหมดเริ่มต้นเมื่อเปิด Vim ใช้สำหรับการนำทาง (navigation) ในไฟล์
            และการเรียกใช้คำสั่งต่างๆ เช่น การลบ (delete) คัดลอก (copy) วาง
            (paste) ยกเลิก (undo) ทำซ้ำ (redo)
          </p>
          <p>
            <strong className="text-green-300">การเข้าสู่โหมด:</strong> Vim
            จะเริ่มต้นในโหมดนี้โดยอัตโนมัติ หากอยู่ในโหมดอื่น ให้กดปุ่ม{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded text-sm">Esc</kbd>{" "}
            เพื่อกลับสู่ Normal Mode
          </p>
          <p>
            <strong className="text-green-300">การระบุโหมด:</strong>{" "}
            ไม่มีข้อความแสดงโหมดที่มุมล่างซ้าย เพราะนี่คือโหมดเริ่มต้น
          </p>
          <p>
            <strong className="text-green-300">ตัวอย่างคำสั่ง:</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">h j k l</kbd>{" "}
              เลื่อนเคอร์เซอร์ (ซ้าย ลง ขึ้น ขวา)
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">dd</kbd> ลบบรรทัด
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">yy</kbd>{" "}
              คัดลอกบรรทัด
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">p</kbd> วางข้อความ
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">u</kbd> ยกเลิก
              (undo)
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">Ctrl-r</kbd> ทำซ้ำ
              (redo)
            </div>
          </div>
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
            ใช้สำหรับการพิมพ์และแทรกข้อความ เมื่ออยู่ในโหมดนี้
            การกดปุ่มต่างๆจะทำให้ตัวอักษรถูกแทรกเข้าไปในไฟล์
          </p>
          <p>
            <strong className="text-blue-300">การเข้าสู่โหมด:</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm ml-4">
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">i</kbd>{" "}
              แทรกที่ตำแหน่งเคอร์เซอร์
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">a</kbd>{" "}
              แทรกหลังเคอร์เซอร์
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">I</kbd>{" "}
              แทรกที่ต้นบรรทัด
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">A</kbd>{" "}
              แทรกที่ท้ายบรรทัด
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">o</kbd>{" "}
              สร้างบรรทัดใหม่ข้างล่าง
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">O</kbd>{" "}
              สร้างบรรทัดใหม่ข้างบน
            </div>
          </div>
          <p>
            <strong className="text-blue-300">การออกจากโหมด:</strong> กด{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd>{" "}
            เพื่อกลับสู่ Normal Mode
          </p>
          <p>
            <strong className="text-blue-300">การระบุโหมด:</strong>{" "}
            ที่มุมล่างซ้ายจะแสดงข้อความ -- INSERT --
          </p>
        </div>
      </div>

      {/* Visual Mode */}
      <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="h-6 w-6 text-purple-400" />
          <h4 className="text-xl font-bold text-purple-300">
            Visual Mode (โหมดเลือกข้อความ)
          </h4>
        </div>
        <div className="space-y-3 text-gray-200">
          <p>
            <strong className="text-purple-300">วัตถุประสงค์:</strong>{" "}
            ใช้สำหรับการเลือกข้อความ (select/highlight) เพื่อดำเนินการต่างๆ เช่น
            การลบ คัดลอก ย้าย หรือ จัดรูปแบบข้อความที่เลือก
          </p>
          <p>
            <strong className="text-purple-300">การเข้าสู่โหมด:</strong>
          </p>
          <div className="grid grid-cols-1 gap-2 text-sm ml-4">
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">v</kbd> เข้าสู่
              Visual Mode แบบเลือกทีละตัวอักษร (character-wise visual mode)
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">V</kbd> เข้าสู่
              Visual Mode แบบเลือกทีละบรรทัด (line-wise visual mode)
            </div>
            <div>
              <kbd className="px-2 py-1 bg-gray-700 rounded">Ctrl-v</kbd>{" "}
              เข้าสู่ Visual Mode แบบเลือกเป็นบล็อกสี่เหลี่ยม (block-wise visual
              mode)
            </div>
          </div>
          <p>
            <strong className="text-purple-300">การออกจากโหมด:</strong> กด{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd>{" "}
            เพื่อกลับสู่ Normal Mode
          </p>
          <p>
            <strong className="text-purple-300">การระบุโหมด:</strong>{" "}
            ที่มุมล่างซ้ายจะแสดงข้อความ -- VISUAL --, -- VISUAL LINE --, หรือ --
            VISUAL BLOCK --
          </p>
        </div>
      </div>

      {/* Command-Line Mode */}
      <div className="bg-gradient-to-r from-orange-900/40 to-orange-800/20 border border-orange-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="h-6 w-6 text-orange-400" />
          <h4 className="text-xl font-bold text-orange-300">
            Command-Line Mode (โหมดบรรทัดคำสั่ง)
          </h4>
        </div>
        <div className="space-y-3 text-gray-200">
          <p>
            <strong className="text-orange-300">วัตถุประสงค์:</strong>{" "}
            ใช้สำหรับป้อนคำสั่งที่ซับซ้อนขึ้น เช่น การบันทึกไฟล์ (:w) การออกจาก
            Vim (:q) การค้นหาและแทนที่ (:s) การตั้งค่าต่างๆ (:set)
          </p>
          <p>
            <strong className="text-orange-300">การเข้าสู่โหมด:</strong> กด{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">:</kbd> (colon)
            เคอร์เซอร์จะไปปรากฏที่บรรทัดล่างสุดของหน้าจอ
          </p>
          <p>
            <strong className="text-orange-300">การออกจากโหมด:</strong> กด{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd> หรือ{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">Ctrl-c</kbd>{" "}
            เพื่อยกเลิก หรือกด{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">Enter</kbd>{" "}
            เพื่อรันคำสั่ง หลังจากป้อนคำสั่งและกด Enter Vim
            จะดำเนินการตามคำสั่งและกลับสู่ Normal Mode
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
            Insert Mode แต่แทนที่จะแทรกตัวอักษร จะทำการเขียนทับ (overwrite)
            ตัวอักษรที่มีอยู่แล้ว
          </p>
          <p>
            <strong className="text-red-300">การเข้าสู่โหมด:</strong> กด{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">R</kbd> (shift+r) ใน
            Normal Mode
          </p>
          <p>
            <strong className="text-red-300">การออกจากโหมด:</strong> กด{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd>{" "}
            เพื่อกลับสู่ Normal Mode
          </p>
          <p>
            <strong className="text-red-300">การระบุโหมด:</strong>{" "}
            ที่มุมล่างซ้ายจะแสดงข้อความ -- REPLACE --
          </p>
          <p>
            <strong className="text-red-300">หมายเหตุ:</strong> มีโหมด Replace
            แบบชั่วคราวด้วย โดยกด{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">r</kbd> (r เล็ก)
            จะแทนที่ตัวอักษรเดียวแล้วกลับสู่ Normal Mode ทันที
          </p>
        </div>
      </div>
    </div>
  );
};
