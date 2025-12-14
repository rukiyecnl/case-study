<script setup>
    const props = defineProps({
        isOpen: Boolean
    })

    const emit = defineEmits(['close'])

    const closeMenu = () => {
        emit('close')
    }
</script>

<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 bg-white flex flex-col justify-start items-start p-8 transition-opacity duration-300"
  >
    <!-- Üst bölüm: Çarpı ve Başlık -->
    <div class="w-full flex justify-between items-center mb-16">
      <button @click="closeMenu" class="text-gray-800 text-2xl font-bold">×</button>
      <h2 class="text-2xl font-bold">Menu</h2>
    </div>

    <!-- Menü seçenekleri -->
    <ul class="flex flex-col space-y-6 text-xl font-medium">
      <li><a href="#" @click="closeMenu">Anasayfa</a></li>
      <li><a href="#" @click="closeMenu">Hakkımızda</a></li>
      <li><a href="#" @click="closeMenu">Hizmetler</a></li>
      <li><a href="#" @click="closeMenu">İletişim</a></li>
    </ul>
  </div>
</template>
