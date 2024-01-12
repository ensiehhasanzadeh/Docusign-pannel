<script setup>
import { useLayout } from "@/layout/composables/layout";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const { layoutConfig } = useLayout();
const router = useRouter();

const username = ref("");
const mobile = ref("");
const display = ref(false);

const logoUrl = computed(() => {
  return `layout/images/${
    layoutConfig.darkTheme.value ? "logo-white" : "logo-dark"
  }.svg`;
});

function openDialog() {
  display.value = true;
}

function ResetPassword() {
  openDialog();
  user.resetPassword({
    username: "ensieh",
    phone_number: "+989923180528",
  });
}

function closeDialog() {
  display.value = false;
  router.push("/login");
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
          <span class="text-600 text-center text-xl font-medium">
            برای ارسال رمز عبور، نام کاربری و شماره موبایل خود را وارد کنید
          </span>
          <div>
            <label
              for="username1"
              class="block text-900 text-xl mt-5 font-medium mb-2"
              >{{ t("username") }}</label
            >
            <InputText
              id="username1"
              type="text"
              placeholder="username"
              class="w-full sm:mb-5 mb-3"
              style="padding: 1rem"
              inputClass="w-full"
              v-model="username"
            />

            <label
              for="mobile1"
              class="block text-900 font-medium text-xl mb-2"
              >{{ t("phoneNumber") }}</label
            >
            <InputText
              id="mobile1"
              v-model="mobile"
              placeholder="mobile"
              class="w-full sm:mb-5 mb-3"
              inputClass="w-full"
              :inputStyle="{ padding: '1rem' }"
            ></InputText>
            <Button
              :label="t('confirm')"
              class="w-full p-3 text-xl"
              @click="ResetPassword"
            ></Button>
          </div>
        </div>
      </div>
    </div>
    <Dialog
      :header="t('PasswordRecovery')"
      v-model:visible="display"
      :modal="true"
      class="sm:w-30vm"
    >
      <p class="line-height-3 mt-5 text-xl text-blue-800">
        رمز شما به شماره +989923180528 ارسال شد
      </p>
      <template #footer>
        <div class="flex justify-content-center mt-3">
          <Button
            :label="t('confirm')"
            @click="closeDialog"
            class="p-button-outlined"
          />
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
