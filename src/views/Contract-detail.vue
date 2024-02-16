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
  <div v-if="!isLoading" class="card w-full flex-grow-1 lg:mx-4">
    <div class="text-3xl font-bold mb-3">{{ details.title }}</div>
    <div class="">{{ details.content }}</div>
    <Accordion class="mt-3">
      <AccordionTab :header="t('clause', [index + 1]) + ': ' + clause.title" v-for="clause, index in details.clauses"
        :key="index">
        <div class="mt-2">{{ clause.content }}</div>
        <Accordion class="mt-3">
          <AccordionTab :header="t('remark', [index + 1]) + ': ' + remark.title" v-for="remark, index in clause.remarks" :key="index">
            <div class="mt-2">{{ remark.content }}</div>
          </AccordionTab>
        </Accordion>
      </AccordionTab>
    </Accordion>
  </div>
</template>