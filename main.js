import { app, BrowserWindow, Menu, globalShortcut } from 'electron'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

let mainWindow

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Estudo Electron',
    icon: `${__dirname}/app/assets/icon.png`,
    webPreferences: {
      nodeIntegration: true
    },
  })

  mainWindow.loadFile('./app/index.html')
}

app.on('ready', () => {
  createMainWindow()

  const menu = Menu.buildFromTemplate([
    {
      label: 'Teste',
      submenu: [
        {
          label: 'Exit',
          click: () => {
            app.quit()
          }
        }
      ]
    }
  ])
  Menu.setApplicationMenu(menu)

  globalShortcut.register('CommandOrControl+i', () => {
    mainWindow.toggleDevTools()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})