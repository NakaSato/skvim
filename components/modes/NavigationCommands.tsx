import React from "react";

export const NavigationCommands: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-cyan-300">
        3.2. การนำทาง (Navigation Commands)
      </h3>

      <div className="bg-gradient-to-r from-slate-900/40 to-slate-800/20 border border-slate-500/30 rounded-lg p-6">
        <p className="text-gray-200 mb-4">
          การนำทางใน Vim เป็นหนึ่งในจุดแข็งหลัก
          เพราะช่วยให้เลื่อนเคอร์เซอร์ไปยังตำแหน่งต่างๆ ได้อย่างรวดเร็ว
          โดยไม่ต้องใช้เมาส์
        </p>

        <div className="space-y-6">
          {/* Basic Movement */}
          <div>
            <h4 className="text-lg font-bold text-cyan-300 mb-3">
              การเคลื่อนที่พื้นฐาน
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
                      ความหมาย
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm">
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">
                      การเคลื่อนที่พื้นฐาน
                    </td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        h j k l
                      </kbd>
                    </td>
                    <td className="px-4 py-2">ซ้าย ลง ขึ้น ขวา</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">
                      การเคลื่อนที่ตามคำ
                    </td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        w b e
                      </kbd>
                    </td>
                    <td className="px-4 py-2">คำถัดไป, คำก่อนหน้า, ท้ายคำ</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">
                      การเคลื่อนที่ในบรรทัด
                    </td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        0 ^ $ g_
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      ต้นบรรทัด, ตัวอักษรแรก, ท้ายบรรทัด, ตัวอักษรสุดท้าย
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">การไปยังบรรทัด</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        gg G :n
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      บรรทัดแรก, บรรทัดสุดท้าย, ไปบรรทัดที่ n
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Screen Movement */}
          <div>
            <h4 className="text-lg font-bold text-cyan-300 mb-3">
              การเลื่อนหน้าจอ (Screen Scrolling)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">Ctrl-f</kbd>{" "}
                  เลื่อนไปข้างหน้า 1 หน้า (forward)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">Ctrl-b</kbd>{" "}
                  เลื่อนกลับไป 1 หน้า (backward)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">Ctrl-d</kbd>{" "}
                  เลื่อนลง ครึ่งหน้า (down)
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">Ctrl-u</kbd>{" "}
                  เลื่อนขึ้น ครึ่งหน้า (up)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">zz</kbd>{" "}
                  วางบรรทัดปัจจุบันตรงกลางหน้าจอ
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">zt zb</kbd>{" "}
                  วางบรรทัดปัจจุบันที่ด้านบน/ล่าง
                </div>
              </div>
            </div>
          </div>

          {/* Position Navigation */}
          <div>
            <h4 className="text-lg font-bold text-cyan-300 mb-3">
              การนำทางตำแหน่ง (Position Navigation)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">H M L</kbd>{" "}
                  ไปบรรทัดบน กลาง ล่าง ของหน้าจอ
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">Ctrl-o</kbd>{" "}
                  กลับไปตำแหน่งก่อนหน้า (older)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">Ctrl-i</kbd>{" "}
                  ไปตำแหน่งถัดไป (newer)
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">ma</kbd>{" "}
                  สร้าง mark 'a' ที่ตำแหน่งปัจจุบัน
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">'a</kbd>{" "}
                  ไปยัง mark 'a'
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">''</kbd>{" "}
                  กลับไปตำแหน่งล่าสุด
                </div>
              </div>
            </div>
          </div>

          {/* Character Search */}
          <div>
            <h4 className="text-lg font-bold text-cyan-300 mb-3">
              การค้นหาตัวอักษร (Character Search)
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      คำสั่ง
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      ความหมาย
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm">
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        f{`{char}`}
                      </kbd>
                      ,{" "}
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        F{`{char}`}
                      </kbd>
                      ,{" "}
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        t{`{char}`}
                      </kbd>
                      ,{" "}
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        T{`{char}`}
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      ค้นหา {`{char}`} ไปข้างหน้า/หลัง, ไปยังก่อน/หลัง{" "}
                      {`{char}`}
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">จับคู่เครื่องหมาย</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">%</kbd>
                    </td>
                    <td className="px-4 py-2">
                      กระโดดไปยังวงเล็บ (), {`{}`}, [] ที่คู่กัน
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Jumps */}
          <div>
            <h4 className="text-lg font-bold text-cyan-300 mb-3">
              การกระโดด (Jumps)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">*</kbd>{" "}
                  ค้นหาคำที่เคอร์เซอร์อยู่ (ไปข้างหน้า)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">#</kbd>{" "}
                  ค้นหาคำที่เคอร์เซอร์อยู่ (ไปข้างหลัง)
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">n</kbd>{" "}
                  ไปผลการค้นหาถัดไป
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">N</kbd>{" "}
                  ไปผลการค้นหาก่อนหน้า
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
