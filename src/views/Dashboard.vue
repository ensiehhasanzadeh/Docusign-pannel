<script setup lang="ts">
import { useContractStore } from '@/stores/contract';
import { useUserStore } from '@/stores/user';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const user = useUserStore()
const contract = useContractStore()

function login(){
  user.login({
    username: 'ensieh',
    password: '1234'
  })
}

function register(){
  user.register({
    email: 'ensieh.hassanzadeh@gmail.com',
    first_name: 'Test',
    last_name: 'Testi',
    password: '12345',
    phone_number: '+989923180528',
    username: 'Test',
    ver_code: 1111111,
    ver_id: 24
  })
}

function ResetPassword(){
  user.resetPassword({
    username: 'ensieh',
    phone_number: '+989923180528'
  })
}

function changePassword(){
  user.changePassword({
    old_password: '1234',
    new_password: '9876'
  })
}

async function contractList(){
  const result = await contract.list()
  console.log(result);
}

</script>

<template>
  <div class="">
    {{ t('hello') }}
    <Button label="Login" class="m-2" @click="login" />
    <Button label="Register" class="m-2" @click="register" />
    <Button label="Reset Password" class="m-2" @click="ResetPassword" />
    <Button label="Change Password" class="m-2" @click="changePassword" />
    <Button label="Contract List" class="m-2" @click="contractList" />
</div></template>
