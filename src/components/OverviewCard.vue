<script setup lang="ts">
defineProps<{
    text: string
    count: string
    className?: string
}>()
</script>

<template>
    <div class="w-[9.6875rem] rounded-[0.9375rem] py-5 pl-6 shadow-2xl" :class="className">
        <p class="text-bs font-bold text-gray">{{ text }}</p>
        <p class="text-hl font-extrabold text-dark-blue">{{ count }}</p>
    </div>
</template>
