const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const heroReplacement = `
                <div class="liquid-btn-wrap">
                  <a href="pricing.html" class="liquid-btn">
                    <span>Hemen Başlayın</span>
                  </a>
                  <div class="liquid-btn-shadow"></div>
                </div>
`;

html = html.replace(/<a href="pricing\.html" class="btn-hero-primary">[\s\S]*?<\/a>/, heroReplacement.trim());
fs.writeFileSync(filePath, html);
console.log('Updated hero button');
