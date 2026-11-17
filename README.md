# ImbasKomp AI

Aplikasi web untuk mengenal komponen elektronik sebenar menggunakan kamera dan AI (Teachable Machine). Projek murid SBP Integrasi Selandar untuk AIMIX: IID 2026, Trek A3 AI & Digital Innovation.

## Topik

Pilih topik di bahagian atas. Misi, kuiz dan papan markah berubah ikut topik.

- **Tingkatan 2, Bab 2.3 Reka Bentuk Elektrik**: elemen sumber, medium, beban dan kawalan; litar lampu suluh, kipas mini, loceng pintu dan lampu LED; soalan Hukum Ohm (V = IR) dan kuasa (P = VI).
- **Tingkatan 2, Bab 2.4 Reka Bentuk Elektronik**: mikropengawal, peranti input dan output; gambar rajah blok LED berkelip, lampu automatik, penggera keselamatan dan palang automatik.
- **Tingkatan 3, Bab 1.1 Reka Bentuk Mekatronik**: elemen mekatronik; gambar rajah blok kereta kawalan jauh, robot pengelak halangan, palang pintu dan lampu jalan pintar.

## Mod

- **Imbas**: kenal komponen, papar simbol litar, peranan dalam topik, fungsi dan contoh.
- **Bina Litar**: imbas komponen mengikut urutan litar atau gambar rajah blok.
- **Kuiz**: 10 soalan, campuran soalan komponen (boleh dijawab dengan kamera) dan soalan konsep.
- **Uji Ketepatan**: matriks kekeliruan dan peratus ketepatan model.
- **Papan Markah**: sepuluh markah tertinggi bagi setiap topik.

## Pemasangan

1. Latih model di Teachable Machine (Image Project). Nama kelas:
   `Bateri`, `Wayar`, `Suis`, `Mentol`, `Motor AT`, `Buzzer`, `LED`, `Perintang`, `LDR`, `Sensor Ultrasonik`, `Mikropengawal`, `Servo`, `Pemacu Motor`, `Tiada Komponen`
   Komponen yang tiada boleh ditinggalkan. Nama lain seperti `ESP32`, `Arduino` atau `Pembaz` juga dikenali.
2. Export model (TensorFlow.js, Upload) dan tampal pautan ke `MODEL_URL` dalam `index.html`.
3. Buat Google Sheets (jika sudah ada, tampal semula `Code.gs` dan buat deployment baharu), buka Extensions > Apps Script, tampal `Code.gs`, Deploy sebagai Web app (Execute as: Me, akses: Anyone). Tampal URL `/exec` ke `SCRIPT_URL`.
4. Hidupkan GitHub Pages: Settings > Pages > Branch `main`, folder `/ (root)`.

Tanpa `MODEL_URL`, aplikasi berjalan dalam mod simulasi untuk ujian paparan.
