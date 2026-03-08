'use strict';

/* ──────────────────────────────────────────────────
   1. QUIZ DATA
────────────────────────────────────────────────── */
const QUESTIONS = [
  {
    id: 1,
    image: 'images/hinh1.png',
    text: 'Nếu được chọn công việc mơ ước trong thế giới Chiikawa, em sẽ…',
    options: [
      { text: 'Thu hoạch rau củ yên bình một mình trong vườn nhỏ', type: 'C' },
      { text: 'Khám phá hang động mới, chạy nhảy khắp mọi nơi', type: 'U' },
      { text: 'Giúp mọi người đỡ lên kế hoạch và hỗ trợ', type: 'H' },
      { text: 'Ngồi vẽ tranh về những giấc mơ dịu dàng nhất', type: 'C' },
    ]
  },
  {
    id: 2,
    image: 'images/hinh2.png',
    text: 'Khi stress vì deadline công việc, em thường làm gì?',
    options: [
      { text: 'Khóc một chút cho nhẹ lòng, rồi tự cố gắng hoàn thành', type: 'C' },
      { text: '"Yaha!" lao thẳng vào làm cho hứng khởi, stress gì chứ!', type: 'U' },
      { text: 'Gọi bạn bè cùng làm, cùng nhau động viên nhau qua', type: 'H' },
      { text: 'Pha một tách trà xanh, nghe nhạc rồi từ từ giải quyết', type: 'C' },
    ]
  },
  {
    id: 3,
    image: 'images/hinh3.png',
    text: 'Em thích không gian làm việc kiểu nào nhất?',
    options: [
      { text: 'Góc nhỏ ấm áp, có chăn mềm, ánh đèn vàng dịu', type: 'C' },
      { text: 'Ngoài trời rộng rãi, gió thổi mát, tự do thoải mái', type: 'U' },
      { text: 'Không gian chung, mọi người ngồi trò chuyện rôm rả', type: 'H' },
      { text: 'Thư viện yên tĩnh, ai ai cũng chìm vào tập trung', type: 'C' },
    ]
  },
  {
    id: 4,
    image: 'images/hinh4.png',
    text: 'Nếu phải dẫn dắt một dự án nhóm, em sẽ…',
    options: [
      { text: 'Lo lắng một chút nhưng cố gắng làm tốt phần của mình', type: 'C' },
      { text: 'Đề xuất ý tưởng điên rồ nhất để cả nhóm hứng khởi', type: 'U' },
      { text: 'Lên kế hoạch chi tiết và hỗ trợ từng thành viên tận tình', type: 'H' },
      { text: 'Xung phong làm phần khó nhất để nhóm đỡ gánh nặng', type: 'H' },
    ]
  },
  {
    id: 5,
    image: 'images/hinh5.png',
    text: 'Cuối tuần em thích làm gì nhất để nạp năng lượng?',
    options: [
      { text: 'Ở nhà đọc sách, ôm gối, mơ màng đến chiều tối', type: 'C' },
      { text: 'Đi chơi, ăn thử món mới, khám phá chỗ chưa đến', type: 'U' },
      { text: 'Gặp bạn bè thân, nấu ăn cùng nhau và trò chuyện mãi', type: 'H' },
      { text: 'Đi dạo một mình, nghe nhạc, ngắm cây cối và trời xanh', type: 'C' },
    ]
  },
  {
    id: 6,
    image: 'images/hinh6.png',
    text: 'Khi gặp khó khăn trong cuộc sống, em thường…',
    options: [
      { text: 'Khóc hết rồi tự đứng dậy', type: 'C' },
      { text: '"Ura!", lao thẳng vào thử thách, không sợ thứ gì hết!', type: 'U' },
      { text: 'Tìm người thân yêu để tâm sự rồi cùng tìm cách giải quyết', type: 'H' },
      { text: 'Trùm chăn kín mít, ôm món đồ vật yêu thích nhất để tự trấn an bản thân', type: 'C' },
    ]
  },
  {
    id: 7,
    image: 'images/hinh7.png',
    text: 'Em hình dung tương lai nghề nghiệp của mình như thế nào?',
    options: [
      { text: 'Công việc bình yên, được làm những điều mình thật sự yêu thích', type: 'C' },
      { text: 'Công việc đầy bất ngờ, du lịch nhiều, không ngừng khám phá', type: 'U' },
      { text: 'Giúp đỡ nhiều người, tạo ra môi trường ấm áp cho mọi người', type: 'H' },
      { text: 'Tự do sáng tạo hoàn toàn, không ai quản lý, tự làm chủ', type: 'U' },
    ]
  },
  {
    id: 8,
    image: 'images/hinh8.png',
    text: 'Khi bạn bè buồn bã và đang cần em, em sẽ làm gì?',
    options: [
      { text: 'Ngồi bên cạnh im lặng, ôm thật chặt, không cần nói gì cả', type: 'C' },
      { text: 'Kéo đi chơi ngay, kể chuyện hài hước để bạn cười lên', type: 'U' },
      { text: 'Nghe hết tâm sự, đưa lời khuyên chân thành rồi nấu chè ăn', type: 'H' },
      { text: 'Mua thật nhiều đồ ăn ngon nhét vào miệng bạn rồi kéo đi quậy phá cho quên sầu', type: 'U' },
    ]
  },
  {
    id: 9,
    image: 'images/hinh9.png',
    text: 'Em thấy mình hợp với môi trường làm việc kiểu nào?',
    options: [
      { text: 'Yên tĩnh, có chiều sâu, ít người quanh, tập trung tối đa', type: 'C' },
      { text: 'Năng động, brainstorming liên tục, ý tưởng bay tứ phía', type: 'U' },
      { text: 'Nhóm nhỏ thân thiết, mọi người hỗ trợ và quan tâm nhau', type: 'H' },
      { text: 'Linh hoạt hoàn toàn, tự quản lý thời gian và không gian của mình', type: 'C' },
    ]
  },
  {
    id: 10,
    image: 'images/hinh10.png',
    text: 'Nếu được tặng một ngày hoàn toàn tự do làm bất cứ gì, em sẽ…',
    options: [
      { text: 'Ngủ nướng đến trưa, mơ màng cả ngày, không làm gì hết!', type: 'C' },
      { text: 'Phiêu lưu, thử đồ ăn mới, chạy nhảy khắp thành phố', type: 'U' },
      { text: 'Tổ chức buổi picnic ấm cúng và dễ thương cho những người em yêu', type: 'H' },
      { text: 'Vẽ, viết, làm điều gì sáng tạo từ đầu đến cuối, một ngày của nghệ thuật', type: 'C' },
    ]
  },
  {
    id: 11,
    image: 'images/hinh11.png',
    text: 'Khi vô tình nhặt được một món đồ lạ trên đường, em sẽ...',
    options: [
      { text: 'Rụt rè quan sát từ xa, không dám chạm vào ngay', type: 'C' },
      { text: '"Yaha!" cầm lên nghịch thử hoặc ăn thử luôn xem sao', type: 'U' },
      { text: 'Xem xét kỹ rồi tìm cách trả lại cho chủ nhân', type: 'H' },
      { text: 'Chụp ảnh lại để làm kỷ niệm rồi mới tính tiếp', type: 'H' },
    ]
  },
  {
    id: 12,
    image: 'images/hinh12.png',
    text: 'Cách em đối mặt với một kỳ thi quan trọng là?',
    options: [
      { text: 'Ôn tập chăm chỉ, thức đêm ghi chép đầy đủ', type: 'H' },
      { text: 'Lo lắng đến mức, mất ăn mất ngủ nhưng vẫn cố học', type: 'C' },
      { text: 'Vừa học vừa chơi, không để bản thân bị áp lực quá mức', type: 'U' },
      { text: 'Lập nhóm cùng bạn bè học chung cho vui và hiệu quả', type: 'H' },
    ]
  },
  {
    id: 13,
    image: 'images/hinh13.png',
    text: 'Món quà em thích nhận được nhất là gì?',
    options: [
      { text: 'Một món đồ handmade nhỏ xíu nhưng chứa đầy tình cảm', type: 'C' },
      { text: 'Một món đồ công nghệ hoặc máy ảnh để lưu giữ khoảnh khắc', type: 'H' },
      { text: 'Đồ ăn ngon hoặc một chuyến đi chơi bất ngờ', type: 'U' },
      { text: 'Một cuốn sách hay hoặc vật dụng hữu ích cho công việc', type: 'H' },
    ]
  },
  {
    id: 14,
    image: 'images/hinh14.png',
    text: 'Nếu được mời tham gia một bữa tiệc sôi động, em sẽ...',
    options: [
      { text: 'Quẩy hết mình, nhảy nhót và làm tâm điểm của đám đông', type: 'U' },
      { text: 'Ngồi một góc cùng vài người bạn thân trò chuyện', type: 'C' },
      { text: 'Chạy đi chạy lại chuẩn bị đồ ăn và giúp đỡ mọi người', type: 'H' },
      { text: 'Lúc đầu hơi ngại nhưng sau đó sẽ hòa nhập rất nhanh', type: 'H' },
    ]
  },
  {
    id: 15,
    image: 'images/hinh15.png',
    text: 'Khi đứng trước một quyết định lớn trong đời, em thường...',
    options: [
      { text: 'Tin vào trực giác và hành động quyết đoán ngay lập tức', type: 'U' },
      { text: 'Hỏi ý kiến bạn bè, người thân để có thêm niềm tin', type: 'C' },
      { text: 'Phân tích kỹ lợi hại và lên kế hoạch rõ ràng cho mọi tình huống', type: 'H' },
      { text: 'Tự nhủ "Cứ thử đi, kiểu gì cũng ổn thôi!"', type: 'H' },
    ]
  }
];

/* ──────────────────────────────────────────────────
   2. RESULT DATA
────────────────────────────────────────────────── */
const RESULTS = {
  C: {
    name:   'Chiikawa',
    emoji:  '⭐',
    badge:  'Chiikawa nhỏ bé dịu dàng ⭐',
    img:    'images/chiikawa.png',
    glow:   'rgba(105,193,110,.55)',
    flavor: 'Em mang tâm hồn nhỏ bé nhưng vô cùng kiên cường của Chiikawa~',
    traits: [
      { ico: '🌿', txt: 'Dịu dàng, ngọt ngào và tốt bụng với mọi người xung quanh, dù chưa quen biết.' },
      { ico: '✨', txt: 'Hay lo lắng những chuyện nhỏ nhặt, nhưng bên trong là sức mạnh nội tâm và lòng dũng cảm lớn lao.' },
      { ico: '🌱', txt: 'Yêu thích sự bình yên, cảm thấy an toàn nhất trong hang quen thuộc của riêng mình.' },
      { ico: '🌸', txt: 'Cảm xúc phong phú và chân thành, em rất nhạy bén với cảm xúc của người khác.' },
      { ico: '🍀', txt: 'Nhỏ bé nhưng kiên cường, luôn cố gắng hết mình vì những điều và người quan trọng.' },
      { ico: '💚', txt: 'Trung thành tuyệt đối và là chỗ dựa ấm áp, vô điều kiện cho người mình yêu thương.' },
    ]
  },
  U: {
    name:   'Usagi',
    emoji:  '🐰',
    badge:  'Usagi năng lượng bùng nổ 🐰',
    img:    'images/usagi.png',
    glow:   'rgba(255, 204, 0, .55)',
    flavor: 'Em mang năng lượng "YAHA!" bùng nổ của Usagi, một cơn lốc dễ thương!',
    traits: [
      { ico: '⚡', txt: 'Năng lượng bùng nổ, luôn mang niềm vui và tiếng cười đến mọi nơi em xuất hiện.' },
      { ico: '💥', txt: 'Nghịch ngợm, táo bạo, không ngại thử thách và lao vào cuộc sống với tất cả nhiệt huyết.' },
      { ico: '🌟', txt: 'Sống trọn vẹn với khoảnh khắc hiện tại, "YAHA!" trước mọi thứ thú vị trên đời.' },
      { ico: '🛡️', txt: 'Dù bề ngoài hỗn loạn nhưng cực kỳ đáng tin và đáng dựa khi bạn bè thực sự cần.' },
      { ico: '💡', txt: 'Sáng tạo, quyết đoán, có khả năng giải quyết vấn đề theo những cách thật bất ngờ.' },
      { ico: '☄️', txt: 'Luôn tìm thấy niềm vui trong những điều nhỏ nhặt nhất của cuộc sống hàng ngày.' },
    ]
  },
  H: {
    name:   'Hachiware',
    emoji:  '🐱',
    badge:  'Hachiware ấm áp đáng tin 🐱',
    img:    'images/hachiware.png',
    glow:   'rgba(91,155,213,.55)',
    flavor: 'Em mang sự ấm áp và lạc quan của Hachiware, người đáng tin nhất~',
    traits: [
      { ico: '📸', txt: 'Vui vẻ, lạc quan, luôn nhìn thấy mặt tích cực và ánh sáng trong mọi tình huống khó.' },
      { ico: '🌊', txt: 'Người bạn tuyệt vời nhất: luôn lắng nghe bằng cả trái tim và hỗ trợ không đòi hỏi gì.' },
      { ico: '📘', txt: 'Thông minh, chín chắn, biết cách khiến mọi người cảm thấy an toàn và được chào đón.' },
      { ico: '🗺️', txt: 'Thích khám phá, trò chuyện và lan tỏa năng lượng tích cực đến mọi người xung quanh.' },
      { ico: '💙', txt: 'Có trái tim rộng lớn, chu đáo và đáng tin cậy như một anh cả thực sự trong nhóm.' },
      { ico: '💎', txt: 'Giữ bình tĩnh tuyệt vời, là chỗ dựa vững chắc giúp mọi người vượt qua nỗi sợ hãi.' },
    ]
  }
};

/* ──────────────────────────────────────────────────
   3. STATE
────────────────────────────────────────────────── */
const state = {
  currentScreen: 'landing',
  answers:       [],
  scores:        { C: 0, U: 0, H: 0 },
  musicOn:       false,
  qScreensBuilt: false,
};

/* ──────────────────────────────────────────────────
   4. ELEMENT CACHE
────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const els = {
  cursorCore:    $('#cursor-core'),
  cursorRing:    $('#cursor-ring'),
  cursorSparkle: $('#cursor-sparkle'),
  particleLayer: $('#particle-layer'),
  fwCanvas:      $('#fw-canvas'),
  fwCtx:         null,
  confettiLayer: $('#confetti-layer'),
  musicBtn:      $('#music-btn'),
  musicIcon:     $('#music-icon'),
  bgAudio:       $('#bg-audio'),
  btnStart:      $('#btn-start'),
  screenLanding: $('#screen-landing'),
  screenLoading: $('#screen-loading'),
  screenResult:  $('#screen-result'),
  screenLetter:  $('#screen-letter'),
  loadingH2:     $('#loading-h2'),
  loadingFill:   $('#loading-fill'),
  loadingFlavor: $('#loading-flavor'),
  resultCharImg: $('#result-char-img'),
  resultPill:    $('#result-pill'),
  resultFlavor:  $('#result-flavor-text'),
  resultTraits:  $('#result-traits-wrap'),
  resultGlow:    $('#result-glow-ring'),
  btnGoLetter:   $('#btn-go-letter'),
  btnReplay:     $('#btn-replay'),
  envPhase:      $('#env-phase'),
  envelope3d:    $('#envelope-3d'),
  envFlap:       $('#env-flap'),
  letterPaper:   $('#letter-paper'),
  btnOpenEnv:    $('#btn-open-env'),
  btnReplayLtr:  $('#btn-replay-letter'),
  letterActions: $('#letter-action-row'),
};

/* ──────────────────────────────────────────────────
   5. AUDIO HELPERS
────────────────────────────────────────────────── */
function sfx(src, vol = 0.6) {
  try {
    const a = new Audio(src);
    a.volume = vol;
    a.play().catch(() => {});
  } catch (_) {}
}

function toggleMusic() {
  if (state.musicOn) {
    els.bgAudio.pause();
    els.musicIcon.textContent = '🔇';
    els.musicBtn.setAttribute('aria-pressed', 'false');
  } else {
    els.bgAudio.volume = 0.3;
    els.bgAudio.play().catch(() => {});
    els.musicIcon.textContent = '🎵';
    els.musicBtn.setAttribute('aria-pressed', 'true');
  }
  state.musicOn = !state.musicOn;
}

function tryAutoMusic() {
  if (state.musicOn) return;
  els.bgAudio.volume = 0.3;
  els.bgAudio.play().then(() => {
    state.musicOn = true;
    els.musicIcon.textContent = '🎵';
    els.musicBtn.setAttribute('aria-pressed', 'true');
  }).catch(() => {});
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* ──────────────────────────────────────────────────
   RIPPLE EFFECT
────────────────────────────────────────────────── */
function createRipple(event, element) {
  const btn = element || event.currentTarget;
  if (!btn) return;

  const rect   = btn.getBoundingClientRect();
  const size   = Math.max(rect.width, rect.height) * 1.4;
  const x      = (event.clientX - rect.left) - size / 2;
  const y      = (event.clientY - rect.top)  - size / 2;

  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  ripple.style.cssText = `
    width:  ${size}px;
    height: ${size}px;
    left:   ${x}px;
    top:    ${y}px;
  `;

  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}

function attachRippleListeners() {
  const RIPPLE_SELECTORS = [
    '.btn-start', '.btn-go-letter', '.btn-open-env',
    '.btn-ghost', '.btn-back', '.sf-open-btn'
  ];
  RIPPLE_SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.addEventListener('click', (e) => createRipple(e, el));
    });
  });

  document.addEventListener('click', (e) => {
    const opt = e.target.closest('.opt-btn');
    if (opt) createRipple(e, opt);
  });
}

/* ──────────────────────────────────────────────────
   HAPTIC FEEDBACK
────────────────────────────────────────────────── */
function hapticFeedback(pattern = [15]) {
  if ('vibrate' in navigator) {
    try { navigator.vibrate(pattern); } catch (_) {}
  }
}

/* ──────────────────────────────────────────────────
   6. CUSTOM CURSOR
────────────────────────────────────────────────── */
const sparkleColors = ['#A7E9C3','#69C16E','#FFB3C6','#FFF0C0','#B3D9FF','#FFD700'];

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  els.cursorCore.style.left = mouseX + 'px';
  els.cursorCore.style.top  = mouseY + 'px';
  els.cursorRing.style.left = mouseX + 'px';
  els.cursorRing.style.top  = mouseY + 'px';

  if (Math.random() < 0.25) spawnSparkle(mouseX, mouseY);
});

document.addEventListener('mousedown', () => document.body.classList.add('clicking'));
document.addEventListener('mouseup',   () => document.body.classList.remove('clicking'));

function spawnSparkle(x, y) {
  const dot = document.createElement('div');
  dot.className = 'sparkle-dot';
  dot.style.cssText = `
    left: ${x + (Math.random() * 16 - 8)}px;
    top:  ${y + (Math.random() * 16 - 8)}px;
    width:  ${Math.random() * 7 + 3}px;
    height: ${Math.random() * 7 + 3}px;
    background: ${sparkleColors[Math.floor(Math.random() * sparkleColors.length)]};
    animation-duration: ${Math.random() * 0.4 + 0.5}s;
  `;
  els.cursorSparkle.appendChild(dot);
  setTimeout(() => dot.remove(), 900);
}

/* ──────────────────────────────────────────────────
   7. PARTICLE LAYER — ✨ UPGRADED: 3D FALLING PARTICLES
────────────────────────────────────────────────── */
function buildParticles() {
  const symbols = ['🌿','🍃','⭐','✨','💚','🌸','🌼','💫','🌱','💕'];
  const colors  = ['#A7E9C3','#69C16E','#FFB3C6','#FFF0C0','#c8e6ff'];

  for (let i = 0; i < 35; i++) {
    const el   = document.createElement('div');
    el.className = 'ptcl';
    const useEmoji = Math.random() > 0.45;

    if (useEmoji) {
      el.style.fontSize = (Math.random() * 14 + 8) + 'px';
      el.textContent    = symbols[Math.floor(Math.random() * symbols.length)];
    } else {
      const s = Math.random() * 11 + 4;
      el.style.width      = s + 'px';
      el.style.height     = s + 'px';
      el.style.borderRadius = '50%';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
    }

    el.style.left              = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 14 + 8) + 's';
    el.style.animationDelay    = (Math.random() * 10) + 's';

    // ✨ NEW: Random 3D rotation speeds via CSS custom props
    // Each particle gets unique spin rates for X, Y, Z axes
    const spinX = (Math.random() * 2 - 1).toFixed(3);
    const spinY = (Math.random() * 2 - 1).toFixed(3);
    const spinZ = (Math.random() * 2 - 1).toFixed(3);
    el.style.setProperty('--spin-x', spinX);
    el.style.setProperty('--spin-y', spinY);
    el.style.setProperty('--spin-z', spinZ);

    // Random horizontal drift
    const driftX = (Math.random() * 80 - 40) + 'px';
    el.style.setProperty('--drift-x', driftX);

    els.particleLayer.appendChild(el);
  }
}

/* ──────────────────────────────────────────────────
   8. SCREEN NAVIGATION
────────────────────────────────────────────────── */
const SCREEN_ORDER = ['landing', ...QUESTIONS.map((_, i) => `q${i + 1}`), 'loading', 'result', 'letter'];

function getScreenEl(name) {
  if (name === 'landing') return els.screenLanding;
  if (name === 'loading') return els.screenLoading;
  if (name === 'result')  return els.screenResult;
  if (name === 'letter')  return els.screenLetter;
  if (name === 'minigame') return $('#screen-minigame'); // <--- Thêm dòng này
  if (name === 'wheel') return $('#screen-wheel');       // <--- Thêm dòng này
  if (name.startsWith('q')) return $(`#screen-${name}`);
  return null;
}

function playPageTurnSfx(direction) {
  if (direction === 'forward') {
    sfx('audio/clicksound.mp3', 0.25);
  } else {
    sfx('audio/pop-select.mp3', 0.18);
  }
}

function goTo(toName, direction = 'forward') {
  playPageTurnSfx(direction);

  const fromEl = getScreenEl(state.currentScreen);
  const toEl   = getScreenEl(toName);
  if (!toEl) return;

  const exitClass  = direction === 'forward' ? 'slide-exit'      : 'slide-exit-back';
  const enterClass = direction === 'forward' ? 'slide-enter'      : 'slide-enter-back';

  if (fromEl) {
    fromEl.classList.add(exitClass);
    fromEl.classList.remove('active');
    fromEl.style.pointerEvents = 'none';
    fromEl.addEventListener('animationend', () => {
      fromEl.classList.remove(exitClass);
      fromEl.style.opacity = '0';
      fromEl.style.transform = '';
    }, { once: true });
  }

  toEl.style.opacity = '0';
  toEl.style.transform = '';
  toEl.classList.add(enterClass);
  toEl.classList.add('active');
  toEl.style.pointerEvents = 'all';
  toEl.addEventListener('animationend', () => {
    toEl.classList.remove(enterClass);
    toEl.style.opacity = '1';

    // ✨ Init 3D tilt for q-card when screen becomes active
    if (toName.startsWith('q')) {
      const screenEl = $(`#screen-${toName}`);
      if (screenEl) {
        const card = screenEl.querySelector('.q-card');
        if (card) initCardTilt(card);
      }
    }
  }, { once: true });

  state.currentScreen = toName;
}

/* ──────────────────────────────────────────────────
   ✨ NEW: 3D TILT EFFECT — for .q-card (Desktop mouse + Mobile gyroscope)
────────────────────────────────────────────────── */

// Max tilt angle in degrees
const TILT_MAX = 12;
const TILT_SCALE = 1.03;

// Keep track of active tilt handlers so we can clean up
const activeTiltCleanups = new WeakMap();

function initCardTilt(card) {
  if (!card) return;

  // Clean up any previous tilt handler on this card
  if (activeTiltCleanups.has(card)) {
    activeTiltCleanups.get(card)();
  }

  // ── Inject the glare element if not already there ──
  let glare = card.querySelector('.q-card-glare');
  if (!glare) {
    glare = document.createElement('div');
    glare.className = 'q-card-glare';
    glare.setAttribute('aria-hidden', 'true');
    card.appendChild(glare);
  }

  // ── Desktop: Mouse move tilt ──
  function onMouseMove(e) {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;

    const dx = (e.clientX - cx) / (rect.width  / 2); // -1 to 1
    const dy = (e.clientY - cy) / (rect.height / 2); // -1 to 1

    const rotY =  dx * TILT_MAX;
    const rotX = -dy * TILT_MAX;

    // Glare position (0% to 100%)
    const glareX = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%';
    const glareY = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';

    card.classList.add('tilt-active');
    card.classList.remove('tilt-reset');
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${TILT_SCALE})`;
    glare.style.setProperty('--glare-x', glareX);
    glare.style.setProperty('--glare-y', glareY);
  }

  function onMouseLeave() {
    card.classList.remove('tilt-active');
    card.classList.add('tilt-reset');
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    glare.style.setProperty('--glare-x', '50%');
    glare.style.setProperty('--glare-y', '50%');

    setTimeout(() => card.classList.remove('tilt-reset'), 450);
  }

  card.addEventListener('mousemove', onMouseMove);
  card.addEventListener('mouseleave', onMouseLeave);

  // ── Mobile: Gyroscope tilt ──
  let gyroHandler = null;

  function handleGyro(e) {
    // beta: front-to-back tilt (-180 to 180), gamma: left-to-right tilt (-90 to 90)
    const beta  = e.beta  || 0;  // X axis tilt
    const gamma = e.gamma || 0;  // Y axis tilt

    // Normalize: typical hold range beta 40–90, gamma -30 to 30
    const normBeta  = Math.max(-1, Math.min(1, (beta  - 65) / 25));
    const normGamma = Math.max(-1, Math.min(1, gamma / 30));

    const rotX = -normBeta  * TILT_MAX * 0.7;
    const rotY =  normGamma * TILT_MAX;

    card.classList.add('tilt-active');
    card.classList.remove('tilt-reset');
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${TILT_SCALE})`;

    // Glare based on tilt
    const glareX = (50 + normGamma * 35).toFixed(1) + '%';
    const glareY = (50 + normBeta  * 35).toFixed(1) + '%';
    glare.style.setProperty('--glare-x', glareX);
    glare.style.setProperty('--glare-y', glareY);
  }

  // Request gyro permission on iOS 13+
  if (typeof DeviceOrientationEvent !== 'undefined') {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      // iOS 13+: permission required
      // We'll attach it on first touch on the card
      function onFirstTouch() {
        DeviceOrientationEvent.requestPermission()
          .then(perm => {
            if (perm === 'granted') {
              gyroHandler = handleGyro;
              window.addEventListener('deviceorientation', gyroHandler);
            }
          })
          .catch(() => {});
        card.removeEventListener('touchstart', onFirstTouch);
      }
      card.addEventListener('touchstart', onFirstTouch, { passive: true });
    } else {
      // Android / older iOS — no permission needed
      gyroHandler = handleGyro;
      window.addEventListener('deviceorientation', gyroHandler);
    }
  }

  // Store cleanup fn
  function cleanup() {
    card.removeEventListener('mousemove', onMouseMove);
    card.removeEventListener('mouseleave', onMouseLeave);
    if (gyroHandler) {
      window.removeEventListener('deviceorientation', gyroHandler);
    }
  }
  activeTiltCleanups.set(card, cleanup);
}

/* ──────────────────────────────────────────────────
   ✨ NEW: ENVELOPE 3D TILT — Same tilt for phong bì
────────────────────────────────────────────────── */
function initEnvelopeTilt() {
  const envelope = document.getElementById('envelope-3d');
  if (!envelope) return;

  // Inject glare if missing
  let glare = envelope.querySelector('.env-glare');
  if (!glare) {
    glare = document.createElement('div');
    glare.className = 'env-glare';
    glare.setAttribute('aria-hidden', 'true');
    envelope.appendChild(glare);
  }

  const ENV_TILT_MAX = 18;

  function onMouseMove(e) {
    if (envelope.classList.contains('opened')) return;
    const rect = envelope.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;

    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    const rotY =  dx * ENV_TILT_MAX;
    const rotX = -dy * ENV_TILT_MAX;

    const glareX = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%';
    const glareY = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';

    envelope.classList.add('tilt-active');
    envelope.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.06)`;
    glare.style.setProperty('--glare-x', glareX);
    glare.style.setProperty('--glare-y', glareY);
  }

  function onMouseLeave() {
    envelope.classList.remove('tilt-active');
    envelope.style.transition = 'transform 0.45s cubic-bezier(.34,1.56,.64,1)';
    envelope.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    glare.style.setProperty('--glare-x', '50%');
    glare.style.setProperty('--glare-y', '50%');
  }

  envelope.addEventListener('mousemove', onMouseMove);
  envelope.addEventListener('mouseleave', onMouseLeave);

  // ── Gyroscope for envelope ──
  function handleEnvGyro(e) {
    if (envelope.classList.contains('opened')) return;
    const beta  = e.beta  || 0;
    const gamma = e.gamma || 0;

    const normBeta  = Math.max(-1, Math.min(1, (beta  - 65) / 25));
    const normGamma = Math.max(-1, Math.min(1, gamma / 30));

    const rotX = -normBeta  * ENV_TILT_MAX * 0.6;
    const rotY =  normGamma * ENV_TILT_MAX;

    envelope.classList.add('tilt-active');
    envelope.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;

    const glareX = (50 + normGamma * 40).toFixed(1) + '%';
    const glareY = (50 + normBeta  * 40).toFixed(1) + '%';
    glare.style.setProperty('--glare-x', glareX);
    glare.style.setProperty('--glare-y', glareY);
  }

  if (typeof DeviceOrientationEvent !== 'undefined') {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      function onFirstTouch() {
        DeviceOrientationEvent.requestPermission()
          .then(perm => {
            if (perm === 'granted') {
              window.addEventListener('deviceorientation', handleEnvGyro);
            }
          }).catch(() => {});
        envelope.removeEventListener('touchstart', onFirstTouch);
      }
      envelope.addEventListener('touchstart', onFirstTouch, { passive: true });
    } else {
      window.addEventListener('deviceorientation', handleEnvGyro);
    }
  }
}

/* ──────────────────────────────────────────────────
   9. BUILD QUESTION SCREENS
────────────────────────────────────────────────── */
const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const REACTION_MSGS = {
  C: ['Wa! ✨', 'Fueee... 🥺', 'Uwaaaa! 😭', 'Fuu~ 😌', 'E-eto... 💦', 'Mogu mogu 🍙'],
  U: ['YAHA!! 🐰', 'URAraRaRa!! 🌪️', 'HAAA?!! 🤨', 'Pulu-pulu-pulu! 😛', 'Una Una🌟', 'Yee-haw! 🐎', 'Woo-hoo!🚀'],
  H: ['"Ehh?! ❓', 'Sugoi! 👏', 'Yatta! 🙌', 'Nantoka nare! 💙', 'Tu tu lu~ 🎶', 'Haa~ 💙'],
};
const REACTION_IMGS = {
  C: 'images/chiikawa.png',
  U: 'images/usagi.png',
  H: 'images/hachiware.png',
};

function buildQScreens() {
  if (state.qScreensBuilt) return;
  const app = $('#app');

  QUESTIONS.forEach((q, idx) => {
    const section = document.createElement('section');
    section.id = `screen-q${idx + 1}`;
    section.className = 'screen q-screen';
    section.setAttribute('aria-label', `Câu hỏi ${idx + 1} trong ${QUESTIONS.length}`);

    const pct = ((idx) / QUESTIONS.length) * 100;

    section.innerHTML = `
      <div class="q-wrap">
        <div class="q-topbar">
          <button class="btn-back" id="back-q${idx + 1}"
                  aria-label="Quay lại câu trước"
                  ${idx === 0 ? 'disabled' : ''}>
            <span class="back-arrow" aria-hidden="true">←</span>
            <span class="back-label">Quay lại</span>
          </button>
          <div class="q-prog-info" aria-label="Tiến độ quiz">
            Câu&nbsp;<span class="q-num-current">${idx + 1}</span>&nbsp;/&nbsp;${QUESTIONS.length}
          </div>
        </div>

        <div class="q-progress-track"
             role="progressbar"
             aria-valuemin="0"
             aria-valuemax="15"
             aria-valuenow="${idx + 1}"
             aria-label="Tiến độ: câu ${idx + 1} trên 15">
          <div class="q-progress-fill" style="width: ${pct}%"></div>
          <div class="q-progress-mascot" style="left: ${pct}%">🌿</div>
        </div>
        <div class="q-prog-emojis" aria-hidden="true">
          <span>🐱</span><span>⭐</span><span>🐰</span>
        </div>

        <div class="q-card-tilt-wrapper">
          <div class="q-card" id="card-q${idx + 1}">
            <div class="q-card-glare" aria-hidden="true"></div>
            <span class="q-num-label">Câu ${idx + 1}</span>
            <img src="${q.image}" alt="Hình minh họa" class="q-custom-image" aria-hidden="true" />
            <h2 class="q-text">${q.text}</h2>
            <div class="q-options" role="radiogroup" aria-label="Lựa chọn cho câu ${idx + 1}">
              ${q.options.map((opt, oi) => `
                <button class="opt-btn"
                        data-type="${opt.type}"
                        data-q="${idx}"
                        data-oi="${oi}"
                        aria-label="Lựa chọn ${OPTION_LABELS[oi]}: ${opt.text}">
                  <span class="opt-letter" aria-hidden="true">${OPTION_LABELS[oi]}</span>
                  <span class="opt-text">${opt.text}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="q-reaction" id="reaction-q${idx + 1}" aria-hidden="true">
          <div class="reaction-bubble" id="rbubble-q${idx + 1}">Yay!</div>
          <img class="reaction-img" id="rimg-q${idx + 1}"
               src="images/chiikawa.png" alt="" />
        </div>
      </div>
    `;

    app.insertBefore(section, els.screenLoading);
  });

  state.qScreensBuilt = true;
}

/* ──────────────────────────────────────────────────
   10. QUESTION INTERACTION
────────────────────────────────────────────────── */
function attachQEvents() {
  document.addEventListener('click', (e) => {
    const opt = e.target.closest('.opt-btn');
    if (!opt) return;

    const qi   = parseInt(opt.dataset.q, 10);
    const type = opt.dataset.type;

    sfx('audio/pop-select.mp3', 0.6);
    tryAutoMusic();

    hapticFeedback([20]);

    const allOpts = $$('.opt-btn', opt.closest('.q-options'));
    allOpts.forEach(b => b.classList.remove('selected'));
    opt.classList.add('selected');

    state.answers[qi] = type;

    showReaction(qi + 1, type);

    setTimeout(() => {
      hideReaction(qi + 1);
      if (qi + 1 < QUESTIONS.length) {
        goTo(`q${qi + 2}`, 'forward');
        restoreAnswer(qi + 1);
      } else {
        goTo('loading', 'forward');
        runLoading();
      }
    }, 650);
  });

  document.addEventListener('click', (e) => {
    const back = e.target.closest('.btn-back');
    if (!back || back.disabled) return;

    sfx('audio/clicksound.mp3', 0.4);
    hapticFeedback([10]);
    const match = back.id.match(/back-q(\d+)/);
    if (!match) return;

    const qNum = parseInt(match[1], 10);
    if (qNum <= 1) return;

    goTo(`q${qNum - 1}`, 'backward');
    restoreAnswer(qNum - 2);
  });
}

function restoreAnswer(qi) {
  const savedType = state.answers[qi];
  if (!savedType) return;
  const screenEl = $(`#screen-q${qi + 1}`);
  if (!screenEl) return;
  const opts = $$('.opt-btn', screenEl);
  opts.forEach(btn => btn.classList.remove('selected'));
  const savedBtnIdx = state.answers[`${qi}_btn`];
  if (savedBtnIdx !== undefined && opts[savedBtnIdx]) {
    opts[savedBtnIdx].classList.add('selected');
  }
}

document.addEventListener('click', (e) => {
  const opt = e.target.closest('.opt-btn');
  if (!opt) return;
  const qi  = parseInt(opt.dataset.q, 10);
  const oi  = parseInt(opt.dataset.oi, 10);
  state.answers[`${qi}_btn`] = oi;
});

/* ──────────────────────────────────────────────────
   11. REACTION CHARACTER
────────────────────────────────────────────────── */
function showReaction(qNum, type) {
  const rc      = $(`#reaction-q${qNum}`);
  const bubble  = $(`#rbubble-q${qNum}`);
  const rimg    = $(`#rimg-q${qNum}`);
  if (!rc) return;

  const msgs = REACTION_MSGS[type];
  bubble.textContent = msgs[Math.floor(Math.random() * msgs.length)];
  rimg.src = REACTION_IMGS[type];
  rc.classList.add('visible');
}

function hideReaction(qNum) {
  const rc = $(`#reaction-q${qNum}`);
  if (rc) rc.classList.remove('visible');
}

/* ──────────────────────────────────────────────────
   12. LOADING SCREEN SEQUENCE
────────────────────────────────────────────────── */
const LOADING_TEXTS = [
  'Chiikawa đang ghi chép dữ liệu của Bíp Bíp... 📝',
  'Đang xem Bíp Bíp giấu bao nhiêu năng lượng YAHA trong người... 🐰',
  'Hachiware bảo là: "Phân tích bạn này khó ghê, vì đặc biệt quá!" 🐱',
  'Đang so sánh độ đáng yêu của Bíp Bíp với cả 3 đứa... ✨',
  'Ra kết quả ngay đây, đừng hối nhaaa~ 🌿',
];

function runLoading() {
  const fill   = els.loadingFill;
  const parent = fill.parentNode;
  const clone  = fill.cloneNode(true);
  parent.replaceChild(clone, fill);
  els.loadingFill = clone;

  let ti = 0;
  els.loadingH2.textContent     = 'Đang phân tích tính cách của em...';
  els.loadingFlavor.textContent = LOADING_TEXTS[0];

  // Đổi chữ mỗi 1.5 giây (trước là 3000)
  const textInterval = setInterval(() => {
    ti++;
    if (ti < LOADING_TEXTS.length) {
      els.loadingFlavor.textContent = LOADING_TEXTS[ti];
    }
  }, 1500); 

  sfx('audio/usagi-hhaaaayaaaaa.mp3', 0.55);

  // Chuyển sang màn kết quả sau 7.5 giây (trước là 15000)
  setTimeout(() => {
    clearInterval(textInterval);
    computeResult();
    goTo('result', 'forward');
    triggerResultCelebration();
  }, 7500); 
}

/* ──────────────────────────────────────────────────
   13. SCORE CALCULATION
────────────────────────────────────────────────── */
function computeResult() {
  const scores = { C: 0, U: 0, H: 0 };

  state.answers.forEach((type, i) => {
    if (typeof i === 'string') return;
    if (type && scores[type] !== undefined) scores[type] += 2;
  });

  state.scores = scores;

  let winner    = 'C';
  let maxScore  = -1;
  let tiedTypes = [];

  Object.entries(scores).forEach(([k, v]) => {
    if (v > maxScore) {
      maxScore  = v;
      winner    = k;
      tiedTypes = [k];
    } else if (v === maxScore) {
      tiedTypes.push(k);
    }
  });

  if (tiedTypes.length > 1) {
    winner = tiedTypes[Math.floor(Math.random() * tiedTypes.length)];
  }

  state.winner = winner;
  renderResult(winner, tiedTypes.length > 1);

  sendResultToDiscord(state.winner, state.scores, state.answers);
 // sendResultToEmail(state.winner, state.scores, state.answers);
}

/* ──────────────────────────────────────────────────
   14. RENDER RESULT
────────────────────────────────────────────────── */
function renderResult(winner, tied) {
  const r = RESULTS[winner];

  els.resultCharImg.src = r.img;
  els.resultCharImg.alt = r.name;

  els.resultPill.textContent = r.badge;
  if (winner === 'C') {
    els.resultPill.style.background = 'linear-gradient(135deg, #69C16E, #4a9a50)';
  } else if (winner === 'U') {
    els.resultPill.style.background = 'linear-gradient(135deg, #FF8FAB, #ff6b9d)';
  } else {
    els.resultPill.style.background = 'linear-gradient(135deg, #5B9BD5, #3a78b5)';
  }

  els.resultGlow.style.background = `radial-gradient(circle, ${r.glow}, transparent 70%)`;

  els.resultFlavor.textContent = tied
    ? '✨ Em là sự kết hợp hoàn hảo của cả 3 nhân vật, thật đặc biệt!'
    : r.flavor;

  els.resultTraits.innerHTML = '';
  r.traits.forEach((t, i) => {
    const row = document.createElement('div');
    row.className = 'trait-row';
    row.style.animationDelay = (i * 0.1 + 0.2) + 's';
    row.innerHTML = `
      <span class="trait-ico" aria-hidden="true">${t.ico}</span>
      <span class="trait-txt">${t.txt}</span>
    `;
    els.resultTraits.appendChild(row);
  });

  if (tied) {
    const note = document.createElement('div');
    note.style.cssText = `
      margin-top: 12px; padding: 10px 14px;
      background: rgba(167,233,195,.25); border-radius: 12px;
      font-size: .82rem; color: #4a9a50; text-align: center;
      font-style: italic;
    `;
    note.textContent = `Điểm: Chiikawa ${state.scores.C} · Usagi ${state.scores.U} · Hachiware ${state.scores.H}`;
    els.resultTraits.appendChild(note);
  }

  setTimeout(() => spawnGlitterOverlay(), 500);

  const ecBadge  = document.getElementById('ec-badge');
  const ecImg    = document.getElementById('ec-img');
  const ecFlavor = document.getElementById('ec-flavor');
  const ecTraits = document.getElementById('ec-traits');

  if (ecBadge) {
    ecBadge.textContent = r.badge;
    ecBadge.style.background = els.resultPill.style.background; 
    ecImg.src = r.img;
    ecFlavor.textContent = tied ? '✨ Em là sự kết hợp hoàn hảo của cả 3 nhân vật!' : r.flavor;
    
    ecTraits.innerHTML = '';
    r.traits.forEach(t => {
      ecTraits.innerHTML += `
        <div class="ec-trait-item">
          <span>${t.ico}</span>
          <span>${t.txt}</span>
        </div>
      `;
    });
  }
}

/* ──────────────────────────────────────────────────
   ✨ GLITTER OVERLAY
────────────────────────────────────────────────── */
function spawnGlitterOverlay() {
  const overlay = document.getElementById('glitter-overlay');
  if (!overlay) return;

  overlay.innerHTML = '';

  const glitterColors = [
    '#FFD700','#FFF0C0','#A7E9C3','#69C16E','#FFB3C6',
    '#FF8FAB','#ffffff','#B3D9FF','#c8e6ff','#FFE4B5'
  ];

  for (let i = 0; i < 28; i++) {
    const particle = document.createElement('div');
    particle.className = 'glitter-particle';

    const size    = Math.random() * 8 + 3;
    const x       = Math.random() * 230 - 15;
    const y       = Math.random() * 230 - 15;
    const color   = glitterColors[Math.floor(Math.random() * glitterColors.length)];
    const delay   = Math.random() * 2.5;
    const dur     = Math.random() * 1.8 + 1.2;

    particle.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${x}px;
      top:    ${y}px;
      background: radial-gradient(circle, #fff 0%, ${color} 60%, transparent 100%);
      box-shadow: 0 0 ${size * 1.5}px ${color};
      animation-duration: ${dur}s;
      animation-delay:    ${delay}s;
    `;

    overlay.appendChild(particle);
  }
}

/* ──────────────────────────────────────────────────
   15. RESULT CELEBRATION (FIREWORKS + CONFETTI)
────────────────────────────────────────────────── */
function triggerResultCelebration() {
  sfx('audio/sparkle-reveal.mp3', 0.7);
  setTimeout(() => sfx('audio/fireworks.mp3', 0.65), 400);
  setTimeout(() => sfx('audio/confetti-burst.mp3', 0.55), 700);
  launchFireworks();
  launchConfetti();
}

/* ── FIREWORKS ── */
els.fwCtx = els.fwCanvas.getContext('2d');
let fwParticles = [];
let fwRafId     = null;

function launchFireworks() {
  els.fwCanvas.style.display = 'block';
  els.fwCanvas.width  = window.innerWidth;
  els.fwCanvas.height = window.innerHeight;

  const cols = ['#A7E9C3','#69C16E','#FFB3C6','#FFF0C0','#B3D9FF','#ffffff','#FFD700','#ff8fab'];

  function burst(x, y) {
    for (let i = 0; i < 55; i++) {
      const angle = (Math.PI * 2 / 55) * i + (Math.random() * 0.4 - 0.2);
      const speed = Math.random() * 7 + 2.5;
      fwParticles.push({
        x, y,
        vx:    Math.cos(angle) * speed,
        vy:    Math.sin(angle) * speed,
        col:   cols[Math.floor(Math.random() * cols.length)],
        life:  1,
        sz:    Math.random() * 4.5 + 1.5,
        shape: Math.random() > 0.5 ? 'circle' : 'star',
      });
    }
  }

  let cnt = 0;
  const iv = setInterval(() => {
    burst(
      window.innerWidth  * (0.2 + Math.random() * 0.6),
      window.innerHeight * (0.08 + Math.random() * 0.45)
    );
    cnt++;
    if (cnt >= 10) clearInterval(iv);
  }, 350);

  function fwAnimate() {
    els.fwCtx.fillStyle = 'rgba(0,0,0,0.11)';
    els.fwCtx.fillRect(0, 0, els.fwCanvas.width, els.fwCanvas.height);

    fwParticles = fwParticles.filter(p => p.life > 0.015);

    fwParticles.forEach(p => {
      p.x   += p.vx;
      p.y   += p.vy;
      p.vy  += 0.13;
      p.vx  *= 0.985;
      p.life -= 0.016;

      els.fwCtx.save();
      els.fwCtx.globalAlpha = p.life;
      els.fwCtx.fillStyle   = p.col;

      if (p.shape === 'star') {
        drawStar(els.fwCtx, p.x, p.y, 5, p.sz, p.sz / 2.5);
      } else {
        els.fwCtx.beginPath();
        els.fwCtx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        els.fwCtx.fill();
      }
      els.fwCtx.restore();
    });

    if (fwParticles.length > 0 || cnt < 10) {
      fwRafId = requestAnimationFrame(fwAnimate);
    } else {
      els.fwCtx.clearRect(0, 0, els.fwCanvas.width, els.fwCanvas.height);
      els.fwCanvas.style.display = 'none';
    }
  }
  cancelAnimationFrame(fwRafId);
  fwAnimate();
}

function drawStar(ctx, cx, cy, spikes, outerR, innerR) {
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerR);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
    rot += step;
    ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerR);
  ctx.closePath();
  ctx.fill();
}

/* ── CONFETTI ── */
function launchConfetti() {
  els.confettiLayer.innerHTML = '';
  const cols   = ['#A7E9C3','#69C16E','#FFB3C6','#FFF0C0','#B3D9FF','#FFD700','#FF8FAB','#c8e6ff'];
  const shapes = ['●','★','♥','◆','🌿','✨','💚'];

  for (let i = 0; i < 100; i++) {
    const el  = document.createElement('div');
    el.className = 'cfti';
    const isEmoji = Math.random() > 0.35;

    if (isEmoji) {
      el.style.fontSize = (Math.random() * 14 + 9) + 'px';
      el.textContent    = shapes[Math.floor(Math.random() * shapes.length)];
      el.style.color    = cols[Math.floor(Math.random() * cols.length)];
    } else {
      const w = Math.random() * 11 + 5;
      const h = w * (Math.random() * 1.6 + 0.4);
      el.style.width        = w + 'px';
      el.style.height       = h + 'px';
      el.style.background   = cols[Math.floor(Math.random() * cols.length)];
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    }

    el.style.left              = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 3.5 + 2) + 's';
    el.style.animationDelay    = (Math.random() * 2.5) + 's';
    els.confettiLayer.appendChild(el);
  }

  setTimeout(() => { els.confettiLayer.innerHTML = ''; }, 7000);
}

/* ──────────────────────────────────────────────────
   16. LETTER SCREEN & TYPEWRITER EFFECT
────────────────────────────────────────────────── */
let letterHtmlContent = '';
let isTyping = false;

let typingAudioCtx = null;

function getAudioContext() {
  if (!typingAudioCtx) {
    try {
      typingAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (_) {}
  }
  return typingAudioCtx;
}

function playTypeSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc    = ctx.createOscillator();
    const gainNd = ctx.createGain();

    const freq = 600 + Math.random() * 400;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.type = 'triangle';

    gainNd.gain.setValueAtTime(0.04, ctx.currentTime);
    gainNd.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

    osc.connect(gainNd);
    gainNd.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.07);
  } catch (_) {}
}

function initLetterScreen() {
  const paperBody = document.querySelector('.paper-body');
  if (paperBody && !letterHtmlContent) {
    letterHtmlContent = paperBody.innerHTML;
    window._letterHtmlContent = letterHtmlContent; 
    paperBody.innerHTML = ''; 
  }

  const signBlock = document.querySelector('.paper-sign-block');
  const trioImg   = document.querySelector('.paper-trio-img');
  if (signBlock) signBlock.style.opacity = '0';
  if (trioImg)   trioImg.style.opacity   = '0';

  [els.envelope3d, els.btnOpenEnv].forEach(el => {
    if (!el) return;
    el.addEventListener('click', openEnvelope);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openEnvelope();
    });
  });
}

function typeWriterHTML(element, html, speedBase, callback) {
  let i = 0;
  let isTag = false;
  let text = '';
  element.innerHTML = '';
  isTyping = true;

  let charsSinceSfx = 0;
  const SFX_INTERVAL = 2;

  function type() {
    if (i < html.length) {
      let char = html.charAt(i);
      
      if (char === '<') isTag = true;
      if (char === '>') isTag = false;

      text += char;
      i++;

      if (isTag) {
        type();
      } else {
        element.innerHTML = text + '<span class="type-cursor"></span>';

        if (char !== ' ' && char !== '\n') {
          charsSinceSfx++;
          if (charsSinceSfx >= SFX_INTERVAL) {
            playTypeSound();
            charsSinceSfx = 0;
          }
        }

        let speed = speedBase + (Math.random() * 30 - 15);
        setTimeout(type, speed);
      }
    } else {
      element.innerHTML = text;
      isTyping = false;
      if (callback) callback();
    }
  }
  type();
}

let envelopeOpened = false;

function openEnvelope() {
  if (envelopeOpened) return;
  envelopeOpened = true;

  sfx('audio/envelope-open.mp3', 0.7);
  hapticFeedback([30, 20, 30]);

  if (els.envelope3d) els.envelope3d.classList.add('opened');

  setTimeout(() => {
    if (els.envPhase)    els.envPhase.style.display = 'none';
    if (els.letterPaper) {
      els.letterPaper.classList.add('open');
      els.letterPaper.setAttribute('aria-hidden', 'false');

      const paperBody = document.querySelector('.paper-body');
      const signBlock = document.querySelector('.paper-sign-block');
      const trioImg   = document.querySelector('.paper-trio-img');

      // Đổi số 50 thành 20 ở dòng này
      typeWriterHTML(paperBody, letterHtmlContent, 20, () => {
        signBlock.style.transition = 'opacity 1.5s ease-in';
        signBlock.style.opacity = '1';
        
        setTimeout(() => {
          trioImg.style.transition = 'opacity 1.5s ease-in';
          trioImg.style.opacity = '1';
        }, 500);
      });
    }
    if (els.letterActions) {
      els.letterActions.setAttribute('aria-hidden', 'false');
    }
    launchConfetti();
    sfx('audio/sparkle-reveal.mp3', 0.5);
  }, 650);
}

/* ──────────────────────────────────────────────────
   17. RESET / REPLAY
────────────────────────────────────────────────── */
function resetAll() {
  sfx('audio/clicksound.mp3', 0.45);

  state.answers = [];
  state.scores  = { C: 0, U: 0, H: 0 };
  state.winner  = null;

  QUESTIONS.forEach((_, i) => {
    const scr = $(`#screen-q${i + 1}`);
    if (scr) {
      $$('.opt-btn', scr).forEach(b => b.classList.remove('selected'));
      const rc = $(`#reaction-q${i + 1}`, scr);
      if (rc) rc.classList.remove('visible');
    }
  });

  envelopeOpened = false;
  letterHtmlContent = '';
  if (els.envPhase)    { els.envPhase.style.display = ''; }
  if (els.envelope3d)  { els.envelope3d.classList.remove('opened'); }
  if (els.letterPaper) {
    els.letterPaper.classList.remove('open');
    els.letterPaper.setAttribute('aria-hidden', 'true');
  }
  if (els.letterActions) {
    els.letterActions.setAttribute('aria-hidden', 'true');
  }

  const glitterOverlay = document.getElementById('glitter-overlay');
  if (glitterOverlay) glitterOverlay.innerHTML = '';

  els.confettiLayer.innerHTML = '';
  if (fwRafId) cancelAnimationFrame(fwRafId);
  els.fwCanvas.style.display = 'none';

  goTo('landing', 'backward');
}

/* ──────────────────────────────────────────────────
   18. EASTER EGGS (Landing characters)
────────────────────────────────────────────────── */
const EASTER_DATA = [
  {
    id:    'easter-h',
    factId: 'fact-h',
    facts: [
      'Hachiware là bé mèo nhị thể nghèo nhưng luôn lạc quan và là chỗ dựa ấm áp nhất nhóm! 🐱',
      'Hachiware đặc biệt giỏi hát, thường xuyên cất tiếng hát dưới trăng! 🌙',
      'Tên "Hachiware" xuất phát từ họa tiết lông chẻ đôi trên trán giống chữ "Bát" (八) trong tiếng Nhật! ✨',
    ]
  },
  {
    id:    'easter-c',
    factId: 'fact-c',
    facts: [
      'Chiikawa nhỏ xíu nhưng dũng cảm, luôn cố gắng dù sợ hãi tột cùng! 🌟',
      'Chiikawa vô cùng may mắn khi từng trúng thưởng một ngôi nhà siêu to khổng lồ chỉ nhờ ăn sữa chua! 🌱',
      'Tiếng kêu của Chiikawa nghe như "chi-i-i", nhỏ nhưng đáng yêu lắm! 💚'
    ]
  },
  {
    id:    'easter-u',
    factId: 'fact-u',
    facts: [
      'Usagi hét YAHA! trước khi làm bất cứ điều gì, 100% hype mode! 🐰',
      'Usagi không bao giờ sợ bất cứ thứ gì, kể cả boss khổng lồ nhất! ⚡',
      'Usagi sở hữu năng lượng vô cực, thường xuyên có những điệu nhảy kỳ quặc và khả năng xoay vòng vòng không biết chóng mặt! 🌪️',
    ]
  },
];

const easterCounters = {};

function initEasterEggs() {
  EASTER_DATA.forEach(({ id, factId, facts }) => {
    easterCounters[id] = 0;
    const el = $(`#${id}`);
    if (!el) return;

    const show = () => {
      sfx('audio/pop-select.mp3', 0.35);
      hapticFeedback([10]);
      const factEl = $(`#${factId}`);
      factEl.textContent = facts[easterCounters[id] % facts.length];
      easterCounters[id]++;

      el.classList.add('bubble-visible');
      clearTimeout(el._bubbleTimer);
      el._bubbleTimer = setTimeout(() => el.classList.remove('bubble-visible'), 3200);
    };

    el.addEventListener('click',   show);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') show();
    });
  });
}

/* ──────────────────────────────────────────────────
   19. WINDOW RESIZE
────────────────────────────────────────────────── */
window.addEventListener('resize', () => {
  els.fwCanvas.width  = window.innerWidth;
  els.fwCanvas.height = window.innerHeight;
});

/* ──────────────────────────────────────────────────
   20. AUTOPLAY AUDIO ON FIRST INTERACTION
────────────────────────────────────────────────── */
function setupFirstInteraction() {
  const handler = () => {
    tryAutoMusic();
    document.removeEventListener('click', handler);
    document.removeEventListener('keydown', handler);
  };
  document.addEventListener('click',   handler);
  document.addEventListener('keydown', handler);
}

/* ──────────────────────────────────────────────────
   21. BUTTON EVENT BINDINGS
────────────────────────────────────────────────── */
function bindButtons() {
  els.musicBtn.addEventListener('click', toggleMusic);

  els.btnStart.addEventListener('click', () => {
    sfx('audio/clicksound.mp3', 0.5);
    hapticFeedback([25]);
    tryAutoMusic();
    goTo('q1', 'forward');
    restoreAnswer(0);
  });

  if (els.btnGoLetter) {
    els.btnGoLetter.addEventListener('click', () => {
      sfx('audio/clicksound.mp3', 0.45);
      hapticFeedback([20]);
      goTo('letter', 'forward');
    });
  }

  if (els.btnReplay) {
    els.btnReplay.addEventListener('click', resetAll);
  }

  if (els.btnReplayLtr) {
    els.btnReplayLtr.addEventListener('click', resetAll);
  }

  initLetterScreen();

  const btnDownload = document.getElementById('btn-download-result');
  if (btnDownload) {
    btnDownload.addEventListener('click', downloadResultImage);
  }
}

/* ──────────────────────────────────────────────────
   XỬ LÝ TẢI ẢNH KẾT QUẢ
────────────────────────────────────────────────── */
function downloadResultImage() {
  const btnDownload = document.getElementById('btn-download-result');
  if (btnDownload) btnDownload.blur();
  if (typeof sfx === 'function') sfx('audio/clicksound.mp3', 0.45);
  if (typeof hapticFeedback === 'function') hapticFeedback([15]);
  
  const exportCard = document.getElementById('export-card');

  const originalText = btnDownload.innerHTML;
  btnDownload.innerHTML = '⏳ Đang gói quà...';
  btnDownload.style.pointerEvents = 'none';

  // FIX: Đổi cách giấu thẻ, dùng absolute và set toạ độ 0
  exportCard.style.display = 'flex';
  exportCard.style.position = 'absolute';
  exportCard.style.top = '0px';
  exportCard.style.left = '0px';
  exportCard.style.zIndex = '-100'; // Đẩy ra phía sau body

  html2canvas(exportCard, {
    scale: 2.5, 
    useCORS: true, 
    backgroundColor: '#FDF0FF', // BẮT BUỘC: Màu nền cứng thay vì null
    width: exportCard.offsetWidth,
    height: exportCard.offsetHeight,
    logging: false
  }).then(canvas => {
    exportCard.style.display = 'none';
    
    btnDownload.innerHTML = originalText;
    btnDownload.style.pointerEvents = '';

    const link = document.createElement('a');
    link.download = `The-Tinh-Cach-Cua-Bip-Bip.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => {
    console.error('Lỗi khi tải ảnh:', err);
    exportCard.style.display = 'none';
    btnDownload.innerHTML = originalText;
    btnDownload.style.pointerEvents = 'auto';
    alert('Có chút trục trặc khi in thẻ, tải lại trang thử xem nhé!');
  });
}
/* ──────────────────────────────────────────────────
   22. INIT (Entry point)
────────────────────────────────────────────────── */
function init() {
  QUESTIONS.forEach(question => {
    if (question.options) shuffleArray(question.options);
  });

  buildQScreens();
  bindButtons();
  attachQEvents();
  initEasterEggs();
  initStarryNight();

  // ✨ NEW: Init envelope 3D tilt
  initEnvelopeTilt();

  attachRippleListeners();
  buildParticles();
  setupFirstInteraction();

  els.screenLanding.style.opacity = '1';
  els.screenLanding.style.transform = 'translateY(0)';

  // ✨ Init tilt for first question screen
  setTimeout(() => {
    const firstCard = $('#card-q1');
    if (firstCard) initCardTilt(firstCard);
  }, 300);

  console.log('%c💚 Chiikawa Whisper - Dành Riêng Cho Bíp Bíp 💚', 'color:#69C16E;font-size:14px;font-weight:bold;');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ──────────────────────────────────────────────────
   23. SPOTIFY FLOATING WIDGET
────────────────────────────────────────────────── */
(function initSpotifyWidget() {
  const floatEl  = document.getElementById('spotify-float');
  const toggleBtn= document.getElementById('sf-toggle');
  const closeBtn = document.getElementById('sf-close');
  const cardEl   = document.getElementById('sf-card');

  if (!floatEl || !toggleBtn) return;

  let isExpanded = false;

  function expand() {
    isExpanded = true;
    floatEl.classList.add('expanded');
    cardEl.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    sfx('audio/pop-select.mp3', 0.3);
  }

  function collapse() {
    isExpanded = false;
    floatEl.classList.remove('expanded');
    cardEl.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function toggle() {
    if (isExpanded) collapse();
    else expand();
  }

  toggleBtn.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', collapse);

  const pillEl = document.getElementById('sf-pill');
  if (pillEl) {
    pillEl.addEventListener('click', (e) => {
      if (e.target === toggleBtn || toggleBtn.contains(e.target)) return;
      toggle();
    });
  }

  toggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    if (e.key === 'Escape') collapse();
  });
  if (closeBtn) {
    closeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); collapse(); }
    });
  }

  document.addEventListener('click', (e) => {
    if (isExpanded && !floatEl.contains(e.target)) collapse();
  });

  setTimeout(() => {
    expand();
    setTimeout(() => collapse(), 3200);
  }, 2500);
})();

/* ──────────────────────────────────────────────────
   24. DISCORD WEBHOOK INTEGRATION
────────────────────────────────────────────────── */
async function sendResultToDiscord(winnerType, scores, answers) {
  const webhookURL = "https://discord.com/api/webhooks/1475153489574232095/1LGF4aT3DE7CYEZbDBTonJAo_hp-sb8II1YDpZf3IumhuChtuifCd79u7iBRR5teXL6I";
  const typeNames = { C: "Chiikawa ⭐", U: "Usagi 🐰", H: "Hachiware 🐱" };
  
  let detailString = "";
  QUESTIONS.forEach((q, i) => {
    const type = answers[i];
    const chosenOpt = q.options.find(opt => opt.type === type);
    const optText = chosenOpt ? chosenOpt.text : "Không rõ";
    detailString += `Câu ${i + 1}: ${optText} (${typeNames[type]})\n`;
  });

  const payload = {
    username: "Chiikawa Whisper Bot 🌿",
    avatar_url: "https://i.pinimg.com/originals/8d/f3/0d/8df30d92231b145a3377755106636706.png",
    embeds: [{
      title: "💌 Bíp Bíp vừa hoàn thành Quiz!",
      description: `Kết quả: **${RESULTS[winnerType].badge}**`,
      color: winnerType === 'C' ? 6930802 : (winnerType === 'U' ? 16763904 : 6003669),
      fields: [
        {
          name: "📊 Điểm số chi tiết",
          value: `**Chiikawa:** ${scores.C} | **Usagi:** ${scores.U} | **Hachiware:** ${scores.H}`,
          inline: false
        },
        {
          name: "📝 Các lựa chọn của bạn ấy",
          value: `\`\`\`\n${detailString}\n\`\`\``
        }
      ],
      footer: { text: "Gửi từ món quà của Phú 💚" },
      timestamp: new Date()
    }]
  };

  try {
    await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    console.log("✅ Đã hoàn thành");
  } catch (err) {
    console.error("❌ Lỗi", err);
  }
}

async function sendResultToEmail(winnerType, scores, answers) {
  const typeNames = { C: "Chiikawa ⭐", U: "Usagi 🐰", H: "Hachiware 🐱" };
  
  let detailString = "";
  QUESTIONS.forEach((q, i) => {
    const type = answers[i];
    const chosenOpt = q.options.find(opt => opt.type === type);
    const optText = chosenOpt ? chosenOpt.text : "Không rõ";
    detailString += `Câu ${i + 1}: ${optText} (${typeNames[type]})\n`;
  });

  const templateParams = {
    winner_badge: RESULTS[winnerType].badge,
    score_summary: `C: ${scores.C} | U: ${scores.U} | H: ${scores.H}`,
    answer_details: detailString,
    to_name: "Phú"
  };

  try {
    await emailjs.send('service_na5ced4', 'template_dlcv5sd', templateParams);
    console.log("%c✅ Câu hỏi hoàn thành", "color: #69C16E; font-weight: bold;");
  } catch (err) {
    console.error("❌ Lỗi nhận câu hỏi", err);
  }
}

async function sendWheelResultToEmail(charName, quẻText, buổiTrongNgày) {
  // Chuẩn bị nội dung gửi đi
  // Ở đây mình tận dụng các biến (Tags) giống với Template cũ để Phú không phải tạo Template mới trên web EmailJS
  const templateParams = {
    winner_badge: `Vòng quay: ${charName}`, // Ví dụ: Vòng quay: Usagi
    score_summary: `Bíp Bíp quay vào: ${buổiTrongNgày}`, // Ví dụ: Quay vào: Cuối Ngày
    answer_details: `Nội dung quẻ: ${quẻText}`, 
    to_name: "Phú"
  };

  try {
    // Sử dụng Service ID và Template ID Phú đang có sẵn
    await emailjs.send('service_na5ced4', 'template_dlcv5sd', templateParams);
    console.log("%c✅ Vòng quay hoàn thành", "color: #ff8fab; font-weight: bold;");
  } catch (err) {
    console.error("❌ Lỗi gửi vòng quay:", err);
  }
}

/* ──────────────────────────────────────────────────
   ✨ STARRY NIGHT MODE – with localStorage
────────────────────────────────────────────────── */
function initStarryNight() {
  const toggleBtn = document.getElementById('starry-toggle');
  if (!toggleBtn) return;

  const STORAGE_KEY = 'chiikawa_starry_night';

  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState === 'on') {
    document.body.classList.add('starry-night');
    const icon = toggleBtn.querySelector('.star-icon');
    if (icon) icon.textContent = '✨';
    toggleBtn.setAttribute('title', 'Tắt không gian ban đêm');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('starry-night');
    sfx('audio/pop-select.mp3', 0.4);
    hapticFeedback([15]);

    const icon = toggleBtn.querySelector('.star-icon');
    const isNightOn = document.body.classList.contains('starry-night');
    
    if (isNightOn) {
      if (icon) icon.textContent = '✨';
      toggleBtn.setAttribute('title', 'Tắt không gian ban đêm');
      try { localStorage.setItem(STORAGE_KEY, 'on'); } catch (_) {}
    } else {
      if (icon) icon.textContent = '🌙';
      toggleBtn.setAttribute('title', 'Bật không gian ban đêm');
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
    }
  });
}
/* ============================================================
   EXTRA FEATURES: A LITTLE GAME & CHIIKAWA WHEEL
   ============================================================ */

(function initExtraGames() {
  // 1. Khai báo dữ liệu (Data)
  const wheelDataRaw = [
    { name: "Chiikawa", img: "images/chiikawa1.png", text: "Hôm nay em sẽ gặp nhiều may mắn nhỏ xíu nhưng cực kỳ vui vẻ như được tặng một viên kẹo ngọt vậy! ⭐" },
    { name: "Usagi", img: "images/usagi1.png", text: "Năng lượng YAHA bùng nổ! Hôm nay em sẽ làm gì cũng nhanh, chơi gì cũng thắng, cực kỳ sảng khoái! 🐰" },
    { name: "Hachiware", img: "images/hachiware1.png", text: "Hôm nay là một ngày áp và đầy hy vọng. Có thể em sẽ tìm thấy một điều gì đó thú vị hoặc một món đồ bị thất lạc đấy! 🐱" },
    { name: "Momonga", img: "images/momonga1.png", text: "Hôm nay em sẽ cực kỳ đáng yêu và được mọi người nhường nhịn, chiều chuộng hết nấc luôn! 🍑" },
    { name: "Kurimanju", img: "images/kurimanju1.png", text: "Hôm nay là một ngày chill thật sự! Hãy thưởng thức một món uống ngon và tận hưởng sự bình yên nhé, 'Umai~'! 🌰" },
    { name: "Rakko", img: "images/rakko1.png", text: "Bản lĩnh và mạnh mẽ! Hôm nay em sẽ giải quyết được một việc khó nhằn và nhận được sự ngưỡng mộ từ mọi người! 🦦" }
  ];

  // 2. Khai báo các biến DOM (Chỉ khai báo 1 lần duy nhất)
  const btnMinigame = document.getElementById('btn-minigame');
  const btnWheel = document.getElementById('btn-wheel');
  const btnBackMg = document.getElementById('btn-back-mg');
  const btnBackWheel = document.getElementById('btn-back-wheel');
  const wheelContainer = document.querySelector('.wheel-container');
  const spinner = document.getElementById('wheel-spinner');
  const btnSpin = document.getElementById('btn-spin-wheel');
  const modal = document.getElementById('wheel-result-modal');
  
  const charImages = [
    'images/chiikawa1.png', 'images/usagi1.png', 'images/hachiware1.png', 
    'images/kurimanju1.png', 'images/momonga1.png', 'images/rakko1.png'
  ];

  let currentRot = 0, isSpinning = false;

  // 3. Logic Chuyển trang
  if(btnMinigame) btnMinigame.onclick = () => { sfx('audio/clicksound.mp3', 0.5); goTo('minigame', 'forward'); };
  if(btnWheel) btnWheel.onclick = () => { sfx('audio/clicksound.mp3', 0.5); goTo('wheel', 'forward'); };
  if(btnBackMg) btnBackMg.onclick = () => { sfx('audio/clicksound.mp3', 0.5); endMinigame(true); goTo('landing', 'backward'); };
  if(btnBackWheel) btnBackWheel.onclick = () => { sfx('audio/clicksound.mp3', 0.5); goTo('landing', 'backward'); };

// ===================== LOGIC MINIGAME =====================
  let mgScore = 0, mgTime = 30, mgInterval = null, mgSpawner = null;
  let currentLevelIdx = 0;
  const board = document.getElementById('mg-gameboard');
  const overlay = document.getElementById('mg-start-overlay');
  const scoreEl = document.getElementById('mg-score');
  const timerEl = document.getElementById('mg-timer');
  const levelEl = document.getElementById('mg-level'); // Bắt ID của Level
  const introView = document.getElementById('mg-intro-view');
  const resultView = document.getElementById('mg-result-view');

  // Hệ thống 10 Cấp độ: Điểm tối thiểu (min), Tốc độ ra (speed), Thời gian sống (duration), Độ to (scale)
const mgLevels = [
    { min: 0,   name: "Bé mầm ngơ ngác 🌱", speed: 650, duration: 800, scale: 1 },
    { min: 50,  name: "Thợ nhổ cỏ thực tập 🌿", speed: 600, duration: 750, scale: 0.95 },
    { min: 100, name: "Chiikawa cầm gậy 🥢", speed: 550, duration: 700, scale: 0.9 },
    { min: 160, name: "Hachiware lanh lẹ 📸", speed: 500, duration: 650, scale: 0.85 },
    { min: 230, name: "Rakko đại ca 🦦", speed: 450, duration: 600, scale: 0.8 },
    { min: 300, name: "Chiến thần thảo phạt ⚔️", speed: 400, duration: 550, scale: 0.75 },
    { min: 380, name: "Momonga bay lượn 🍑", speed: 350, duration: 500, scale: 0.7 },
    { min: 460, name: "Usagi hét YAHA! 🐰", speed: 300, duration: 450, scale: 0.65 },
    { min: 550, name: "Hệ tư tưởng Usagi 🌪️", speed: 250, duration: 400, scale: 0.6 },
    { min: 650, name: "Trùm cuối Bíp Bíp 👑", speed: 200, duration: 350, scale: 0.55 }
  ];

  function spawnTarget() {
    if(mgTime <= 0) return;
    const currentLvl = mgLevels[currentLevelIdx];

    const img = document.createElement('img');
    img.className = 'mg-target';
    img.src = charImages[Math.floor(Math.random() * charImages.length)];
    
    // THÊM 3 DÒNG NÀY: Chặn trình duyệt cho phép kéo/tải ảnh khi lỡ click trượt
    img.draggable = false;
    img.style.userSelect = 'none';
    img.style.webkitUserDrag = 'none';

    img.style.transform = `scale(${currentLvl.scale})`;
    img.style.transition = 'transform 0.1s';

    const maxX = board.clientWidth - (60 * currentLvl.scale);
    const maxY = board.clientHeight - (60 * currentLvl.scale);
    img.style.left = Math.max(0, Math.floor(Math.random() * maxX)) + 'px';
    img.style.top = Math.max(0, Math.floor(Math.random() * maxY)) + 'px';
    
    // THAY ĐỔI CÁCH BẮT CLICK: Dùng hàm riêng và thêm e.preventDefault()
    const hitTarget = (e) => {
      // Chặn mọi hành vi mặc định (tránh gây lỗi focus hay bôi đen)
      if (e.cancelable) e.preventDefault(); 
      if (img.style.pointerEvents === 'none') return; // Tránh click đúp

      mgScore += 10; 
      scoreEl.textContent = mgScore;
      if (typeof sfx === 'function') sfx('audio/pop-select.mp3', 0.6);
      
      img.style.pointerEvents = 'none';
      img.style.transform = `scale(${currentLvl.scale * 0.4})`; // Bé lại lập tức
      setTimeout(() => img.remove(), 100);

      // KIỂM TRA LÊN CẤP ĐỘ
      if (currentLevelIdx < mgLevels.length - 1 && mgScore >= mgLevels[currentLevelIdx + 1].min) {
          currentLevelIdx++;
          if (levelEl) levelEl.textContent = currentLevelIdx + 1;
          
          // Chữ nổi Level Up
          const lvlUpText = document.createElement('div');
          lvlUpText.className = 'mg-float-text';
          lvlUpText.textContent = "Level Up! 🔥";
          
          // Fix vị trí chữ khi chơi trên cả máy tính lẫn điện thoại
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const clientY = e.touches ? e.touches[0].clientY : e.clientY;
          
          lvlUpText.style.left = clientX - board.getBoundingClientRect().left + 'px';
          lvlUpText.style.top = (clientY - board.getBoundingClientRect().top - 20) + 'px';
          board.appendChild(lvlUpText);
          setTimeout(() => lvlUpText.remove(), 600);

          // Cập nhật nhịp độ ra mục tiêu
          clearInterval(mgSpawner);
          mgSpawner = setInterval(spawnTarget, mgLevels[currentLevelIdx].speed);
      }
    };
    
    // Hỗ trợ cực nhạy cho cả click chuột (PC) và chạm (Mobile)
    img.addEventListener('mousedown', hitTarget);
    img.addEventListener('touchstart', hitTarget, { passive: false });
    
    board.appendChild(img);
    
    // Mục tiêu tự biến mất
    setTimeout(() => { 
        if(img.parentNode) {
            img.style.transform = 'scale(0)';
            setTimeout(() => { if(img.parentNode) img.remove(); }, 150);
        }
    }, currentLvl.duration);
  }

  function startMinigame() {
    mgScore = 0; mgTime = 30; currentLevelIdx = 0;
    scoreEl.textContent = '0'; timerEl.textContent = '30'; 
    if (levelEl) levelEl.textContent = '1';
    
    board.classList.remove('hide-border'); overlay.style.display = 'none';
    introView.style.display = 'none'; resultView.style.display = 'none';
    document.querySelectorAll('.mg-target').forEach(el => el.remove());
    
    mgInterval = setInterval(() => { 
        mgTime--; 
        timerEl.textContent = mgTime; 
        if(mgTime <= 0) endMinigame(); 
    }, 1000);
    
    // Bắt đầu với nhịp độ của Level 1
    mgSpawner = setInterval(spawnTarget, mgLevels[0].speed);
  }

  function endMinigame(forceQuit = false) {
    clearInterval(mgInterval); clearInterval(mgSpawner);
    if(!forceQuit && mgTime <= 0) {
      board.classList.add('hide-border');
      
      const rank = mgLevels[currentLevelIdx];
      
      document.getElementById('mg-final-score').textContent = mgScore;
      document.getElementById('mg-final-clicks').textContent = mgScore / 10;
      document.getElementById('mg-rank-badge').textContent = `Lv.${currentLevelIdx + 1}`;
      
      // Hiển thị danh hiệu 
      document.getElementById('mg-rank-text').innerHTML = `Danh hiệu:<br><b style="color: var(--pink-deep); font-size: 1.1rem; display: block; margin-top: 5px;">${rank.name}</b><br>Chat choi nguoi doi`;
      
      overlay.style.display = 'flex'; resultView.style.display = 'flex';
      if (typeof launchConfetti === 'function') launchConfetti();
    }
  }

  // ===================== LOGIC WHEEL =====================
  if(btnSpin) {
    btnSpin.onclick = () => {
      if(isSpinning) return;
      isSpinning = true;
      sfx('audio/pop-select.mp3', 0.6);
      
      const extraSpins = Math.floor(Math.random() * 5 + 5) * 360; 
      const randomDegree = Math.floor(Math.random() * 360);
      currentRot += extraSpins + randomDegree;
      spinner.style.transform = `rotate(${currentRot}deg)`;

      setTimeout(() => {
        isSpinning = false;
        if(wheelContainer) wheelContainer.classList.add('hide-wheel'); 
        
        const actualDeg = (360 - (currentRot % 360)) % 360;
        const sliceIndex = Math.floor(actualDeg / 60);
        
        const hour = new Date().getHours();
        const isEndDay = hour >= 18 || hour < 5;
        const winner = wheelDataRaw[sliceIndex]; 

        document.getElementById('wheel-result-img').src = winner.img;
        document.getElementById('wheel-result-name').textContent = winner.name;
        
        let resultText = isEndDay ? winner.text.replace(/Hôm nay/g, "Ngày mai") : winner.text;
        document.getElementById('wheel-result-text').textContent = resultText;
        
        modal.classList.add('show');
        sfx('audio/usagi-hhaaaayaaaaa.mp3', 0.6);
        launchConfetti();
        
       // if (typeof sendWheelResultToEmail === 'function') {
       //    sendWheelResultToEmail(winner.name, resultText, hour < 12 ? "Đầu Ngày" : (hour < 18 ? "Giữa Ngày" : "Cuối Ngày"));
      //  }
      }, 4000);
    };
  }

  // ==========================================
  // COPY TỪ ĐOẠN NÀY ĐỂ THAY THẾ VÀO SCRIPT.JS
  // ==========================================
  
  // 3. NÚT ĐÓNG VÒNG QUAY
  if(document.getElementById('btn-close-wheel')) {
    document.getElementById('btn-close-wheel').onclick = () => {
      modal.classList.remove('show');
      if(wheelContainer) wheelContainer.classList.remove('hide-wheel'); 
    };
  }

  // NÚT TẢI ẢNH VÒNG QUAY (Đã bọc kỹ trong sự kiện click của đúng nút này)
  const btnDownloadWheel = document.getElementById('btn-download-wheel');
  if (btnDownloadWheel) {
    // Gán onclick trực tiếp, khóa chặt sự kiện không cho lan ra ngoài
    btnDownloadWheel.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (typeof sfx === 'function') sfx('audio/clicksound.mp3', 0.45);
      const exportCard = document.getElementById('wheel-export-card');

      document.getElementById('wec-img').src = document.getElementById('wheel-result-img').src;
      document.getElementById('wec-name').textContent = document.getElementById('wheel-result-name').textContent;
      document.getElementById('wec-text').textContent = document.getElementById('wheel-result-text').textContent;

      const originalText = this.innerHTML;
      this.innerHTML = '⏳ Đang gói quà...';
      this.style.pointerEvents = 'none';

      exportCard.style.display = 'flex';
      exportCard.style.position = 'absolute';
      exportCard.style.top = '0px';
      exportCard.style.left = '0px';
      exportCard.style.zIndex = '-100';

      html2canvas(exportCard, {
        scale: 2.5, 
        useCORS: true,
        backgroundColor: '#E8F4FF', 
        width: exportCard.offsetWidth,
        height: exportCard.offsetHeight,
        logging: false
      }).then(canvas => {
        exportCard.style.display = 'none';
        this.innerHTML = originalText;
        this.style.pointerEvents = '';

        const link = document.createElement('a');
        link.download = `TinHieuHomNayCuaBipBip.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }).catch(err => {
        console.error('Lỗi tải ảnh wheel:', err);
        exportCard.style.display = 'none';
        this.innerHTML = originalText;
        this.style.pointerEvents = 'auto';
        alert('Có lỗi tải ảnh xíu, bạn thử lại nha!');
      });
    };
  }

  // 4. GÁN SỰ KIỆN MINIGAME TRỰC TIẾP TỪNG NÚT (Tách biệt hoàn toàn)
  const btnStartMg = document.getElementById('btn-start-mg');
  const btnRestartMg = document.getElementById('btn-restart-mg');
  const btnQuitMg = document.getElementById('btn-quit-mg');

  if(btnStartMg) btnStartMg.onclick = (e) => { e.preventDefault(); e.stopPropagation(); startMinigame(); };
  if(btnRestartMg) btnRestartMg.onclick = (e) => { e.preventDefault(); e.stopPropagation(); startMinigame(); };
  if(btnQuitMg) btnQuitMg.onclick = (e) => { e.preventDefault(); e.stopPropagation(); goTo('landing', 'backward'); };

})()



(function initVolumeMini() {
  const track   = document.getElementById('vol-track');
  const fill    = document.getElementById('vol-fill');
  const thumb   = document.getElementById('vol-thumb');
  const icon    = document.getElementById('vol-icon');
  const audio   = document.getElementById('bg-audio');

  if (!track || !fill || !thumb || !audio) return;

  /* Âm lượng ban đầu = 30% (khớp với code gốc) */
  let vol = 0.3;
  let dragging = false;

  /* ── Cập nhật UI theo giá trị vol (0-1) ── */
  function setUI(v) {
    const pct = (v * 100).toFixed(1) + '%';
    fill.style.width  = pct;
    thumb.style.left  = pct;

    /* Icon đổi theo mức âm lượng */
    if (v === 0)      icon.textContent = '🔇';
    else if (v < 0.4) icon.textContent = '🔉';
    else              icon.textContent = '🔊';
  }

  /* ── Áp âm lượng vào audio và cập nhật UI ── */
  function applyVol(v) {
    vol = Math.max(0, Math.min(1, v));
    audio.volume = vol;
    setUI(vol);
  }

  /* ── Tính vol từ vị trí chuột / cảm ứng ── */
  function volFromEvent(e) {
    const rect  = track.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const ratio = (clientX - rect.left) / rect.width;
    return Math.max(0, Math.min(1, ratio));
  }

  /* ── Mouse events ── */
  track.addEventListener('mousedown', (e) => {
    dragging = true;
    track.classList.add('dragging');
    applyVol(volFromEvent(e));
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    applyVol(volFromEvent(e));
  });

  window.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    track.classList.remove('dragging');

    /* Nếu vol > 0, đảm bảo nhạc đang phát */
    if (vol > 0 && audio.paused) {
      audio.play().catch(() => {});
    }
  });

  /* ── Touch events (mobile) ── */
  track.addEventListener('touchstart', (e) => {
    dragging = true;
    track.classList.add('dragging');
    applyVol(volFromEvent(e));
    e.preventDefault();
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    applyVol(volFromEvent(e));
  }, { passive: true });

  window.addEventListener('touchend', () => {
    dragging = false;
    track.classList.remove('dragging');
    if (vol > 0 && audio.paused) {
      audio.play().catch(() => {});
    }
  });

  /* ── Click icon để mute / unmute toggle ── */
  let volBeforeMute = vol;
  icon.style.cursor = 'none';
  icon.addEventListener('click', () => {
    if (vol > 0) {
      volBeforeMute = vol;
      applyVol(0);
      audio.pause();
    } else {
      applyVol(volBeforeMute || 0.3);
      audio.play().catch(() => {});
    }
  });

  /* ── Sync với music-btn (nút 🎵 gốc) ── */
  const musicBtn = document.getElementById('music-btn');
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      /* Sau khi toggle xong, sync vol slider */
      setTimeout(() => {
        if (audio.paused) {
          setUI(0);
        } else {
          setUI(audio.volume || 0.3);
          vol = audio.volume || 0.3;
        }
      }, 50);
    });
  }

  /* ── Sync khi audio tự play (autoplay) ── */
  audio.addEventListener('play',  () => setUI(audio.volume));
  audio.addEventListener('pause', () => setUI(0));
  audio.addEventListener('volumechange', () => {
    if (!dragging) setUI(audio.volume);
  });

  /* ── Init UI ── */
  applyVol(0.3);
})();
