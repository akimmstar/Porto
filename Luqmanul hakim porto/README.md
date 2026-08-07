# LUQMANUL HAKIM — Portfolio

Portfolio ini tetap memakai konsep, layout, warna, fungsi, dan animasi awal. Perubahan utama hanya:
- Foto profil diganti dengan foto formal di `assets/profile.jpg`.
- Dua sertifikat demo lama dihapus dan diganti dengan dua sertifikat asli.
- Tombol sosial tetap memiliki animasi expand, tetapi teks `GH`, `IG`, dan `in` diganti dengan logo SVG GitHub, Instagram, dan LinkedIn.
- Halaman sertifikat sekarang dibuat dari satu data array sehingga penambahan sertifikat tidak perlu mengubah struktur HTML.

## Struktur
- `index.html` — halaman utama
- `certificates.html` — halaman sertifikat
- `style.css` — styling/responsive design
- `script.js` — animasi scroll, social interaction, dan generator kartu sertifikat
- `assets/profile.jpg` — foto profil
- `assets/sertifikat-provinsi-juara-2.jpg` — sertifikat FLS2N Juara II tingkat Provinsi Sumatera Barat
- `assets/sertifikat-kabupaten-kota-juara-harapan-1.jpg` — sertifikat Juara Harapan I Payakumbuh Creative mARTket 2024

## Cara menambahkan sertifikat baru
Tidak perlu membuat `<article>` baru di `certificates.html`.

1. Masukkan file gambar sertifikat ke folder `assets/`, misalnya:
   `assets/sertifikat-baru.jpg`
2. Buka `script.js`.
3. Cari bagian `const certificateData = [`.
4. Tambahkan satu objek seperti berikut:

```js
{
  number: "03",
  category: "TINGKAT / PENYELENGGARA",
  title: "Judul Sertifikat atau Pencapaian",
  image: "assets/sertifikat-baru.jpg"
}
```

5. Simpan. Kartu sertifikat, thumbnail, modal preview, dan animasinya akan dibuat otomatis.

### Tips penamaan
- Gunakan nama file tanpa spasi, misalnya `sertifikat-provinsi-juara-1.jpg`.
- Untuk gambar web, JPG/WebP dengan ukuran yang wajar lebih ringan daripada file gambar resolusi sangat besar.
- `number` cukup dilanjutkan: `03`, `04`, `05`, dan seterusnya.

## Link sosial
Edit `href` pada tiga elemen `.social` di `index.html` menjadi URL GitHub, Instagram, dan LinkedIn milik pemilik portfolio. Logo dan animasi tidak perlu diubah.

## Jalankan
Tidak membutuhkan framework atau build tool. Buka `index.html` di browser. Untuk development, gunakan Live Server di VS Code.
