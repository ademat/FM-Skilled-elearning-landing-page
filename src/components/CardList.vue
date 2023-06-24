<script setup lang="ts">
import CourseCard from './CourseCard.vue'

type Course = {
    name: string
    description: string
}

const courses: Array<Course> = [
    {
        name: 'Animation',
        description:
            'Learn the latest animation techniques to create stunning motion design and captivate your audience.'
    },
    {
        name: 'Design',
        description:
            'Create beautiful, usable interfaces to help shape the future of how the web looks.'
    },
    {
        name: 'Photography',
        description:
            'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.'
    },
    {
        name: 'Crypto',
        description:
            'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.'
    },
    {
        name: 'Business',
        description:
            'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.'
    }
]
</script>

<template>
    <div
        class="flex flex-wrap gap-x-[1.875rem] gap-y-[3.75rem] bg-gradient-to-b from-white to-light-blue px-40 pb-[8.75rem]"
    >
        <div
            class="bg-gradient-orange h-[20.125rem] w-[21.875rem] rounded-[0.9375rem] px-8 pt-16 text-hm font-extrabold text-white"
        >
            Check out our most popular courses!
        </div>
        <CourseCard
            v-for="course in courses"
            :key="course.name"
            :title="course.name"
            :description="course.description"
            :icon="course.name.toLocaleLowerCase()"
        />
    </div>
</template>
