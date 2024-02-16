<script setup lang="ts">
import { useContractStore } from '@/stores/contract';
import { useAsyncState } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

const { t } = useI18n()
const contract = useContractStore()
const route = useRoute()
const router = useRouter()


const { state: details, isLoading } = useAsyncState(async () => {
  const id = route.params.id
  if (!id) router.push('/contracts')
  const result = await contract.getDetails(+id)
  return result
}, { clauses: [], content: '', is_deleted: false, members: [], title: '' })

</script>

<template>
  <div v-if="!isLoading" class="card w-full flex-grow-1">
    <div>{{ details.title }}</div>
  </div>
</template>