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
            error.value = $t('register.errorfield');
            return;
        } 
    if (password.value !== confirmpassword.value)    {
            error.value = $t('register.errorpassword');
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
    success.value = $t('register.successregister'); 
    /*reinitialise*/
    username.value = '';
    email.value = '';
    password.value = '';
    confirmpassword.value = '';
}

/*function getUser() {
  success.value = JSON.parse(localStorage.getItem('user') || '{}');
}*/
</script>
<template>
    <div>
        <h1>{{ $t('register.title') }}</h1>
        <div class="form-inputs">
            <label for="username">{{ $t('register.username') }}</label>
            <input v-model="username" id="username" type="username" :placeholder="$t('register.usernameplaceholder')">
        </div>
        <div class="form-inputs">
            <label for="email">{{ $t('register.email') }}</label>
            <input v-model="email" id="email" type="email" :placeholder="$t('register.emailplaceholder')">
        </div>
        <div class="form-inputs">
            <label for="password">{{ $t('register.password') }}</label>
            <input v-model="password" id="password" type="password" :placeholder="$t('register.passwordplaceholder')">
        </div>
        <div class="form-inputs">
            <label for="confirmpassword">{{ $t('register.confirmpassword') }}</label>
            <input v-model="confirmpassword" id="confirmpassword" type="confirmpassword" :placeholder="$t('register.confirmpasswordplaceholder')">
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p v-if="success" class="success-message">{{ success }}</p>
        <button @click="Register">{{ $t('register.button') }}</button>
        <!--<button @click="getUser">User</button>-->
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