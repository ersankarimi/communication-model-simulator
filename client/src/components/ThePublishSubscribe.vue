<template>
  <div class="publish-subscribe-container">
    <h2>Model Publish-Subscribe</h2>
    <div class="indicator" :class="indicatorClass">{{ currentEvent }}</div>
    <button class="toggle-button" @click="toggleSubscription">
      {{ isSubscribed ? 'Unsubscribe' : 'Subscribe' }}
    </button>
    <div class="messages-container" ref="messagesContainer">
      <h3>Pesan:</h3>
      <ul class="messages-list">
        <li v-for="(message, index) in messages" :key="index" class="message">{{ message }}</li>
      </ul>
      <div v-if="loading && isSubscribed" class="loading">Memuat pesan baru...</div>
      <div v-if="loading && !isSubscribed" class="unsubscribing">
        Sedang berhenti berlangganan...
      </div>
      <div v-if="!messages.length && !loading && !isSubscribed" class="no-messages">
        Belum ada pesan yang diterima.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

const messages = ref<string[]>([])
const isSubscribed = ref(false)
const loading = ref(false)
const currentEvent = ref('Status: Tidak Terhubung')
const indicatorClass = ref('disconnected')

const toggleSubscription = () => {
  loading.value = true
  isSubscribed.value = !isSubscribed.value

  if (isSubscribed.value) {
    messages.value = []
    currentEvent.value = 'Status: Terhubung'
    indicatorClass.value = 'connected'
    connectSocket()
  } else {
    setTimeout(() => {
      socket.off('publish')
      loading.value = false
      currentEvent.value = 'Status: Tidak Terhubung'
      indicatorClass.value = 'disconnected'
    }, 1000)
  }
}

const connectSocket = () => {
  socket.on('publish', (data: { message: string }) => {
    messages.value.push(data.message)
    loading.value = false
    scrollToBottom()
  })
}

const scrollToBottom = () => {
  const container = document.querySelector('.messages-container')
  if (container) {
    container.scrollTop = container.scrollHeight
  }
}

watch(isSubscribed, (newVal) => {
  if (newVal) {
    loading.value = true // Set loading to true on subscribe
  }
})
</script>

<style scoped>
.publish-subscribe-container {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.indicator {
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.connected {
  background-color: #d6ebd7;
  color: #388e3c;
}

.disconnected {
  background-color: #f5cdc0;
  color: #d32f2f;
}

.toggle-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #36a772;
}

.messages-container {
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
}

.messages-list {
  list-style-type: none;
  padding: 0;
}

.message {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.loading,
.unsubscribing,
.no-messages {
  font-style: italic;
  color: gray;
  margin-top: 10px;
}
</style>
