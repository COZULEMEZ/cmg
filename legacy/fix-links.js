const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const pages = [
  '/about',
  '/services',
  '/pricing',
  '/pr-services',
  '/stores',
  '/help',
  '/faq',
  '/contact',
  '/status',
  '/blog',
  '/gizlilik-politikasi',
  '/kullanim-sartlari',
  '/cerez-politikasi',
  '/kvkk-aydinlatma-metni'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  pages.forEach(page => {
    // Replace href="/about" with href="about.html"
    // We use a regex to ensure we match exact hrefs or hrefs with trailing slash
    const regex1 = new RegExp(`href="${page}"`, 'g');
    const regex2 = new RegExp(`href="${page}/"`, 'g');
    
    html = html.replace(regex1, `href="${page.substring(1)}.html"`);
    html = html.replace(regex2, `href="${page.substring(1)}.html"`);
  });

  // Replace href="/" with href="index.html"
  html = html.replace(/href="\/"/g, 'href="index.html"');

  fs.writeFileSync(filePath, html);
  console.log(`Fixed links in ${file}`);
});
