<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { API_Contract_Create_Input } from '@/datasource/API/ContractAPI';
import { useContractStore } from '@/stores/contract';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n()
const contract = useContractStore()
const router = useRouter()

const contractDetail = ref<API_Contract_Create_Input>({
  title: '',
  content: '',
  clauses: []
})

function addClause() {
  contractDetail.value.clauses.push({
    remarks: []
  })
}

function addRemark(clauseNumber: number) {
  contractDetail.value.clauses[clauseNumber].remarks.push({})
}

async function createContract() {
  const result = await contract.create(contractDetail.value)
  router.push({
    path: `/contract-detail/${result.id}`,
  })
}
</script>

<template>
  <div class="flex flex-column flex-grow-1">
    <div class="text-3xl mb-4">{{ t('writeContract') }}</div>
    <div class="card flex-grow-1">
      <label for="contractTitle" class="block text-900 text-xl font-medium mb-2">{{ t('contractTitle') }}</label>
      <InputText id="contractTitle" type="text" :placeholder="t('contractTitle')" class="w-full mb-5"
        v-model="contractDetail.title" />

      <label for="contractContent" class="block text-900 text-xl font-medium mb-2">{{ t('contractContent') }}</label>
      <Textarea id="contractContent" :placeholder="t('contractContent')" :autoResize="true"
        v-model="contractDetail.content" class="w-full mb-5" />
      <div v-for="clause, index in contractDetail.clauses" :key="index" class="card">
        <div class="text-3xl mb-4">{{ t('clause', [index + 1]) }}</div>
        <label for="clauseTitle" class="block text-900 text-xl font-medium mb-2">{{ t('clauseTitle') }}</label>
        <InputText id="clauseTitle" type="text" :placeholder="t('clauseTitle')" class="w-full mb-5"
          v-model="clause.title" />

        <label for="clauseContent" class="block text-900 text-xl font-medium mb-2">{{ t('clauseContent') }}</label>
        <Textarea id="clauseContent" :placeholder="t('clauseContent')" :autoResize="true" v-model="clause.content"
          class="w-full mb-5" />
        <div v-for="remark, index2 in clause.remarks" :key="index2" class="card">
          <div class="text-3xl mb-4">{{ t('remark', [index2 + 1]) }}</div>
          <label for="remarkTitle" class="block text-900 text-xl font-medium mb-2">{{ t('remarkTitle') }}</label>
          <InputText id="remarkTitle" type="text" :placeholder="t('remarkTitle')" class="w-full mb-5"
            v-model="remark.title" />

          <label for="remarkContent" class="block text-900 text-xl font-medium mb-2">{{ t('remarkContent') }}</label>
          <Textarea id="remarkContent" :placeholder="t('remarkContent')" :autoResize="true" v-model="remark.content"
            class="w-full mb-5" />
        </div>
        <BaseButton :label="t('writeNewRemark')" icon="pi pi-plus" :action="() => addRemark(index)" />
      </div>
      <BaseButton :label="t('writeNewClause')" icon="pi pi-plus" :action="addClause" />
    </div>
    <BaseButton :label="t('writeContract')" :action="createContract" />
  </div>
</template>