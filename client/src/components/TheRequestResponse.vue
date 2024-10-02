<template>
  <div class="request-response-container">
    <h2>Model Request-Response</h2>
    <button @click="sendRequest" :disabled="isLoading" class="request-button">
      {{ isLoading ? 'Memuat...' : 'Kirim Permintaan' }}
    </button>
    <div v-if="responseData">
      <h3>Respons:</h3>
      <pre class="response-data">{{ responseData }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const responseData = ref<Post | null>(null)
const isLoading = ref(false)
const postIdCounter = ref(1)

const sendRequest = async (): Promise<void> => {
  isLoading.value = true
  try {
    const response = await axios.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${postIdCounter.value}`
    )
    postIdCounter.value = postIdCounter.value === 100 ? 1 : postIdCounter.value + 1
    responseData.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.request-response-container {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.request-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.request-button:disabled {
  background-color: gray;
  cursor: not-allowed;
}

.response-data {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow-x: auto;
}
</style>
