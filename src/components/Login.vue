<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

import { ref } from 'vue';

const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');

function getUser() {
  return JSON.parse(localStorage.getItem('user') || '{}');
}

function login(){
    /*intialisation*/
    error.value = '';
    success.value = '';
    /* error sucess check */
    if (!email.value || !password.value){
        error.value = $t('login.errorfield') ;
        return;
    } 
    const user= getUser();

    if (user.email !== email.value || user.password !== password.value){
        error.value = $t('login.errorlog');
        return;
    }
    success.value = $t('login.successlog');

    localStorage.setItem('loggedUser', JSON.stringify(user));// stock user logged

    setTimeout(() => {
        router.push('/'); // redirection to home
    }, 2000);
}
</script>

<template>
    <div>
        <h1>{{ $t('login.title') }}</h1>
        <div class="form-inputs">
            <label for="email">{{ $t('login.email') }}</label>
            <input v-model="email" id="email" type="email" :placeholder="$t('login.emailplaceholder')">
        </div>
        <div class="form-inputs">
            <label for="password">{{ $t('login.password') }}</label>
            <input v-model="password" id="password" type="password" :placeholder="$t('login.passwordplaceholder')">
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p v-if="success" class="success-message">{{ success }}</p>
        <button @click="login">{{ $t('login.button') }}</button>
    </div>
</template>
<style>
.form-inputs {
    padding-bottom: 10px;
}

label {
    padding-right: 10px;
    font-size: 1rem;
}
button{
    font-size:1rem;
}
</style>