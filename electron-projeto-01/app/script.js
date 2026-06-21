const { ipcRenderer } = require('electron');

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');

    ipcRenderer.send('teste-event', { name: nameInput.value });
});