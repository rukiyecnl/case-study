<script setup lang="ts">
    import leftArrow from '~/assets/images/leftArrow.svg'
    import rightArrow from '~/assets/images/rightArrow.svg'
    import profile from '~/assets/images/profile.svg'
    import helpCenter from '~/assets/images/helpCenter.svg'
    import orderHistory from '~/assets/images/orderHistroy.svg'
    import logout from '~/assets/images/logout.svg'
    import ModalButtonsVue from './ModalButtons.vue'
    const { categories } = useCategoriesData()

    const props = defineProps({
    isOpen: Boolean
    })

    const emit = defineEmits(['close'])

    const closeMenu = () => {
    emit('close')
    }

    const activeCategory = ref<any | null>(null)

    const toggleCategory = (category: any) => {
        if (activeCategory.value && activeCategory.value.id === category.id) {
            activeCategory.value = null
        } else {
            activeCategory.value = category
        }

    }
</script>

<template>
  <div
    v-if="isOpen"
    class="md:hidden fixed inset-0 z-50 bg-white flex flex-col"
  >
    <!-- menu -->
    <div
      class="flex justify-between items-center bg-[#F2F0FF] p-4"
    >
      <button
        @click="closeMenu"
        class="text-2xl font-bold"
      >
        ×
      </button>

      <h2 class="text-lg font-semibold">Menu</h2>
    </div>

    <!-- content -->
    <div class="flex-1 overflow-y-auto">

      <div v-if="!activeCategory">
        <div>
            <div
              v-for="categorie in categories"
              :key="categorie.id"
              class="border-b last:border-b-0 p-4 flex justify-between items-center cursor-pointer"
              @click="toggleCategory(categorie)"
            >
                <img :src="leftArrow" alt="">
                <h2 class="text-[16px] font-[500] first-letter:uppercase lowercase">
                    {{ categorie.title }}
                </h2>
    
            </div>
        </div>
        <div class="container flex justify-end flex-col bg-[#ECECEC4D] pt-4">
            <ModalButtonsVue :icon="profile">My Profile</ModalButtonsVue>
            <ModalButtonsVue :icon="orderHistory">Order History</ModalButtonsVue>
            <ModalButtonsVue :icon="helpCenter">Help Center</ModalButtonsVue>
            <ModalButtonsVue :icon="logout">Log Out</ModalButtonsVue>
        </div>
      </div>

      <!-- details -->
      <div v-else class="p-4">
        <div class="flex justify-end items-center gap-4 text-[16px] font-[500] p-2 cursor-pointer rounded-md bg-[#ECECEC4D]">
            <h2
              class="first-letter:uppercase lowercase"
              @click="toggleCategory(activeCategory)"
            >
              {{ activeCategory.title }}
            </h2>
            <img :src="rightArrow" alt="">
        </div>

        <div class="border-b-[1px] border-[#ECECEC] mt-[16px]">
          <NuxtLink
            v-for="(subtitle, index) in activeCategory.subtitles"
            :key="index"
            :to="subtitle.link"
            class="block text-[16px] text-[#485363] text-end font-[400] pb-[8px]"
          >
            {{ subtitle.text }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

