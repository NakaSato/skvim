import React from "react";

export const LearningPathTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">
          เส้นทางการเรียนรู้ VIM
        </h3>
        <p className="text-emerald-700">
          แผนการเรียนรู้ VIM อย่างเป็นระบบ จากมือใหม่สู่ระดับเซียน
          พร้อมแหล่งเรียนรู้และการฝึกฝน
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
              1
            </span>
            <h4 className="text-lg font-semibold text-green-700">
              มือใหม่ (สัปดาห์ที่ 1-2)
            </h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="bg-white p-3 rounded shadow-sm">
              <h5 className="font-semibold text-green-600">เป้าหมาย:</h5>
              <p>ใช้ VIM แทน text editor อื่นได้</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold">ฝึกคำสั่ง:</h5>
              <ul className="space-y-1 text-green-700">
                <li>
                  • <code>h j k l</code> - การเคลื่อนที่
                </li>
                <li>
                  • <code>i a o Esc</code> - เข้า/ออก Insert Mode
                </li>
                <li>
                  • <code>:wq :q!</code> - บันทึกและออก
                </li>
                <li>
                  • <code>x dd u</code> - ลบและ undo
                </li>
              </ul>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <span className="font-semibold">เวลาฝึก:</span> 30 นาที/วัน
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
              2
            </span>
            <h4 className="text-lg font-semibold text-blue-700">
              ระดับกลาง (สัปดาห์ที่ 3-6)
            </h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="bg-white p-3 rounded shadow-sm">
              <h5 className="font-semibold text-blue-600">เป้าหมาย:</h5>
              <p>แก้ไขโค้ดได้เร็วกว่า IDE</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold">ฝึกคำสั่ง:</h5>
              <ul className="space-y-1 text-blue-700">
                <li>
                  • <code>w b e</code> - เคลื่อนที่ระดับคำ
                </li>
                <li>
                  • <code>gg G 0 $</code> - jump commands
                </li>
                <li>
                  • <code>yy p</code> - copy & paste
                </li>
                <li>
                  • <code>/ ? n N</code> - การค้นหา
                </li>
                <li>
                  • <code>v V</code> - Visual Mode
                </li>
              </ul>
            </div>
            <div className="bg-blue-100 p-2 rounded">
              <span className="font-semibold">เวลาฝึก:</span> 45 นาที/วัน
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
              3
            </span>
            <h4 className="text-lg font-semibold text-purple-700">
              ระดับสูง (เดือนที่ 2-3)
            </h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="bg-white p-3 rounded shadow-sm">
              <h5 className="font-semibold text-purple-600">เป้าหมาย:</h5>
              <p>เชี่ยวชาญคำสั่งขั้นสูง</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold">ฝึกคำสั่ง:</h5>
              <ul className="space-y-1 text-purple-700">
                <li>
                  • Text Objects: <code>ciw daw</code>
                </li>
                <li>
                  • <code>f F t T</code> - find chars
                </li>
                <li>
                  • <code>:</code> commands: <code>%s/old/new/g</code>
                </li>
                <li>
                  • Macros: <code>q @ @@</code>
                </li>
                <li>• Multiple windows</li>
              </ul>
            </div>
            <div className="bg-purple-100 p-2 rounded">
              <span className="font-semibold">เวลาฝึก:</span> 60 นาที/วัน
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-4">📚 แหล่งเรียนรู้แนะนำ</h4>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="font-semibold text-blue-600 mb-3">
              📖 หนังสือและเอกสาร:
            </h5>
            <div className="space-y-2 text-sm">
              <div className="bg-blue-50 p-3 rounded">
                <span className="font-bold">Practical Vim</span>
                <div className="text-gray-600">
                  โดย Drew Neil - หนังสือที่ดีที่สุดสำหรับ VIM
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <span className="font-bold">VIM Documentation</span>
                <div className="text-gray-600">
                  :help ใน VIM หรือ online docs
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <span className="font-bold">VimCasts</span>
                <div className="text-gray-600">
                  Video tutorials โดย Drew Neil
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-green-600 mb-3">
              🎮 เกมและการฝึกฝน:
            </h5>
            <div className="space-y-2 text-sm">
              <div className="bg-green-50 p-3 rounded">
                <span className="font-bold">VimTutor</span>
                <div className="text-gray-600">
                  พิมพ์ <code>vimtutor</code> ใน terminal
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <span className="font-bold">Vim Adventures</span>
                <div className="text-gray-600">เกมออนไลน์สำหรับเรียน VIM</div>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <span className="font-bold">VimGolf</span>
                <div className="text-gray-600">
                  แข่งขันแก้ไขไฟล์ด้วยคำสั่งน้อยที่สุด
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-4">🎯 แผนฝึกฝนรายวัน</h4>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-semibold">วอร์มอัพ (5 นาที):</h5>
            <p className="text-sm text-gray-600">
              ฝึก hjkl ไปมา, เข้า-ออก Insert Mode ให้ลื่น
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-semibold">เรียนคำสั่งใหม่ (15 นาที):</h5>
            <p className="text-sm text-gray-600">
              เลือกคำสั่งใหม่ 1-2 คำสั่ง ฝึกจนคล่อง
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-semibold">ใช้งานจริง (20 นาที):</h5>
            <p className="text-sm text-gray-600">
              ใช้ VIM ทำงานจริง แก้ไขโค้ดหรือเขียนเอกสาร
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h5 className="font-semibold">ท้าทายตัวเอง (10 นาที):</h5>
            <p className="text-sm text-gray-600">
              ลอง VimGolf หรือหาวิธีทำงานด้วยคำสั่งน้อยลง
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-yellow-800 mb-3">
            ⚡ เคล็ดลับการเรียนรู้เร็ว
          </h4>
          <ul className="space-y-2 text-sm text-yellow-700">
            <li>
              • <strong>ใช้เป็นประจำ:</strong> บังคับตัวเองใช้ VIM ทุกวัน
            </li>
            <li>
              • <strong>ไม่ใช้ลูกศร:</strong> disable arrow keys ใน .vimrc
            </li>
            <li>
              • <strong>เรียนทีละน้อย:</strong> เรียนคำสั่งใหม่ 1-2
              คำสั่งต่อสัปดาห์
            </li>
            <li>
              • <strong>ฝึกกับโค้ดจริง:</strong> อย่าฝึกแค่ในไฟล์ทดลอง
            </li>
            <li>
              • <strong>จด Cheat Sheet:</strong> เขียนคำสั่งที่ใช้บ่อยไว้
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-red-800 mb-3">
            🚫 สิ่งที่ควรหลีกเลี่ยง
          </h4>
          <ul className="space-y-2 text-sm text-red-700">
            <li>
              • <strong>เรียนมากเกินไป:</strong> จะสับสนและท้อ
            </li>
            <li>
              • <strong>ใช้ mouse:</strong> จะทำให้เก่งช้า
            </li>
            <li>
              • <strong>ย้อนกลับไป IDE:</strong> เมื่อเจอปัญหา
            </li>
            <li>
              • <strong>จำแค่ shortcuts:</strong> ไม่เข้าใจหลักการ
            </li>
            <li>
              • <strong>ไม่ customize:</strong> ตั้งค่าให้เหมาะกับตัวเอง
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-3">
          📈 เครื่องมือวัดความก้าวหน้า
        </h4>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              สัปดาห์ที่ 1
            </div>
            <div className="text-sm text-gray-600">
              สามารถแก้ไขไฟล์พื้นฐานได้
            </div>
            <div className="mt-2 text-xs text-green-500">
              ✓ เปิด แก้ไข บันทึก ออก
            </div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">เดือนที่ 1</div>
            <div className="text-sm text-gray-600">
              แก้ไขได้เร็วกว่า text editor
            </div>
            <div className="mt-2 text-xs text-blue-500">
              ✓ copy/paste, search, visual
            </div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">เดือนที่ 3</div>
            <div className="text-sm text-gray-600">
              เชี่ยวชาญ text objects และ macros
            </div>
            <div className="mt-2 text-xs text-purple-500">
              ✓ advanced editing, plugins
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-indigo-800 mb-3">
          🏆 เป้าหมายระยะยาว
        </h4>
        <div className="grid gap-3 md:grid-cols-2 text-sm">
          <div>
            <h5 className="font-semibold mb-2">หลังจาก 6 เดือน:</h5>
            <ul className="space-y-1 text-indigo-700">
              <li>• แก้ไขโค้ดได้เร็วกว่า IDE มาก</li>
              <li>• ใช้ macros แก้ไขแบบ bulk ได้</li>
              <li>• ตั้งค่า .vimrc ได้เองครบครัน</li>
              <li>• รู้จัก text objects ทุกประเภท</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">หลังจาก 1 ปี:</h5>
            <ul className="space-y-1 text-indigo-700">
              <li>• สอนคนอื่นใช้ VIM ได้</li>
              <li>• เขียน custom functions</li>
              <li>• ใช้ VIM แทน IDE ได้เต็มที่</li>
              <li>• แก้ปัญหา complex editing ได้</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
