const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'assets/css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace specific dark values with light values
css = css.replace(/background: rgba\(10, 10, 10, 0\.4\);/g, 'background: rgba(255, 255, 255, 0.6);');
css = css.replace(/background: rgba\(10, 10, 10, 0\.2\);/g, 'background: rgba(255, 255, 255, 0.4);');
css = css.replace(/background: rgba\(5, 5, 5, 0\.4\);/g, 'background: rgba(255, 255, 255, 0.6);');

css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.1\);/g, 'border: 1px solid rgba(0, 0, 0, 0.1);');
css = css.replace(/box-shadow: 0 40px 80px rgba\(0,0,0,0\.8\)/g, 'box-shadow: 0 40px 80px rgba(0,0,0,0.1)');
css = css.replace(/rgba\(255, 255, 255, 0\.05\)/g, 'rgba(0, 0, 0, 0.05)');
css = css.replace(/rgba\(255,255,255,0\.05\)/g, 'rgba(0,0,0,0.05)');

fs.writeFileSync(cssPath, css);
console.log('Fixed CSS colors to white theme');
