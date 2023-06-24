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
            return 'bg-dark-blue hover:bg-blue py-[0.875rem] rounded-[1.96875rem]'
        case 'secondary':
            return 'bg-gradient-blue hover:bg-gradient-blue-light py-[0.875rem] rounded-[1.75rem]'
        case 'tertiary':
            return 'bg-gradient-orange hover:bg-gradient-orange-light py-4 rounded-[1.75rem]'
    }
})
</script>

<template>
    <button :class="cClass" class="px-8 text-white">
        {{ text }}
    </button>
</template>
