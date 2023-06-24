<script setup lang="ts">
defineProps<{
    title: string
    description: string
    icon: string
}>()
</script>

<template>
    <div
        class="relative flex h-[20.125rem] w-[21.875rem] flex-col justify-between rounded-[0.9375rem] bg-white px-8 pb-10 pt-16"
    >
        <img :src="`src/assets/Icons/${icon}.svg`" class="absolute -top-7 w-14" />
        <div class="text-hs font-extrabold text-dark-blue">{{ title }}</div>
        <div class="text-bm font-medium text-gray">{{ description }}</div>
        <div class="text-bm font-bold text-dark-pink">Get Started</div>
    </div>
</template>
