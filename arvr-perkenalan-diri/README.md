# Praktikum AR/VR - Pertemuan 1

- Nama : **[Syadila Ayu Luthfiyyah]**
- NIM : **[2409020064]**
- Link demo : https://github.com/syahdilaluthfi/ar-vr-perkenalan-diri.git

Project ini berisi scene WebXR pertama menggunakan **A-Frame 1.7.1**.

## Deskripsi singkat

Scene menampilkan **box, sphere, dan cylinder** di atas lantai, lengkap dengan langit dan pencahayaan. Arahkan kursor ke box lalu klik untuk mengganti warnanya.

## Struktur folder

```text
arvr-prak-NIM/
├── index.html          # Halaman utama scene A-Frame
├── assets/
│   ├── img/            # Gambar / tekstur (disiapkan)
│   ├── models/         # Model 3D .glb / .gltf (disiapkan)
│   └── audio/          # Audio (disiapkan)
├── js/
│   └── main.js         # Skrip interaksi kotak
├── README.md           # Deskripsi project
└── .gitignore          # Pengecualian file Git
```

File `.gitkeep` sengaja ditambahkan di folder aset agar folder kosong tetap muncul di GitHub.

## Cara menjalankan di komputer

1. Buka folder proyek di **Visual Studio Code** lewat **File > Open Folder**.
2. Instal ekstensi **Live Server** (opsional, direkomendasikan).
3. Klik kanan file **index.html**, pilih **Open with Live Server**.
4. Tunggu halaman A-Frame terbuka di browser. Koneksi internet diperlukan untuk memuat library A-Frame dari CDN.
5. Gerakkan arah pandang dengan mouse, lalu klik **box** untuk mengubah warnanya.

## Cara mengunggah ke GitHub

1. Di GitHub, buat repository baru `arvr-prak-NIM`, **Public**, tanpa menambahkan README dari GitHub.
2. Pastikan nama folder lokal sesuai nama repository; ganti `NIM` dengan NIM asli Anda.
3. Buka terminal di dalam folder proyek, lalu jalankan:

```bash
git init
git branch -M main
git add .
git commit -m "Praktikum AR/VR Pertemuan 1"
git remote add origin https://github.com/syahdilaluthfi/ar-vr-perkenalan-diri.git
git push -u origin main
```

> Ganti `USERNAME` dengan username GitHub asli, dan `NIM` dengan NIM Anda di nama repository, folder, URL, dan README.

## Mengaktifkan GitHub Pages

Di repository GitHub pilih **Settings > Pages > Build and deployment**. Set:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`

Klik **Save**, kemudian buka `https://github.com/syahdilaluthfi/ar-vr-perkenalan-diri.git` setelah deployment berhasil. URL akan mengikuti username dan nama repository asli.

## Catatan

- Nama file utama wajib **index.html**, bukan `index.html.txt`.
- Jika perintah `git` tidak dikenali, instal Git lalu buka ulang VS Code.
- Jika Git meminta identitas, jalankan `git config --global user.name "Nama Anda"` dan `git config --global user.email "email@contoh.com"` (gunakan email Anda sendiri).
- Jika tautan demo belum terbuka, periksa menu **Actions** dan **Settings > Pages** untuk status deployment.
- Contoh ini adalah **scene 3D/WebXR**. Masuk VR hanya jika browser/perangkat mendukung. AR kamera/marker belum disiapkan dalam pertemuan ini.
