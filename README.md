# Simulasi Model Komunikasi

Proyek ini mensimulasikan dua model komunikasi: **Request-Response** dan
**Publish-Subscribe**. Proyek dibagi menjadi dua bagian, yaitu sisi **client**
yang dibangun menggunakan **Vue 3** dan sisi **server** yang menggunakan
**Node.js** dengan **Socket.io**. Ini merupakan tugas untuk mata kuliah **Sistem
Terdistribusi** dengan judul **Simulasi Interaktif Model Komunikasi dalam Sistem
Terdistribusi**.

![Tux, the Linux mascot](/cover.png)

## Struktur Proyek

```
.
├── client      # Aplikasi Vue 3 untuk sisi client
└── server      # Server Node.js dengan Socket.io untuk sisi server
```

## Fitur

- **Model Request-Response**: Memperlihatkan bagaimana client meminta data dari
  server melalui HTTP.
- **Model Publish-Subscribe**: Mengilustrasikan bagaimana server mengirimkan
  pesan dan client dapat berlangganan untuk menerima pesan tersebut secara
  real-time.

## Langkah-Langkah untuk Memulai

### Prasyarat

Pastikan Anda telah menginstal hal-hal berikut:

- **Node.js**: [Unduh Node.js](https://nodejs.org/)
- **pnpm**: Anda dapat menginstalnya dengan perintah berikut:
  ```bash
  npm install -g pnpm@9.2.0
  ```

### Instruksi Setup

#### 1. Clone Repositori

```bash
git clone https://github.com/ersankarimi/communication-models-simulation.git
cd communication-models-simulation
```

#### 2. Instalasi Dependensi

Anda perlu menginstal dependensi untuk direktori `client` dan `server`.

##### Client (Vue 3)

```bash
cd client
pnpm install
```

##### Server (Node.js)

```bash
cd ../server
pnpm install
```

### Menjalankan Aplikasi

#### 1. Menjalankan Server

Pada direktori `server`, jalankan server Node.js:

```bash
cd server
node server.js
```

Server akan berjalan pada `http://localhost:3000` secara default.

#### 2. Menjalankan Client

Pada direktori `client`, jalankan aplikasi Vue 3:

```bash
cd client
pnpm run dev
```

Ini akan membuka aplikasi client di browser Anda, biasanya di
`http://localhost:5178`.

### Penjelasan

- **Request-Response**: Anda akan mengirimkan permintaan HTTP ke server, dan
  server akan merespons dengan data. Pada proyek ini, contoh respons didapat
  dari API publik **JSONPlaceholder**.
- **Publish-Subscribe**: Anda dapat berlangganan ke server yang akan mengirimkan
  pesan real-time menggunakan **Socket.io**. Setiap pesan yang diterima oleh
  client akan langsung ditampilkan di layar.

### Pengembang

Dikembangkan oleh **Ersan Karimi**.

- [GitHub](https://github.com/ersankarimi)
- [LinkedIn](https://www.linkedin.com/in/ersankarimi/)
