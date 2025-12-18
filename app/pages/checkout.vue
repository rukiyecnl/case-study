<script setup lang="ts">
    import CartSummaryVue from '~/components/ui/checkoutPage/CartSummary.vue';
    import PaymentDetailsVue from '~/components/ui/checkoutPage/PaymentDetails.vue';
    import ShippingDetailsVue from '~/components/ui/checkoutPage/ShippingDetails.vue';

</script>

<template>
    <div class="bg-[#ECECEC4D]">
        <div class="container py-[16px]">
            <div class="font-[400] text-[12px] text-[#8493A8] mb-[16px] flex gap-3">
                <span>Homepage</span> > 
                <span>Shopping Cart</span> > 
                <span class="text-[#0099A8]">Checkout</span>
            </div>
            <p class="font-[500] text-[24px]">Checkout</p>
        </div>
    </div>
    <div class="container lg:hidden">
        <CartSummaryVue />
        <ShippingDetailsVue />
        <PaymentDetailsVue />
    </div>
    <div class="container hidden lg:flex gap-[40px]">
        <div class="flex-[2]">
            <ShippingDetailsVue />
            <PaymentDetailsVue />
        </div>
        <div class="flex-[1]">
            <CartSummaryVue />
        </div>
    </div>
</template>