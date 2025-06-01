import React from "react";

export const TextEditing: React.FC = () => {
  return (
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

        <div className="space-y-6">
          {/* Delete Commands */}
          <div>
            <h4 className="text-lg font-semibold text-red-300 mb-3">
              การลบ (Delete)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">x</kbd>{" "}
                  ลบตัวอักษรใต้เคอร์เซอร์
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">X</kbd>{" "}
                  ลบตัวอักษรก่อนเคอร์เซอร์
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">dd</kbd>{" "}
                  ลบทั้งบรรทัด
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">dw</kbd> ลบคำ
                  (จากเคอร์เซอร์ไปจนสุดคำ)
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">d$</kbd>{" "}
                  ลบจากเคอร์เซอร์ไปจนสิ้นบรรทัด
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">d0</kbd>{" "}
                  ลบจากเคอร์เซอร์ไปจนต้นบรรทัด
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">dG</kbd>{" "}
                  ลบจากบรรทัดปัจจุบันไปจนสิ้นไฟล์
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">d5d</kbd> ลบ
                  5 บรรทัด
                </div>
              </div>
            </div>
          </div>

          {/* Change Commands */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">
              การเปลี่ยน (Change = Delete + Insert Mode)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">cc</kbd>{" "}
                  เปลี่ยนทั้งบรรทัด
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">cw</kbd>{" "}
                  เปลี่ยนคำ
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">c$</kbd>{" "}
                  เปลี่ยนจากเคอร์เซอร์ไปจนสิ้นบรรทัด
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">s</kbd>{" "}
                  แทนที่ตัวอักษร (substitute character)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">S</kbd>{" "}
                  แทนที่ทั้งบรรทัด (substitute line)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">r</kbd>{" "}
                  แทนที่ตัวอักษรเดียว (replace character)
                </div>
              </div>
            </div>
          </div>

          {/* Copy/Yank Commands */}
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">
              การคัดลอก (Yank)
            </h4>
            <p className="text-blue-200 mb-3">
              ใน Vim การคัดลอกเรียกว่า "yank"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">yy</kbd>{" "}
                  คัดลอกทั้งบรรทัด (yank line)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">yw</kbd>{" "}
                  คัดลอกคำ (yank word)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">y$</kbd>{" "}
                  คัดลอกจากเคอร์เซอร์ไปจนสิ้นบรรทัด
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">yG</kbd>{" "}
                  คัดลอกจากบรรทัดปัจจุบันไปจนสิ้นไฟล์
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">y5y</kbd>{" "}
                  คัดลอก 5 บรรทัด
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">yiw</kbd>{" "}
                  คัดลอกคำที่เคอร์เซอร์อยู่ (inner word)
                </div>
              </div>
            </div>
          </div>

          {/* Paste Commands */}
          <div>
            <h4 className="text-lg font-semibold text-indigo-300 mb-3">
              การวาง (Paste)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">p</kbd>{" "}
                  วางหลังเคอร์เซอร์/บรรทัดถัดไป
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">P</kbd>{" "}
                  วางก่อนเคอร์เซอร์/บรรทัดก่อนหน้า
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">3p</kbd> วาง
                  3 ครั้ง
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">"ap</kbd>{" "}
                  วางจาก register a
                </div>
              </div>
            </div>
          </div>

          {/* Undo/Redo */}
          <div>
            <h4 className="text-lg font-semibold text-orange-300 mb-3">
              ยกเลิก/ทำซ้ำ (Undo/Redo)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">u</kbd>{" "}
                  ยกเลิกการเปลี่ยนแปลงล่าสุด (undo)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">U</kbd>{" "}
                  ยกเลิกการเปลี่ยนแปลงทั้งบรรทัด
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">Ctrl-r</kbd>{" "}
                  ทำซ้ำการเปลี่ยนแปลง (redo)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">.</kbd>{" "}
                  ทำซ้ำคำสั่งล่าสุด (repeat)
                </div>
              </div>
            </div>
          </div>

          {/* Replace Commands */}
          <div>
            <h4 className="text-lg font-semibold text-pink-300 mb-3">
              การแทนที่ (Replace)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">r</kbd>{" "}
                  แทนที่ตัวอักษรเดียว
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">R</kbd>{" "}
                  เข้าสู่ Replace Mode
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">~</kbd>{" "}
                  เปลี่ยนตัวพิมพ์เล็ก/ใหญ่
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">g~w</kbd>{" "}
                  เปลี่ยนตัวพิมพ์ทั้งคำ
                </div>
              </div>
            </div>
          </div>

          {/* Case Changes */}
          <div>
            <h4 className="text-lg font-semibold text-green-300 mb-3">
              การเปลี่ยนตัวพิมพ์ (Case Changes)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">guu</kbd>{" "}
                  เปลี่ยนทั้งบรรทัดเป็นตัวพิมพ์เล็ก
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">gUU</kbd>{" "}
                  เปลี่ยนทั้งบรรทัดเป็นตัวพิมพ์ใหญ่
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">guw</kbd>{" "}
                  เปลี่ยนคำเป็นตัวพิมพ์เล็ก
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">gUw</kbd>{" "}
                  เปลี่ยนคำเป็นตัวพิมพ์ใหญ่
                </div>
              </div>
            </div>
          </div>

          {/* Indentation */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">
              การจัดการเยื้อง (Indentation)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">{`>>`}</kbd>{" "}
                  เพิ่มเยื้องบรรทัดปัจจุบัน
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">{`<<`}</kbd>{" "}
                  ลดเยื้องบรรทัดปัจจุบัน
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">=</kbd>{" "}
                  จัดเยื้องอัตโนมัติ (auto-indent)
                </div>
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">==</kbd>{" "}
                  จัดเยื้องบรรทัดปัจจุบัน
                </div>
              </div>
            </div>
          </div>

          {/* Summary Table */}
          <div>
            <h4 className="text-lg font-bold text-cyan-300">
              ตารางสรุปคำสั่งแก้ไขข้อความหลัก
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      หมวดหมู่
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      คำสั่งหลัก
                    </th>
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      ตัวอย่างการใช้งาน
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm">
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">การลบ</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">d</kbd> +
                      motion
                    </td>
                    <td className="px-4 py-2">
                      dd (ลบบรรทัด), dw (ลบคำ), d5j (ลบ 5 บรรทัดลง)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">การเปลี่ยน</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">c</kbd> +
                      motion
                    </td>
                    <td className="px-4 py-2">
                      cc (เปลี่ยนบรรทัด), cw (เปลี่ยนคำ), c$
                      (เปลี่ยนจนท้ายบรรทัด)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">การคัดลอก</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">y</kbd> +
                      motion
                    </td>
                    <td className="px-4 py-2">
                      yy (คัดลอกบรรทัด), yw (คัดลอกคำ), y$ (คัดลอกจนท้ายบรรทัด)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">การวาง</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        p, P
                      </kbd>
                    </td>
                    <td className="px-4 py-2">
                      p (วางหลัง), P (วางก่อน), 3p (วาง 3 ครั้ง)
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">การรวมบรรทัด</td>
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
      </div>
    </div>
  );
};
