const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'cmg-app');
const destDir = __dirname;

function moveFiles(src, dest) {
    const files = fs.readdirSync(src);
    for (const file of files) {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        
        if (fs.statSync(srcPath).isDirectory()) {
            if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath);
            }
            moveFiles(srcPath, destPath);
        } else {
            fs.renameSync(srcPath, destPath);
        }
    }
}

moveFiles(srcDir, destDir);
fs.rmSync(srcDir, { recursive: true, force: true });
console.log('Moved React files to root');
