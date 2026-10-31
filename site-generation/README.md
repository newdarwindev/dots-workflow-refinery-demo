# Static website generation

The Vite build copies `public/vision.html` and `public/resources/` into `dist/`. The React app links to the vision page. `verify.mjs` checks that the generated site includes the paper, deck, and vision page. The repository workflow publishes `dist/` through GitHub Pages. No server or tracking code is required at runtime.

Run `npm run build` after generating the two PDFs. The committed PDFs are versioned outputs so Pages builds do not require a TeX installation.
