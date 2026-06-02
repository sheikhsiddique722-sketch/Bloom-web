const Cart = {
  key: 'bloom-cart',

  get() {
    try { return JSON.parse(localStorage.getItem(this.key)) || { items: [] }; }
    catch { return { items: [] }; }
  },

  save(cart) {
    localStorage.setItem(this.key, JSON.stringify(cart));
    this.updateBadge();
  },

  add(item) {
    const cart = this.get();
    const existing = cart.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.items.push({ ...item, quantity: 1 });
    }
    this.save(cart);
    this.showToast(item.name);
    this.animateBtn(item.id);
  },

  remove(id) {
    const cart = this.get();
    cart.items = cart.items.filter(i => i.id !== id);
    this.save(cart);
  },

  updateQty(id, delta) {
    const cart = this.get();
    const item = cart.items.find(i => i.id === id);
    if (item) {
      item.quantity = Math.max(1, item.quantity + delta);
      this.save(cart);
    }
  },

  count() {
    return this.get().items.reduce((s, i) => s + i.quantity, 0);
  },

  total() {
    return this.get().items.reduce((s, i) => s + i.price * i.quantity, 0);
  },

  updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    const c = this.count();
    badge.textContent = c;
    badge.style.display = c > 0 ? 'grid' : 'none';
  },

  showToast(name) {
    const t = document.getElementById('cart-toast');
    if (!t) return;
    t.innerHTML = `<span style="color:#4cd964;margin-right:8px">✓</span> "${name}" cart mein add ho gaya!`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  },

  animateBtn(id) {
    const btn = document.querySelector(`.add-btn[data-id="${id}"]`);
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = '✓ Added!';
    btn.style.background = 'linear-gradient(120deg,#27ae60,#2ecc71)';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
    }, 1500);
  }
};

// Global click handler for all Add to Cart buttons
document.addEventListener('click', e => {
  const btn = e.target.closest('.add-btn[data-id]');
  if (!btn) return;
  Cart.add({
    id: btn.dataset.id,
    name: btn.dataset.name,
    price: parseInt(btn.dataset.price),
    image: btn.dataset.img || ''
  });
});

document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());
