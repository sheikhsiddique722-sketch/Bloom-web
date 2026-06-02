# 🌸 Bloom — Where Every Flower Tells a Story

A beautiful, fully responsive flower shop website built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies — just clean, handcrafted code.

## 🔗 Live Preview
https://sheikhsiddique722-sketch.github.io/Bloom-web/
Open `index.html` in your browser to view the site locally.

---

## ✨ Features

- **Animated landing page** — floating petals, glowing cursor, smooth scroll reveals
- **6 Collection pages** — Wedding, Birthday, Anniversary, Luxury Roses, Seasonal, Custom
- **Add to Cart system** — localStorage-based cart that persists across all pages
- **Cart page** — item quantity control, remove items, order total, checkout
- **Toast notifications** — real-time feedback when adding items
- **Photo gallery** — masonry-style gallery with hover effects
- **Testimonials carousel** — auto-rotating with dot navigation
- **Contact form** — animated floating labels
- **Fully responsive** — mobile, tablet, and desktop

---

## 📁 Project Structure

```
bloom-web/
├── index.html              # Main homepage
├── style.css               # Homepage styles
├── script.js               # Homepage JavaScript
├── cart.js                 # Shared cart logic (localStorage)
├── cart.css                # Cart UI styles (shared across pages)
├── cart.html               # Shopping cart page
├── wedding.html            # Wedding Flowers collection
├── birthday.html           # Birthday Bouquets collection
├── anniversary.html        # Anniversary Gifts collection
├── luxury-roses.html       # Luxury Roses collection
├── seasonal.html           # Seasonal Collection
├── custom.html             # Custom Arrangements + request form
└── assests/
    ├── weeding-image.avif
    ├── birthdaybouqat.jpg
    ├── inniversory-gift.jpg
    ├── luxury-roses.jpg
    ├── Seasonal-Collection.jpg
    └── Custom-Arrangements.jpg
```

---

## 🛒 Cart System

The cart uses `localStorage` to save items across pages:

- Click **Add to Cart** on any product → item saved instantly
- Cart badge in navbar shows item count
- Visit `cart.html` to view, update quantities, or remove items
- Click **Checkout** to place the order

---

## 🎨 Design

| Element | Value |
|---|---|
| Primary font | Fraunces (serif, display) |
| Body font | Jost (sans-serif) |
| Primary color | `#7B61FF` (purple) |
| Accent | `#F5B5D4` (rose) |
| Background | `#FFFDF8` (ivory) |

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bloom-web.git
   ```
2. Open `index.html` in any browser — no build step needed.

---

## 🛠️ Built With

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (IntersectionObserver, localStorage)
- Google Fonts (Fraunces + Jost)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with 🌸 and love
