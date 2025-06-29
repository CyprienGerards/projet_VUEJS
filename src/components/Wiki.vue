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
    <h1>
        Breed
    </h1>
  </div>
  <footer>
    <img alt="logo" class="logo" src="./assets/logo_texte.svg" width="250" height="250" />
  </footer>
</template>
<style>
h3 {
position: left;
}
</style>