import { app, BrowserWindow, Menu, globalShortcut, ipcMain } from "electron";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { config } from "dotenv";
config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV;
console.log(isDev);

let mainWindow;
let aboutWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Estudo Electron",
    icon: `${__dirname}/app/assets/icon.png`,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("./app/index.html");
};

const aboutMainWindow = () => {
  aboutWindow = new BrowserWindow({
    width: 300,
    height: 300,
    title: "Estudo Electron",
    icon: `${__dirname}/app/assets/icon.png`,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    resizable: false,
    frame: false
  });

  aboutWindow.loadFile("./app/pages/About/index.html");
};

ipcMain.on('close-about-window', (event, option) => {
  console.info(option)
  aboutWindow.close();
});
ipcMain.on('teste-event', (event, option) => {
  console.info(option)
});

app.on("ready", () => {
  createMainWindow();

  const menu = Menu.buildFromTemplate([
    ...(isDev
      ? [ 
          {
            label: "Dev", 
            submenu: [
              {
                label: "DevTools",
                role: "toggleDevTools",
              },
              {
                label: "reload",
                role: "reload"
              }
            ],
          },
        ]
      : []),
    ...[
      {
        label: 'Sobre',
        click:  aboutMainWindow
      }
    ]
  ]);
  Menu.setApplicationMenu(menu);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
