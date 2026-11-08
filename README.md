# Rizki Tazidi Zayd — Interactive Portfolio

Responsive English-language website based on the supplied portfolio. Includes project filters and detail dialogs, professional and leadership experience, mobile navigation, contact links, and an external Google Drive resume link. No framework or build step is required.

The expertise strip loops continuously from right to left, with a pause control and reduced-motion support. The hero uses the original About Me photo. SISIRAJA is included as an internship project with a screenshot extracted from the final portfolio slide.

Jalankan dari folder ini dengan `python -m http.server 4173 --directory dist`, lalu buka http://localhost:4173. Konten proyek dan pengalaman ada di `dist/app.js`, struktur halaman di `dist/index.html`, dan desain di `dist/style.css`.

Foto serta dokumentasi proyek diekstrak dari PDF asli. Website ini menampilkan dokumentasi; tidak menjalankan model ML. Font Google bersifat opsional, dengan fallback lokal.

Interaksi hover, tilt, spotlight, indikator gulir, dan penjelajah toolkit ada di `dist/interactions.js` dan `dist/motion.css`. Efek pointer dibatasi untuk mouse dan menghormati `prefers-reduced-motion`; toolkit tetap dapat digunakan lewat keyboard dan sentuhan.

Logo teknologi menggunakan aset SVG Devicon v2.17.0: https://github.com/devicons/devicon/tree/v2.17.0. Merek dan logo tetap milik pemiliknya masing-masing. Logo disertakan secara lokal di `dist/assets/logos`.
