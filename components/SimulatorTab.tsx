import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  Brain,
  Settings,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { VimSimulator } from "./VimSimulator";

export const SimulatorTab: React.FC = () => {
  const architecturalChallenges = [
    {
      title: "Modal State Management",
      description:
        "Managing complex state transitions between Normal, Insert, Visual, and Command modes",
      implementation:
        "React useState with discriminated union types for type safety",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Command Parsing",
      description:
        "Parsing Vim's sophisticated command language with counts, operators, and motions",
      implementation:
        "State machine approach with command buffer and sequence detection",
      icon: <Code2 className="w-5 h-5 text-green-400" />,
    },
    {
      title: "Cursor Management",
      description:
        "Precise cursor positioning and movement with proper boundary constraints",
      implementation:
        "Position clamping and coordinate system with line/column tracking",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "Keyboard Handling",
      description:
        "Capturing and processing keyboard events while preventing browser defaults",
      implementation:
        "Event listeners with preventDefault and custom key sequence tracking",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
    },
  ];

  const implementationFeatures = [
    {
      category: "Core Features",
      items: [
        "✅ Modal editing (Normal, Insert, Visual, Command)",
        "✅ Basic cursor movement (h, j, k, l)",
        "✅ Text insertion and deletion",
        "✅ Visual selection and manipulation",
        "✅ Undo/Redo functionality",
        "✅ Command-line mode parsing",
      ],
      color: "text-green-400",
    },
    {
      category: "Advanced Features",
      items: [
        "⚠️ Limited text objects (simplified implementation)",
        "⚠️ Basic operator-motion combinations (dd, yy)",
        "⚠️ Simplified register system",
        "⚠️ No macro recording/playback",
        "❌ Complex command parsing (counts, ranges)",
        "❌ Plugin system architecture",
      ],
      color: "text-yellow-400",
    },
    {
      category: "Web Platform Adaptations",
      items: [
        "🌐 Browser event model integration",
        "🌐 DOM-based text rendering",
        "🌐 CSS-based cursor visualization",
        "🌐 React component lifecycle management",
        "🌐 Focus/blur state handling",
        "🌐 Responsive layout considerations",
      ],
      color: "text-cyan-400",
    },
  ];

  const technicalChallenges = [
    {
      challenge: "Performance",
      description:
        "Large files and complex operations can impact browser performance",
      solution:
        "Virtualization, efficient re-rendering, and operation batching",
    },
    {
      challenge: "Fidelity vs. Practicality",
      description:
        "Perfect Vim emulation conflicts with web platform constraints",
      solution:
        "Pragmatic compromises while maintaining core modal editing experience",
    },
    {
      challenge: "Browser Compatibility",
      description:
        "Different browsers handle keyboard events and focus differently",
      solution: "Polyfills, feature detection, and graceful degradation",
    },
    {
      challenge: "State Complexity",
      description:
        "Vim's state is incredibly complex with many interdependent systems",
      solution: "Modular architecture with clear separation of concerns",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Interactive Simulator */}
      <VimSimulator />

      {/* Architectural Challenges */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-orange-400" />
            🏗️ Architectural Challenges & Solutions
          </CardTitle>
          <CardDescription className="text-blue-200">
            Key technical challenges encountered when building a Vim simulator
            in React
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {architecturalChallenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-gray-900/40 rounded-lg p-4 border border-gray-600/30"
              >
                <div className="flex items-start gap-3 mb-3">
                  {challenge.icon}
                  <h4 className="font-semibold text-white">
                    {challenge.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  {challenge.description}
                </p>
                <div className="bg-gray-800/50 rounded p-3">
                  <p className="text-cyan-300 text-sm font-mono">
                    <strong>Solution:</strong> {challenge.implementation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Status */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            📊 Implementation Status & Feature Matrix
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {implementationFeatures.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className={`font-semibold ${category.color} text-lg mb-4`}>
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <span className="text-sm font-mono text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical Challenges */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />⚡ Technical
            Challenges & Trade-offs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalChallenges.map((item, index) => (
              <div
                key={index}
                className="bg-red-900/20 rounded-lg p-4 border border-red-400/30"
              >
                <h5 className="font-semibold text-red-300 mb-2">
                  {item.challenge}
                </h5>
                <p className="text-red-100 text-sm mb-3">
                  <strong>Problem:</strong> {item.description}
                </p>
                <p className="text-green-200 text-sm">
                  <strong>Approach:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Code Architecture Insights */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-purple-400" />
            🔧 Code Architecture & Design Patterns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-400/30">
                <h5 className="font-semibold text-purple-300 mb-3">
                  State Management Pattern
                </h5>
                <pre className="text-sm text-purple-100 bg-black/40 p-3 rounded overflow-x-auto">
                  {`interface EditorState {
  lines: string[];
  cursor: CursorPosition;
  mode: VimMode;
  registers: { [key: string]: string };
  undoStack: EditorState[];
  redoStack: EditorState[];
  visualStart?: CursorPosition;
  commandBuffer: string;
  statusMessage: string;
}`}
                </pre>
              </div>

              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-400/30">
                <h5 className="font-semibold text-blue-300 mb-3">
                  Command Processing Pattern
                </h5>
                <pre className="text-sm text-blue-100 bg-black/40 p-3 rounded overflow-x-auto">
                  {`const handleKeyDown = useCallback(
  (event: KeyboardEvent) => {
    switch (state.mode) {
      case 'NORMAL':
        // Handle normal mode commands
        break;
      case 'INSERT':
        // Handle insert mode
        break;
      case 'VISUAL':
        // Handle visual mode
        break;
    }
  }, [state.mode]
);`}
                </pre>
              </div>
            </div>

            <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-400/30">
              <h5 className="font-semibold text-indigo-300 mb-3">
                Key Design Decisions
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h6 className="text-indigo-200 font-medium mb-2">
                    React Integration
                  </h6>
                  <ul className="text-indigo-100 space-y-1">
                    <li>
                      • useCallback for event handlers to prevent re-renders
                    </li>
                    <li>• useRef for DOM manipulation and focus management</li>
                    <li>
                      • useState with immutable updates for predictable state
                    </li>
                    <li>• useEffect for keyboard event listeners lifecycle</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-indigo-200 font-medium mb-2">
                    TypeScript Benefits
                  </h6>
                  <ul className="text-indigo-100 space-y-1">
                    <li>• Discriminated unions for mode-specific state</li>
                    <li>• Interface definitions for complex data structures</li>
                    <li>• Type-safe event handling and state updates</li>
                    <li>• Compile-time validation of state transitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Enhancements */}
      <Card className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-400/30">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold text-indigo-300 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            🚀 Future Enhancement Roadmap
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-indigo-300 mb-3">
                Core Vim Features
              </h5>
              <ul className="text-indigo-100 text-sm space-y-2">
                <li>• Complete text object implementation (ciw, dap, etc.)</li>
                <li>• Advanced operator-motion combinations</li>
                <li>• Macro recording and playback system</li>
                <li>• Multi-register system with named registers</li>
                <li>• Search and replace with regex support</li>
                <li>• Buffer management and multiple files</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-purple-300 mb-3">
                Web-Specific Features
              </h5>
              <ul className="text-purple-100 text-sm space-y-2">
                <li>• Syntax highlighting with language support</li>
                <li>• File system integration via Web APIs</li>
                <li>• Collaborative editing capabilities</li>
                <li>• Touch/mobile device support</li>
                <li>• Plugin architecture for extensions</li>
                <li>• Performance optimization for large files</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
