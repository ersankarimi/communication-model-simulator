<template>
  <div class="comparison-container">
    <h2>Perbandingan Model Komunikasi</h2>
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Kriteria</th>
          <th>Publish-Subscribe</th>
          <th>Request-Response</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in comparisonData" :key="index">
          <td>{{ item.kriteria }}</td>
          <td>
            <ul :class="item.publishSubscribe.length <= 1 ? 'list-none' : ''">
              <li v-for="(point, idx) in item.publishSubscribe" :key="idx">{{ point }}</li>
            </ul>
          </td>
          <td>
            <ul :class="item.requestResponse.length <= 1 ? 'list-none' : ''">
              <li v-for="(point, idx) in item.requestResponse" :key="idx">{{ point }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="note">
      Pemilihan antara kedua model ini bergantung pada kebutuhan aplikasi, termasuk skalabilitas,
      kecepatan respons, dan kompleksitas implementasi.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Data perbandingan
const comparisonData = ref([
  {
    kriteria: 'Ciri Utama',
    publishSubscribe: [
      'Model komunikasi asinkron di mana pengirim dan penerima tidak terhubung langsung.',
      'Subscriber mendengarkan event atau topik tertentu yang diterbitkan oleh publisher.',
      'Digunakan dalam sistem real-time atau event-driven seperti notifikasi, feed, atau aplikasi IoT.'
    ],
    requestResponse: [
      'Model komunikasi sinkron di mana pengirim meminta informasi dan menunggu respons.',
      'Klien mengirim permintaan ke server, dan server merespons balik ke klien.',
      'Biasanya digunakan dalam HTTP komunikasi.'
    ]
  },
  {
    kriteria: 'Kelebihan',
    publishSubscribe: [
      'Efisien untuk distribusi data ke banyak klien tanpa perlu menunggu respons.',
      'Sangat cocok untuk aplikasi real-time, seperti streaming, notifikasi, atau chat.'
    ],
    requestResponse: [
      'Sederhana dan mudah dipahami, cocok untuk aplikasi yang membutuhkan interaksi langsung.',
      'Keterjaminan pengiriman data: permintaan selalu menerima respons dari server.',
      'Kemudahan dalam debugging dan tracing karena aliran data yang sederhana.',
      'Kontrol penuh pada klien terhadap kapan dan bagaimana data dikirim/diterima.'
    ]
  },
  {
    kriteria: 'Kekurangan',
    publishSubscribe: [
      'Kompleksitas dalam pengelolaan langganan: memerlukan broker untuk manajemen pesan.',
      'Kesulitan dalam penanganan urutan pesan jika tidak ditangani dengan baik.'
    ],
    requestResponse: [
      'Terbatas pada satu penerima untuk setiap permintaan, yang bisa menjadi hambatan pada skala besar.',
      'Potensi blocking jika server lambat merespons, yang dapat mempengaruhi pengalaman pengguna.'
    ]
  },
  {
    kriteria: 'Aliran Data',
    publishSubscribe: [
      'Data mengalir dari publisher ke semua subscriber yang terdaftar tanpa memerlukan permintaan.'
    ],
    requestResponse: [
      'Data mengalir dari klien ke server dan kembali ke klien sebagai respons dari permintaan.'
    ]
  },
  {
    kriteria: 'Keterlibatan Entitas',
    publishSubscribe: [
      'Memerlukan publisher, subscriber, dan broker pesan (jika ada), yang bisa menambah kompleksitas.'
    ],
    requestResponse: [
      'Memerlukan klien dan server, dengan interaksi yang lebih langsung dan jelas.'
    ]
  },
  {
    kriteria: 'Metrik Perbandingan',
    publishSubscribe: [
      'Latency: Waktu yang dibutuhkan untuk menyampaikan pesan dari publisher ke subscriber.',
      'Throughput: Jumlah pesan yang dapat diproses dalam satu waktu tertentu.',
      'Scalability: Kemampuan untuk menambah subscriber baru tanpa mengurangi kinerja sistem.'
    ],
    requestResponse: [
      'Latency: Waktu yang dibutuhkan untuk mengirim permintaan dan menerima respons dari server.',
      'Responsiveness: Kecepatan server dalam merespons permintaan klien.',
      'Reliability: Kemampuan untuk menjamin pengiriman data yang akurat dan tepat waktu.'
    ]
  }
])
</script>

<style scoped>
.comparison-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  line-height: 1.5;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th,
.comparison-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.comparison-table th {
  background-color: #42b983;
  color: white;
}

.comparison-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.comparison-table tbody tr:hover {
  background-color: #f1f1f1;
}

.note {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 20px;
}

ul {
  margin: 0;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.list-none {
  list-style-type: none;
  padding-left: 0;
}
</style>
