<script setup>
import { useLayout } from "@/layout/composables/layout";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { layoutConfig } = useLayout();

const oldPassword = ref("");
const newPassword = ref("");

const logoUrl = computed(() => {
  return `layout/images/${
    layoutConfig.darkTheme.value ? "logo-white" : "logo-dark"
  }.svg`;
});

function changePassword() {
  user.changePassword({
    old_password: "1234",
    new_password: "9876",
  });
}
</script>

<template>
  <div
    class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="flex flex-column align-items-center justify-content-center">
      <img
        :src="logoUrl"
        alt="Sakai logo"
        class="sm:mb-5 mb-3 w-6rem flex-shrink-0"
      />
      <div
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            var(--primary-color) 10%,
            rgba(33, 150, 243, 0) 30%
          );
        "
      >
        <div
          class="w-full surface-card py-8 px-5 sm:px-8"
          style="border-radius: 53px"
        >
          <div class="text-900 text-3xl text-center font-medium">
            ویرایش رمز عبور
          </div>
          <div>
            <label
              for="password1"
              class="block text-900 font-medium text-xl mb-2 mt-5"
              >رمز عبور قبلی</label
            >
            <Password
              id="password1"
              v-model="oldPassword"
              placeholder="Previous password"
              :toggleMask="true"
              class="w-full mb-5"
              inputClass="w-full"
              :inputStyle="{ padding: '1rem' }"
            ></Password>

            <label
              for="password2"
              class="block text-900 font-medium text-xl mb-2"
              >رمز عبور جدید</label
            >
            <Password
              id="password2"
              v-model="newPassword"
              placeholder="New password"
              :toggleMask="true"
              class="w-full mb-3 sm:mb-5"
              inputClass="w-full"
              :inputStyle="{ padding: '1rem' }"
            ></Password>
            <Button
              :label="t('confirm')"
              class="w-full p-3 text-xl"
              @click="changePassword"
            ></Button>
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
