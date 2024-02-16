<script setup>
import { computed } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import { useI18n } from 'vue-i18n'
import LanguageButton from '@/components/LanguageButton.vue';

const { t } = useI18n()

const model = computed(() => [
  {
    label: t('projectName'),
    items: [
      { label: t('dashboard'), icon: 'pi pi-fw pi-home', to: '/' },
      { label: t('profile'), icon: 'pi pi-fw pi-id-card', to: '/profile' },
      { label: t('contracts'), icon: 'pi pi-fw pi-file', to: '/contracts' },
    ]
  },
]);
</script>

<template>
  <div class="h-full flex flex-column justify-content-between">
    <ul class="layout-menu">
      <template v-for="(item, i) in model" :key="item">
        <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
        <li v-if="item.separator" class="menu-separator"></li>
      </template>
    </ul>
    <LanguageButton class="flex justify-content-end" />
  </div>
</template>

