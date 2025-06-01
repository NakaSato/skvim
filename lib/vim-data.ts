// VIM Commands Data
export interface VimCommand {
  key: string;
  desc: string;
  category: string;
}

export const basicCommands: VimCommand[] = [
  {
    key: "h, j, k, l",
    desc: "เลื่อนซ้าย, ลง, ขึ้น, ขวา",
    category: "navigation",
  },
  { key: "w, b", desc: "ข้ามไปคำถัดไป, คำก่อนหน้า", category: "navigation" },
  { key: "e", desc: "ไปท้ายคำ", category: "navigation" },
  { key: "0, $", desc: "ต้นบรรทัด, ท้ายบรรทัด", category: "navigation" },
  { key: "gg, G", desc: "ไปบรรทัดแรก, บรรทัดสุดท้าย", category: "navigation" },
  {
    key: "i, a",
    desc: "แทรกข้อความที่ cursor, หลัง cursor",
    category: "insert",
  },
  { key: "I, A", desc: "แทรกที่ต้นบรรทัด, ท้ายบรรทัด", category: "insert" },
  { key: "o, O", desc: "สร้างบรรทัดใหม่ข้างล่าง, ข้างบน", category: "insert" },
  { key: "x", desc: "ลบตัวอักษรที่ cursor", category: "delete" },
  { key: "dd", desc: "ลบบรรทัด", category: "delete" },
  { key: "dw", desc: "ลบคำ", category: "delete" },
  { key: "yy", desc: "คัดลอกบรรทัด", category: "copy" },
  { key: "yw", desc: "คัดลอกคำ", category: "copy" },
  {
    key: "p, P",
    desc: "วางข้อความหลัง cursor, ก่อน cursor",
    category: "paste",
  },
  { key: "u", desc: "undo การเปลี่ยนแปลง", category: "undo" },
  { key: "Ctrl+r", desc: "redo การเปลี่ยนแปลง", category: "undo" },
  { key: ":w", desc: "บันทึกไฟล์", category: "file" },
  { key: ":q", desc: "ปิดไฟล์", category: "file" },
  { key: ":wq", desc: "บันทึกและปิด", category: "file" },
  { key: ":q!", desc: "ปิดโดยไม่บันทึก", category: "file" },
];

export const advancedCommands: VimCommand[] = [
  { key: 'ci"', desc: "เปลี่ยนข้อความใน quotes", category: "text-objects" },
  {
    key: "ca(",
    desc: "เปลี่ยนข้อความรอบ parentheses",
    category: "text-objects",
  },
  { key: "di{", desc: "ลบข้อความใน braces", category: "text-objects" },
  { key: "yi[", desc: "คัดลอกข้อความใน brackets", category: "text-objects" },
  { key: "f{char}", desc: "หาตัวอักษรไปข้างหน้า", category: "navigation" },
  { key: "t{char}", desc: "ไปก่อนตัวอักษรข้างหน้า", category: "navigation" },
  { key: "F{char}", desc: "หาตัวอักษรไปข้างหลัง", category: "navigation" },
  { key: "T{char}", desc: "ไปหลังตัวอักษรข้างหลัง", category: "navigation" },
  { key: "%", desc: "ไปยังวงเล็บ/ปีกกาคู่กัน", category: "navigation" },
  { key: "*", desc: "หาคำที่ cursor อยู่ (ไปข้างหน้า)", category: "search" },
  { key: "#", desc: "หาคำที่ cursor อยู่ (ไปข้างหลัง)", category: "search" },
  { key: ".", desc: "ทำซ้ำคำสั่งล่าสุด", category: "repeat" },
  { key: "qa...q", desc: "บันทึก macro ใน register a", category: "macros" },
  { key: "@a", desc: "เล่น macro จาก register a", category: "macros" },
  { key: "@@", desc: "เล่น macro ล่าสุดซ้ำ", category: "macros" },
  { key: "Ctrl+v", desc: "เลือกข้อความแบบ block", category: "visual" },
  { key: "gv", desc: "เลือกข้อความที่เลือกล่าสุด", category: "visual" },
  { key: ":split", desc: "แบ่งหน้าจอแนวนอน", category: "windows" },
  { key: ":vsplit", desc: "แบ่งหน้าจอแนวตั้ง", category: "windows" },
  { key: "Ctrl+w h/j/k/l", desc: "เปลี่ยน window", category: "windows" },
  { key: ":tabnew", desc: "สร้าง tab ใหม่", category: "tabs" },
  { key: "gt", desc: "ไป tab ถัดไป", category: "tabs" },
  { key: "gT", desc: "ไป tab ก่อนหน้า", category: "tabs" },
  { key: ":reg", desc: "ดู registers ทั้งหมด", category: "registers" },
];

export const searchCommands: VimCommand[] = [
  { key: "/pattern", desc: "ค้นหาไปข้างหน้า", category: "basic" },
  { key: "?pattern", desc: "ค้นหาไปข้างหลัง", category: "basic" },
  { key: "n", desc: "ไปผลการค้นหาถัดไป", category: "basic" },
  { key: "N", desc: "ไปผลการค้นหาก่อนหน้า", category: "basic" },
  { key: ":s/old/new/", desc: "แทนที่คำแรกในบรรทัด", category: "substitute" },
  { key: ":s/old/new/g", desc: "แทนที่ทุกคำในบรรทัด", category: "substitute" },
  { key: ":%s/old/new/g", desc: "แทนที่ทุกคำในไฟล์", category: "substitute" },
  { key: ":%s/old/new/gc", desc: "แทนที่โดยถามยืนยัน", category: "substitute" },
  {
    key: ":s/old/new/I",
    desc: "แทนที่แบบ case sensitive",
    category: "substitute",
  },
  { key: ":noh", desc: "ยกเลิกการเน้นการค้นหา", category: "basic" },
  { key: ":set hlsearch", desc: "เปิดการเน้นการค้นหา", category: "settings" },
  {
    key: ":set ignorecase",
    desc: "ไม่สนใจ case ในการค้นหา",
    category: "settings",
  },
  { key: "/\\c pattern", desc: "ค้นหาแบบไม่สนใจ case", category: "regex" },
  { key: "/\\C pattern", desc: "ค้นหาแบบสนใจ case", category: "regex" },
  {
    key: "/pattern\\c",
    desc: "ค้นหาแบบไม่สนใจ case (ต่อท้าย)",
    category: "regex",
  },
  { key: "/^pattern", desc: "ค้นหาที่ต้นบรรทัด", category: "regex" },
  { key: "/pattern$", desc: "ค้นหาที่ท้ายบรรทัด", category: "regex" },
  { key: "/\\<pattern\\>", desc: "ค้นหาคำที่ตรงทั้งคำ", category: "regex" },
];
