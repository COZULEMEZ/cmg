const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Change black text logos to white for dark theme
  html = html.replace(/color: #000;/g, 'color: #fff;');
  
  // Footer already has white text: color: #fff;
  
  // Also fix footer background inline style which was set to #1e293b
  html = html.replace(/<footer style="background: #1e293b; color: white;/g, '<footer style="background: transparent; color: white;');
  
  fs.writeFileSync(filePath, html);
  console.log(`Updated inline styles in ${file}`);
});
