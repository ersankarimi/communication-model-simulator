/**
 * server.js
 *
 * Server sederhana menggunakan Express dan Socket.io untuk simulasi model Publish-Subscribe.
 * - Klien dapat terhubung melalui WebSocket dan menerima pesan yang dipublikasikan secara real-time.
 * - Pesan baru akan dipublikasikan setiap 2 detik dengan counter yang terus meningkat.
 * - Server juga menggunakan CORS untuk mengizinkan koneksi dari domain tertentu.
 */

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors"); // Import CORS untuk mengizinkan koneksi dari domain tertentu

const app = express();
const server = http.createServer(app);

// Middleware CORS, memungkinkan permintaan dari klien di 'http://localhost:5178'
app.use(cors({ origin: "http://localhost:5178", credentials: true }));

// Set up route untuk menampilkan informasi dasar di layar
app.get("/", (req, res) => {
  res.send(`
    <h1>Publish-Subscribe Server</h1>
    <p>Server berjalan dengan baik. Pesan akan dipublikasikan setiap 2 detik.</p>
    <p>Koneksi WebSocket dari klien di http://localhost:5178 diizinkan.</p>
    <hr />
    <p>Server dibuat oleh Ersan Karimi</p>
    <p><a href="https://github.com/ersankarimi" target="_blank">GitHub</a></p>
    <p><a href="https://www.linkedin.com/in/ersankarimi/" target="_blank">LinkedIn</a></p>
  `);
});

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5178", // Izinkan klien dari alamat ini untuk terhubung
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let messageCounter = 0; // Counter untuk melacak pesan yang dikirim

// Ketika klien terhubung ke WebSocket
io.on("connection", (socket) => {
  console.log("A user connected");

  // Publikasikan pesan baru setiap 2 detik
  const intervalId = setInterval(() => {
    messageCounter++;
    const message = `Message ${messageCounter}`;
    io.emit("publish", { message }); // Kirim pesan ke semua klien yang terhubung
  }, 2000);

  // Ketika klien terputus
  socket.on("disconnect", () => {
    console.log("A user disconnected");
    clearInterval(intervalId); // Hentikan interval pengiriman pesan
  });
});

// Jalankan server di port 3000 atau port yang disediakan oleh environment
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
