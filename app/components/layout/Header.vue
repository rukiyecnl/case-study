<script setup lang="ts">
    import book from '~/assets/images/book.png'
    import store from '~/assets/images/store.png'
    import phone from '~/assets/images/phone.png'
    import ButtonWithIconVue from '../ui/ButtonWithIcon.vue';
</script>

<template>
  <header class="bg-[#505357] top-0 py-2 z-50  border-b">
    <div class="container flex justify-between px-6">
        <div class="flex justify-center gap-10">
            <ButtonWithIconVue :icon="store" >Stores</ButtonWithIconVue>
            <ButtonWithIconVue :icon="book" >Catalog</ButtonWithIconVue>
        </div>

        <span class="hidden lg:inline text-sm text-[#ECECEC80] text-center">
            Watsons Beauty and Personal Care Awards Nominees!
        </span>

        <div class="flex items-center gap-2">
            <span class="hidden lg:inline text-sm text-white text-center">
                Call us:(+90) 850 123 45 67
            </span>
            <button >
                <img :src="phone" alt="Menu" class="w-[18px] h-[18px]" />
            </button>
        </div>

    </div>
  </header>
</template>
