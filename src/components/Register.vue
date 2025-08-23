<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const confirmpassword = ref('');
const error = ref('');
const success = ref('');



function Register(){
    /*intialisation*/
    error.value = '';
    success.value = '';
    /* error sucess check */
    if (!email.value || !password.value|| !confirmpassword.value){
            error.value = 'Please fill all fields';
            return;
        } 
    if (password.value !== confirmpassword.value)    {
            error.value = 'Passwords do not match.';
            return;
        }
    success.value ='Register successful'; 
}
</script>
<template>
    <div>
        <h1>Register</h1>
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
    </div>
</template>