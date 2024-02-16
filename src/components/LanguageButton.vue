<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n()

const language = ref('en')

function toggleLanguage() {
  if (locale.value === 'fa') locale.value = 'en'
  else locale.value = 'fa'
}


</script>

<template>
  <div>
    <BaseButton :label="t('language')" :action="toggleLanguage" />
  </div>
</template>