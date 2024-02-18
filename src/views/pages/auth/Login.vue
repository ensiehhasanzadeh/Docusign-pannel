<script setup lang="ts">
import { ref } from 'vue'
import AppConfig from '@/layout/AppConfig.vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
import { useToast } from 'primevue/usetoast';

const { t } = useI18n()
const user = useUserStore()
const router = useRouter()
const toast = useToast();

const username = ref('')
const password = ref('')

async function login() {
  await user.login({
    username: username.value,
    password: password.value
  })
  router.push('/')
  toast.add({ severity: 'success', summary: t('successLogin'), life: 3000 })
}

</script>

<template>
  <div class="surface-ground flex align-items-center justify-content-center mt-5 overflow-hidden">
    <div class="flex flex-column align-items-center justify-content-center">
      <div
        style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
        <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px; max-width: 560px;">
          <div class="text-center mb-5">
            <img src="@/assets/images/ds.png" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-3xl font-medium mb-3">{{ t('welcome') }}!</div>
          </div>

          <div>
            <label for="username1" class="block text-900 text-xl font-medium mb-2">{{ t('username') }}</label>
            <InputText id="username1" type="text" :placeholder="t('username')" class="w-full md:w-30rem mb-5"
              style="padding: 1rem" v-model="username" />

            <label for="password1" class="block text-900 font-medium text-xl mb-2">{{ t('password') }}</label>
            <Password id="password1" v-model="password" :feedback="false" :placeholder="t('password')" :toggleMask="true"
              class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

            <div class="flex align-items-center justify-content-between mb-5 gap-5">
              <a class="font-medium no-underline ml-2 text-right cursor-pointer" href="#/reset-password"
                style="color: var(--primary-color)">{{
                  t('forgotPassword') }}</a>
            </div>
            <BaseButton :action="login" :label="t('signIn')" class="w-full p-3 text-xl"></BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>
