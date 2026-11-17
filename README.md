# ImbasKomp AI

Aplikasi web untuk mengenal komponen elektronik sebenar menggunakan kamera dan AI (Teachable Machine). Projek murid SBP Integrasi Selandar untuk AIMIX: IID 2026, Trek A3 AI & Digital Innovation.

## Mod

- **Imbas**: kenal komponen, papar simbol litar, fungsi dan contoh kegunaan dengan suara.
- **Bina Litar**: enam misi membina litar dan gambar rajah blok input, proses dan output.
- **Kuiz**: cari komponen berdasarkan petunjuk, markah disimpan ke Google Sheets.
- **Uji Ketepatan**: matriks kekeliruan dan peratus ketepatan model.
- **Papan Markah**: sepuluh markah tertinggi.

## Pemasangan

1. Latih model di Teachable Machine (Image Project). Nama kelas:
   `Perintang`, `LED`, `Bateri`, `Suis`, `Buzzer`, `LDR`, `Perintang Boleh Ubah`, `Servo`, `ESP32`, `Sensor Ultrasonik`, `Tiada Komponen`
2. Export model (TensorFlow.js, Upload) dan tampal pautan ke `MODEL_URL` dalam `index.html`.
3. Buat Google Sheets, buka Extensions > Apps Script, tampal `Code.gs`, Deploy sebagai Web app (Execute as: Me, akses: Anyone). Tampal URL `/exec` ke `SCRIPT_URL`.
4. Hidupkan GitHub Pages: Settings > Pages > Branch `main`, folder `/ (root)`.

Tanpa `MODEL_URL`, aplikasi berjalan dalam mod simulasi untuk ujian paparan.
