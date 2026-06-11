import { app, BrowserWindow, Menu, globalShortcut } from "electron";
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
    },
    frame: false
  });

  aboutWindow.loadFile("./app/pages/About/index.html");
};

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

  // globalShortcut.register('CommandOrControl+i', () => {
  //   mainWindow.toggleDevTools()
  // })

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
