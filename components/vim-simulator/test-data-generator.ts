import { EditorState } from "./types";

export interface TestDataGenerator {
  generateJavaScriptCode(lines: number): string[];
  generateLargeFile(lines: number, type: "code" | "text" | "mixed"): string[];
  generateVimCommands(): string[];
}

export class DefaultTestDataGenerator implements TestDataGenerator {
  private javaScriptSnippets = [
    "// This is a comment about the function below",
    "function calculateSum(a, b) {",
    "  if (typeof a !== 'number' || typeof b !== 'number') {",
    "    throw new Error('Invalid input: both arguments must be numbers');",
    "  }",
    "  return a + b;",
    "}",
    "",
    "const userPreferences = {",
    "  theme: 'dark',",
    "  fontSize: 14,",
    "  autoSave: true,",
    "  language: 'en-US'",
    "};",
    "",
    "class DataProcessor {",
    "  constructor(options = {}) {",
    "    this.options = { ...userPreferences, ...options };",
    "    this.cache = new Map();",
    "  }",
    "",
    "  async processData(input) {",
    "    try {",
    "      const result = await this.validateInput(input);",
    "      this.cache.set(input, result);",
    "      return result;",
    "    } catch (error) {",
    "      console.error('Processing failed:', error.message);",
    "      return null;",
    "    }",
    "  }",
    "",
    "  validateInput(input) {",
    "    return new Promise((resolve, reject) => {",
    "      if (!input || input.length === 0) {",
    "        reject(new Error('Input cannot be empty'));",
    "      }",
    "      resolve(input.trim().toLowerCase());",
    "    });",
    "  }",
    "}",
  ];

  private textContent = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
    "Officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde.",
    "Omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.",
    "Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
    "Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  ];

  generateJavaScriptCode(lines: number): string[] {
    const result: string[] = [];
    const snippetLength = this.javaScriptSnippets.length;

    for (let i = 0; i < lines; i++) {
      const snippetIndex = i % snippetLength;
      const lineNumber = Math.floor(i / snippetLength) + 1;

      if (snippetIndex === 0 && i > 0) {
        result.push(""); // Add blank line between repetitions
        result.push(`// === Section ${lineNumber} ===`);
      }

      result.push(this.javaScriptSnippets[snippetIndex]);
    }

    return result.slice(0, lines);
  }

  generateLargeFile(lines: number, type: "code" | "text" | "mixed"): string[] {
    switch (type) {
      case "code":
        return this.generateJavaScriptCode(lines);

      case "text":
        return this.generateTextContent(lines);

      case "mixed":
        return this.generateMixedContent(lines);

      default:
        return this.generateJavaScriptCode(lines);
    }
  }

  private generateTextContent(lines: number): string[] {
    const result: string[] = [];

    for (let i = 0; i < lines; i++) {
      const textIndex = i % this.textContent.length;
      const paragraph = Math.floor(i / this.textContent.length) + 1;

      if (textIndex === 0 && i > 0) {
        result.push(""); // Paragraph break
        result.push(`Paragraph ${paragraph}:`);
      }

      result.push(this.textContent[textIndex]);
    }

    return result.slice(0, lines);
  }

  private generateMixedContent(lines: number): string[] {
    const result: string[] = [];
    const codeBlockSize = 20;
    const textBlockSize = 10;

    for (let i = 0; i < lines; i++) {
      const blockIndex = Math.floor(i / (codeBlockSize + textBlockSize));
      const positionInCycle = i % (codeBlockSize + textBlockSize);

      if (positionInCycle === 0) {
        result.push(
          `// ========== Block ${blockIndex + 1}: Code Section ==========`
        );
      } else if (positionInCycle === codeBlockSize) {
        result.push("");
        result.push("/**");
        result.push(" * Documentation Section");
        result.push(" */");
      } else if (positionInCycle < codeBlockSize) {
        // Generate code
        const codeIndex =
          (positionInCycle - 1) % this.javaScriptSnippets.length;
        result.push(this.javaScriptSnippets[codeIndex]);
      } else {
        // Generate text
        const textIndex =
          (positionInCycle - codeBlockSize - 1) % this.textContent.length;
        result.push(" * " + this.textContent[textIndex]);
      }
    }

    return result.slice(0, lines);
  }

  generateVimCommands(): string[] {
    return [
      '" Vim Configuration Example',
      "set number",
      "set relativenumber",
      "set tabstop=4",
      "set shiftwidth=4",
      "set expandtab",
      "set autoindent",
      "set smartindent",
      "set wrap",
      "set linebreak",
      "set showmatch",
      "set incsearch",
      "set hlsearch",
      "set ignorecase",
      "set smartcase",
      "",
      '" Key mappings',
      "nnoremap <leader>w :w<CR>",
      "nnoremap <leader>q :q<CR>",
      "nnoremap <leader>e :e<CR>",
      "inoremap jk <Esc>",
      "",
      '" Plugin configuration',
      "call plug#begin('~/.vim/plugged')",
      "Plug 'preservim/nerdtree'",
      "Plug 'junegunn/fzf.vim'",
      "Plug 'tpope/vim-fugitive'",
      "call plug#end()",
    ];
  }
}

// Utility functions for creating test states
export function createTestState(
  lines: string[],
  cursorLine: number = 0,
  cursorColumn: number = 0
): Partial<EditorState> {
  return {
    lines,
    cursor: { line: cursorLine, column: cursorColumn },
    mode: "NORMAL" as const,
    registers: {},
    undoStack: [],
    redoStack: [],
    commandBuffer: "",
    statusMessage: "Ready",
    lastCommand: "",
    countPrefix: "",
  };
}

export function createPerformanceTestSuite() {
  const generator = new DefaultTestDataGenerator();

  return {
    small: generator.generateJavaScriptCode(50),
    medium: generator.generateJavaScriptCode(200),
    large: generator.generateJavaScriptCode(1000),
    extraLarge: generator.generateJavaScriptCode(5000),
    massive: generator.generateJavaScriptCode(20000),

    // Specialized content
    vimConfig: generator.generateVimCommands(),
    mixedContent: generator.generateLargeFile(500, "mixed"),
    plainText: generator.generateLargeFile(300, "text"),
  };
}

// Demo data for showcasing features
export const demoContent = {
  javascript: `// Modern JavaScript Features Demo
const API_BASE_URL = 'https://api.example.com';

class UserManager {
  constructor(apiUrl = API_BASE_URL) {
    this.apiUrl = apiUrl;
    this.cache = new Map();
  }

  async fetchUser(userId) {
    if (this.cache.has(userId)) {
      return this.cache.get(userId);
    }

    try {
      const response = await fetch(\`\${this.apiUrl}/users/\${userId}\`);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const user = await response.json();
      this.cache.set(userId, user);
      return user;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw error;
    }
  }

  // Using modern destructuring and default parameters
  updateUser(userId, { name, email, preferences = {} } = {}) {
    const updates = {
      ...(name && { name }),
      ...(email && { email }),
      preferences: { ...preferences }
    };
    
    return this.apiCall('PATCH', \`/users/\${userId}\`, updates);
  }

  // Arrow function with implicit return
  getUserPreferences = (userId) => 
    this.fetchUser(userId).then(user => user.preferences || {});

  // Async generator for pagination
  async* getAllUsers(pageSize = 10) {
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await this.apiCall('GET', '/users', {
        page,
        limit: pageSize
      });

      yield* response.users;
      
      hasMore = response.users.length === pageSize;
      page++;
    }
  }
}

// Usage example with modern syntax
const userManager = new UserManager();

(async () => {
  try {
    // Parallel requests with Promise.all
    const [user1, user2] = await Promise.all([
      userManager.fetchUser(1),
      userManager.fetchUser(2)
    ]);

    console.log('Users loaded:', { user1, user2 });

    // Using async iteration
    for await (const user of userManager.getAllUsers(5)) {
      console.log('Processing user:', user.name);
    }
  } catch (error) {
    console.error('Operation failed:', error);
  }
})();`,

  readme: `# Enhanced Vim Simulator

A modern, web-based Vim editor simulator built with React and TypeScript.

## Features

### 🚀 Performance
- **Virtualized rendering** for large files (1000+ lines)
- **Syntax highlighting** with extensible language support
- **Smart cursor management** with visual feedback
- **Efficient text operations** using Vim's modal paradigm

### 🎨 User Interface
- **Modern gradient design** with dark theme
- **Responsive layout** that works on all screen sizes
- **Accessibility support** with keyboard navigation
- **Real-time status updates** with detailed information

### ⌨️ Vim Compatibility
- **All major Vim modes**: Normal, Insert, Visual, Command
- **Text objects**: words, sentences, paragraphs, brackets
- **Motion commands**: h/j/k/l, w/b/e, 0/$, gg/G
- **Operators**: d/y/c/p with full combination support
- **Visual selection**: character and line-wise selection

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## Usage Examples

### Basic Navigation
- \`h/j/k/l\` - Move cursor left/down/up/right
- \`w/b\` - Move by words forward/backward
- \`0/$\` - Go to beginning/end of line
- \`gg/G\` - Go to first/last line

### Text Editing
- \`i/a\` - Insert before/after cursor
- \`o/O\` - Open new line below/above
- \`dd\` - Delete current line
- \`yy\` - Copy current line
- \`p/P\` - Paste after/before cursor

### Visual Mode
- \`v\` - Enter visual mode
- \`V\` - Enter visual line mode
- Select text and use operators (d/y/c)

## Architecture

The simulator uses a modular architecture with separate concerns:

- **State Management**: Immutable state updates with undo/redo
- **Keyboard Handling**: Event-driven command processing
- **Rendering**: Efficient DOM updates with virtualization
- **Operations**: Pure functions for text manipulation

## Performance Optimizations

1. **Virtualization**: Only renders visible lines for large files
2. **Memoization**: Caches expensive calculations
3. **Debouncing**: Reduces update frequency during rapid input
4. **Lazy Loading**: Components load on demand

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE.md for details

## Acknowledgments

- Inspired by the original Vim editor by Bram Moolenaar
- Built with React, TypeScript, and Tailwind CSS
- Icons from Lucide React`,
};

export default DefaultTestDataGenerator;
