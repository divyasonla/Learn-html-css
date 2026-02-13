import { useState, useRef, useEffect } from "react";

interface CodeEditorProps {
  initialCode: string;
  height?: string;
}

const CodeEditor = ({ initialCode, height = "400px" }: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runCode = () => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(code);
        doc.close();
      }
    }
  };

  // Run on initial load and when initialCode changes
  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  useEffect(() => {
    // Small delay to ensure iframe is ready
    const timer = setTimeout(runCode, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-lg overflow-hidden border border-border shadow-card">
      <div className="flex items-center border-b border-border bg-muted/50">
        <div className="flex-1 px-4 py-2.5 text-sm font-medium font-mono bg-code text-code-foreground">
          ✏️ Code
        </div>
        <div className="flex-1 px-4 py-2.5 text-sm font-medium bg-card text-card-foreground border-l border-border">
          👁️ Preview
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ height }}>
        <div className="relative bg-code">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full p-4 font-mono text-sm bg-transparent text-code-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-inset"
            spellCheck={false}
          />
        </div>
        <div className="border-l border-border bg-card">
          <iframe
            ref={iframeRef}
            title="Preview"
            className="w-full h-full"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
      <div className="flex gap-2 p-2 bg-muted/30 border-t border-border">
        <button
          onClick={() => { setCode(initialCode); }}
          className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          🔄 Reset
        </button>
        <button
          onClick={runCode}
          className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          ▶️ Run
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
