<script setup>
    import BasketCardVue from './BasketCard.vue';
    import { formattedValues } from '~/utils/format'
    const { basket } = useBasket()

    const subTotal = computed(() => {
        return basket.value.reduce((sum, item) => {
            return sum + item.price
        }, 0)
    })

    const shipping = ref(10.50)

    const total = computed(() => {
        return subTotal.value + shipping.value
    })

</script>
<template>
    <div >
        <h2 class="font-[500] text-[20px] my-[20px]">Shopping cart summary</h2>
        <div class="border-[1px] border-[#ECECEC80] rounded-[6px] shadow-md p-[24px]">
            <BasketCardVue />
            <input 
                type="text" 
                placeholder="Discount Code"
                class="w-full border-[1px] rounded-[4px] py-[12px] px-[16px] my-4"
            >
            <div>
                <div class="flex justify-between items-center text-[#485363] text-[16px] font-[400] mb-4">
                    <p class="">Subtotal</p>
                    <p>
                        <span>{{ formattedValues(subTotal) }}</span> TL
                    </p>
                </div>
                <div class="flex justify-between items-center text-[#485363] text-[16px] font-[400] mb-4">
                    <p>Shipping</p>
                    <p>
                        <span>{{ formattedValues(shipping) }}</span> TL
                    </p>
                </div>
            </div>
            <div class="flex justify-between items-center text-[20px] font-[700] border-t-[1px] border-[#ECECEC] py-4">
                <p>Total</p>
                <p>
                    <span>{{ formattedValues(total) }}</span> TL
                </p>
            </div>
        </div>
    </div>
</template>