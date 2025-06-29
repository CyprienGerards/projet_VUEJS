<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1>test</h1>
    <h3>
      <button class="green" type="button">Start Quizz</button>
    </h3>
  </div>
</template>
<style>
h3 {
position: left;
}
</style>