<script setup lang="ts">
import ThePublishSubscribe from '@/components/ThePublishSubscribe.vue'
import TheRequestResponse from '@/components/TheRequestResponse.vue'
import TheComparison from '@/components/TheComparison.vue'
</script>

<template>
  <main class="home-container">
    <h1>Simulasi Model Komunikasi: Request-Response & Publish-Subscribe</h1>
    <p class="description">
      Aplikasi ini menyajikan dua model komunikasi yang umum digunakan dalam sistem distribusi:
      <strong>Publish-Subscribe</strong> dan <strong>Request-Response</strong>. Melalui simulasi
      ini, Anda dapat memahami cara kerja masing-masing model, kelebihan dan kekurangan, serta
      perbandingan antara keduanya berdasarkan beberapa kriteria.
    </p>
    <div class="components-container">
      <TheRequestResponse />
      <ThePublishSubscribe />
    </div>
    <TheComparison />
    <p class="note">
      Dikembangkan oleh Ersan Karimi<br />
      <a href="https://github.com/ersankarimi" target="_blank">GitHub</a> |
      <a href="https://www.linkedin.com/in/ersankarimi/" target="_blank">LinkedIn</a>
    </p>
  </main>
</template>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.components-container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Memberikan jarak antar komponen */
}

h1 {
  text-align: center;
  color: #333;
}

.description {
  text-align: center;
  margin: 20px 0;
  font-size: 1.1em;
  color: #666;
}

.note {
  text-align: center;
  margin-top: 30px;
  font-style: italic;
  color: #888;
}
</style>
