<script setup>
    const {categories} = useCategoriesData();
</script>

<template>
    <div class="container sticky hidden md:flex gap-[3px] justify-between">
        <a
            href="#"
           v-for="category in categories"
           class="font-[700] xl:text-[14px] md:text-[12px] text-[#2A2A48] xl:p-[16px] md:p-[5px] cursor-pointer"
        >
            {{ category.toUpperCase() }}
        </a>
    </div>
</template>