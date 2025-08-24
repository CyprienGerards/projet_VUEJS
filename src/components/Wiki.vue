<script setup>
</script>

<template>
  <div class="wiki-page">
      <div class="wiki-intro">
        <h1>
          {{ $t('wiki.title') }}
        </h1>

        <p>
          {{ $t('wiki.intro1') }}
        </p>

        <p>
          {{ $t('wiki.intro2') }}
        </p>

        <p>
          {{ $t('wiki.click') }}
        </p>
      </div>
    <ul class="breed-list">
      
      <li><router-link to="/wiki/abondance">Abondance</router-link> </li>

      <li><router-link to="/wiki/angus">Angus</router-link> </li>
      
      <li><router-link to="/wiki/aubrac">Aubrac</router-link> </li>
      
      <li><router-link to="/wiki/belgian-blue">Belgian Blue</router-link> </li>
      
      <li><router-link to="/wiki/blonde-d-aquitaine">Blonde d'aquitaine</router-link> </li>
      
      <li><router-link to="/wiki/brahman">Brahman</router-link> </li>
      
      <li><router-link to="/wiki/brown-swiss">Brown Swiss</router-link> </li>
      
      <li><router-link to="/wiki/charolais">Charolais</router-link> </li>

      <li><router-link to="/wiki/galloway">Galloway</router-link> </li>

      <li><router-link to="/wiki/hereford">Hereford</router-link> </li>
      
      <li><router-link to="/wiki/highland">Highland</router-link> </li>

      <li><router-link to="/wiki/holstein">Holstein-Friesian</router-link> </li>
      
      <li><router-link to="/wiki/jersey">Jersey</router-link> </li>

      <li><router-link to="/wiki/limousin">Limousin</router-link> </li>
      
      <li><router-link to="/wiki/montbeliarde">Montbeliarde</router-link> </li>
      
      <li><router-link to="/wiki/normande">Normande</router-link> </li>
      
      <li><router-link to="/wiki/salers">Salers</router-link> </li>

      <li><router-link to="/wiki/shorthorn">Shorthorn</router-link> </li>
      
      <li><router-link to="/wiki/simmental">Simmental</router-link> </li>
      
      <li><router-link to="/wiki/texas-longhorn">Texas Longhorn</router-link> </li>
      
      <li><router-link to="/wiki/vosgienne">Vosgienne</router-link> </li>
    </ul>
  </div>
  
</template>

<style scoped>
.wiki-page {
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  max-width: 1500px;
}
.wiki-intro {
  max-width: 1500px;
  font-size: 1.5rem;
  line-height: 2.8;
  margin-bottom: 2rem;
}
.breed-list {
  padding-left: 1.2rem;
  font-size: 1.5rem;
}

.breed-list li {
  margin-bottom: 0.8rem;
}

.breed-list a {
  font-weight: bold;
  color: #2ecc71;
  text-decoration: none;
}

.breed-list a:hover {
  text-decoration: underline;
}
</style>