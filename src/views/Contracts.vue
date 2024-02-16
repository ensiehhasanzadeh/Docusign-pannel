<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { useContractStore } from '@/stores/contract';
import { useAsyncState } from '@vueuse/core'
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n()
const contract = useContractStore()
const router = useRouter()

const { state: contracts, isLoading } = useAsyncState(async () => {
  const result = await contract.list()
  return result
}, { contracts: [] })


const isListEmpty = computed(() => !contracts.value.contracts.length)

function goTODetails(id: number) {
  router.push({
    path: `/contract-detail/${id}`,
  })
}

</script>

<template>
  <div class="flex flex-column px-3">
    <div class="text-3xl mb-4">{{ t('contracts') }}</div>
    <div v-if="!isLoading">
      <div v-if="isListEmpty" class="card flex flex-column align-items-center justify-items-center">
        <img src="@/assets/images/contract.png" alt="no-contract" class="mb-1 sm:mb-3 w-4 border-round" />
        <div class="text-2xl">{{ t('notHaveContract') }}</div>
        <BaseButton :label="t('writeContract')" class="mt-3" @click="" />
      </div>
      <div v-else>
        <div v-for="contract in contracts.contracts" :key="contract.id" class="card w-full md:flex md:align-items-center">
          <div class="flex align-items-center w-full">
            <img src="@/assets/images/contract.jpg" alt="contract" class="shadow-2 w-4 border-round sm:w-2" />
            <div class="mx-2">
              <div class="text-center font-bold text-2xl sm:text-left">{{ contract.title }}</div>
              <div class="truncate-multiline-3 mt-1">{{ contract.content }}</div>
            </div>
          </div>
          <BaseButton :label="t('showDetails')" class="mt-3 w-full md:mt-0 md:mx-3 md:w-3 white-space-nowrap"
            @click="goTODetails(contract.id)" />
        </div>
      </div>
    </div>
  </div>
</template>
