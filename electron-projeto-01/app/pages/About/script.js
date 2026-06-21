const { ipcRenderer } = require('electron')


const closed = document.getElementById('closed')

closed.addEventListener('click', () => {
  ipcRenderer.send('close-about-window', { reason: 'Fechando janela de sobre'   })
})