<script setup>
</script>
<template>
  <aside class="sidebar">
    <div class="logo-wrapper">
      <img src="@/assets/logo_texte.svg" alt="Logo" class="logo" />
    </div>
    <h2>Know Your Cow</h2>
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/quizz">Quizz</router-link></li>
      <li><router-link to="/wiki">Wiki</router-link></li>
    </ul>    
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  background-color: hsl(0, 0%, 23%);
  color: white;
  padding: 1rem;
  height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-wrapper {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.logo {
  max-width: 120px;    /* 🔧 shrink logo */
  height: auto;
}

h2 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
}

a {
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
