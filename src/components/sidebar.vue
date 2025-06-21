<script setup>
</script>
<template>
  <div class="container">
    <div class="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Profil</a></li>
        <li><a href="#">Paramètres</a></li>
        <li><a href="#">Déconnexion</a></li>
      </ul>
    </div>
    <div class="content">
      <router-view />
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
  background-color: #333;
  color: white;
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
  color: white;
  text-decoration: none;
}

.sidebar a:hover {
  text-decoration: underline;
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>
