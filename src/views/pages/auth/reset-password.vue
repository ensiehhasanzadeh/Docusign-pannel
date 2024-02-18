<script setup lang="ts">
import { useLayout } from "@/layout/composables/layout"
import { ref, computed } from "vue"
import { useI18n } from "vue-i18n"
import { useRouter } from "vue-router"
import BaseButton from '@/components/BaseButton.vue'
import { useUserStore } from '@/stores/user'

const { t } = useI18n()
const { layoutConfig } = useLayout()
const router = useRouter()
const user = useUserStore()

const username = ref('')
const mobile = ref('')
const display = ref(false)

function openDialog() {
  display.value = true
}

async function ResetPassword() {
  await user.resetPassword({
    username: username.value,
    phone_number: mobile.value,
  })
  openDialog()
}

function closeDialog() {
  display.value = false
  router.push("/add-otp")
}
</script>

<template>
  <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="flex flex-column align-items-center justify-content-center">
      <div style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            var(--primary-color) 10%,
            rgba(33, 150, 243, 0) 30%
          );
        ">
        <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px; max-width: 560px;">
          <div class="text-center mb-5">
            <img src="@/assets/images/ds.png" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-xl font-medium mb-3">{{ t('resetPasswordDescription') }}</div>
          </div>
          <div>
            <label for="username1" class="block text-900 text-xl mt-5 font-medium mb-2">{{ t('username') }}</label>
            <InputText id="username1" type="text" :placeholder="t('username')" class="w-full sm:mb-5 mb-3" style="padding: 1rem"
              inputClass="w-full" v-model="username" />

            <label for="mobile1" class="block text-900 font-medium text-xl mb-2">{{ t('phoneNumber') }}</label>
            <InputText id="mobile1" v-model="mobile" :placeholder="t('phoneNumber')" class="w-full sm:mb-5 mb-3" inputClass="w-full"
              :inputStyle="{ padding: '1rem' }"></InputText>
            <BaseButton :label="t('confirm')" class="w-full p-3 text-xl" :action="ResetPassword" />
          </div>
        </div>
      </div>
    </div>
    <Dialog :header="t('PasswordRecovery')" v-model:visible="display" :modal="true" class="sm:w-30vm">
      <p class="line-height-3 mt-5 text-xl text-blue-800">{{ t('sendOTPToN',[mobile]) }}</p>
      <template #footer>
        <div class="flex justify-content-center mt-3">
          <BaseButton :label="t('confirm')" :action="closeDialog" class="p-button-outlined" />
        </div>
      </template>
    </Dialog>
  </div>
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
