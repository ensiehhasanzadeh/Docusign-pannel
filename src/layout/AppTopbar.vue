<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useLayout } from '@/layout/composables/layout'
import BaseButton from '@/components/BaseButton.vue'
import { useI18n } from "vue-i18n";
import { useUserStore } from '@/stores/user';
import { useAsyncState } from '@vueuse/core';

const { t } = useI18n();

const { onMenuToggle } = useLayout()

const outsideClickListener = ref(null)
const topbarMenuActive = ref(false)
const user = useUserStore()

const isDialogOpen = ref(false)

const { state: userInfo, isLoading } = useAsyncState(async () => user.getProfile(), {
  token: '',
  user_id: 0,
  email: '',
  username: '',
  first_name: '',
  last_name: '',
})

onMounted(() => {
  bindOutsideClickListener()
})

onBeforeUnmount(() => {
  unbindOutsideClickListener()
})

const onTopBarMenuButton = () => {
  topbarMenuActive.value = !topbarMenuActive.value
}

const topbarMenuClasses = computed(() => {
  return {
    'layout-topbar-menu-mobile-active': topbarMenuActive.value
  }
})

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        topbarMenuActive.value = false
      }
    }
    document.addEventListener('click', outsideClickListener.value)
  }
}
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener)
    outsideClickListener.value = null
  }
}
const isOutsideClicked = (event) => {
  if (!topbarMenuActive.value) return

  const sidebarEl = document.querySelector('.layout-topbar-menu')
  const topbarEl = document.querySelector('.layout-topbar-menu-button')

  return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target))
};

function openDialog() {
  isDialogOpen.value = true
}

</script>

<template>
  <div class="layout-topbar">
    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
      <i class="pi pi-bars"></i>
    </button>

    <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
      <i class="pi pi-ellipsis-v"></i>
    </button>

    <div class="layout-topbar-menu" :class="topbarMenuClasses">
      <button @click="openDialog" class="p-link layout-topbar-button">
        <i class="pi pi-user"></i>
      </button>
    </div>
    <Dialog v-model:visible="isDialogOpen" :modal="true" class="w-5">
      <div class="flex flex-column align-items-center justify-items-center">
        <div class="text-xl">{{ userInfo.first_name + ' ' + userInfo.last_name }}</div>
        <div class="my-3">{{ userInfo.username }}</div>
        <router-link to="/change-password">
          <BaseButton :label="t('changePassword')" />
        </router-link>
      </div>
    </Dialog>
  </div>
</template>
