<script setup lang="ts">
import ButtonBase from '@/ButtonBase.vue'
</script>

<template>
  <header>
    <h1 class="text-3xl font-bold text-blue underline">Hello world!</h1>
    <ButtonBase text="Hey there" />
    <ButtonBase text="Hey there" type="secondary" />
    <ButtonBase text="Hey there" type="tertiary" />
  </header>
</template>
