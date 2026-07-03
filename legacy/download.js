const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://mitasmuzik.com';

const pages = {
  '/': 'index.html',
  '/about': 'about.html',
  '/services': 'services.html',
  '/pricing': 'pricing.html',
  '/pr-services': 'pr-services.html',
  '/stores': 'stores.html',
  '/help': 'help.html',
  '/faq': 'faq.html',
  '/contact': 'contact.html',
  '/status': 'status.html',
  '/blog': 'blog.html',
  '/gizlilik-politikasi': 'gizlilik-politikasi.html',
  '/kullanim-sartlari': 'kullanim-sartlari.html',
  '/cerez-politikasi': 'cerez-politikasi.html',
  '/kvkk-aydinlatma-metni': 'kvkk-aydinlatma-metni.html'
};

function downloadPage(urlPath, filename) {
  return new Promise((resolve, reject) => {
    https.get(baseUrl + urlPath, (res) => {
      if (res.statusCode !== 200) {
         if (res.statusCode === 301 || res.statusCode === 302) {
             console.log(`Redirect on ${urlPath} to ${res.headers.location}`);
             // Try to follow one redirect if it's relative
             if(res.headers.location) {
                let redirectUrl = res.headers.location.startsWith('http') ? res.headers.location : baseUrl + res.headers.location;
                https.get(redirectUrl, (res2) => {
                    let data = '';
                    res2.on('data', chunk => data += chunk);
                    res2.on('end', () => resolve(data));
                }).on('error', reject);
                return;
             }
         }
         console.error(`Failed to get ${urlPath}: ${res.statusCode}`);
         resolve('');
         return;
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function processHtml(html) {
  // Replace references
  let processed = html
    .replace(/Mitas Müzik/g, 'CMG')
    .replace(/Mitas Müzik/gi, 'CMG')
    .replace(/Mitas/g, 'CMG')
    .replace(/Mitas/gi, 'CMG')
    .replace(/mitasmuzik\.com/g, 'cmg.com')
    .replace(/mitasmuzik/g, 'cmg')
    .replace(/mitas/g, 'cmg');

  // Replace logos with CMG text
  processed = processed.replace(
    /<img[^>]*src="[^"]*logo-black\.png"[^>]*>/g,
    '<div style="font-size: 32px; font-weight: 900; color: #000; letter-spacing: -1px; text-transform: uppercase;">CMG</div>'
  );
  
  processed = processed.replace(
    /<img[^>]*src="[^"]*logo-w\.png"[^>]*>/g,
    '<div style="font-size: 32px; font-weight: 900; color: #fff; letter-spacing: -1px; text-transform: uppercase;">CMG</div>'
  );

  return processed;
}

async function main() {
  for (const [urlPath, filename] of Object.entries(pages)) {
    console.log(`Downloading ${urlPath}...`);
    try {
      const html = await downloadPage(urlPath, filename);
      if (html) {
        const processed = processHtml(html);
        fs.writeFileSync(path.join(__dirname, filename), processed);
        console.log(`Saved ${filename}`);
      }
    } catch (e) {
      console.error(`Error downloading ${urlPath}:`, e);
    }
  }
}

main();
