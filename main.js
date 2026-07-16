import anime from 'animejs/lib/anime.es.js';

// ===========================
//  ハートをランダムに生成
// ===========================
const heartsEl = document.getElementById('hearts');
const heartChars = ['♡', '✿', '🩷', '＊'];

for (let i = 0; i < 14; i++) {
  const h = document.createElement('span');
  h.className = 'heart';
  h.textContent = heartChars[i % heartChars.length];
  h.style.left = (Math.random() * 88 + 4) + '%';
  heartsEl.appendChild(h);
}

// ===========================
//  アニメーション
// ===========================

// ① ハートがふわっと降ってくる（ループ）
anime({
  targets: '.heart',
  translateY: [0, 380],
  opacity: [
    { value: 0.7, duration: 200 },
    { value: 0, duration: 800, easing: 'linear' },
  ],
  delay: anime.stagger(180, { start: 100 }),
  duration: 2200,
  easing: 'easeInQuad',
  loop: true,
});

// ② リボンがふわっと登場
anime({
  targets: ['#ribbon-l', '#ribbon-r'],
  opacity: [0, 1],
  rotate: ['-20deg', '0deg'],
  delay: anime.stagger(150, { start: 200 }),
  duration: 600,
  easing: 'easeOutBack',
});

// ③ ねこがぽよんと落ちてくる
anime({
  targets: '#neko',
  translateY: ['-30px', '0px'],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutBounce',
  delay: 500,
});

// ④ 名前がふわっと出てくる
anime({
  targets: '#name-block',
  translateY: ['20px', '0px'],
  opacity: [0, 1],
  duration: 700,
  easing: 'easeOutExpo',
  delay: 1100,
});

// ⑤ 区切り線が伸びる
anime({
  targets: '#divider',
  opacity: [0, 1],
  scaleX: [0, 1],
  duration: 600,
  easing: 'easeOutExpo',
  delay: 1500,
});

// ⑥ 自己紹介文がふわっと出てくる
anime({
  targets: '#intro-text',
  translateY: ['20px', '0px'],
  opacity: [0, 1],
  duration: 700,
  easing: 'easeOutExpo',
  delay: 1800,
});

// ⑦ 基本情報カードが出てくる
anime({
  targets: '#info-section',
  translateY: ['20px', '0px'],
  opacity: [0, 1],
  duration: 700,
  easing: 'easeOutExpo',
  delay: 2100,
});

// ⑧ タグカードがポンポンと出てくる
anime({
  targets: ['#card1', '#card2', '#card3'],
  scale: [0.8, 1],
  opacity: [0, 1],
  delay: anime.stagger(150, { start: 2500 }),
  duration: 600,
  easing: 'easeOutBack',
});

// キャラクターカードが出てくる
anime({
  targets: '#chara-cards',
  translateY: ['20px', '0px'],
  opacity: [0, 1],
  duration: 700,
  easing: 'easeOutExpo',
  delay: 2400,
});

// ⑨ SNSリンクが出てくる
anime({
  targets: '#sns-wrap',
  translateY: ['20px', '0px'],
  opacity: [0, 1],
  duration: 700,
  easing: 'easeOutExpo',
  delay: 3000,
});

// ⑩ カードにホバーするとぷるぷる震える
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    anime({
      targets: card,
      rotate: [0, -4, 4, -2, 0],
      duration: 400,
      easing: 'easeInOutSine',
    });
  });
});

anime({
  targets: '#about-title',
  opacity: [0, 1],
  translateY: ['10px', '0px'],
  duration: 600,
  easing: 'easeOutExpo',
  delay: 200,
});