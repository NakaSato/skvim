import React from "react";

export const ConfigTab: React.FC = () => {
  return (
    <div className="space-y-6" style={{ fontFamily: 'Anuphan, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-2xl border border-indigo-400/30">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          การตั้งค่า VIM (.vimrc)
        </h3>
        <p className="text-indigo-100 leading-relaxed">
          ปรับแต่ง VIM ให้เหมาะกับสไตล์การทำงานของคุณ
          การตั้งค่าที่ดีจะเพิ่มประสิทธิภาพการใช้งานอย่างมาก
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 border-b border-slate-600/30">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>🔧</span>
              การตั้งค่าพื้นฐาน
            </h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-950 border border-slate-700/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <div className="space-y-1">
                <div>
                  <span className="text-slate-500">" การแสดงผล</span>
                </div>
                <div className="text-green-400">set number</div>
                <div className="text-green-400">set relativenumber</div>
                <div className="text-green-400">set cursorline</div>
                <div className="text-green-400">set showmatch</div>
                <div className="text-green-400">set wrap</div>
                <div>
                  <br />
                </div>
                <div>
                  <span className="text-slate-500">" การค้นหา</span>
                </div>
                <div className="text-green-400">set hlsearch</div>
                <div className="text-green-400">set incsearch</div>
                <div className="text-green-400">set ignorecase</div>
                <div className="text-green-400">set smartcase</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 border-b border-slate-600/30">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>⌨️</span>
              การตั้งค่า Indentation
            </h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-950 border border-slate-700/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <div className="space-y-1">
                <div>
                  <span className="text-slate-500">" Tab และ Spaces</span>
                </div>
                <div className="text-blue-400">set tabstop=4</div>
                <div className="text-blue-400">set shiftwidth=4</div>
                <div className="text-blue-400">set expandtab</div>
                <div className="text-blue-400">set smartindent</div>
                <div className="text-blue-400">set autoindent</div>
                <div>
                  <br />
                </div>
                <div>
                  <span className="text-slate-500">
                    " สำหรับไฟล์ที่ต้องการ 2 spaces
                  </span>
                </div>
                <div className="text-blue-400">autocmd FileType javascript,json,html</div>
                <div className="text-blue-400">\ setlocal tabstop=2 shiftwidth=2</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 border-b border-slate-600/30">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <span>🎨</span>
            การตั้งค่าสี และ Theme
          </h4>
        </div>
        <div className="p-6">
          <div className="bg-slate-950 border border-slate-700/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
            <div className="space-y-1">
              <div>
                <span className="text-slate-500">" เปิดใช้งานสี</span>
              </div>
              <div className="text-purple-400">syntax enable</div>
              <div className="text-purple-400">set background=dark</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-slate-500">
                  " ติดตั้ง colorscheme (ต้องติดตั้งเพิ่ม)
                </span>
              </div>
              <div className="text-purple-400">colorscheme gruvbox</div>
              <div>
                <span className="text-slate-500">" หรือ colorscheme molokai</span>
              </div>
              <div>
                <span className="text-slate-500">
                  " หรือ colorscheme solarized
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4 border-b border-slate-600/30">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>⚡</span>
              Key Mappings
            </h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-950 border border-slate-700/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <div className="space-y-1">
                <div>
                  <span className="text-slate-500">" Leader key</span>
                </div>
                <div className="text-orange-400">let mapleader = ","</div>
                <div>
                  <br />
                </div>
                <div>
                  <span className="text-slate-500">" บันทึกไฟล์เร็ว</span>
                </div>
                <div className="text-orange-400">nnoremap &lt;leader&gt;w :w&lt;CR&gt;</div>
                <div>
                  <br />
                </div>
                <div>
                  <span className="text-slate-500">" ปิด highlight</span>
                </div>
                <div className="text-orange-400">nnoremap &lt;leader&gt;h :noh&lt;CR&gt;</div>
                <div>
                  <br />
                </div>
                <div>
                  <span className="text-slate-500">" แยก window</span>
                </div>
                <div className="text-orange-400">nnoremap &lt;leader&gt;v :vsplit&lt;CR&gt;</div>
                <div className="text-orange-400">nnoremap &lt;leader&gt;s :split&lt;CR&gt;</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
          <div className="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-4 border-b border-slate-600/30">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>🚀</span>
              การตั้งค่าประสิทธิภาพ
            </h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-950 border border-slate-700/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <div className="space-y-1">
                <div>
                  <span className="text-slate-500">" ประสิทธิภาพ</span>
                </div>
                <div className="text-red-400">set lazyredraw</div>
                <div className="text-red-400">set ttyfast</div>
                <div>
                  <br />
                </div>
                <div>
                  <span className="text-slate-500">" การบันทึกอัตโนมัติ</span>
                </div>
                <div className="text-red-400">set autowrite</div>
                <div className="text-red-400">set autoread</div>
                <div>
                  <br />
                </div>
                <div>
                  <span className="text-slate-500">" History และ Undo</span>
                </div>
                <div className="text-red-400">set history=1000</div>
                <div className="text-red-400">set undolevels=1000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
        <div className="bg-gradient-to-r from-gray-600 to-slate-600 px-6 py-4 border-b border-slate-600/30">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📦</span>
            Plugins แนะนำ
          </h4>
        </div>
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h5 className="font-bold text-blue-300 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Plugin Manager:
              </h5>
              <div className="space-y-3 text-sm">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 p-4 rounded-xl">
                  <span className="font-bold text-blue-300">Vim-Plug</span>
                  <p className="text-slate-300 mt-1">จัดการ plugin ง่าย</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 p-4 rounded-xl">
                  <span className="font-bold text-blue-300">Pathogen</span>
                  <p className="text-slate-300 mt-1">plugin manager คลาสสิก</p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-green-300 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Essential Plugins:
              </h5>
              <div className="space-y-3 text-sm">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 p-4 rounded-xl">
                  <span className="font-bold text-green-300">NERDTree</span>
                  <p className="text-slate-300 mt-1">File explorer</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 p-4 rounded-xl">
                  <span className="font-bold text-green-300">fzf.vim</span>
                  <p className="text-slate-300 mt-1">Fuzzy finder</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 p-4 rounded-xl">
                  <span className="font-bold text-green-300">vim-airline</span>
                  <p className="text-slate-300 mt-1">Status bar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 shadow-2xl border border-yellow-400/30">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>💡</span>
          การติดตั้งและจัดการ .vimrc
        </h4>
        <div className="grid gap-6 md:grid-cols-2 text-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <h5 className="font-bold text-white mb-3">ตำแหน่งไฟล์ .vimrc:</h5>
            <ul className="space-y-2 text-yellow-100">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                Linux/Mac: <code className="bg-black/30 px-2 py-1 rounded text-yellow-200">~/.vimrc</code>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                Windows: <code className="bg-black/30 px-2 py-1 rounded text-yellow-200">%USERPROFILE%\_vimrc</code>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                หรือ <code className="bg-black/30 px-2 py-1 rounded text-yellow-200">:echo $MYVIMRC</code> ใน VIM
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <h5 className="font-bold text-white mb-3">การทดสอบการตั้งค่า:</h5>
            <ul className="space-y-2 text-yellow-100">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <code className="bg-black/30 px-2 py-1 rounded text-yellow-200">:source ~/.vimrc</code> - โหลดใหม่
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <code className="bg-black/30 px-2 py-1 rounded text-yellow-200">:set number?</code> - ตรวจสอบค่า
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                แยกการตั้งค่าออกเป็นส่วนๆ
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
        <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-6 py-4 border-b border-slate-600/30">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📋</span>
            ไฟล์ .vimrc ตัวอย่างสำหรับมือใหม่
          </h4>
        </div>
        <div className="p-6">
          <div className="bg-slate-950 border border-slate-700/50 rounded-xl p-4 font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
            <div className="space-y-1">
              <div>
                <span className="text-slate-500">
                  " ===========================================
                </span>
              </div>
              <div>
                <span className="text-slate-500">
                  " Basic VIM Configuration for Beginners
                </span>
              </div>
              <div>
                <span className="text-slate-500">
                  " ===========================================
                </span>
              </div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-slate-500">" การแสดงผล</span>
              </div>
              <div className="text-green-400">set number relativenumber</div>
              <div className="text-green-400">set cursorline</div>
              <div className="text-green-400">set showmatch</div>
              <div className="text-green-400">syntax enable</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-slate-500">" การค้นหา</span>
              </div>
              <div className="text-green-400">set hlsearch incsearch</div>
              <div className="text-green-400">set ignorecase smartcase</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-slate-500">" Indentation</span>
              </div>
              <div className="text-green-400">set tabstop=4 shiftwidth=4</div>
              <div className="text-green-400">set expandtab smartindent</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-slate-500">" Key Mappings</span>
              </div>
              <div className="text-green-400">let mapleader = ","</div>
              <div className="text-green-400">nnoremap &lt;leader&gt;w :w&lt;CR&gt;</div>
              <div className="text-green-400">nnoremap &lt;leader&gt;q :q&lt;CR&gt;</div>
              <div className="text-green-400">nnoremap &lt;leader&gt;h :noh&lt;CR&gt;</div>
              <div>
                <br />
              </div>
              <div>
                <span className="text-slate-500">" ประสิทธิภาพ</span>
              </div>
              <div className="text-green-400">set lazyredraw</div>
              <div className="text-green-400">set history=1000</div>
              <div className="text-green-400">set undolevels=1000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 shadow-2xl border border-red-400/30">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>⚠️</span>
          ข้อควรระวัง
        </h4>
        <div className="grid gap-6 md:grid-cols-2 text-sm text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <span className="font-bold text-red-100 block mb-3">การสำรองข้อมูล:</span>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-200 rounded-full mt-2 flex-shrink-0"></div>
                <span>สำรอง .vimrc เดิมก่อนแก้ไข</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-200 rounded-full mt-2 flex-shrink-0"></div>
                <span>ทดสอบการตั้งค่าใหม่ทีละส่วน</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-200 rounded-full mt-2 flex-shrink-0"></div>
                <span>เก็บ .vimrc ใน version control</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <span className="font-bold text-red-100 block mb-3">การแก้ไขปัญหา:</span>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-200 rounded-full mt-2 flex-shrink-0"></div>
                <span>หากมีปัญหา ลองใช้ <code className="bg-black/30 px-1 py-0.5 rounded text-red-200">vim -u NONE</code></span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-200 rounded-full mt-2 flex-shrink-0"></div>
                <span>ตรวจสอบ syntax ใน .vimrc</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-200 rounded-full mt-2 flex-shrink-0"></div>
                <span>อ่าน error message ที่ปรากฏ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
