<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { login } = useUserStore()

function loginButton(){
  login({
    username: 'ensieh',
    password: '1234'
  })
}
</script>

<template>
  <div class="grid">
    {{ t('hello') }}
    <Button label="Submit" class="mr-2 mb-2" @click="loginButton"></Button>
</div></template>
