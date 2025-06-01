import { Play, RotateCcw, Cpu } from "lucide-react";

export const MacrosAndAutomation = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-cyan-300">
        4.3. มาโคร (Macros): การทำงานซ้ำๆ โดยอัตโนมัติ
      </h3>

      <div className="bg-gradient-to-r from-slate-900/40 to-slate-800/20 border border-slate-500/30 rounded-lg p-6">
        <p className="text-gray-200 mb-4">
          มาโครใน Vim
          เป็นเครื่องมือที่ทรงพลังสำหรับการบันทึกและเล่นซ้ำลำดับของคำสั่งใน
          Normal Mode ทำให้สามารถทำงานที่ซ้ำซากและซับซ้อนได้โดยอัตโนมัติ
          ซึ่งมีประสิทธิภาพมากกว่าการใช้คำสั่ง . (จุด) สำหรับการทำซ้ำที่ซับซ้อน
        </p>
        <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded">
          <p className="text-green-200 text-sm">
            💡 <strong>พลังของมาโคร:</strong> เกิดจากธรรมชาติของ Vim
            ที่ทำงานบนพื้นฐานของคำสั่งและระบบ register
            เนื่องจากลำดับของคำสั่งใดๆ ใน Normal Mode สามารถบันทึกได้ และ
            register สามารถจัดเก็บลำดับเหล่านี้ได้
          </p>
        </div>
      </div>

      {/* Recording Macros */}
      <div className="bg-gradient-to-r from-red-900/40 to-red-800/20 border border-red-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cpu className="h-6 w-6 text-red-400" />
          <h4 className="text-lg font-semibold text-red-300">การบันทึกมาโคร</h4>
        </div>

        <div className="space-y-4 text-gray-200 text-sm">
          <p className="text-red-200 mb-3">
            <strong>แนวคิด:</strong> บันทึกลำดับการกดแป้นพิมพ์ (คำสั่ง) ลงใน
            register แล้วเรียกใช้งานซ้ำได้
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-red-300 mb-2">
                ขั้นตอนการบันทึก:
              </h5>
              <div className="space-y-3">
                <div className="p-3 bg-red-900/20 border border-red-500/20 rounded">
                  <div className="font-semibold text-red-300 mb-1">
                    1. เริ่มบันทึก
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                      q{register}
                    </kbd>
                    <span className="text-red-200">
                      เริ่มบันทึกลงใน register (a-z)
                    </span>
                  </div>
                  <div className="text-xs text-red-200 mt-1">
                    บรรทัดคำสั่งจะแสดง "recording @a"
                  </div>
                </div>

                <div className="p-3 bg-red-900/20 border border-red-500/20 rounded">
                  <div className="font-semibold text-red-300 mb-1">
                    2. ดำเนินการ
                  </div>
                  <div className="text-red-200">
                    ทำชุดคำสั่งที่ต้องการบันทึก
                  </div>
                  <div className="text-xs text-red-200 mt-1">
                    (ทุกอย่างที่ทำใน Normal Mode จะถูกบันทึก)
                  </div>
                </div>

                <div className="p-3 bg-red-900/20 border border-red-500/20 rounded">
                  <div className="font-semibold text-red-300 mb-1">
                    3. หยุดบันทึก
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">q</kbd>
                    <span className="text-red-200">หยุดการบันทึก</span>
                  </div>
                  <div className="text-xs text-red-200 mt-1">
                    ข้อความ "recording @a" จะหายไป
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-red-300 mb-2">
                ตัวอย่างการบันทึก:
              </h5>
              <div className="p-3 bg-black/40 rounded font-mono text-xs space-y-1">
                <div className="text-yellow-300">qa</div>
                <div className="text-gray-400">
                  -- เริ่มบันทึกมาโครลงใน register a
                </div>
                <div className="text-green-300">0</div>
                <div className="text-gray-400">-- ไปยังต้นบรรทัด</div>
                <div className="text-green-300">iHello, </div>
                <div className="text-gray-400">
                  -- เข้าสู่ Insert mode และพิมพ์
                </div>
                <div className="text-green-300">&lt;Esc&gt;</div>
                <div className="text-gray-400">-- กลับสู่ Normal mode</div>
                <div className="text-green-300">A world!&lt;Esc&gt;</div>
                <div className="text-gray-400">
                  -- ไปท้ายบรรทัดและเพิ่มข้อความ
                </div>
                <div className="text-yellow-300">q</div>
                <div className="text-gray-400">-- หยุดบันทึก</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playing Macros */}
      <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 border border-green-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Play className="h-6 w-6 text-green-400" />
          <h4 className="text-lg font-semibold text-green-300">การเล่นมาโคร</h4>
        </div>

        <div className="space-y-4 text-gray-200 text-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-green-300 mb-2">
                คำสั่งพื้นฐาน:
              </h5>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    @{register}
                  </kbd>
                  <span className="text-green-200">เล่นมาโครที่บันทึกไว้</span>
                </div>
                <div className="text-xs text-green-200 ml-4">
                  เช่น @a เพื่อเล่นมาโครใน register a
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">@@</kbd>
                  <span className="text-green-200">เล่นมาโครล่าสุดซ้ำ</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-green-300 mb-2">
                การเล่นหลายครั้ง:
              </h5>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    [N]@{register}
                  </kbd>
                  <span className="text-green-200">เล่นมาโคร N ครั้ง</span>
                </div>
                <div className="text-xs text-green-200 ml-4">
                  เช่น 5@a เพื่อเล่นมาโคร a ทั้งหมด 5 ครั้ง
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    100@@
                  </kbd>
                  <span className="text-green-200">
                    เล่นมาโครล่าสุด 100 ครั้ง
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-500/20 rounded">
            <h5 className="font-semibold text-green-300 mb-2">
              ตัวอย่างการใช้งาน:
            </h5>
            <div className="text-xs font-mono space-y-1">
              <div>
                <span className="text-yellow-300">@a</span>{" "}
                <span className="text-gray-400">- เล่นมาโคร a หนึ่งครั้ง</span>
              </div>
              <div>
                <span className="text-yellow-300">10@a</span>{" "}
                <span className="text-gray-400">- เล่นมาโคร a สิบครั้ง</span>
              </div>
              <div>
                <span className="text-yellow-300">@@</span>{" "}
                <span className="text-gray-400">- เล่นมาโครล่าสุดซ้ำ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registers and Macros */}
      <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <RotateCcw className="h-6 w-6 text-blue-400" />
          <h4 className="text-lg font-semibold text-blue-300">
            Registers และมาโคร
          </h4>
        </div>

        <div className="space-y-4 text-gray-200 text-sm">
          <p className="text-blue-200">
            มาโครจะถูกจัดเก็บไว้ใน named registers (a-z) ซึ่งเป็น register
            เดียวกันกับที่ใช้สำหรับการคัดลอก (yank) และการลบ (delete)
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-blue-300 mb-2">
                การดูและแก้ไขมาโคร:
              </h5>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    :reg {register}
                  </kbd>
                  <span className="text-blue-200">แสดงเนื้อหาของ register</span>
                </div>
                <div className="text-xs text-blue-200 ml-4">
                  เช่น :reg a เพื่อดูเนื้อหาของมาโคร a
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    "{register}p
                  </kbd>
                  <span className="text-blue-200">
                    วางเนื้อหา register ลงในบัฟเฟอร์
                  </span>
                </div>
                <div className="text-xs text-blue-200 ml-4">
                  เช่น "ap เพื่อวางและแก้ไขมาโคร a
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-300 mb-2">
                การต่อท้ายมาโคร:
              </h5>
              <div className="space-y-2">
                <div>
                  <kbd className="px-2 py-1 bg-gray-700 rounded mr-2">
                    q{A - Z}
                  </kbd>
                  <span className="text-blue-200">ต่อท้ายมาโครที่มีอยู่</span>
                </div>
                <div className="text-xs text-blue-200 ml-4">
                  เช่น qA จะต่อท้ายคำสั่งใหม่เข้ากับมาโคร a ที่มีอยู่
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded">
            <h5 className="font-semibold text-yellow-300 mb-2">
              ⚠️ ข้อควรระวัง:
            </h5>
            <div className="text-xs text-yellow-200 space-y-1">
              <p>• การ yank หรือ delete อาจเขียนทับมาโครใน register เดียวกัน</p>
              <p>
                • ควรใช้ register ที่ไม่ค่อยใช้งาน (เช่น q, w, x)
                สำหรับมาโครที่สำคัญ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recursive Macros */}
      <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-purple-300 mb-3">
          มาโครแบบเรียกซ้ำ (Recursive Macros)
        </h4>

        <div className="space-y-3 text-gray-200 text-sm">
          <p className="text-purple-200">
            มาโครสามารถเรียกตัวเองได้
            ซึ่งมีประโยชน์สำหรับงานที่ต้องทำซ้ำจนกว่าจะถึงเงื่อนไขบางอย่าง
          </p>

          <div className="p-4 bg-purple-900/20 border border-purple-500/20 rounded">
            <h5 className="font-semibold text-purple-300 mb-2">
              ตัวอย่างมาโครเรียกซ้ำ:
            </h5>
            <div className="text-xs font-mono space-y-1 bg-black/40 rounded p-3">
              <div className="text-yellow-300">qa</div>
              <div className="text-gray-400">-- เริ่มบันทึกมาโคร a</div>
              <div className="text-green-300">j</div>
              <div className="text-gray-400">-- ลงหนึ่งบรรทัด</div>
              <div className="text-green-300">0</div>
              <div className="text-gray-400">-- ไปต้นบรรทัด</div>
              <div className="text-green-300">@a</div>
              <div className="text-gray-400">-- เรียกมาโคร a (ตัวเอง)</div>
              <div className="text-yellow-300">q</div>
              <div className="text-gray-400">-- หยุดบันทึก</div>
            </div>
            <div className="text-xs text-purple-200 mt-2">
              มาโครนี้จะเลื่อนลงทีละบรรทัดและเรียกตัวเองต่อไป จนกว่าจะผิดพลาด
              (เช่น ถึงท้ายไฟล์)
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded">
            <h5 className="font-semibold text-red-300 mb-2">
              ⚠️ ข้อระวังสำหรับมาโครเรียกซ้ำ:
            </h5>
            <div className="text-xs text-red-200 space-y-1">
              <p>• ต้องมีเงื่อนไขในการหยุด (เช่น ข้อผิดพลาด, ถึงท้ายไฟล์)</p>
              <p>• ควรทดสอบด้วยข้อมูลเล็กๆ ก่อน</p>
              <p>• ใช้ Ctrl-C เพื่อหยุดมาโครที่วนซ้ำไม่รู้จบ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practical Examples */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-indigo-800/20 border border-indigo-500/30 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-indigo-300 mb-3">
          💡 ตัวอย่างการใช้งานจริง
        </h4>

        <div className="space-y-4 text-gray-200 text-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-indigo-300 mb-2">
                ตัวอย่าง 1: จัดรูปแบบรายการ
              </h5>
              <div className="p-3 bg-black/40 rounded text-xs font-mono">
                <div>qa</div>
                <div>I- &lt;Esc&gt;</div>
                <div>A.&lt;Esc&gt;</div>
                <div>j</div>
                <div>q</div>
              </div>
              <div className="text-xs text-indigo-200 mt-1">
                เพิ่ม "- " ที่ต้นบรรทัดและ "." ที่ท้ายบรรทัด แล้วไปบรรทัดถัดไป
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-indigo-300 mb-2">
                ตัวอย่าง 2: เปลี่ยนรูปแบบข้อมูล
              </h5>
              <div className="p-3 bg-black/40 rounded text-xs font-mono">
                <div>qb</div>
                <div>f,</div>
                <div>r|</div>
                <div>j</div>
                <div>q</div>
              </div>
              <div className="text-xs text-indigo-200 mt-1">
                หาเครื่องหมาย , และเปลี่ยนเป็น | แล้วไปบรรทัดถัดไป
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
