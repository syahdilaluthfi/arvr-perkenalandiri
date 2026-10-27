# Praktikum AR/VR - Pertemuan 1

## Scene 3D Lima Bangun Ruang Bergerak

### Identitas Mahasiswa
- **Nama:** Syadila Ayu Luthfiyyah
- **NIM:** 2409020064
- **Program Studi:** Teknologi Informasi
- **Mata Kuliah:** Praktikum Augmented dan Virtual Reality
- **Framework:** A-Frame 1.7.1

### Deskripsi Project
Project ini merupakan tugas praktikum Augmented Reality dan Virtual Reality (AR/VR) untuk membuat scene 3D menggunakan HTML dan framework A-Frame. Scene menampilkan lima jenis bangun ruang dengan warna pastel yang berbeda dan dilengkapi animasi agar objek dapat bergerak secara otomatis.

### Objek 3D
1. **Kubus:** Berwarna pink dan berputar secara terus-menerus.
2. **Bola:** Berwarna biru muda dan bergerak naik turun.
3. **Tabung:** Berwarna cokelat muda dan berputar pada sumbu Y.
4. **Kerucut:** Berwarna hijau muda dan bergerak naik turun.
5. **Torus:** Berwarna kuning muda dan berputar pada beberapa sumbu.

### Fitur Scene
- Menggunakan A-Frame versi 1.7.1.
- Menampilkan lima jenis bangun ruang 3D.
- Memiliki lantai dan latar langit dengan warna berbeda.
- Menampilkan judul scene serta identitas mahasiswa.
- Menggunakan animasi untuk menggerakkan objek secara otomatis.
- Mendukung navigasi scene menggunakan mouse dan keyboard.
- Dapat dijalankan melalui browser menggunakan Live Server.

### Struktur Project
```text
arvr-prak-NIM/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── img/
│   ├── models/
│   └── audio/
└── js/
```

### Cara Menjalankan Project
1. Buka folder project menggunakan Visual Studio Code.
2. Pastikan file `index.html` dan `README.md` berada di folder utama.
3. Pasang ekstensi Live Server jika belum tersedia.
4. Klik kanan pada `index.html`, lalu pilih **Open with Live Server**.
5. Scene akan terbuka di browser dan menampilkan lima bangun ruang 3D beserta animasinya.

### Navigasi Scene
- **Mouse:** Klik dan tahan, lalu geser untuk melihat sekeliling.
- **W:** Bergerak maju.
- **S:** Bergerak mundur.
- **A:** Bergerak ke kiri.
- **D:** Bergerak ke kanan.

### Publikasi GitHub Pages
- **Repository GitHub:** https://github.com/syahdilaluthfi/arvr-perkenalandiri
- **Link Demo:** 


### Jawaban Refleksi

**1. Mengapa posisi objek yang terlihat pertama kali oleh pengguna memakai nilai z negatif?**

Karena kamera awal A-Frame menghadap ke arah sumbu Z negatif. Oleh karena itu, objek diletakkan pada posisi Z negatif agar berada di depan kamera dan dapat terlihat oleh pengguna.

**2. Mengapa WebXR hanya aktif pada HTTPS atau localhost?**

WebXR memerlukan secure context untuk mengakses fitur perangkat XR dengan aman. Karena itu, WebXR umumnya berjalan melalui HTTPS atau localhost saat pengembangan.

**3. Jelaskan perbedaan peran WebXR Device API, three.js, dan A-Frame.**

WebXR Device API digunakan untuk menghubungkan aplikasi web dengan perangkat AR/VR. Three.js menangani pembuatan dan perenderan grafis 3D, sedangkan A-Frame mempermudah pembuatan scene 3D melalui elemen HTML.

### Kesimpulan
Melalui praktikum ini, saya mempelajari cara membuat scene 3D menggunakan A-Frame 1.7.1, mengatur posisi dan warna objek, membuat lantai dan langit, serta menambahkan animasi pada lima bangun ruang. Praktikum ini menjadi dasar untuk memahami pengembangan aplikasi WebXR dan Virtual Reality berbasis web.
