const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const env = process.env.NODE_ENV || "development";

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 750,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    ipcMain.on("getDbInfo", (e, v) => {
        console.log("this");
        e.sender.send("resDbInfoApi", "test");
    });

    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

if (env === "development") {
    require("electron-reload")(__dirname, {
        electron: path.join(__dirname, "node_modules", ".bin", "electron"),
        hardResetMethod: "exit",
    });
}
