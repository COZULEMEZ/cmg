const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacementHTML = `
            <!-- CTA Buttons -->
            <div class="nav-actions">
                <a href="https://portal.CMGmuzik.com/login" class="nav-link" style="padding-right:1rem;" title="Giriş Yap">Giriş Yap</a>
                <div class="liquid-btn-wrap">
                  <a href="https://portal.CMGmuzik.com/register" class="liquid-btn" title="Üye Ol">
                    <span>Üye Ol</span>
                  </a>
                  <div class="liquid-btn-shadow"></div>
                </div>
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <i data-lucide="menu"></i>
                </button>
            </div>
`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace everything from <!-- CTA Buttons --> to the closing </div> of nav-actions
  html = html.replace(/<!-- CTA Buttons -->[\s\S]*?<\/div>/, replacementHTML.trim());
  
  fs.writeFileSync(filePath, html);
  console.log(`Updated nav-actions in ${file}`);
});
