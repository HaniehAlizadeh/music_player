/* ============================================================
   پژواک — منطق نهایی (۱۶ آهنگ با پرنده)
   ============================================================ */

const ARTISTS = [
  {
    id: "aroon",
    name: "آرون افشار",
    style: "پاپ",
    hues: [270, 320, 200],
    bio: "آرون افشار، خواننده و ترانه‌سرای جوان ایرانی متولد ۱۳۷۳ است. با صدای گرم و ترانه‌های احساسی، خیلی سریع به یکی از پرطرفدارترین خواننده‌های نسل جدید تبدیل شد. قطعه‌هایش معمولاً در سبک پاپ عاشقانه و با حال‌وهوای لطیف ساخته می‌شوند.",
    songs: [
      { title: "حالا که رفتی", src: "songs/1.mp3",  hues: [270, 320, 200] },
      { title: "دلبر",         src: "songs/2.mp3",  hues: [280, 330, 210] }
    ]
  },
  {
    id: "moein",
    name: "معین",
    style: "پاپ سنتی",
    hues: [40, 15, 340],
    bio: "نصرالله معین نجف‌آبادی، معروف به «معین»، متولد ۱۳۳۰ در نجف‌آباد اصفهان است. از چهره‌های ماندگار موسیقی پاپ ایرانی که از دهه ۶۰ به بعد با آهنگ‌هایی چون «خالق»، «پرنده» و «پریچه» جایگاه ویژه‌ای در دل مخاطبان پیدا کرد. سبک او تلفیقی از پاپ و موسیقی سنتی ایرانی است.",
    songs: [
      { title: "خالق",   src: "songs/3.mp3",  hues: [40, 15, 340] },
      { title: "پرنده",  src: "songs/4.mp3",  hues: [35, 20, 350] },
      { title: "پریچه",  src: "songs/5.mp3",  hues: [30, 10, 345] }
    ]
  },
  {
    id: "babak",
    name: "بابک جهانبخش",
    style: "پاپ",
    hues: [200, 240, 280],
    bio: "بابک جهانبخش، خواننده، آهنگساز و ترانه‌سرای ایرانی، از نسل خواننده‌های محبوب دهه ۸۰ و ۹۰ است. ترانه‌هایش معمولاً فضایی رمانتیک و صمیمی دارند و قطعه‌هایی مثل «نفس» و «دیوونه‌تر» از پرطرفدارترین آثار او به شمار می‌روند.",
    songs: [
      { title: "نفس",       src: "songs/6.mp3",  hues: [200, 240, 280] },
      { title: "دیوونه‌تر", src: "songs/7.mp3",  hues: [210, 250, 290] }
    ]
  },
  {
    id: "amirabbas",
    name: "امیرعباس گلاب",
    style: "پاپ",
    hues: [150, 190, 260],
    bio: "امیرعباس گلاب، خواننده ایرانی که با ترانه‌های عاشقانه و صدای پرقدرتش در سال‌های اخیر طرفداران زیادی پیدا کرده است. آثارش بیشتر در فضایی احساسی و با تنظیم‌های مدرن ساخته می‌شوند و موضوع اصلی آن‌ها عشق، دلتنگی و امید است.",
    songs: [
      { title: "همین که هستی", src: "songs/8.mp3",  hues: [150, 190, 260] },
      { title: "یه روزی",       src: "songs/9.mp3",  hues: [160, 200, 270] }
    ]
  },
  {
    id: "behnam",
    name: "بهنام بانی",
    style: "پاپ",
    hues: [15, 340, 280],
    bio: "بهنام بانی، خواننده پاپ ایرانی متولد ۱۳۶۵ در بابل است. با ترانه‌های شاد و ریتمیک در فضای پاپ امروزی به محبوبیت بالایی دست پیدا کرد. آثارش بیشتر با حال‌وهوای جوان‌پسند، ریتم تند و اشعاری ساده اما تأثیرگذار شناخته می‌شوند.",
    songs: [
      { title: "یه دنیا حرف", src: "songs/10.mp3",  hues: [15, 340, 280] },
      { title: "باور",         src: "songs/11.mp3",  hues: [25, 350, 290] }
    ]
  },
  {
    id: "mohsen",
    name: "محسن یگانه",
    style: "پاپ",
    hues: [220, 280, 340],
    bio: "محسن یگانه، خواننده، آهنگساز و تنظیم‌کننده ایرانی متولد ۱۳۶۳ است. از چهره‌های شاخص موسیقی پاپ ایران که با آهنگ‌هایی مثل «نفس»، «خاطره» و «یکی بود یکی نبود» تأثیر بزرگی بر فضای موسیقی پاپ نسل خود گذاشت. سبک او درآمیخته با احساس و روایت‌های شخصی است.",
    songs: [
      { title: "نفس",              src: "songs/12.mp3",  hues: [220, 280, 340] },
      { title: "یکی بود یکی نبود", src: "songs/13.mp3",  hues: [230, 290, 350] }
    ]
  },
  {
    id: "ragheb",
    name: "راغب",
    style: "پاپ",
    hues: [35, 5, 320],
    bio: "راغب، خواننده پاپ ایرانی که با ترانه‌های عاطفی و سبک خاصش در دهه‌های گذشته شناخته شد. آثارش بیشتر با مضمون عشق، خاطره و جدایی ساخته شده‌اند و صدای گرم او در میان نسل‌های مختلف مخاطب داشته است.",
    songs: [
      { title: "حس خوب", src: "songs/14.mp3", hues: [35, 5, 320] }
    ]
  },
  {
    id: "sirvan",
    name: "سیروان خسروی",
    style: "پاپ راک",
    hues: [280, 200, 150],
    bio: "سیروان خسروی، خواننده، آهنگساز و تنظیم‌کننده ایرانی متولد ۱۳۶۱ است. او از پیشگامان تلفیق پاپ و راک در موسیقی ایران محسوب می‌شود و با آهنگ‌هایی مثل «حس خوب» و «چیزی بگو» توانست فضای جدیدی در موسیقی پاپ ایجاد کند. تنظیم‌های نوآورانه‌اش امضای هنری او هستند.",
    songs: [
      { title: "چیزی بگو", src: "songs/15.mp3", hues: [280, 200, 150] },
      { title: "پرواز",    src: "songs/16.mp3", hues: [270, 190, 160] }
    ]
  }
];

/* ---------- ساخت لیست آهنگ‌ها ---------- */
const WORKS = [];
ARTISTS.forEach(a => {
  a.songs.forEach(s => {
    WORKS.push({
      id: WORKS.length + 1,
      title: s.title,
      artist: a.name,
      artistId: a.id,
      album: a.name,
      year: "۱۴۰۳",
      src: s.src,
      hues: s.hues
    });
  });
});

/* ---------- المان‌ها ---------- */
const audio      = document.getElementById('audio');
const viz        = document.getElementById('viz');
const ctx        = viz.getContext('2d');
const vinyl      = document.getElementById('vinyl');
const vinylWrap  = document.getElementById('vinylWrap');
const vinylLabel = document.getElementById('vinylLabel');
const songListEl = document.getElementById('songList');
const emptyEl    = document.getElementById('empty');
const countEl    = document.getElementById('count');
const searchEl   = document.getElementById('search');

const nowTitle   = document.getElementById('nowTitle');
const nowArtist  = document.getElementById('nowArtist');
const nowAlbum   = document.getElementById('nowAlbum');

const playBtn    = document.getElementById('playBtn');
const playIcon   = document.getElementById('playIcon');
const tapHint    = document.getElementById('tapHint');
const tapIcon    = document.getElementById('tapIcon');
const prevBtn    = document.getElementById('prevBtn');
const nextBtn    = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn  = document.getElementById('repeatBtn');

const seek       = document.getElementById('seek');
const vol        = document.getElementById('vol');
const tCur       = document.getElementById('tCur');
const tDur       = document.getElementById('tDur');

const playerView   = document.getElementById('playerView');
const discoverView = document.getElementById('discoverView');
const navChips     = document.querySelectorAll('.nav-chip');

const artistGrid   = document.getElementById('artistGrid');
const artistSearch = document.getElementById('artistSearch');
const styleFilter  = document.getElementById('styleFilter');

const artistModal  = document.getElementById('artistModal');
const modalClose   = document.getElementById('modalClose');
const modalAvatar  = document.getElementById('modalAvatar');
const modalName    = document.getElementById('modalName');
const modalStyle   = document.getElementById('modalStyle');
const modalBio     = document.getElementById('modalBio');
const modalSongs   = document.getElementById('modalSongs');

/* ---------- وضعیت ---------- */
let currentId  = null;
let filterMode = 'all';
let query      = '';
let shuffled   = false;
let repeatMode = 'all';

let favorites = [];
try { favorites = JSON.parse(localStorage.getItem('pezhvak.fav') || '[]'); }
catch (e) { favorites = []; }

/* ---------- Web Audio ---------- */
let audioCtx = null, analyser = null, freqData = null;

function initAnalyser() {
  if (audioCtx) return;

  if (location.protocol === 'file:') {
    console.warn('file:// — تحلیل صدا غیرفعال شد تا صدا پخش بشه');
    analyser = null;
    return;
  }

  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AC();
    const src = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.75;
    src.connect(analyser);
    analyser.connect(audioCtx.destination);
    freqData = new Uint8Array(analyser.frequencyBinCount);
  } catch (e) {
    console.warn('analyser fallback');
    analyser = null;
  }
}

/* ---------- ابزارها ---------- */
function toFa(n) { return String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]); }

function fmtTime(sec) {
  if (!sec || isNaN(sec)) return '۰:۰۰';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return toFa(m) + ':' + (s < 10 ? '۰' : '') + toFa(s);
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function getWork(id)   { return WORKS.find(w => w.id === id) || null; }
function getArtist(id) { return ARTISTS.find(a => a.id === id) || null; }

/* ---------- گالری ---------- */
function visibleWorks() {
  let out = WORKS.slice();
  if (filterMode === 'fav') out = out.filter(w => favorites.includes(w.id));
  if (query) {
    const q = query.toLowerCase();
    out = out.filter(w =>
      w.title.toLowerCase().includes(q) ||
      w.artist.toLowerCase().includes(q));
  }
  return out;
}

function renderGallery() {
  const list = visibleWorks();
  songListEl.innerHTML = '';

  if (!list.length) {
    emptyEl.classList.remove('hidden');
    countEl.textContent = '۰ آهنگ';
    return;
  }
  emptyEl.classList.add('hidden');
  countEl.textContent = toFa(list.length) + ' آهنگ';

  list.forEach(w => {
    const isFav = favorites.includes(w.id);
    const li = document.createElement('li');
    li.className = 'track' + (w.id === currentId ? ' active' : '');
    li.dataset.id = w.id;

    const grad = `conic-gradient(from 0deg,
      hsl(${w.hues[0]}, 80%, 58%),
      hsl(${w.hues[1]}, 80%, 58%),
      hsl(${w.hues[2]}, 80%, 58%),
      hsl(${w.hues[0]}, 80%, 58%))`;

    li.innerHTML = `
      <div class="track-art" style="background:${grad}">♪</div>
      <div class="track-meta">
        <div class="track-title">${escapeHtml(w.title)}</div>
        <div class="track-artist">${escapeHtml(w.artist)}</div>
      </div>
      <button class="track-fav ${isFav ? 'on' : ''}">${isFav ? '♥' : '♡'}</button>
    `;

    li.addEventListener('click', (e) => {
      if (e.target.closest('.track-fav')) return;
      playWork(w.id);
    });

    li.querySelector('.track-fav').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFav(w.id);
    });

    songListEl.appendChild(li);
  });
}

function toggleFav(id) {
  const i = favorites.indexOf(id);
  if (i === -1) favorites.push(id);
  else favorites.splice(i, 1);
  localStorage.setItem('pezhvak.fav', JSON.stringify(favorites));
  renderGallery();
}

/* ---------- پالت ---------- */
function applyPalette(hues) {
  const r = document.documentElement.style;
  r.setProperty('--c1', hues[0]);
  r.setProperty('--c2', hues[1]);
  r.setProperty('--c3', hues[2]);

  vinylLabel.style.background = `conic-gradient(from 0deg,
    hsl(${hues[0]}, 80%, 60%),
    hsl(${hues[1]}, 80%, 60%),
    hsl(${hues[2]}, 80%, 60%),
    hsl(${hues[0]}, 80%, 60%))`;
}

/* ---------- پخش ---------- */
function playWork(id) {
  const w = getWork(id);
  if (!w) return;

  if (currentId === id) { togglePlay(); return; }

  currentId = id;
  audio.src = w.src;
  applyPalette(w.hues);

  nowTitle.textContent  = w.title;
  nowArtist.textContent = w.artist;
  nowAlbum.textContent  = w.album + ' · ' + w.year;

  renderGallery();
  initAnalyser();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

  audio.play().then(() => setPlayingUI(true))
              .catch(err => { console.log('پخش نشد:', err.message); setPlayingUI(false); });
}

function togglePlay() {
  if (!currentId) {
    const list = visibleWorks();
    if (list.length) playWork(list[0].id);
    return;
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  if (audio.paused) audio.play().then(() => setPlayingUI(true)).catch(()=>{});
  else audio.pause();
}

function setPlayingUI(playing) {
  playIcon.textContent = playing ? '❚❚' : '▶';
  tapIcon.textContent  = playing ? '❚❚' : '▶';
  vinyl.classList.toggle('spinning', playing);
  vinylWrap.classList.toggle('paused', !playing);
}

function playNext() {
  const list = visibleWorks();
  if (!list.length) return;
  if (shuffled && list.length > 1) {
    let r;
    do { r = Math.floor(Math.random() * list.length); }
    while (list[r].id === currentId);
    playWork(list[r].id);
    return;
  }
  const idx = list.findIndex(w => w.id === currentId);
  playWork(list[(idx + 1) % list.length].id);
}

function playPrev() {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  const list = visibleWorks();
  if (!list.length) return;
  const idx = list.findIndex(w => w.id === currentId);
  playWork(list[(idx - 1 + list.length) % list.length].id);
}

/* ---------- رویدادهای صوتی ---------- */
audio.addEventListener('play',  () => setPlayingUI(true));
audio.addEventListener('pause', () => setPlayingUI(false));
audio.addEventListener('loadedmetadata', () => {
  tDur.textContent = fmtTime(audio.duration);
});
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    seek.value = (audio.currentTime / audio.duration) * 1000;
    tCur.textContent = fmtTime(audio.currentTime);
  }
});
audio.addEventListener('ended', () => {
  if (repeatMode === 'one') { audio.currentTime = 0; audio.play(); }
  else if (repeatMode === 'all') playNext();
  else setPlayingUI(false);
});

/* ---------- دکمه‌ها ---------- */
playBtn.addEventListener('click', togglePlay);
tapHint.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);

shuffleBtn.addEventListener('click', () => {
  shuffled = !shuffled;
  shuffleBtn.classList.toggle('active', shuffled);
});

repeatBtn.addEventListener('click', () => {
  if (repeatMode === 'all') repeatMode = 'one';
  else if (repeatMode === 'one') repeatMode = 'off';
  else repeatMode = 'all';
  repeatBtn.textContent = repeatMode === 'one' ? '↺' : '↻';
  repeatBtn.classList.toggle('active', repeatMode !== 'off');
});

seek.addEventListener('input', () => {
  if (audio.duration) audio.currentTime = (seek.value / 1000) * audio.duration;
});
vol.addEventListener('input', () => { audio.volume = parseFloat(vol.value); });
audio.volume = 0.8;

/* ---------- جستجو و فیلتر ---------- */
searchEl.addEventListener('input', (e) => { query = e.target.value.trim(); renderGallery(); });

document.querySelectorAll('.chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterMode = btn.dataset.filter;
    renderGallery();
  });
});

/* ============================================================
   کشف خواننده
   ============================================================ */

function renderArtists() {
  const q = artistSearch.value.trim().toLowerCase();
  const st = styleFilter.value;

  let list = ARTISTS.slice();
  if (st !== 'all') list = list.filter(a => a.style === st);
  if (q) list = list.filter(a => a.name.toLowerCase().includes(q));

  if (!list.length) {
    artistGrid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px;">خواننده‌ای پیدا نشد</p>';
    return;
  }

  artistGrid.innerHTML = list.map(a => {
    const h = a.hues[0];
    const bg = a.image
      ? `background-image:url('${a.image}')`
      : `background:linear-gradient(135deg,
          hsl(${a.hues[0]}, 75%, 58%),
          hsl(${a.hues[1]}, 75%, 58%))`;
    const initial = a.image ? '' : a.name.charAt(0);

    return `
      <div class="artist-card" data-id="${a.id}" style="--cardHue:${h}">
        <div class="artist-avatar" style="${bg}">${initial}</div>
        <h4>${escapeHtml(a.name)}</h4>
        <span class="style-tag">${escapeHtml(a.style)}</span>
        <span class="song-count">${toFa(a.songs.length)} آهنگ</span>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.artist-card').forEach(card => {
    card.addEventListener('click', () => openArtistModal(card.dataset.id));
  });
}

function openArtistModal(id) {
  const a = getArtist(id);
  if (!a) return;

  artistModal.querySelector('.modal-content').style.setProperty('--mh', a.hues[0]);

  const bg = a.image
    ? `background-image:url('${a.image}')`
    : `background:linear-gradient(135deg,
        hsl(${a.hues[0]}, 75%, 58%),
        hsl(${a.hues[1]}, 75%, 58%))`;

  modalAvatar.setAttribute('style', bg);
  modalAvatar.textContent = a.image ? '' : a.name.charAt(0);

  modalName.textContent  = a.name;
  modalStyle.textContent = a.style;
  modalBio.textContent   = a.bio;

  modalSongs.innerHTML = a.songs.map(s => {
    const w = WORKS.find(x => x.src === s.src);
    return `
      <li data-workid="${w ? w.id : ''}">
        <span>${escapeHtml(s.title)}</span>
        <span class="play-arrow">▶ پخش</span>
      </li>
    `;
  }).join('');

  modalSongs.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const wid = parseInt(li.dataset.workid);
      if (wid) {
        artistModal.classList.add('hidden');
        switchView('player');
        playWork(wid);
      }
    });
  });

  artistModal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => artistModal.classList.add('hidden'));
artistModal.addEventListener('click', (e) => {
  if (e.target === artistModal) artistModal.classList.add('hidden');
});

artistSearch.addEventListener('input', renderArtists);
styleFilter.addEventListener('change', renderArtists);

/* ---------- سوییچ صفحه ---------- */
function switchView(view) {
  navChips.forEach(c => c.classList.toggle('active', c.dataset.view === view));

  if (view === 'discover') {
    playerView.classList.add('hidden');
    discoverView.classList.remove('hidden');
  } else {
    discoverView.classList.add('hidden');
    playerView.classList.remove('hidden');
  }
}

navChips.forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

/* ============================================================
   ویژوالایزر
   ============================================================ */

const CW = 560, CH = 560;
const cx = CW / 2, cy = CH / 2;

const dpr = window.devicePixelRatio || 1;
viz.width  = CW * dpr;
viz.height = CH * dpr;
viz.style.width  = '100%';
viz.style.height = '100%';
ctx.scale(dpr, dpr);

const particles = [];
const MAX_PARTICLES = 140;

let prevEnergy = 0, beatCooldown = 0, simulatedTime = 0;

const stars = [];
for (let i = 0; i < 60; i++) {
  stars.push({
    a: Math.random() * Math.PI * 2,
    r: 100 + Math.random() * 180,
    size: 0.5 + Math.random() * 1.6,
    speed: 0.0006 + Math.random() * 0.0018,
    phase: Math.random() * Math.PI * 2
  });
}

function spawnBurst(count, hueSet, power) {
  for (let i = 0; i < count; i++) {
    if (particles.length >= MAX_PARTICLES) break;
    const angle = Math.random() * Math.PI * 2;
    const speed = (1 + Math.random() * 2.4) * power;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: 0.008 + Math.random() * 0.014,
      size: 1.5 + Math.random() * 2.5,
      hue: hueSet[Math.floor(Math.random() * hueSet.length)]
    });
  }
}

function getEnergy() {
  if (analyser && freqData && !audio.paused) {
    analyser.getByteFrequencyData(freqData);
    let bass = 0, mid = 0, high = 0;
    for (let i = 0; i < 6; i++) bass += freqData[i];
    for (let i = 6; i < 20; i++) mid += freqData[i];
    for (let i = 20; i < 40; i++) high += freqData[i];
    bass /= (6 * 255); mid /= (14 * 255); high /= (20 * 255);
    if (bass + mid + high > 0.02) return { bass, mid, high };
  }

  if (!audio.paused) simulatedTime += 0.035;
  const t = simulatedTime;
  return {
    bass: 0.45 + Math.abs(Math.sin(t * 1.7)) * 0.35 + Math.abs(Math.sin(t * 3.3)) * 0.15,
    mid:  0.35 + Math.abs(Math.sin(t * 2.4 + 1)) * 0.30 + Math.abs(Math.sin(t * 4.1 + 2)) * 0.12,
    high: 0.25 + Math.abs(Math.sin(t * 3.9 + 3)) * 0.30
  };
}

function currentHues() {
  const w = getWork(currentId);
  return w ? w.hues : [265, 320, 190];
}

function drawWaveRing(radius, hue, alpha, amp, waveFactor, time) {
  const points = 96;
  ctx.beginPath();
  for (let i = 0; i <= points; i++) {
    const a = (i / points) * Math.PI * 2;
    const wave = Math.sin(a * 6 + time * 0.003 * waveFactor) * 0.5 +
                 Math.sin(a * 3 - time * 0.002 * waveFactor) * 0.5;
    const r = radius + wave * amp * 22;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = `hsla(${hue}, 90%, 70%, ${alpha})`;
  ctx.lineWidth = 1.4;
  ctx.shadowBlur = 18;
  ctx.shadowColor = `hsla(${hue}, 90%, 65%, ${alpha})`;
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function draw() {
  requestAnimationFrame(draw);
  ctx.clearRect(0, 0, CW, CH);

  const e = getEnergy();
  const hues = currentHues();
  const time = performance.now();

  const halo = ctx.createRadialGradient(cx, cy, 40, cx, cy, 260);
  halo.addColorStop(0, `hsla(${hues[0]}, 85%, 62%, ${0.3 + e.bass * 0.25})`);
  halo.addColorStop(0.6, `hsla(${hues[1]}, 85%, 58%, 0.1)`);
  halo.addColorStop(1, 'hsla(0, 0%, 0%, 0)');
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, CW, CH);

  ctx.save();
  ctx.translate(cx, cy);
  stars.forEach(s => {
    s.a += s.speed;
    const r = s.r + Math.sin(time * 0.001 + s.phase) * 12;
    const x = Math.cos(s.a) * r;
    const y = Math.sin(s.a) * r;
    const alpha = 0.3 + (Math.sin(time * 0.002 + s.phase) + 1) * 0.2;
    ctx.fillStyle = `hsla(${hues[2]}, 85%, 78%, ${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, s.size, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  const baseR = 140;
  drawWaveRing(baseR + 8 + e.bass * 22, hues[0], 0.9, e.bass, 1.0, time);
  drawWaveRing(baseR + 30 + e.mid * 18, hues[1], 0.6, e.mid, 1.4, time);
  drawWaveRing(baseR + 52 + e.high * 14, hues[2], 0.45, e.high, 1.9, time);

  const energyNow = e.bass * 1.2 + e.mid * 0.6 + e.high * 0.3;
  beatCooldown--;
  if (energyNow > prevEnergy + 0.18 && beatCooldown <= 0 && !audio.paused) {
    spawnBurst(6 + Math.floor(e.bass * 10), hues, 1 + e.bass * 1.4);
    beatCooldown = 6;
  }
  prevEnergy = prevEnergy * 0.85 + energyNow * 0.15;

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx; p.y += p.vy;
    p.vx *= 0.985; p.vy *= 0.985;
    p.life -= p.decay;
    if (p.life <= 0) { particles.splice(i, 1); continue; }

    const dx = p.x - cx, dy = p.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const fade = Math.max(0, 1 - dist / 260);

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 88%, 75%, ${p.life * 0.8 * fade})`;
    ctx.shadowBlur = 14;
    ctx.shadowColor = `hsla(${p.hue}, 92%, 68%, ${p.life * fade})`;
    ctx.fill();
  }
  ctx.shadowBlur = 0;
}

/* ============================================================
   راه‌اندازی
   ============================================================ */

renderGallery();
renderArtists();
draw();

document.body.addEventListener('click', () => {
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}, { once: true });

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space')      { e.preventDefault(); togglePlay(); }
  if (e.code === 'ArrowLeft')  playNext();
  if (e.code === 'ArrowRight') playPrev();
  if (e.code === 'Escape')     artistModal.classList.add('hidden');
});

console.log('پژواک راه افتاد ✦');