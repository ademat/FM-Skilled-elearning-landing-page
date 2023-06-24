<script setup lang="ts">
import TheLogo from './assets/Icons/TheLogo.vue'
import ButtonBase from './components/ButtonBase.vue'
import CardList from './components/CardList.vue'
import OverviewCard from './components/OverviewCard.vue'
</script>

<template>
    <header class="flex items-center justify-between px-[10.3125rem] py-6">
        <TheLogo class-name="fill-dark-blue" />
        <ButtonBase text="Get Started" type="primary" />
    </header>
    <main>
        <div class="mb-52 ml-[10.3125rem] mt-[11.598125rem] flex justify-between gap-28">
            <div class="w-[28.5625rem]">
                <h1 class="mb-[1.8125rem] text-hxl font-extrabold text-dark-blue">
                    Maximize skill, minimize budget
                </h1>
                <p class="mb-10 text-bm font-medium text-gray">
                    Our modern courses across a range of in-demand skills will give you the
                    knowledge you need to live the life you want.
                </p>
                <ButtonBase text="Get Started" type="tertiary" />
            </div>
            <div class="mr-24 flex items-start justify-between gap-52">
                <OverviewCard
                    text="Course hours"
                    count="1,451"
                    class-name="w-[12.4375rem] self-end"
                />
                <OverviewCard text="Members" count="29k" />
            </div>
        </div>
        <CardList />
    </main>
    <footer class="flex h-[7.5rem] items-center justify-between bg-dark-blue px-[10.3125rem] py-8">
        <TheLogo />
        <ButtonBase text="Get Started" type="secondary" />
    </footer>
</template>
