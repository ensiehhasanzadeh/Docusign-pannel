<script setup lang="ts">
import { handleCommonError } from '@/datasource/API/setup';
import { useToast } from 'primevue/usetoast';
import { computed, ref } from 'vue'

const props = defineProps<{
  label: string
  action?: (e: MouseEvent) => any,
  disabled?: boolean
  loading?: boolean
}>()

const innerLoading = ref(false)
const generalLoading = computed(() => props.loading || innerLoading.value)
const toast = useToast()

const emit = defineEmits(['click', 'prev', 'next'])

function handleClick(e: MouseEvent) {
  if (props.disabled) return
  if (generalLoading.value) return
  emit('click', e)

  if (props.action != null) {
    const result = props.action(e)
    if (result instanceof Promise) {
      innerLoading.value = true
      result
        .catch((err) => handleCommonError(err, toast))
        .finally(() => {
          innerLoading.value = false
        })
    }
  }
}

</script>

<template>
  <Button :label="label" @click="handleClick" :loading="generalLoading"></Button>
</template>