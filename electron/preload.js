const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Example: You can expose more APIs later here.
  ping: () => ipcRenderer.invoke('ping')
});
