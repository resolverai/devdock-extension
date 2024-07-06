// src/vscode.d.ts
interface VsCodeApi {
    postMessage: (message: any) => void;
    setState: (state: any) => void;
    getState: () => any;
  }
  
  interface Window {
    acquireVsCodeApi: () => VsCodeApi;
  }
  