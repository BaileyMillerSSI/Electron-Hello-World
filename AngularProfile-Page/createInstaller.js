const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
    .then(createWindowsInstaller)
    .catch((error) => {
        console.error(error.message || error)
        process.exit(1)
    })

function getInstallerConfig() {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'Builds', 'Windows')

    return Promise.resolve({
        appDirectory: path.join(outPath, 'AngularProfilePicture-win32-ia32'),
        authors: 'Bailey Miller',
        description: "An app",
        noMsi: true,
        outputDirectory: path.join(outPath, 'Master'),
        setupExe: 'LoginSetup.exe',
        setupIcon: path.join(rootPath, 'src', 'favicon.ico')
    })
}