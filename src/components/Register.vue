<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const confirmpassword = ref('');
const error = ref('');
const success = ref('');
const username =ref ('');


function Register(){
    /*intialisation*/
    error.value = '';
    success.value = '';
    /* error sucess check */
    if (!email.value || !password.value|| !confirmpassword.value|| !username.value){
            error.value = 'Please fill all fields';
            return;
        } 
    if (password.value !== confirmpassword.value)    {
            error.value = 'Passwords do not match.';
            return;
        }

    /* stockage user */
    const newUser ={
        username: username.value,
        email :email.value,
        password: password.value
    }    
    localStorage.setItem('user', JSON.stringify(newUser));/**stockage user info in json */
    /**end registration */
    success.value ='Register successful'; 
    /*reinitialise*/
    username.value = '';
    email.value = '';
    password.value = '';
    confirmpassword.value = '';
}

function getUser() {
  success.value = JSON.parse(localStorage.getItem('user') || '[]');
}
</script>
<template>
    <div>
        <h1>Register</h1>
        <div class="form-inputs">
            <label for="username">Username :</label>
            <input v-model="username" id="username" type="username" placeholder="Enter a username">
        </div>
        <div class="form-inputs">
            <label for="email">Email :</label>
            <input v-model="email" id="email" type="email" placeholder="Enter your email">
        </div>
        <div class="form-inputs">
            <label for="password">Password :</label>
            <input v-model="password" id="password" type="password" placeholder="Enter your password">
        </div>
        <div class="form-inputs">
            <label for="confirmpassword">Confirm Password :</label>
            <input v-model="confirmpassword" id="confirmpassword" type="confirmpassword" placeholder="Confirm your password">
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p v-if="success" class="success-message">{{ success }}</p>
        <button @click="Register">Register</button>
        <button @click="getUser">User</button>
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