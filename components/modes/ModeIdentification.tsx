import React from "react";

export const ModeIdentification: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-cyan-300">
        2.2. วิธีการระบุโหมดปัจจุบันใน Vim
      </h3>
      <div className="bg-gradient-to-r from-slate-900/40 to-slate-800/20 border border-slate-500/30 rounded-lg p-6">
        <div className="space-y-4 text-gray-200">
          <div>
            <h4 className="text-lg font-semibold text-slate-300 mb-2">
              การแสดงโหมดที่มุมล่างซ้าย
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-slate-300">
                    Normal Mode:
                  </span>{" "}
                  ไม่แสดงข้อความใดๆ
                </div>
                <div>
                  <span className="font-medium text-slate-300">
                    Insert Mode:
                  </span>{" "}
                  แสดง{" "}
                  <span className="bg-black/30 px-1 rounded">-- INSERT --</span>
                </div>
                <div>
                  <span className="font-medium text-slate-300">
                    Visual Mode:
                  </span>{" "}
                  แสดง{" "}
                  <span className="bg-black/30 px-1 rounded">-- VISUAL --</span>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-slate-300">
                    Visual Line:
                  </span>{" "}
                  แสดง{" "}
                  <span className="bg-black/30 px-1 rounded">
                    -- VISUAL LINE --
                  </span>
                </div>
                <div>
                  <span className="font-medium text-slate-300">
                    Visual Block:
                  </span>{" "}
                  แสดง{" "}
                  <span className="bg-black/30 px-1 rounded">
                    -- VISUAL BLOCK --
                  </span>
                </div>
                <div>
                  <span className="font-medium text-slate-300">
                    Replace Mode:
                  </span>{" "}
                  แสดง{" "}
                  <span className="bg-black/30 px-1 rounded">
                    -- REPLACE --
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-300 mb-2">
              เคล็ดลับในการระบุโหมด
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                • <strong>เคอร์เซอร์:</strong> ใน Normal Mode
                เคอร์เซอร์มักจะเป็นรูปสี่เหลี่ยม ใน Insert Mode จะเป็นเส้นตั้ง
              </div>
              <div>
                • <strong>การตอบสนอง:</strong> ลองกดปุ่มตัวอักษร
                หากมีการแสดงบนหน้าจอ = Insert Mode, หากไม่มี = Normal Mode
              </div>
              <div>
                • <strong>Command-Line Mode:</strong>{" "}
                เคอร์เซอร์จะไปที่บรรทัดล่างสุดและมี : นำหน้า
              </div>
              <div>
                • <strong>เมื่อสับสน:</strong> กด Esc หลายครั้งเพื่อกลับสู่
                Normal Mode ที่แน่นอน
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border border-amber-500/30 rounded p-4">
            <h4 className="text-lg font-semibold text-amber-300 mb-2">
              💡 เคล็ดลับสำหรับมือใหม่
            </h4>
            <div className="space-y-1 text-sm text-amber-100">
              <div>• เริ่มต้นด้วยการจำว่า Normal Mode คือ "บ้าน" ของ Vim</div>
              <div>• หากงงว่าอยู่โหมดไหน ให้กด Esc เพื่อกลับ "บ้าน"</div>
              <div>• ใช้ :set showmode เพื่อแสดงโหมดปัจจุบันเสมอ</div>
              <div>• ฝึกสลับโหมดให้เป็นธรรมชาติ โดยเฉพาะ i → Esc → i</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
