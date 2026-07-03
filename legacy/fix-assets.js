const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Fix CSS path: /assets/css/... -> assets/css/...
  html = html.replace(/href="\/assets\//g, 'href="assets/');
  // Fix JS path: /assets/js/... -> assets/js/...
  html = html.replace(/src="\/assets\//g, 'src="assets/');
  // Fix any other absolute asset references
  html = html.replace(/href="\/favicon/g, 'href="favicon');
  html = html.replace(/href="\/site\.webmanifest"/g, 'href="site.webmanifest"');

  fs.writeFileSync(filePath, html);
  console.log(`Fixed asset paths in ${file}`);
});

console.log('Done!');
