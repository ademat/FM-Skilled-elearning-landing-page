<script setup lang="ts">
import { computed } from 'vue'

const vProps = withDefaults(
  defineProps<{
    text: string
    type?: 'primary' | 'secondary' | 'tertiary'
  }>(),
  {
    type: 'primary'
  }
)

defineEmits<{
  (event: 'click'): void
}>()

const cClass = computed(() => {
  switch (vProps.type) {
    case 'primary':
    default:
      return 'bg-dark-blue hover:bg-blue'
    case 'secondary':
      return 'bg-gradient-orange hover:bg-gradient-orange-light'
    case 'tertiary':
      return 'bg-gradient-blue hover:bg-gradient-blue-light'
  }
})
</script>

<template>
  <button :class="cClass">
    {{ text }}
  </button>
</template>
