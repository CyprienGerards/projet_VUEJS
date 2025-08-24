<script setup>
import { ref, onMounted } from 'vue';

const loggedUser = ref(null);

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  if (user) {
    loggedUser.value = user;
  }
});

</script>
<template>
  <aside class="sidebar">
    <div class="logo-wrapper">
      <img src="@/assets/logo_texte.svg" alt="Logo" class="logo" />
    </div>
    <h2>Know Your Cow</h2>
    <!-- Username -->
    <div v-if="loggedUser" class="user-info">
       Account : {{ loggedUser.username}}
    </div>
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/quizz">Quizz</router-link></li>
      <li><router-link to="/wiki">Wiki</router-link></li>
      <li><router-link to="/Login">Login</router-link></li>
      <li><router-link to="/Register">Register</router-link></li>
    </ul>  
    <select v-model="$i18n.locale">
      <option value="en">En</option>
      <option value="fr">Fr</option>
    </select>  
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
  max-width: 200px;    /* 🔧 shrink logo */
  height: auto;
}

.user-info {
  margin: 1rem 0;
  font-weight: bold;
  color: white;
  background-color: #333;
  padding: 0.5rem;
  border-radius: 8px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.5rem;
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
