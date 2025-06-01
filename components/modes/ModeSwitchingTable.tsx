import React from "react";

export const ModeSwitchingTable: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-cyan-300">
        ตารางสรุปการสลับโหมดหลักใน Vim
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/5 border border-white/20 rounded-lg">
          <thead>
            <tr className="bg-white/10">
              <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                จากโหมด
              </th>
              <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                ไปยังโหมด
              </th>
              <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                คีย์ลัด
              </th>
              <th className="px-4 py-2 text-left text-cyan-300 font-semibold">
                วัตถุประสงค์
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-200 text-sm">
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Insert</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">i</kbd>
              </td>
              <td className="px-4 py-2">แทรกก่อนเคอร์เซอร์</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Insert</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">a</kbd>
              </td>
              <td className="px-4 py-2">แทรกหลังเคอร์เซอร์ (append)</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Insert</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">I</kbd>
              </td>
              <td className="px-4 py-2">แทรกที่จุดเริ่มต้นบรรทัด</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Insert</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">A</kbd>
              </td>
              <td className="px-4 py-2">แทรกที่จุดสิ้นสุดบรรทัด</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Insert</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">o</kbd>
              </td>
              <td className="px-4 py-2">เปิดบรรทัดใหม่ข้างล่าง</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Insert</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">O</kbd>
              </td>
              <td className="px-4 py-2">เปิดบรรทัดใหม่ข้างบน</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Visual</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">v</kbd>
              </td>
              <td className="px-4 py-2">เลือกข้อความทีละตัวอักษร</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Visual</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">V</kbd>
              </td>
              <td className="px-4 py-2">เลือกข้อความทีละบรรทัด</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Visual</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">Ctrl-v</kbd>
              </td>
              <td className="px-4 py-2">เลือกข้อความแบบบล็อก</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Command-Line</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">:</kbd>
              </td>
              <td className="px-4 py-2">ป้อนคำสั่ง Ex commands</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Command-Line</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">/</kbd>
              </td>
              <td className="px-4 py-2">ค้นหาไปข้างหน้า</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Command-Line</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">?</kbd>
              </td>
              <td className="px-4 py-2">ค้นหาไปข้างหลัง</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">Replace</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">R</kbd>
              </td>
              <td className="px-4 py-2">เขียนทับข้อความ</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="px-4 py-2">ทุกโหมด</td>
              <td className="px-4 py-2">Normal</td>
              <td className="px-4 py-2">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded">Esc</kbd>
              </td>
              <td className="px-4 py-2">กลับสู่โหมดปกติ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
