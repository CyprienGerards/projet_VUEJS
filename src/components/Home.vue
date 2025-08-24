<script setup>
</script>

<template>
  <div class="home-container">
    <div class="home-text">
      <h1>🐄 <strong>{{ $t('home.title') }}</strong></h1>

      <p>
        <strong>Know Your Cow</strong> {{ $t('home.intro') }}
      </p>

      <p>{{ $t('home.hereYouFindTitle') }}</p>

      <ul>
        <li>{{ $t('home.hereYouFindList1') }}</li>
        <li>{{ $t('home.hereYouFindList2') }}</li>
        <li>{{ $t('home.hereYouFindList3') }}</li>
      </ul>

      <p>
        <strong>{{ $t('home.whyTitle') }}</strong><br />
        {{ $t('home.whyBody') }}
      </p>

      <p>{{ $t('home.cta') }}</p>
    </div>
  </div> 
</template>
<style scoped>
.home-container {
  display: flex;
  justify-content: flex-start;
}
.home-text {
  max-width: 1000px;
  margin: 0 auto;
  line-height: 2.8;
  font-size: 1.5rem;
}

.home-text ul {
  padding-left: 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.home-text li {
  margin-bottom: 0.5rem;
}
</style>