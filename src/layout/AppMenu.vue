<script setup>
import { computed } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const model = computed(() => [
  {
    label: 'Home',
    items: [
      { label: t('dashboard'), icon: 'pi pi-fw pi-home', to: '/' },
      { label: t('profile'), icon: 'pi pi-fw pi-id-card', to: '/profile' },
      { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/message' },
      { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
    ]
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
