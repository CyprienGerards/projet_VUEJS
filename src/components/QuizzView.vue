<template>
  <div class="quizz-view">
    <QuizCard
      v-if="current < quiz.length"
      :breed="quiz[current].correct"
      :options="quiz[current].options"
      @next="handleNext"
    />
    <div v-else>
      <h2>{{ $t('quizzvue.completed') }}</h2>
      <p>{{ $t('quizzvue.score') }} {{ score }} / {{ quiz.length }}</p>
      <button class="restart-button" @click="restart">{{ $t('quizzvue.restart') }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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
  //log generation
  if (current.value >= quiz.length) {
  logQuizResult();
  }
}

function restart() {
  location.reload();
}

function logQuizResult(){
  const logs = JSON.parse(localStorage.getItem('quizLogs') || '[]');

  const newEntry = {
    date: new Date().toISOString(),
    score: score.value,
    total: quiz.length,
    percentage: Math.round((score.value / quiz.length) * 100),
    //language: locale.value || 'en', 
    user: JSON.parse(localStorage.getItem('loggedUser'))?.email || 'guest'
  };

  logs.push(newEntry);
  localStorage.setItem('quizLogs', JSON.stringify(logs));
}

</script>

<style scoped>
.quizz-view {
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
}
.restart-button{
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
