const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("getDbInfoApi", {
    get: (o) => ipcRenderer.send("getDbInfo"),
});

ipcRenderer.on('resDbInfoApi', (e, o) => {
    document.getElementById('host').value = o;
})