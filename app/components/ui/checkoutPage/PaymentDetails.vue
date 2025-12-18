<script setup lang="ts">
    import dollar from '~/assets/images/dolllar.svg'
    import cardContainer from '~/assets/images/cardContainer.svg'
    import TitleWithIconVue from './TitleWithIcon.vue';
    import ButtonVue from '../Button.vue';

    const isValid = ref(false)

</script>

<template>
    <div class="bg-[#ECECEC4D] lg:bg-white">
        <TitleWithIconVue :icon="dollar">Payment Details</TitleWithIconVue>
        <div class="flex flex-col lg:flex-row-reverse justify-between bg-white py-4 gap-[40px]">
            <img 
                :src="cardContainer" 
                class="w-full lg:w-[280px] flex-[1]"
                alt="cardContainer"
            >
            <form class="bg-white flex-[1]">
    
                <div class="form-div pt-[16px]">
                    <label for="cardHolderName">Card Holder Name *</label>
                    <input
                        id="cardHolderName"
                        class="form-input"
                        type="text"
                        name="cardHolderName"
                        required
                    />
                    <p class="form-detail">Full name on card</p>
                </div>
    
                <div class="form-div">
                    <label for="cardNumber">Card Number *</label>
                    <input
                        id="cardNumber"
                        class="form-input"
                        type="number"
                        name="cardNumber"
                        required
                    />
                    <p class="form-detail">Enter digits without spaces</p>
                </div>
    
                <div class="flex justify-between ">
                    <div class="form-div">
                        <label for="expiryDate">Expiry Date *</label>
                        <input
                            id="expiryDate"
                            class="form-input w-[150px]"
                            type="number"
                            name="expiryDate"
                            placeholder="MM / YY"
                            required
                        />
                    </div>
                            
                    <div class="form-div">
                        <label for="CVV">CVV *</label>
                        <input
                            id="CVV"
                            class="form-input w-[150px]"
                            type="number"
                            name="CVV"
                            required
                        />
                    </div>
    
                </div>
    
                <p class="form-detail mb-4">* Required fields</p>
    
                <ButtonVue :disabled="!isValid" size="sm" color="pink" class="w-full disabled:opacity-40">PAY NOW</ButtonVue>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .form-div{
        @apply flex flex-col  gap-2 font-[400] text-[14px] mb-[16px]
    }
    .form-input {
        @apply px-[16px] py-[12px] border-[1px] border-[#ECECEC] rounded-[4px]
    }
    .form-detail{
        @apply text-[#2A2A4899] text-[12px] font-[400]
    }
</style>