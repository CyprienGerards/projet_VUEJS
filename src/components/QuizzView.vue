<template>
  <div class="quizz-view">
    <QuizCard
      v-if="current < quiz.length"
      :breed="quiz[current].correct"
      :options="quiz[current].options"
      @next="handleNext"
    />
    <div v-else>
      <h2>🎉 Quiz Completed!</h2>
      <p>Your Score: {{ score }} / {{ quiz.length }}</p>
      <button @click="restart">Restart</button>
    </div>
  </div>
</template>

<script setup>
import { ref , computed} from 'vue';
import quizBreeds from '@/data/quizzbreeds.json';
import QuizCard from '@/components/QuizzCard.vue';

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const current = ref(0);
const score = ref(0);

// This will store the actual quizz data
const quiz = shuffle(quizBreeds).slice(0, 10).map(breed => {
  const options = shuffle([
    breed.name,
    ...shuffle(quizBreeds.filter(b => b.name !== breed.name))
      .slice(0, 3)
      .map(b => b.name)
  ]);
  return { correct: breed, options };
});

function handleNext(isCorrect) {
  if (isCorrect) {
    score.value++;
  }
  current.value++;
}

function restart() {
  location.reload();
}
</script>

<style scoped>
.quizz-view {
  text-align: center;
  padding: 2rem;
}
</style>
