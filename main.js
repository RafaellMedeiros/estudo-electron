import { app, BrowserWindow } from 'electron'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(process.platform);


const createMainWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Estudo Electron',
    icon: `${__dirname}/app/assets/icon.png`,
    webPreferences: {
      nodeIntegration: true
    },
  })

  win.loadFile('./app/index.html')
}

app.on('ready', createMainWindow)