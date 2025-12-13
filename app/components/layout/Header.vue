<script setup lang="ts">
    import book from '~/assets/images/book.png'
    import store from '~/assets/images/store.png'
    import phone from '~/assets/images/phone.png'
</script>

<template>
  <header class="firstHeader sticky top-0 z-50 bg-white border-b">
    <div class="flex items-center justify-between px-4 h-14">
        <div class="flex item-center justify-center">
            <button class="flex item-center justify-center">
                <img :src="store" alt="Cart" class="w-[18px] h-[14px]" />
                <p class="stores">Stores</p>
            </button>
            
            <button class="flex item-center justify-center">
                <img :src="book" alt="Logo" class="w-[18px] h-[14px]" />
                <p>Catalog</p>
            </button>
        </div>

        <button >
            <img :src="phone" alt="Menu" class="w-[18px] h-[14px]" />
        </button>
    </div>
  </header>
</template>
