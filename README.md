# Rizki Tazidi Zayd — Interactive Portfolio

Website statis responsif dalam Bahasa Indonesia, berdasarkan dokumen portofolio yang diberikan. Berisi filter proyek, dialog detail, tab pengalaman, accordion, navigasi seluler, tautan kontak, dan unduh PDF. Tidak memerlukan build atau framework.

Jalankan dari folder ini dengan `python -m http.server 4173 --directory dist`, lalu buka http://localhost:4173. Konten proyek dan pengalaman ada di `dist/app.js`, struktur halaman di `dist/index.html`, dan desain di `dist/style.css`.

Foto serta dokumentasi proyek diekstrak dari PDF asli. Website ini menampilkan dokumentasi; tidak menjalankan model ML. Font Google bersifat opsional, dengan fallback lokal.

Interaksi hover, tilt, spotlight, indikator gulir, dan penjelajah toolkit ada di `dist/interactions.js` dan `dist/motion.css`. Efek pointer dibatasi untuk mouse dan menghormati `prefers-reduced-motion`; toolkit tetap dapat digunakan lewat keyboard dan sentuhan.

Logo teknologi menggunakan aset SVG Devicon v2.17.0: https://github.com/devicons/devicon/tree/v2.17.0. Merek dan logo tetap milik pemiliknya masing-masing. Logo disertakan secara lokal di `dist/assets/logos`.
