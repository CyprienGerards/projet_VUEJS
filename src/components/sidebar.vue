<script setup>
</script>
<template>
  <div class="container">
    <div class="sidebar">
      <h2>Know Your Cow</h2>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/quizz">Quizz</router-link></li>
        <li><router-link to="/wiki">Wiki</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: hsl(0, 0%, 23%);
  color: #000000;
  padding: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 1rem 0;
}

.sidebar a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.sidebar a:hover {
  text-decoration: underline;
}

.content {
  flex: 1;
  padding: 15rem;
}
</style>
