const { ipcRenderer } = require('electron')


const closed = document.getElementById('closed')

closed.addEventListener('click', () => {
  ipcRenderer.send('close-about-window', { reason: 'Fechando janela de sobre'   })
})

ipcRenderer.on('about-window-closed', (event) => {  
  console.log('Janela de sobre fechada:')
})