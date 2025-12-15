<script setup lang="ts">
    import upArrow from '~/assets/images/up.svg'
    import downArrow from '~/assets/images/down.svg'
    import facebook from '~/assets/images/facebook.png'
    import twitter from '~/assets/images/Twitter.png'
    import instagram from '~/assets/images/instagram.png'
    import youtube from '~/assets/images/youtube.png'
    import pinterest from '~/assets/images/pinterest.png'
    const { footerInfos } = useFooterData()
    const activeId = ref<number | null>(null)

    const setActive = (id: number) => {
        activeId.value = activeId.value === id ? null : id
    }

</script>

<template>
    <footer class="container">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div
                v-for="info in footerInfos"
                :key="info.id"
                class="border-b-[1px] border-[#ECECEC] lg:border-none"
            >
                <!-- mobile menu -->
                <div 
                    class="lg:hidden flex justify-between items-center"
                    @click="setActive(info.id)"
                >
                    <h2
                        class="font-medium text-xs cursor-pointer lg:cursor-default  pb-[12px]"
                    >
                        {{ info.title.toUpperCase() }}
                    </h2>
                    <button>
                        <img v-if="activeId != info.id" :src="upArrow" alt="upArrow">
                        <img v-else-if="activeId == info.id" :src="downArrow" alt="dowArrow">
                    </button>
                </div>

                <!-- desktop menu -->

                <h2
                    class="hidden lg:block font-medium text-xs cursor-pointer  pb-[12px]"
                >
                    {{ info.title.toUpperCase() }}
                </h2>


                <div   
                    class="mt-3 space-y-2 pb-[16px] lg:block"
                    :class="{
                        'hidden': activeId !== info.id,
                        'block': activeId === info.id
                    }"
                >
                    <div
                        v-for="(subtitle, index) in info.subtitles"
                        :key="index"
                        class="flex items-start gap-2 text-sm text-gray-600 "
                    > 
                        <div class="flex gap-3 items-start">
                            <img
                                v-if="subtitle.icon"
                                :src="subtitle.icon"
                                class="w-4 h-4 mt-1"
                                alt=""
                            />
        
                            <NuxtLink
                                v-if="subtitle.link"
                                :to="subtitle.link"
                                class="font-[400] text-[12px] text-[#485363]"
                            >
                                {{ subtitle.text }}
                            </NuxtLink>
        
                            <span v-else>
                                {{ subtitle.text }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:flex lg:flex-row-reverse justify-between items-center">
            <div class="flex gap-[24px] items-center justify-center my-[24px]">
                <a href="#">
                    <img :src="facebook" alt="">
                </a>
                <a href="#">
                    <img :src="twitter" alt="">
                </a>
                <a href="#">
                    <img :src="instagram" alt="">
                </a>
                <a href="#">
                    <img :src="youtube" alt="">
                </a>
                <a href="#">
                    <img :src="pinterest" alt="">
                </a>
            </div>
            <div class="text-center text-[#8493A8] font-[500] text-[10px] mb-[16px] lg:flex gap-2">
                <p class="lg:border-r-[1px] lg:border-[#8493A8] pr-2">© Watsons 2021 all rıghts reserved</p>
                <p>a member of ck hutchıson holdıngs</p>
            </div>
        </div>
    </footer>
</template>
