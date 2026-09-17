# Velora Gold & Diamonds

A polished static luxury jewellery showcase built with React, Vite, Tailwind CSS, Framer Motion, Lucide icons, and React Helmet Async.

## 1. Terminal setup

```bash
cd ~/Desktop/Ahmads
npm create vite@latest gold-jewellery-store -- --template react
cd gold-jewellery-store
npm install
npm install lucide-react framer-motion react-helmet-async
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npm run dev
```

The design tokens and Tailwind content paths are already set up in `tailwind.config.js`. The site uses the supplied Velora identity with an ivory, warm-gold, and espresso palette inspired by the brand's Instagram aesthetic.

## 2. Architecture

```text
gold-jewellery-store/
├── index.html                    # Fallback SEO metadata and root document
├── tailwind.config.js            # Luxury palette, typography, gradients, animation tokens
├── postcss.config.js
└── src/
    ├── App.jsx                   # Page composition, selected product and catalog state
    ├── main.jsx                  # React + Helmet provider bootstrap
    ├── index.css                 # Global styling, scrollbar, typography utilities
    ├── data/
    │   └── products.js           # Categories and product catalogue mock data
    └── components/
        ├── SEO.jsx               # Search/social metadata and JewelleryStore schema
        ├── Navbar.jsx            # Gold ticker, responsive navigation
        ├── HeroBanner.jsx        # Animated luxury campaign hero
        ├── CategoryGrid.jsx      # Shop-by-occasion category selector
        ├── FeaturedCollection.jsx# Filterable product showcase
        ├── ProductModal.jsx      # Accessible quick-view / WhatsApp inquiry modal
        ├── TrustBadges.jsx       # Hallmark, certification, exchange assurance
        ├── StoreLocator.jsx      # Boutique CTA and directions link
        ├── WhatsAppFloat.jsx     # Persistent inquiry action
        └── Footer.jsx            # Newsletter and secondary navigation
```

## 3. Customization guide

- **Products:** replace the mock products, prices, descriptions, and image URLs in `src/data/products.js`.
- **Brand details:** Velora and Uppinangady are in place. Add the real phone number and replace the `919999999999` WhatsApp placeholder in the component files.
- **WhatsApp & site settings:** update the central values in `src/data/site.js`; every inquiry CTA uses these values.
- **SEO:** set the live canonical domain through `VITE_SITE_URL` before launch; page metadata and local-business structured data are maintained in `src/components/SEO.jsx`.
- **Visual system:** adjust ivory, gold, espresso, typefaces, or motion timing in `tailwind.config.js` and `src/index.css`.
- **Images:** current imagery uses Unsplash URLs as showcase placeholders. License and host final campaign photography before production deployment.

## Quality checks

```bash
npm run build
```

The app is intentionally static: there is no checkout, authentication, or server dependency. Catalogue filtering, product quick views, mobile navigation, smooth anchors, map links, and WhatsApp inquiry CTAs work in the browser.

## SEO launch setup

1. Copy `.env.example` to `.env.production` and set `VITE_SITE_URL` to the real live domain.
2. Run `npm run build`. It generates a canonical URL, sitemap, and sitemap reference in `robots.txt` for that domain.
3. Add the published domain to Google Search Console and keep Velora's Google Business Profile, address, categories, phone number, and website link accurate.
