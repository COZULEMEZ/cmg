// CMG Elite — Intelligence Engine v5.0
// iOS 27 Premium Design · All 40 MusicFetch Services

// ─────────────────────────────────────────
// PLATFORM REGISTRY  (all 40 services)
// ─────────────────────────────────────────
const DSP = {
  amazon:       { label: 'Amazon',        color: '#FF9900', emoji: '★' },
  amazonMusic:  { label: 'Amazon Music',  color: '#FF9900', emoji: '★' },
  anghami:      { label: 'Anghami',       color: '#7C4DFF', emoji: '◉' },
  appleMusic:   { label: 'Apple Music',   color: '#FC3C44', emoji: '♫' },
  audiomack:    { label: 'Audiomack',     color: '#FFA500', emoji: '◉' },
  audius:       { label: 'Audius',        color: '#CC0FE0', emoji: '◉' },
  awa:          { label: 'AWA',           color: '#FF6B6B', emoji: '◉' },
  bandcamp:     { label: 'Bandcamp',      color: '#1DA0C3', emoji: '◉' },
  beatport:     { label: 'Beatport',      color: '#01FF95', emoji: '◉' },
  boomplay:     { label: 'Boomplay',      color: '#FF4040', emoji: '◉' },
  deezer:       { label: 'Deezer',        color: '#A238FF', emoji: '◈' },
  discogs:      { label: 'Discogs',       color: '#333333', emoji: '◉' },
  flo:          { label: 'FLO',           color: '#FF6B35', emoji: '◉' },
  gaana:        { label: 'Gaana',         color: '#E72C30', emoji: '◉' },
  genius:       { label: 'Genius',        color: '#FFFF64', emoji: '✦' },
  iHeartRadio:  { label: 'iHeart',        color: '#C6002B', emoji: '◉' },
  instagram:    { label: 'Instagram',     color: '#E1306C', emoji: '◉' },
  jioSaavn:     { label: 'JioSaavn',      color: '#2BC5B4', emoji: '◉' },
  joox:         { label: 'JOOX',          color: '#00B140', emoji: '◉' },
  kkbox:        { label: 'KKBOX',         color: '#009FE3', emoji: '◉' },
  lineMusic:    { label: 'LINE Music',    color: '#00C300', emoji: '◉' },
  musicBrainz:  { label: 'MusicBrainz',   color: '#BA478F', emoji: '◉' },
  napster:      { label: 'Napster',       color: '#111111', emoji: '◉' },
  netease:      { label: 'NetEase',       color: '#C20C0C', emoji: '◉' },
  pandora:      { label: 'Pandora',       color: '#005799', emoji: '◉' },
  qobuz:        { label: 'Qobuz',         color: '#00A2DF', emoji: '◉' },
  qqMusic:      { label: 'QQ Music',      color: '#FFD700', emoji: '◉' },
  sevenDigital: { label: '7Digital',      color: '#E30613', emoji: '◉' },
  shazam:       { label: 'Shazam',        color: '#1870B8', emoji: '◈' },
  soundcloud:   { label: 'SoundCloud',    color: '#FF5500', emoji: '◉' },
  spotify:      { label: 'Spotify',       color: '#1DB954', emoji: '♪' },
  telmoreMusik: { label: 'Telmore',       color: '#1E90FF', emoji: '◉' },
  tidal:        { label: 'Tidal',         color: '#00FFFF', emoji: '◊' },
  tiktok:       { label: 'TikTok',        color: '#ff2d55', emoji: '♬' },
  trebel:       { label: 'Trebel',        color: '#FF6600', emoji: '◉' },
  yandex:       { label: 'Yandex Music',  color: '#FFCC00', emoji: '◉' },
  youseeMusik:  { label: 'YouSee',         color: '#EF3340', emoji: '◉' },
  youtube:      { label: 'YouTube',       color: '#FF0000', emoji: '▶' },
  youtubeMusic: { label: 'YT Music',      color: '#FF0000', emoji: '▶' },
  youtubeShorts:{ label: 'YT Shorts',     color: '#FF0000', emoji: '▶' },
};

// ─────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────
const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.05 }
);
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let activeType = 'isrc';

const typeBtns      = document.querySelectorAll('.seg-btn');
const queryInput    = document.getElementById('query');
const searchBtn     = document.getElementById('searchBtn');
const resultsCard   = document.getElementById('resultsCard');
const searchResults = document.getElementById('searchResults');
const errorBox      = document.getElementById('errorBox');

const LABELS = {
  isrc:    'ISRC — e.g. USUG11901472',
  upc:     'UPC — e.g. 00602508009204',
  url:     'Spotify / Apple Music link...',
  search:  'Song, artist, album...',
  loading: 'Querying...',
  query:   'Search',
};

typeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    typeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateSegPill();
    activeType = btn.dataset.type;
    queryInput.placeholder = LABELS[activeType];
    queryInput.value = '';
    queryInput.focus();
  });
});

function updateSegPill() {
  const activeBtn = document.querySelector('.seg-btn.active');
  const pill = document.getElementById('segPill');
  if (!activeBtn || !pill) return;
  pill.style.width = activeBtn.offsetWidth + 'px';
  pill.style.left  = activeBtn.offsetLeft + 'px';
}
window.addEventListener('resize', updateSegPill);
setTimeout(updateSegPill, 100);

queryInput.placeholder = LABELS[activeType];
queryInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
searchBtn.addEventListener('click', doSearch);

// ─────────────────────────────────────────
// SEARCH
// ─────────────────────────────────────────
async function doSearch() {
  const q = queryInput.value.trim();
  if (!q) { shake(queryInput); return; }

  setLoading(true);
  hide(resultsCard);
  hide(searchResults);
  hide(errorBox);

  try {
    const res  = await fetch(`/api/lookup?type=${activeType}&query=${encodeURIComponent(q)}`);
    const data = await res.json();

    if (!res.ok) throw new Error(data.error?.message || data.error || data.message || 'Lookup failed');

    const r = data.result;
    if (!r) throw new Error('No results found.');

    if (activeType === 'search') {
      renderSearch(r.tracks || [], r.albums || [], r.artists || []);
    } else {
      renderTrack(r);
    }
  } catch (err) {
    showError(err.message);
  } finally {
    setLoading(false);
  }
}

function setLoading(on) {
  searchBtn.dataset.loading = on ? '1' : '0';
  searchBtn.disabled = on;
  searchBtn.querySelector('.btn-label').textContent = on ? LABELS.loading : LABELS.query;
  const spinner = searchBtn.querySelector('.btn-spinner');
  if (spinner) spinner.style.display = on ? 'block' : 'none';
}

function hide(el) { if (el) el.style.display = 'none'; }
function show(el) {
  if (!el) return;
  // Kullan elementi tipine göre doğru display değerini ver
  if (el.id === 'resultsCard' || el.id === 'searchResults') {
    el.style.display = 'block';
  } else if (el.id === 'previewWrap') {
    el.style.display = 'flex';
  } else if (el.id === 'errorBox') {
    el.style.display = 'block';
  } else {
    el.style.display = 'block';
  }
}

function shake(el) {
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 500);
}

function showError(msg) {
  if (!errorBox) return;
  errorBox.textContent = '⚠ ' + msg;
  show(errorBox);
  // Don't auto-hide - let user read it. Click to dismiss.
  errorBox.onclick = () => hide(errorBox);
}

// ─────────────────────────────────────────
// RENDER: SINGLE TRACK / UPC / URL
// ─────────────────────────────────────────
function renderTrack(r) {
  // Art
  const cover = r.image?.url || r.artists?.[0]?.image?.url || r.albums?.[0]?.image?.url || '';
  const coverEl = document.getElementById('artImg');
  if (cover) {
    coverEl.style.backgroundImage = `url('${cover}')`;
    coverEl.classList.add('has-img');
    // CINEMATIC DYNAMIC GLOW
    document.documentElement.style.setProperty('--accent-glow', r.color || '#ffffff22');
  } else {
    coverEl.style.backgroundImage = '';
    coverEl.classList.remove('has-img');
    document.documentElement.style.setProperty('--accent-glow', 'rgba(255,255,255,0.05)');
  }

  // Badge
  const badge = document.getElementById('explicitBadge');
  badge.style.display = r.isExplicit ? 'flex' : 'none';

  // Title / Artist
  document.getElementById('trackTitle').textContent  = r.name || r.title || '—';
  document.getElementById('trackArtist').textContent = (r.artists?.map(a => a.name).join(', ')) || r.artist || '—';

  // Album tag
  const albumTag = document.getElementById('albumTag');
  const alb = r.albums?.[0];
  if (alb?.name) {
    albumTag.textContent = alb.name;
    albumTag.style.display = 'inline-block';
  } else if (r.type === 'album') {
    albumTag.textContent = 'ALBUM';
    albumTag.style.display = 'inline-block';
  } else {
    albumTag.style.display = 'none';
  }

  // Meta rows
  const meta = [
    ['ISRC',           r.isrc || '—'],
    ['UPC',            r.upc || alb?.upc || '—'],
    ['Release',        (r.releaseDate || alb?.releaseDate || '').split('T')[0] || '—'],
    ['Duration',       r.duration ? fmt(r.duration) : '—'],
    ['Label',          r.label || alb?.label || alb?.copyright || '—'],
    ['Distributor',    r.distributor || '—'],
    ['Total Tracks',   alb?.totalTracks ? String(alb.totalTracks) : (r.totalTracks ? String(r.totalTracks) : '—')],
    ['Type',           (r.type || '—').toUpperCase()],
  ];

  const metaList = document.getElementById('metaList');
  metaList.innerHTML = meta
    .filter(([, v]) => v && v !== '—')
    .map(([k, v]) => `
      <div class="meta-row">
        <span class="meta-key">${k}</span>
        <span class="meta-val">${v}</span>
      </div>`).join('');

  // Audio preview
  const audio     = document.getElementById('audioEl');
  const previewWrap = document.getElementById('previewWrap');
  const playBtn   = document.getElementById('playBtn');
  audio.pause();
  previewWrap.classList.remove('playing');

  if (r.previewUrl || r.preview_url) {
    audio.src = r.previewUrl || r.preview_url;
    show(previewWrap);
    playBtn.onclick = () => {
      if (audio.paused) { audio.play(); previewWrap.classList.add('playing'); }
      else              { audio.pause(); previewWrap.classList.remove('playing'); }
    };
    audio.onended = () => previewWrap.classList.remove('playing');
  } else {
    hide(previewWrap);
    audio.src = '';
  }

  // Streaming links
  const grid = document.getElementById('linksGrid');
  grid.innerHTML = '';

  const svcTrack = r.services || {};
  const svcAlbum = alb?.services || {};
  const merged   = { ...svcAlbum, ...svcTrack };

  if (Object.keys(merged).length) {
    Object.entries(merged).forEach(([key, val]) => {
      const url = typeof val === 'string' ? val : val?.link;
      if (!url) return;
      const d = DSP[key];
      const label = d?.label || key;
      const color = d?.color || '#888';
      const chip  = document.createElement('a');
      chip.className = 'dsp-chip';
      chip.href = url;
      chip.target = '_blank';
      chip.rel = 'noopener noreferrer';
      chip.style.setProperty('--c', color);
      chip.innerHTML = `
        <span class="chip-dot"></span>
        <span class="chip-label">${label}</span>
        <span class="chip-arrow">↗</span>
      `;
      grid.appendChild(chip);
    });
  } else {
    grid.innerHTML = `<p class="no-links">No streaming links found.</p>`;
  }

  show(resultsCard);
  resultsCard.classList.add('visible');
  setTimeout(() => resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
}

// ─────────────────────────────────────────
// RENDER: SEARCH LIST
// ─────────────────────────────────────────
function renderSearch(tracks, albums, artists) {
  const list = document.getElementById('searchList');
  list.innerHTML = '';

  const all = [
    ...tracks.slice(0, 10).map(t => ({ ...t, _type: 'Track' })),
    ...albums.slice(0, 5).map(a => ({ ...a, _type: 'Album' })),
    ...artists.slice(0, 5).map(a => ({ ...a, _type: 'Artist' })),
  ];

  if (!all.length) throw new Error('No results found.');

  all.forEach((item, i) => {
    const cover   = item.image?.url || (typeof item.image === 'string' ? '' : '');
    const artists = item.artists
      ? (typeof item.artists === 'string'
          ? item.artists
          : item.artists?.map?.(a => a.name).join(', ') || '')
      : '';
    const link = item.link || item.services?.spotify?.link || '#';

    const row = document.createElement('a');
    row.className = 'sr-row';
    row.href = link;
    row.target = '_blank';
    row.rel = 'noopener noreferrer';
    row.style.animationDelay = `${i * 30}ms`;
    row.innerHTML = `
      <div class="sr-art" style="${cover ? `background-image:url('${cover}')` : ''}">
        ${!cover ? '<span class="sr-art-icon">♪</span>' : ''}
      </div>
      <div class="sr-info">
        <div class="sr-name">${item.name || '—'}</div>
        ${artists ? `<div class="sr-artist">${artists}</div>` : ''}
      </div>
      <div class="sr-type-badge">${item._type}</div>
      <span class="sr-arrow">↗</span>
    `;
    list.appendChild(row);
  });

  show(searchResults);
  searchResults.classList.add('visible');
  setTimeout(() => searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
}

// ─────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────
function fmt(ms) {
  if (!ms) return '—';
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
}

window.onload = () => {
    document.getElementById('pageLoader').classList.add('loaded');
    // Clear console to hide logs
    console.clear();
    console.log('%cCMG Elite — Intelligence Engine v6.1 — Protected Mode', 'color:#007AFF;font-weight:900;font-size:15px;text-shadow: 0 0 10px rgba(0,122,255,0.5);');
};

// ─────────────────────────────────────────
// SECURITY & ANTI-INSPECT (Hiding Contents)
// ─────────────────────────────────────────

// Disable Right Click
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable Keyboard Shortcuts
document.addEventListener('keydown', e => {
  // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P
  const forbiddenKeys = [123]; // F12
  const isForbiddenCtrlKey = e.ctrlKey && (e.shiftKey && [73, 74, 67].includes(e.keyCode)); // I, J, C
  const isViewSource = e.ctrlKey && [85, 83, 80].includes(e.keyCode); // U (Source), S (Save), P (Print)

  if (forbiddenKeys.includes(e.keyCode) || isForbiddenCtrlKey || isViewSource) {
    e.preventDefault();
    return false;
  }
});

// DevTools Detection & Deterrence
(function() {
    let devtoolsOpen = false;
    const threshold = 160;
    
    // Trap loop - slows down the site significantly if DevTools is open
    const trap = function() {
        const start = performance.now();
        debugger;
        const end = performance.now();
        if (end - start > 100) {
            // DevTools is likely open
            if (!devtoolsOpen) {
                console.warn('%cSECURITY ALERT: Unauthorized access detected.', 'color:red;font-size:20px;font-weight:bold;');
                document.body.innerHTML = '<div style="height:100vh;display:flex;align-items:center;justify-content:center;background:#000;color:#fff;font-family:sans-serif;text-align:center;padding:20px;"><h1>Access Restricted</h1><p>Security protocol triggered. Unauthorized inspection is prohibited.</p></div>';
            }
            devtoolsOpen = true;
        }
    };

    // Periodic check
    setInterval(trap, 2000);
})();

// Extra protection: Overwrite console methods
const secureConsole = {};
['log', 'warn', 'error', 'info', 'debug'].forEach(method => {
    secureConsole[method] = () => {};
});
// Uncomment next line to block ALL regular console logs in production
// window.console = { ...window.console, ...secureConsole };
