import React from "react";

export const ModesTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          โหมดการทำงานของ VIM
        </h3>
        <p className="text-blue-700">
          VIM มีหลายโหมดการทำงาน แต่ละโหมดมีหน้าที่เฉพาะ
          เรียนรู้การสลับโหมดจะทำให้ใช้ VIM ได้อย่างมีประสิทธิภาพ
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-xl font-bold text-green-700 mb-3">Normal Mode</h4>
          <p className="text-gray-600 mb-3">
            โหมดหลัก ใช้สำหรับการนำทาง แก้ไข และสั่งการ
          </p>
          <div className="space-y-2">
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">
                Esc
              </span>
              <span className="ml-2">เข้าสู่ Normal Mode</span>
            </div>
            <div className="text-sm text-gray-600">
              • เป็นโหมดเริ่มต้นเมื่อเปิด VIM
              <br />
              • ใช้คำสั่งต่างๆ เช่น การลบ คัดลอก ย้าย
              <br />• ไม่สามารถพิมพ์ข้อความได้โดยตรง
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-xl font-bold text-blue-700 mb-3">Insert Mode</h4>
          <p className="text-gray-600 mb-3">โหมดสำหรับพิมพ์และแก้ไขข้อความ</p>
          <div className="space-y-2">
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded mr-2">
                i
              </span>
              <span>แทรกที่ตำแหน่ง cursor</span>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded mr-2">
                a
              </span>
              <span>แทรกหลัง cursor</span>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded mr-2">
                o
              </span>
              <span>สร้างบรรทัดใหม่ข้างล่าง</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h4 className="text-xl font-bold text-purple-700 mb-3">
            Visual Mode
          </h4>
          <p className="text-gray-600 mb-3">โหมดสำหรับเลือกข้อความ</p>
          <div className="space-y-2">
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded mr-2">
                v
              </span>
              <span>เลือกตัวอักษร</span>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded mr-2">
                V
              </span>
              <span>เลือกทั้งบรรทัด</span>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded mr-2">
                Ctrl+v
              </span>
              <span>เลือกแบบบล็อก</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <h4 className="text-xl font-bold text-orange-700 mb-3">
            Command Mode
          </h4>
          <p className="text-gray-600 mb-3">โหมดสำหรับใช้คำสั่งขั้นสูง</p>
          <div className="space-y-2">
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded mr-2">
                :
              </span>
              <span>เข้าสู่ Command Mode</span>
            </div>
            <div className="text-sm text-gray-600">
              • บันทึกไฟล์ :w
              <br />
              • ออกจากโปรแกรม :q
              <br />
              • ค้นหาและแทนที่ :%s/old/new/g
              <br />• เปิดไฟล์ :e filename
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">
          💡 เคล็ดลับการสลับโหมด
        </h4>
        <div className="grid gap-3 md:grid-cols-2 text-sm">
          <div>
            <span className="font-semibold">จาก Normal → Insert:</span>
            <div className="ml-4 space-y-1">
              <div>
                <code>i</code> - แทรกที่ cursor
              </div>
              <div>
                <code>a</code> - แทรกหลัง cursor
              </div>
              <div>
                <code>o</code> - บรรทัดใหม่ข้างล่าง
              </div>
            </div>
          </div>
          <div>
            <span className="font-semibold">กลับสู่ Normal Mode:</span>
            <div className="ml-4">
              <div>
                <code>Esc</code> - จากโหมดใดก็ได้
              </div>
              <div>
                <code>Ctrl+c</code> - ทางเลือกของ Esc
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-3">การรู้จักโหมดปัจจุบัน</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-8 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-mono">NORMAL</span>
            </div>
            <span>ไม่มีข้อความแสดงที่ด้านล่าง (โหมดปกติ)</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-8 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-xs font-mono">INSERT</span>
            </div>
            <span>แสดง "-- INSERT --" ที่ด้านล่าง</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-8 bg-purple-100 rounded flex items-center justify-center">
              <span className="text-xs font-mono">VISUAL</span>
            </div>
            <span>แสดง "-- VISUAL --" ที่ด้านล่าง</span>
          </div>
        </div>
      </div>
    </div>
  );
};
