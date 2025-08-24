<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function startQuizz() {
  // Optional: setup logic here
  router.push('/quizz/play');
}
</script>

<template>
  <div class="qizz content">
    <div class="quizz-intro">
      <h1>{{ $t('quizzvue.title') }}</h1>

      <p>
        {{ $t('quizzvue.intro1') }}
      </p>

      <p>
        {{ $t('quizzvue.intro2') }}
      </p>

      <p>
        {{ $t('quizzvue.introend') }}
      </p>
    </div>
    <div class="quizz-start">
      <h3>{{ $t('quizzvue.ready') }}</h3>
      <button class="start-button" type="button"  @click="startQuizz">{{ $t('quizzvue.button') }}</button>
    </div>
  </div>
</template>

<style scoped>
.quizz-intro {
  max-width: 1000px;
  font-size: 1.5rem;
  line-height: 2.8;
  margin-bottom: 2rem;
}

h3 {
position: left;
font-size: 1.5rem;
}
.quizz-start {
  margin-top: 2rem;
  text-align: left;
}

.start-button {
  background-color: #2ecc71; /* green */
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-button:hover {
  background-color: #27ae60;
}
</style>