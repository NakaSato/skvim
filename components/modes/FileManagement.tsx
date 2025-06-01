import React from "react";

export const FileManagement: React.FC = () => {
  return (
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
            การบันทึกไฟล์ (Save)
          </h5>
          <div className="space-y-3 text-gray-200 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="p-2 bg-black/30 rounded font-mono mb-1">
                  :w
                </div>
                <p>บันทึกไฟล์ปัจจุบัน (write)</p>
              </div>
              <div>
                <div className="p-2 bg-black/30 rounded font-mono mb-1">
                  :w filename
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
  );
};
