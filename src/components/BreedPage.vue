<script setup>
import { useRoute } from 'vue-router'
import breedData from '@/data/breeds.json'
import { useI18n } from 'vue-i18n';

const route = useRoute()
const breed = breedData[route.params.breed?.toLowerCase()]
const { locale } = useI18n();
console.log('breed',breed)
</script>

<template>
  <div v-if="breed" class="breed-page">
    <h2>{{ breed.name[locale] }}</h2>
    
    <div class="image-gallery">
      <img
        v-for="(img, index) in breed.images"
        :key="index"
        :src="img"
        :alt="breed.name[locale] + ' image ' + (index + 1)"
        class="breed-image"
      />
    </div>

    <ul class="breed-info">
      <li><strong>Origin:</strong> {{ breed.origin[locale] }}</li>
      <li><strong>Type:</strong> {{ breed.type[locale] }}</li>
    </ul>

    <section v-if="breed.traits[locale]?.length">
      <h3>Key Traits</h3>
      <ul>
        <li v-for="(trait, i) in breed.traits[locale]" :key="i">{{ trait }}</li>
      </ul>
    </section>

    <section class="breed-description">
      <h3>Description</h3>
      <p>{{ breed.description[locale] }}</p>
    </section>

    <section v-if="breed.history[locale]">
      <h3>History</h3>
      <p>{{ breed.history[locale] }}</p>
    </section>
  </div>

  <div v-else>
    <p>❌ Breed not found.</p>
  </div>
</template>

<style scoped>
.breed-page {
  max-width: 1500px;
  padding: 2rem 1rem;
  font-size: 1.5rem;
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}
.breed-image {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  object-fit: cover;
}

.breed-info {
  max-width: 1000px;
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.breed-info li {
  max-width: 1000px;
  margin-bottom: 0.5rem;
}

section {
  max-width: 1000px;
  margin-top: 2rem;
}

section h3 {
  margin-bottom: 0.5rem;
}
</style>
