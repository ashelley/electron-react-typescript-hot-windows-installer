var electronInstaller = require('electron-winstaller');

var resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './Test Electron App-win32-x64',
    outputDirectory: './Test Electron-windows-installer',
    authors: 'Adam Shelley',
    exe: 'Test Electron App.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));