<script setup>
import Sidebar from '@/components/Sidebar.vue'
//import router-view from './router/index.js'
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  
  <div class="layout">
    <Sidebar />
    <main class="main-content">
      <router-view />

    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
}

.main-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #1e1e1e;
  color: white;
  overflow-y: auto;
}
</style>
