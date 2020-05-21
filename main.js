const { app, BrowserWindow } = require("electron")

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 700,
    height: 650,
  })

  mainWindow.loadFile("index.html")
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit()
})
