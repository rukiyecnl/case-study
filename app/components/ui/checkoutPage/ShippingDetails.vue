<script setup>
    import orderHistory from '~/assets/images/orderHistroy.svg'
    import { ref, watch } from 'vue'
    import TitleWithIconVue from './TitleWithIcon.vue'

    const city = ref('')
    const district = ref('')

    watch(city, () => {
        district.value = ""
    })
</script>

<template>
    <div class="bg-[#ECECEC4D] lg:bg-white">
        <TitleWithIconVue :icon="orderHistory">Shipping Details</TitleWithIconVue>
        <form class="container lg:container-none bg-white">

            <div class="lg:flex justify-between items-center gap-[40px]">
                <div class="form-div pt-[16px] lg:pt-[0px] flex-[1]">
                    <label for="firstname">First Name *</label>
                    <input
                        id="firstname"
                        class="form-input"
                        type="text"
                        name="firstname"
                        autocomplete="given-name"
                        required
                    />
                </div>
    
                <div class="form-div flex-[1]">
                    <label for="lastname">Last Name *</label>
                    <input
                        id="lastname"
                        class="form-input"
                        type="text"
                        name="lastname"
                        autocomplete="family-name"
                        required
                    />
                </div>
            </div>

            <div class="lg:flex justify-between items-center gap-[40px]">
                <div class="form-div flex-[1]">
                    <label for="email">Email Address *</label>
                    <input
                        id="email"
                        class="form-input"
                        type="email"
                        name="email"
                        autocomplete="email"
                        required
                    />
                </div>
    
                <div class="form-div flex-[1]">
                    <label for="phone">Phone Number *</label>
                    <input
                        id="phone"
                        class="form-input"
                        type="number"
                        name="phone"
                        autocomplete="tel"
                        placeholder="+90 (5 _ _ ) _ _ _  _ _  _ _"
                        required
                    />
                </div>
            </div>

            <div class="lg:flex justify-between items-center gap-[40px]">
                <div class="form-div flex-[1]">
                    <label for="city">City *</label>
                    <select
                        id="city"
                        class="form-input"
                        name="city"
                        v-model="city"
                        autocomplete="address-level2"
                        required
                    >
                        <option value="" disabled>Select city</option>
                        <option value="Istanbul">Istanbul</option>
                        <option value="Ankara">Ankara</option>
                        <option value="Ordu">Ordu</option>
                    </select>
                </div>
    
                <div class="form-div flex-[1]">
                    <label 
                        for="district" 
                        :class="{ 'opacity-50 cursor-not-allowed': !city }"
                    >
                        District *
                    </label>
                    <select
                        id="district"
                        class="form-input"
                        name="district"
                        v-model="district"
                        :disabled="!city"
                        :class="{ 'opacity-50 cursor-not-allowed': !city }"
                        autocomplete="address-level3"
                        required
                    >
                        <option value="" disabled>
                        {{ city ? 'Select district' : 'Select city first' }}
                        </option>
    
                        <option v-if="city === 'Istanbul'" value="Kadikoy">Kadıköy</option>
                        <option v-if="city === 'Istanbul'" value="Besiktas">Beşiktaş</option>
    
                        <option v-if="city === 'Ankara'" value="Cankaya">Çankaya</option>
                        <option v-if="city === 'Ankara'" value="Kecioren">Keçiören</option>
    
                        <option v-if="city === 'Ordu'" value="Altinordu">Altınordu</option>
                    </select>
                </div>
            </div>

            <div class="form-div" >
                <label for="address">Address *</label>
                <textarea
                    id="address"
                    class="form-input h-[120px]"
                    name="address"
                    autocomplete="street-address"
                    placeholder="Enter neighborhood, street, avenue and other information"
                    required
                ></textarea>
            </div>

        </form>

    </div>
</template>

<style scoped>
    .form-div{
        @apply flex flex-col  gap-2 font-[400] text-[14px] mb-[16px]
    }
    .form-input {
        @apply px-[16px] py-[12px] border-[1px] border-[#ECECEC] rounded-[4px]
    }
</style>