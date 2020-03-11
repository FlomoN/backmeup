const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname + '/../dist');

let win = null;

function createWindow() {
  // Erstelle das Browser-Fenster.
  win = new BrowserWindow({
    width: 800,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    resizable: false,
    show: false
  })

  // und lade die index.html der App.
  win.loadFile(__dirname + '/../dist/index.html');

  win.once("ready-to-show", () => { win.show() });
}

app.on("ready", createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
