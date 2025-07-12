<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="wiki-page">
      <div class="wiki-intro">
        <p>
          🐄 <strong>Welcome to the Cow Breed Wiki!</strong>
        </p>

        <p>
          Cows are among the most diverse and fascinating animals in the agricultural world. Across the globe, there are hundreds of breeds, each with unique characteristics, origins, and purposes — from dairy production to beef farming and even cultural significance.
        </p>

        <p>
          Below, you’ll find a growing list of cow breeds, complete with detailed profiles to help you learn more about their appearance, temperament, history, and uses. Whether you’re a student, farmer, or simply curious, this wiki is your starting point to better understand the amazing variety of cattle around the world.
        </p>

        <p>
          👉 Click on a breed to discover more!
        </p>
      </div>
    <ul class="breed-list">
      <li><router-link to="/wiki/holstein">Holstein-Friesian</router-link> – The world’s most common dairy cow, known for its high milk yield and black-and-white coat.</li>

      <li><router-link to="/wiki/jersey">Jersey</router-link> – A small dairy breed known for rich, creamy milk and a gentle temperament.</li>

      <li><router-link to="/wiki/angus">Angus</router-link> – A beef breed prized for its marbled meat, commonly solid black or red.</li>

      <li><router-link to="/wiki/limousin">Limousin</router-link> – A muscular French beef breed, known for lean, high-quality meat.</li>

      <li><router-link to="/wiki/charolais">Charolais</router-link> – A large, white beef breed from France, known for strength and fast growth.</li>

      <li><router-link to="/wiki/simmental">Simmental</router-link> – A dual-purpose breed used for both milk and meat, originating from Switzerland.</li>

      <li><router-link to="/wiki/brown-swiss">Brown Swiss</router-link> – One of the oldest dairy breeds, strong and adaptable with a grey-brown coat.</li>

      <li><router-link to="/wiki/belgian-blue">Belgian Blue</router-link> – Known for its extreme muscle mass (“double muscling”) and lean beef.</li>

      <li><router-link to="/wiki/texas-longhorn">Texas Longhorn</router-link> – Iconic for its massive curved horns and adaptability to harsh climates.</li>

      <li><router-link to="/wiki/highland">Highland</router-link> – A hardy Scottish breed with long hair and a calm nature, suited for rugged terrain.</li>
      
      <li><router-link to="/wiki/abondance">Abondance</router-link> – </li>
      
      <li><router-link to="/wiki/aubrac">Aubrac</router-link> – </li>
      
      <li><router-link to="/wiki/blonde-d-aquitaine">Blonde d'aquitaine</router-link> – </li>
      
      <li><router-link to="/wiki/montbeliarde">Montbeliarde</router-link> – </li>
      
      <li><router-link to="/wiki/normande">Normande</router-link> – </li>
      
      <li><router-link to="/wiki/vosgienne">Vosgienne</router-link> – </li>
      
      <li><router-link to="/wiki/salers">Salers</router-link> – </li>
      
      <li><router-link to="/wiki/hereford">Hereford</router-link> – </li>
      
      <li><router-link to="/wiki/galloway">Galloway</router-link> – </li>
      
      <li><router-link to="/wiki/brahman">Brahman</router-link> – </li>
      
      <li><router-link to="/wiki/shorthorn">Shorthorn</router-link> – </li>
      
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
  max-width: 800px;
}
.wiki-intro {
  max-width: 1000px;
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