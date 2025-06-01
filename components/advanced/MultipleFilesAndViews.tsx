import { Monitor, Layers, FolderOpen } from "lucide-react";

export const MultipleFilesAndViews = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-cyan-300">
        4.1. การทำงานกับหลายไฟล์และหลายมุมมอง (Multiple Files and Views)
      </h3>

      <div className="bg-gradient-to-r from-slate-900/40 to-slate-800/20 border border-slate-500/30 rounded-lg p-6">
        <p className="text-gray-200 mb-4">
          การจัดการไฟล์หลายไฟล์พร้อมกันเป็นเรื่องปกติในการพัฒนาซอฟต์แวร์ Vim
          มีกลไกที่ยืดหยุ่นในการจัดการเรื่องนี้ผ่าน
          <strong className="text-cyan-300"> บัฟเฟอร์ (Buffers)</strong>{" "}
          <strong className="text-purple-300">หน้าต่าง (Windows/Splits)</strong>{" "}
          และ
          <strong className="text-orange-300">แท็บ (Tabs)</strong>
        </p>
        <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded">
          <p className="text-blue-200 text-sm">
            💡 <strong>ลำดับชั้น:</strong> บัฟเฟอร์คือการแสดงไฟล์ในหน่วยความจำ →
            หน้าต่างคือช่องมองภาพ (viewports) ไปยังบัฟเฟอร์ →
            แท็บคือชุดของเค้าโครงหน้าต่าง
          </p>
        </div>
      </div>

      {/* Buffers Section */}
      <div className="bg-gradient-to-r from-cyan-900/40 to-cyan-800/20 border border-cyan-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="h-6 w-6 text-cyan-400" />
          <h4 className="text-lg font-semibold text-cyan-300">
            บัฟเฟอร์ (Buffers): วิธีการจัดการไฟล์ที่เปิดอยู่ของ Vim
          </h4>
        </div>

        <div className="space-y-4 text-gray-200 text-sm">
          <p className="text-cyan-200">
            <strong>แนวคิด:</strong> ทุกครั้งที่เปิดไฟล์ใน Vim
            เนื้อหาของไฟล์นั้นจะถูกโหลดเข้าไปในพื้นที่หน่วยความจำที่เรียกว่า
            "บัฟเฟอร์" หน้าต่าง (windows) เป็นเพียง "มุมมอง" (views)
            ที่แสดงเนื้อหาของบัฟเฟอร์
          </p>

          <div>
            <h5 className="font-semibold text-cyan-300 mb-2">
              การแสดงรายการบัฟเฟอร์:
            </h5>
            <div className="p-2 bg-black/30 rounded font-mono text-xs">
              :ls หรือ :buffers
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-cyan-300 mb-2">
              การสลับบัฟเฟอร์:
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">:b[N]</kbd>
                สลับไปยังบัฟเฟอร์หมายเลข N
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">:bn</kbd>
                ไปยังบัฟเฟอร์ถัดไป
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">:bp</kbd>
                ไปยังบัฟเฟอร์ก่อนหน้า
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                  :b filename
                </kbd>
                สลับด้วยชื่อไฟล์
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-cyan-300 mb-2">
              การจัดการบัฟเฟอร์:
            </h5>
            <div className="space-y-2">
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                  :e filename
                </kbd>
                เปิดไฟล์ในบัฟเฟอร์ใหม่
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">:bd</kbd>
                ปิดบัฟเฟอร์ปัจจุบัน (bdelete)
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                  :bufdo [cmd]
                </kbd>
                รันคำสั่ง cmd กับทุกบัฟเฟอร์
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Windows Section */}
      <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="h-6 w-6 text-purple-400" />
          <h4 className="text-lg font-semibold text-purple-300">
            หน้าต่าง (Windows หรือ Splits): การดูหลายบัฟเฟอร์พร้อมกัน
          </h4>
        </div>

        <div className="space-y-4 text-gray-200 text-sm">
          <p className="text-purple-200">
            <strong>แนวคิด:</strong> แบ่งพื้นที่แสดงผลของ Vim ออกเป็นหลายส่วน
            (viewports) ทำให้สามารถดูเนื้อหาจากหลายบัฟเฟอร์
            หรือหลายส่วนของบัฟเฟอร์เดียวกันได้พร้อมกัน
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-purple-300 mb-2">
                การแบ่งหน้าต่าง:
              </h5>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    :sp [file]
                  </kbd>
                  แบ่งแนวนอน
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    :vs [file]
                  </kbd>
                  แบ่งแนวตั้ง
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-w s
                  </kbd>
                  แบ่งแนวนอน (ทางลัด)
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-w v
                  </kbd>
                  แบ่งแนวตั้ง (ทางลัด)
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-purple-300 mb-2">
                การนำทางระหว่างหน้าต่าง:
              </h5>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-w h/j/k/l
                  </kbd>
                  ซ้าย/ล่าง/บน/ขวา
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-w w
                  </kbd>
                  หน้าต่างถัดไป
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    Ctrl-w W
                  </kbd>
                  หน้าต่างก่อนหน้า
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-purple-300 mb-2">
              การจัดการหน้าต่าง:
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                  Ctrl-w q
                </kbd>
                ปิดหน้าต่างปัจจุบัน
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                  Ctrl-w o
                </kbd>
                ปิดหน้าต่างอื่นทั้งหมด
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                  Ctrl-w =
                </kbd>
                ขนาดเท่ากันทั้งหมด
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                  Ctrl-w _
                </kbd>
                ขยายความสูงเต็มที่
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-gradient-to-r from-orange-900/40 to-orange-800/20 border border-orange-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <FolderOpen className="h-6 w-6 text-orange-400" />
          <h4 className="text-lg font-semibold text-orange-300">
            แท็บ (Tabs): การจัดระเบียบพื้นที่ทำงานของหน้าต่าง
          </h4>
        </div>

        <div className="space-y-4 text-gray-200 text-sm">
          <p className="text-orange-200">
            <strong>แนวคิด:</strong> แท็บใน Vim ทำหน้าที่เหมือน "พื้นที่ทำงาน"
            (workspaces) หรือ "เค้าโครง" (layouts)
            ที่สามารถบรรจุหน้าต่างได้หลายหน้าต่าง
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-orange-300 mb-2">
                การสร้างและจัดการแท็บ:
              </h5>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    :tabnew
                  </kbd>
                  สร้างแท็บใหม่
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    :tabe file
                  </kbd>
                  เปิดไฟล์ในแท็บใหม่
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    :tabclose
                  </kbd>
                  ปิดแท็บปัจจุบัน
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    :tabo
                  </kbd>
                  ปิดแท็บอื่นทั้งหมด
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-orange-300 mb-2">
                การสลับแท็บ:
              </h5>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">gt</kbd>
                  แท็บถัดไป
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">gT</kbd>
                  แท็บก่อนหน้า
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    [N]gt
                  </kbd>
                  ไปยังแท็บที่ N
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    :tabs
                  </kbd>
                  แสดงรายการแท็บ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-cyan-300">
          ตารางสรุปคำสั่งจัดการบัฟเฟอร์, หน้าต่าง และแท็บ
        </h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
            <thead>
              <tr className="bg-white/10">
                <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                  คุณสมบัติ
                </th>
                <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                  คำสั่ง
                </th>
                <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                  คำอธิบาย
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-200 text-sm">
              <tr className="border-t border-white/10">
                <td className="px-4 py-2 font-medium text-cyan-300">
                  บัฟเฟอร์
                </td>
                <td className="px-4 py-2">
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                    :ls, :buffers
                  </kbd>
                </td>
                <td className="px-4 py-2">แสดงรายการบัฟเฟอร์ทั้งหมด</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                    :b[N], :bn, :bp
                  </kbd>
                </td>
                <td className="px-4 py-2">
                  สลับไปยังบัฟเฟอร์ N, ถัดไป, ก่อนหน้า
                </td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2 font-medium text-purple-300">
                  หน้าต่าง
                </td>
                <td className="px-4 py-2">
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                    :sp, :vs
                  </kbd>
                </td>
                <td className="px-4 py-2">แบ่งหน้าต่างแนวนอน, แนวตั้ง</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                    Ctrl-w [hjkl]
                  </kbd>
                </td>
                <td className="px-4 py-2">
                  นำทางไปยังหน้าต่าง ซ้าย/ล่าง/บน/ขวา
                </td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2 font-medium text-orange-300">แท็บ</td>
                <td className="px-4 py-2">
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                    :tabnew, :tabe
                  </kbd>
                </td>
                <td className="px-4 py-2">เปิดแท็บใหม่ (เปิดไฟล์ถ้ามี)</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                    gt, gT, [N]gt
                  </kbd>
                </td>
                <td className="px-4 py-2">
                  ไปยังแท็บถัดไป, ก่อนหน้า, แท็บที่ N
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
