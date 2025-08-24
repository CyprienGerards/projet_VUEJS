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
        error.value = 'please fill all fields';
        return;
    } 
    const user= getUser();

    if (user.email !== email.value || user.password !== password.value){
        error.value ='Invalid email or password';
        return;
    }
    success.value = 'login successful';

    localStorage.setItem('loggedUser', JSON.stringify(user));// stock user logged

    setTimeout(() => {
        router.push('/'); // redirection to home
    }, 2000);
}
</script>

<template>
    <div>
        <h1>Login</h1>
        <div class="form-inputs">
            <label for="email">Email :</label>
            <input v-model="email" id="email" type="email" placeholder="Enter your email">
        </div>
        <div class="form-inputs">
            <label for="password">Password :</label>
            <input v-model="password" id="password" type="password" placeholder="Enter your password">
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p v-if="success" class="success-message">{{ success }}</p>
        <button @click="login">Login</button>
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