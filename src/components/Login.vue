<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

function login(){
    if (!email.value || !password.value){
        console.log("please fill all fields")
    } else {
        console.log("login successful")
    }
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