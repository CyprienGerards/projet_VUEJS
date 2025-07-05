<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const breedName = route.params.breed // récupère le nom depuis l'URL

// 📦 Tu peux plus tard charger les vraies données depuis un JSON ou une API
const breeds = {
  holstein: {
    name: 'Holstein-Friesian',
    image: '/breeds/Holstein.jpg',
    origin: 'Netherlands',
    type: 'Dairy',
    description: 'Holsteins are known for their high milk production and iconic black and white coat.',
  },
  angus: {
    name: 'Angus',
    image: '/breeds/angus.jpg',
    origin: 'Scotland',
    type: 'Beef',
    description: 'Angus cattle are popular for their high-quality, marbled beef and ease of handling.',
  },
  // ... ajoute d'autres races ici
}

const breed = breeds[breedName.toLowerCase()]
</script>

<template>
  <div v-if="breed" class="breed-page">
    <h2>{{ breed.name }}</h2>
    <img :src="breed.image" :alt="breed.name" class="breed-image" />
    
    <ul class="breed-info">
      <li><strong>Origin:</strong> {{ breed.origin }}</li>
      <li><strong>Type:</strong> {{ breed.type }}</li>
    </ul>

    <p class="breed-desc">{{ breed.description }}</p>
  </div>

  <div v-else>
    <p>❌ Breed not found.</p>
  </div>
</template>

<style scoped>
.breed-page {
  max-width: 800px;
  padding: 2rem 1rem;
}

.breed-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
}

.breed-info {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.breed-info li {
  margin-bottom: 0.3rem;
}

.breed-desc {
  font-size: 1.1rem;
  line-height: 1.7;
}
</style>
