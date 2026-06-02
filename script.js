// Loader
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1400);
});

// Petals
const petalBox = document.getElementById('petals');
const colors = ['#F5B5D4', '#C8B6FF', '#F7D6E6', '#7B61FF'];
for (let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (7 + Math.random() * 8) + 's';
  p.style.animationDelay = (Math.random() * 8) + 's';
  const s = 10 + Math.random() * 12;
  p.style.width = s + 'px';
  p.style.height = s + 'px';
  p.style.background = 'linear-gradient(' + colors[i % 4] + ',' + colors[(i + 1) % 4] + ')';
  petalBox.appendChild(p);
}

// Nav scroll
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));

// Glow follow
const glow = document.getElementById('glow');
addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Parallax hero bouquet
const bouquet = document.querySelector('.bouquet');
addEventListener('mousemove', e => {
  const x = (e.clientX / innerWidth - .5) * 30;
  const y = (e.clientY / innerHeight - .5) * 30;
  if (bouquet) bouquet.style.transform = `translate(${x}px,${y}px)`;
});

// Reveal on scroll
const io = new IntersectionObserver(es => {
  es.forEach((en, i) => {
    if (en.isIntersecting) {
      setTimeout(() => en.target.classList.add('in'), i * 60);
      io.unobserve(en.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Testimonials carousel
const track = document.getElementById('ttrack');
const dotsBox = document.getElementById('tdots');
const totalCards = track.children.length;
const perView = window.innerWidth <= 960 ? 1 : 3;
const pages = Math.max(1, totalCards - perView + 1);
let cur = 0;

for (let i = 0; i < pages; i++) {
  const d = document.createElement('div');
  d.className = 'tdot' + (i === 0 ? ' active' : '');
  d.onclick = () => go(i);
  dotsBox.appendChild(d);
}

function go(i) {
  cur = i;
  const card = track.children[0].getBoundingClientRect().width + 26;
  track.style.transform = `translateX(${-i * card}px)`;
  [...dotsBox.children].forEach((d, j) => d.classList.toggle('active', j === i));
}

setInterval(() => { cur = (cur + 1) % pages; go(cur); }, 4000);
