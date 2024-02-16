<script setup lang="ts">
import { useLayout } from "@/layout/composables/layout"
import { ref, computed } from "vue"
import { useI18n } from "vue-i18n"
import { useUserStore } from '@/stores/user'
import BaseButton from "@/components/BaseButton.vue";

const { t } = useI18n()
const { layoutConfig } = useLayout()
const user = useUserStore()

const oldPassword = ref('')
const newPassword = ref('')

async function changePassword() {
  await user.changePassword({
    old_password: oldPassword.value,
    new_password: newPassword.value,
  })
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
        <div class="surface-card py-8 px-5 sm:px-8" style="border-radius: 53px; width: 560px;">
          <div class="text-center mb-5">
            <img src="@/assets/images/ds.png" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-xl font-medium mb-3">{{ t('changePassword') }}</div>
          </div>
          <div>
            <label for="password1" class="block text-900 font-medium text-xl mb-2 mt-5">{{ t('currentPassword') }}</label>
            <Password id="password1" v-model="oldPassword" :placeholder="t('currentPassword')" :toggleMask="true"
              class="w-full mb-5" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

            <label for="password2" class="block text-900 font-medium text-xl mb-2">{{ t('newPassword') }}</label>
            <Password id="password2" v-model="newPassword" :placeholder="t('newPassword')" :toggleMask="true"
              class="w-full mb-3 sm:mb-5" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
            <BaseButton :label="t('confirm')" class="w-full p-3 text-xl" :action="changePassword" />
          </div>
        </div>
      </div>
    </div>
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
