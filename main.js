// Intersection Observer for stable scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// PR Section Tab Switching Logic
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Update button states
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Update content states
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    const activePane = document.getElementById(targetTab);
    if (activePane) activePane.classList.add('active');
  });
});

// Modal Content Data (DSP Deep Dives)
const serviceDetails = {
  'Spotify': {
    title: 'Spotify Distribution & PR',
    body: 'CMG provides direct delivery to Spotify with a focus on editorial playlist consideration. We coordinate marketing plans with our dedicated Spotify account managers to optimize visibility for every release.'
  },
  'YouTube': {
    title: 'YouTube Channel & Content Management',
    body: 'Maximize your YouTube presence through expert channel optimization and Official Artist Channel (OAC) verification. We manage metadata to ensure your music is found by millions of listeners.'
  },
  'Tidal': {
    title: 'Tidal Direct High-Fidelity Distribution',
    body: 'Reach audiences who value audio quality. We ensure your music is delivered in lossless formats to Tidal, supporting HiFi and Master quality tiers.'
  },
  'Apple Music': {
    title: 'Apple Music Strategy',
    body: 'Leverage our relationships with Apple Music curators. We provide the technical metadata and marketing momentum needed to secure placement in global flagship playlists.'
  },
  'TikTok': {
    title: 'TikTok Viral Marketing',
    body: 'Our TikTok strategy team helps you identify sounds and trends. We coordinate with influencers and manage sound assets to give your music the best chance of going viral.'
  }
};

// Modal Logic
const modal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const span = document.getElementsByClassName("close")[0];

document.querySelectorAll('.dsp-item').forEach(item => {
  item.onclick = function () {
    const key = this.getAttribute('title') || this.querySelector('span')?.innerText;
    if (serviceDetails[key]) {
      modalBody.innerHTML = `
        <h2 style="font-size: 32px; font-weight: 800; letter-spacing: -0.02em;">${serviceDetails[key].title}</h2>
        <div style="margin-top:24px; font-size:19px; line-height:1.6; color:#424245;">
          ${serviceDetails[key].body}
        </div>
      `;
      modal.style.display = "block";
    }
  }
});

if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Smooth Scroll for Zenith Navigation with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 60;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Form Submission Handler
const appForm = document.getElementById('applicationForm');
if (appForm) {
  appForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const artistName = document.getElementById('artistName').value;
    const email = document.getElementById('email').value;
    const links = document.getElementById('links').value;

    const subject = `Zenith Distribution Application: ${artistName}`;
    const body = `Full Name: ${name}%0D%0AArtist/Label: ${artistName}%0D%0AEmail: ${email}%0D%0A%0D%0ALinks/Info:%0D%0A${encodeURIComponent(links)}`;

    window.location.href = `mailto:cozulemezmusicgroup@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}

// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    
    // Close others
    document.querySelectorAll('.faq-item').forEach(item => {
      if(item !== parent) item.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});

console.log('CMG - Ultimate Zenith Refinement Loaded');

/* ================================================= */
/* PREMIUM ELITE UX DETAILS (JS)                     */
/* ================================================= */

// Page Loader Fade Out
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('loaded');
    }, 150); // slight delay for cinematic effect
  }
});

// Custom Cursor Logic
if (window.matchMedia('(any-pointer: coarse)').matches) {
  // Completely disable custom cursor on touch devices
} else {
  const cursorStealth = document.getElementById('cursorStealth');
  const cursorGlow = document.getElementById('cursorGlow');

  if (cursorStealth && cursorGlow) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;
  
  const updateCursor = () => {
    // Custom tip offset for the stealth arrowhead SVG
    cursorStealth.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    
    // Aura follows with smooth easing (lerp)
    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;
    cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    
    requestAnimationFrame(updateCursor);
  };
  requestAnimationFrame(updateCursor);

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Adding hover state for interactive elements
  const interactables = document.querySelectorAll('a, button, input, textarea, .faq-question, .dsp-item, .tech-visual-simple');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('hovering');
      // Reset magnetic effect
      if (el.classList.contains('magnetic')) {
        el.style.transform = '';
      }
    });

    // Magnetic effect for buttons
    if (el.classList.contains('btn-primary') || el.classList.contains('btn-secondary') || el.classList.contains('btn-minimal')) {
      el.classList.add('magnetic');
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
    }
  });

  // =============================== 
  // SECURITY & CLOAKING LAYER 
  // (Deterrents for code inspection)
  // ===============================
  
  // Disable Right Click
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // Disable specific key combos for DevTools
  document.addEventListener('keydown', (e) => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
      e.keyCode === 123 || 
      (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
      (e.ctrlKey && e.keyCode === 85)
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Detection Tripwire & Global Deterrent

  let devtoolsOpen = false;
  const threshold = 160;

  const securityProtocol = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      if (!devtoolsOpen) {
        console.clear();
        console.log("%cAUTH_REQUIRED", "color: #ff3b30; font-size: 50px; font-weight: bold;");
        console.log("%cUnauthorized internal access detected. Asset projection secured.", "color: #fff; font-size: 16px;");
      }
      devtoolsOpen = true;
      (function() { (function a() { try { (function b(i) { if (('' + (i / i)).length !== 1 || i % 20 === 0) { (function() {}).constructor('debugger')(); } else { debugger; } b(++i); })(0); } catch (e) { setTimeout(a, 5000); } })() })();
    } else {
      devtoolsOpen = false;
    }
  };

  setInterval(securityProtocol, 1000);
  
  // Anti-Print
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.keyCode === 80) { // Ctrl+P
      e.preventDefault();
      alert("Print function restricted for protected assets.");
    }
  });
    });
  }
}
