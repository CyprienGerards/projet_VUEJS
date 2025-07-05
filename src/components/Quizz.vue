<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="qizz content">
    <div class="quizz-intro">
      <p>🧠 <strong>Ready for a challenge?</strong></p>

      <p>
        This short quiz is designed to test your knowledge about cows — from their breeds and behavior to their role in agriculture.
        Each question has only one correct answer, so read carefully and choose wisely.
      </p>

      <p>
        At the end of the quiz, you’ll receive your score along with some fun facts that might just surprise you.
        Whether you're a beginner or a cow expert, it's a great way to learn and have fun.
      </p>

      <p>
        👉 Good luck, and enjoy exploring the world of <em>Know Your Cow</em>! 🐄
      </p>
    </div>
    <div class="quizz-start">
      <h3>Ready to begin?</h3>
      <button class="start-button" type="button">🎯 Start the Quizz</button>
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