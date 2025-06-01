import { Lightbulb } from "lucide-react";

export const ModeSummary = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Lightbulb className="h-6 w-6 text-yellow-400" />
        <h3 className="text-xl font-semibold text-white">สรุปและข้อควรรู้</h3>
      </div>
      <div className="space-y-2 text-gray-200 text-sm">
        <p>
          • การสลับโหมดเป็นหัวใจสำคัญของการใช้ Vim
          ผู้ใช้ควรฝึกฝนการเปลี่ยนโหมดเหล่านี้ให้เป็นธรรมชาติ
        </p>
        <p>
          • การใช้ปุ่ม Esc บ่อยครั้งทำให้บางคนเลือกที่จะ remap ปุ่ม Caps Lock
          ให้เป็น Esc เพื่อความสะดวก
        </p>
        <p>
          • หากสับสนเกี่ยวกับโหมดปัจจุบัน ให้กด Esc หลายครั้งเพื่อกลับสู่ Normal
          Mode ที่แน่นอน
        </p>
        <p>
          • เมื่อเริ่มต้นใช้ Vim ให้จำคำสั่งพื้นฐาน: i (insert), Esc (normal),
          :w (save), :q (quit) ก่อน
        </p>
      </div>
    </div>
  );
};
