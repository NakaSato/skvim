import React from "react";

export const ConfigTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">
          การตั้งค่า VIM (.vimrc)
        </h3>
        <p className="text-indigo-700">
          ปรับแต่ง VIM ให้เหมาะกับสไตล์การทำงานของคุณ
          การตั้งค่าที่ดีจะเพิ่มประสิทธิภาพการใช้งานอย่างมาก
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-green-700 mb-3">
            🔧 การตั้งค่าพื้นฐาน
          </h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <div className="space-y-1">
              <div>
                <span className="text-gray-500">" การแสดงผล</span>
              </div>
              <div>set number</div>
              <div>set relativenumber</div>
              <div>set cursorline</div>
              <div>set showmatch</div>
              <div>set wrap</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-gray-500">" การค้นหา</span>
              </div>
              <div>set hlsearch</div>
              <div>set incsearch</div>
              <div>set ignorecase</div>
              <div>set smartcase</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-blue-700 mb-3">
            ⌨️ การตั้งค่า Indentation
          </h4>
          <div className="bg-gray-900 text-blue-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <div className="space-y-1">
              <div>
                <span className="text-gray-500">" Tab และ Spaces</span>
              </div>
              <div>set tabstop=4</div>
              <div>set shiftwidth=4</div>
              <div>set expandtab</div>
              <div>set smartindent</div>
              <div>set autoindent</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-gray-500">
                  " สำหรับไฟล์ที่ต้องการ 2 spaces
                </span>
              </div>
              <div>autocmd FileType javascript,json,html</div>
              <div>\ setlocal tabstop=2 shiftwidth=2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-purple-700 mb-3">
          🎨 การตั้งค่าสี และ Theme
        </h4>
        <div className="bg-gray-900 text-purple-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <div className="space-y-1">
            <div>
              <span className="text-gray-500">" เปิดใช้งานสี</span>
            </div>
            <div>syntax enable</div>
            <div>set background=dark</div>
            <div>
              <br />
            </div>
            <div>
              <span className="text-gray-500">
                " ติดตั้ง colorscheme (ต้องติดตั้งเพิ่ม)
              </span>
            </div>
            <div>colorscheme gruvbox</div>
            <div>
              <span className="text-gray-500">" หรือ colorscheme molokai</span>
            </div>
            <div>
              <span className="text-gray-500">
                " หรือ colorscheme solarized
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-orange-700 mb-3">
            ⚡ Key Mappings
          </h4>
          <div className="bg-gray-900 text-orange-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <div className="space-y-1">
              <div>
                <span className="text-gray-500">" Leader key</span>
              </div>
              <div>let mapleader = ","</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-gray-500">" บันทึกไฟล์เร็ว</span>
              </div>
              <div>nnoremap &lt;leader&gt;w :w&lt;CR&gt;</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-gray-500">" ปิด highlight</span>
              </div>
              <div>nnoremap &lt;leader&gt;h :noh&lt;CR&gt;</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-gray-500">" แยก window</span>
              </div>
              <div>nnoremap &lt;leader&gt;v :vsplit&lt;CR&gt;</div>
              <div>nnoremap &lt;leader&gt;s :split&lt;CR&gt;</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-red-700 mb-3">
            🚀 การตั้งค่าประสิทธิภาพ
          </h4>
          <div className="bg-gray-900 text-red-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <div className="space-y-1">
              <div>
                <span className="text-gray-500">" ประสิทธิภาพ</span>
              </div>
              <div>set lazyredraw</div>
              <div>set ttyfast</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-gray-500">" การบันทึกอัตโนมัติ</span>
              </div>
              <div>set autowrite</div>
              <div>set autoread</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-gray-500">" History และ Undo</span>
              </div>
              <div>set history=1000</div>
              <div>set undolevels=1000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          📦 Plugins แนะนำ
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h5 className="font-semibold text-blue-600 mb-2">
              Plugin Manager:
            </h5>
            <div className="space-y-2 text-sm">
              <div className="bg-blue-50 p-2 rounded">
                <span className="font-bold">Vim-Plug</span> - จัดการ plugin ง่าย
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <span className="font-bold">Pathogen</span> - plugin manager
                คลาสสิก
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-green-600 mb-2">
              Essential Plugins:
            </h5>
            <div className="space-y-2 text-sm">
              <div className="bg-green-50 p-2 rounded">
                <span className="font-bold">NERDTree</span> - File explorer
              </div>
              <div className="bg-green-50 p-2 rounded">
                <span className="font-bold">fzf.vim</span> - Fuzzy finder
              </div>
              <div className="bg-green-50 p-2 rounded">
                <span className="font-bold">vim-airline</span> - Status bar
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-yellow-800 mb-3">
          💡 การติดตั้งและจัดการ .vimrc
        </h4>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div>
            <h5 className="font-semibold mb-2">ตำแหน่งไฟล์ .vimrc:</h5>
            <ul className="space-y-1 text-yellow-700">
              <li>
                • Linux/Mac: <code>~/.vimrc</code>
              </li>
              <li>
                • Windows: <code>%USERPROFILE%\_vimrc</code>
              </li>
              <li>
                • หรือ <code>:echo $MYVIMRC</code> ใน VIM
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">การทดสอบการตั้งค่า:</h5>
            <ul className="space-y-1 text-yellow-700">
              <li>
                • <code>:source ~/.vimrc</code> - โหลดใหม่
              </li>
              <li>
                • <code>:set number?</code> - ตรวจสอบค่า
              </li>
              <li>• แยกการตั้งค่าออกเป็นส่วนๆ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-3">
          📋 ไฟล์ .vimrc ตัวอย่างสำหรับมือใหม่
        </h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
          <div className="space-y-1">
            <div>
              <span className="text-gray-500">
                " ===========================================
              </span>
            </div>
            <div>
              <span className="text-gray-500">
                " Basic VIM Configuration for Beginners
              </span>
            </div>
            <div>
              <span className="text-gray-500">
                " ===========================================
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span className="text-gray-500">" การแสดงผล</span>
            </div>
            <div>set number relativenumber</div>
            <div>set cursorline</div>
            <div>set showmatch</div>
            <div>syntax enable</div>
            <div>
              <br />
            </div>
            <div>
              <span className="text-gray-500">" การค้นหา</span>
            </div>
            <div>set hlsearch incsearch</div>
            <div>set ignorecase smartcase</div>
            <div>
              <br />
            </div>
            <div>
              <span className="text-gray-500">" Indentation</span>
            </div>
            <div>set tabstop=4 shiftwidth=4</div>
            <div>set expandtab smartindent</div>
            <div>
              <br />
            </div>
            <div>
              <span className="text-gray-500">" Key Mappings</span>
            </div>
            <div>let mapleader = ","</div>
            <div>nnoremap &lt;leader&gt;w :w&lt;CR&gt;</div>
            <div>nnoremap &lt;leader&gt;q :q&lt;CR&gt;</div>
            <div>nnoremap &lt;leader&gt;h :noh&lt;CR&gt;</div>
            <div>
              <br />
            </div>
            <div>
              <span className="text-gray-500">" ประสิทธิภาพ</span>
            </div>
            <div>set lazyredraw</div>
            <div>set history=1000</div>
            <div>set undolevels=1000</div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-red-800 mb-3">
          ⚠️ ข้อควรระวัง
        </h4>
        <div className="grid gap-3 md:grid-cols-2 text-sm text-red-700">
          <div>
            <span className="font-semibold">การสำรองข้อมูล:</span>
            <ul className="ml-4 space-y-1">
              <li>• สำรอง .vimrc เดิมก่อนแก้ไข</li>
              <li>• ทดสอบการตั้งค่าใหม่ทีละส่วน</li>
              <li>• เก็บ .vimrc ใน version control</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">การแก้ไขปัญหา:</span>
            <ul className="ml-4 space-y-1">
              <li>
                • หากมีปัญหา ลองใช้ <code>vim -u NONE</code>
              </li>
              <li>• ตรวจสอบ syntax ใน .vimrc</li>
              <li>• อ่าน error message ที่ปรากฏ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
