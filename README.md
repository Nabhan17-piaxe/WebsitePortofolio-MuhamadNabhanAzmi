# Muhamad Nabhan Azmi — CV & Portfolio Landing Page

Website portofolio pribadi **Muhamad Nabhan Azmi** (`Nabhan17-piaxe/WebsitePortofolio-MuhamadNabhanAzmi`) dengan sistem desain modular dwibahasa (`ID | EN`) dan mode tema adaptif (`Light / Dark`).

## Perbaikan & Pembaruan Terbaru
1. **Integrasi 2 Versi CV Google Drive (`ID` & `ENG`)**:
   - **CV Bahasa Indonesia (ID)**: [Google Drive CV ID](https://drive.google.com/file/d/1beBwSeoA3v-gV8WU8jJQlkUxm2mLl0jZ/view?usp=drive_link) (`assets/Muhamad_Nabhan_Azmi_CV.pdf` & `cv-mahasiswa.html`)
   - **CV Bahasa Inggris (ENG)**: [Google Drive CV ENG](https://drive.google.com/file/d/1Gec4hqxWmHrlxX6Kldy2pFNB_U3vOkll/view?usp=drive_link) (`assets/Muhamad_Nabhan_Azmi_Resume_EN.pdf` & `cv-english.html`)
2. **Foto About Me (Master of Ceremonies)**: Diperbarui menggunakan foto MC terbaru (`assets/about_nabhan_mc.jpg`).
3. **Ikon Tools & Skills**: Diperbarui menggunakan logo resmi lokal `assets/icon_proteus.png` (Proteus), `assets/icon_fusion360.png` (Fusion 360), dan `assets/icon_easyeda.png` (EasyEDA).
4. **Logo Kampus di Bagian Pendidikan**: Diperbarui menggunakan lambang resmi UPN "Veteran" Jakarta (`assets/upnvj_campus.jpg`).
5. **Perbaikan Kode & Deployment**:
   - Memperbaiki *SyntaxError* pada `portfolio.js` (baris `renderPrintableCV`) yang sebelumnya menghentikan eksekusi script.
   - Memperbaiki *attribute selector* pada filter proyek (`data-filter` / `data-category`) dan sinkronisasi *Dark Mode* (`data-theme="dark"` & `.dark`).

## Struktur File Root (Siap Deploy ke GitHub Pages)
- `index.html` — Halaman utama portofolio interaktif.
- `style.css` — Stylesheet variabel CSS dan tata letak responsif.
- `portfolio.js` — Script modul interaktif, terjemahan dwibahasa (`ID | EN`), filter proyek, galeri sertifikat, dan modal CV.
- `skills.json` — Daftar 10 keahlian perangkat lunak & rekayasa.
- `cv-mahasiswa.html` — Halaman CV mandiri versi Bahasa Indonesia (siap cetak A4).
- `cv-english.html` — Halaman CV mandiri versi Bahasa Inggris (siap cetak A4).
- `assets/` — Seluruh aset foto proyek, sertifikat, foto MC, logo UPNVJ, ikon Proteus/Fusion 360/EasyEDA, dan file PDF CV.
- `.nojekyll` — Konfigurasi deployment GitHub Pages.
