// JavaScript buatan sendiri untuk praktikum AR/VR - Pertemuan 1.
// Klik objek kotak dalam scene untuk mengubah warnanya.

document.addEventListener('DOMContentLoaded', function () {
  const kotak = document.querySelector('#kotak');
  const pesan = document.querySelector('#pesan');
  const warna = ['#695CF3', '#F45B69', '#FFB547', '#36B7BC'];
  let nomorWarna = 0;

  if (!kotak) return;

  kotak.addEventListener('click', function () {
    nomorWarna = (nomorWarna + 1) % warna.length;
    kotak.setAttribute('color', warna[nomorWarna]);
    if (pesan) pesan.textContent = 'Bagus! Anda berhasil berinteraksi dengan objek 3D.';
  });
});
