import React from "react";

export const SearchAndReplace: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-cyan-300">
        3.4. การค้นหาและแทนที่ (Search and Replace)
      </h3>

      <div className="bg-gradient-to-r from-slate-900/40 to-slate-800/20 border border-slate-500/30 rounded-lg p-6">
        <p className="text-gray-200 mb-4">
          Vim มีเครื่องมือค้นหาและแทนที่ที่มีประสิทธิภาพสูง
          ช่วยให้สามารถนำทางและแก้ไขไฟล์ขนาดใหญ่ได้อย่างรวดเร็ว
        </p>

        <div className="space-y-6">
          {/* Basic Search */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">
              การค้นหาพื้นฐาน (Basic Search)
            </h4>
            <div className="space-y-4 text-gray-200 text-sm">
              <div>
                <h5 className="font-semibold text-blue-300 mb-2">
                  คำสั่งค้นหาหลัก:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      /pattern
                    </kbd>{" "}
                    ค้นหาไปข้างหน้า (forward search)
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      ?pattern
                    </kbd>{" "}
                    ค้นหาไปข้างหลัง (backward search)
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">n</kbd>{" "}
                    ไปยังผลการค้นหาถัดไป
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">N</kbd>{" "}
                    ไปยังผลการค้นหาก่อนหน้า
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">*</kbd>{" "}
                    ค้นหาคำที่เคอร์เซอร์อยู่ (ไปข้างหน้า)
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">#</kbd>{" "}
                    ค้นหาคำที่เคอร์เซอร์อยู่ (ไปข้างหลัง)
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-blue-300 mb-2">
                  การตั้งค่าการค้นหา:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :set hlsearch
                    </kbd>{" "}
                    เปิดการเน้นผลการค้นหา
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :set ignorecase
                    </kbd>{" "}
                    ไม่สนใจตัวพิมพ์เล็ก/ใหญ่
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :set smartcase
                    </kbd>{" "}
                    สนใจตัวพิมพ์เมื่อมีตัวพิมพ์ใหญ่
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
              </div>

              <div>
                <h5 className="font-semibold text-amber-300 mb-2">
                  Range (ขอบเขต):
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :s/old/new/
                    </kbd>{" "}
                    แทนที่แรกในบรรทัดปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :s/old/new/g
                    </kbd>{" "}
                    แทนที่ทั้งหมดในบรรทัดปัจจุบัน
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :%s/old/new/
                    </kbd>{" "}
                    แทนที่แรกในทุกบรรทัด
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :%s/old/new/g
                    </kbd>{" "}
                    แทนที่ทั้งหมดในไฟล์
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :1,10s/old/new/g
                    </kbd>{" "}
                    แทนที่ในบรรทัด 1-10
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :.,$s/old/new/g
                    </kbd>{" "}
                    แทนที่จากบรรทัดปัจจุบันถึงท้ายไฟล์
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-amber-300 mb-2">
                  Flags (แฟล็ก):
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">g</kbd>{" "}
                    แทนที่ทั้งหมดในบรรทัด (global)
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">c</kbd>{" "}
                    ถามก่อนแทนที่แต่ละครั้ง (confirm)
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">i</kbd>{" "}
                    ไม่สนใจตัวพิมพ์เล็ก/ใหญ่ (ignore case)
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">I</kbd>{" "}
                    สนใจตัวพิมพ์เล็ก/ใหญ่ (case sensitive)
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-amber-300 mb-2">
                  ตัวอย่างการใช้งาน:
                </h5>
                <div className="space-y-2">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :%s/old/new/gc
                    </kbd>{" "}
                    แทนที่ทั้งไฟล์พร้อมถามยืนยัน
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :1,20s/old/new/gi
                    </kbd>{" "}
                    แทนที่บรรทัด 1-20 ไม่สนใจตัวพิมพ์
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      :%s/\&lt;old\&gt;/new/g
                    </kbd>{" "}
                    แทนที่เฉพาะคำเต็ม (whole word)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Search Patterns */}
          <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">
              รูปแบบการค้นหาขั้นสูง (Search Patterns)
            </h4>
            <div className="space-y-4 text-gray-200 text-sm">
              <div>
                <h5 className="font-semibold text-purple-300 mb-2">
                  รูปแบบพิเศษ (Special Patterns):
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">.</kbd>{" "}
                    ตัวอักษรใดๆ 1 ตัว
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">*</kbd>{" "}
                    ตัวอักษรก่อนหน้า 0 หรือมากกว่า
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">^</kbd>{" "}
                    จุดเริ่มต้นบรรทัด
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">$</kbd>{" "}
                    จุดสิ้นสุดบรรทัด
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      \&lt; \&gt;
                    </kbd>{" "}
                    ขอบเขตของคำ (word boundaries)
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">[abc]</kbd>{" "}
                    ตัวอักษร a, b, หรือ c
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-purple-300 mb-2">
                  ตัวอย่างรูปแบบขั้นสูง:
                </h5>
                <div className="space-y-2">
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      /\&lt;word\&gt;
                    </kbd>{" "}
                    ค้นหาคำ "word" เต็มๆ
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      /^function
                    </kbd>{" "}
                    ค้นหาบรรทัดที่ขึ้นต้นด้วย "function"
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">/;$</kbd>{" "}
                    ค้นหาบรรทัดที่ลงท้ายด้วย ";"
                  </div>
                  <div>
                    <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                      /[0-9]\+
                    </kbd>{" "}
                    ค้นหาตัวเลข 1 หลักขึ้นไป
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Commands */}
          <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 border border-green-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">
              คำสั่งลัด (Quick Commands)
            </h4>
            <div className="space-y-4 text-gray-200 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <kbd className="px-1 py-0.5 bg-gray-700 rounded">:noh</kbd>{" "}
                  ปิดการเน้นการค้นหา (no highlight)
                </div>
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

          {/* Search and Replace Summary Table */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-300">
              ตารางสรุปการค้นหาและแทนที่
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                      ประเภท
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
                    <td className="px-4 py-2 font-medium">การค้นหาพื้นฐาน</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        /pattern, ?pattern
                      </kbd>
                    </td>
                    <td className="px-4 py-2">ค้นหาไปข้างหน้า/หลัง</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">นำทางผลการค้นหา</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        n, N
                      </kbd>
                    </td>
                    <td className="px-4 py-2">ไปผลการค้นหาถัดไป/ก่อนหน้า</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">แทนที่ในบรรทัด</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :s/old/new/g
                      </kbd>
                    </td>
                    <td className="px-4 py-2">แทนที่ทั้งหมดในบรรทัดปัจจุบัน</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">แทนที่ทั้งไฟล์</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :%s/old/new/g
                      </kbd>
                    </td>
                    <td className="px-4 py-2">แทนที่ทั้งหมดในไฟล์</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">แทนที่พร้อมยืนยัน</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :%s/old/new/gc
                      </kbd>
                    </td>
                    <td className="px-4 py-2">แทนที่ทั้งไฟล์พร้อมถามยืนยัน</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-2 font-medium">แทนที่ในช่วง</td>
                    <td className="px-4 py-2">
                      <kbd className="px-1 py-0.5 bg-gray-700 rounded">
                        :1,10s/old/new/g
                      </kbd>
                    </td>
                    <td className="px-4 py-2">แทนที่ในบรรทัด 1-10</td>
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
