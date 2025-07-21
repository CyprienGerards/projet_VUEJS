<template>
  <div class="quiz-card">
    <img :src="breed.image" :alt="breed.name" class="quiz-image" />

    <div class="options">
      <button
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        :class="{ correct: selected && option === breed.name, wrong: selected && option === selected && option !== breed.name }"
      >
        {{ option }}
      </button>
    </div>

    <p v-if="selected">
      {{ selected === breed.name ? $t('quizzvue.correct') : $t('quizzvue.wrong') + ' ' + breed.name }}
    </p>

    <button class="next-button" v-if="selected" @click="next">{{ $t('quizzvue.next') }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const { breed, options } = defineProps(['breed', 'options']);
const emit = defineEmits(['next']);

const selected = ref(null);

function selectOption(option) {
  if (selected.value) return;
  selected.value = option;
}
function next() {
  emit('next', selected.value === breed.name); // ✅ envoyer info de bonne réponse
  selected.value = null; // facultatif si composant est recréé par parent
}
</script>

<style scoped>
.quiz-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.quiz-image {
  width: 1000px;
  height: auto;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
.options button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.5rem;
}
.correct {
  background-color: #4caf50;
}
.wrong {
  background-color: #f44336;
}
.next-button{
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
