<script setup>
    import ContactUsVue from '../ui/ContactUs.vue';
    import footerPhone from '~/assets/images/footerPhone.png'
    import location from '~/assets/images/location.png'
    import mail from '~/assets/images/mail.png'
    const { footerInfos } = useFooterData();
</script>

<template>
    <footer class="container">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div 
                v-for="info in footerInfos"
                class="text-black"
            >
                <h2>{{ info.title.toUpperCase() }}</h2>
                <div v-for="subtitle in info.subtitles">
                    <a href="#">{{ subtitle }}</a>
                </div>
            </div>
            <div>
                <h2>CONTACT US</h2>
                <div>
                    <ContactUsVue :icon="location">Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768 Ümraniye/İstanbul</ContactUsVue>
                    <ContactUsVue :icon="footerPhone">0850 755 9987</ContactUsVue>
                    <ContactUsVue :icon="mail">info@watsons.com.tr</ContactUsVue>
                </div>
            </div>
        </div>
    </footer>
</template>
