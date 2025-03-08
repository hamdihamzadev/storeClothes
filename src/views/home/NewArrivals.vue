<template>
    <section id="newArrivals" >
        <b-container>
            <h2 id="title" class="text-center" >New Arrivals</h2>
            <b-row id="products" class="flex-nowrap" >
                <b-col v-for="item in products" :key="item.id" lg="3" >
                    <ProductCard/>
                </b-col>
            </b-row>

            <b-button id="btn-all" >View All</b-button>
        </b-container>
    </section>
</template>


<script>
import ProductCard from '@/components/ProductCard.vue'
export default{
    name:'NewArrivals',
    components:{
        ProductCard,
    },

    data(){
        return{
            products:[
                {img:require('@/assets/img/products/prd1.png'), name:'T-shirt with tape details', priceAfter:120, priceBefore:0, priceDiscount:0, rating:4.5},
                {img:require('@/assets/img/products/prd1.png'), name:'Skinny fit jeans ', priceAfter:240, priceBefore:260, priceDiscount:20, rating:4.5},
                {img:require('@/assets/img/products/prd1.png'), name:'Checkered shirt', priceAfter:180, priceBefore:0, priceDiscount:0, rating:4.5},
                {img:require('@/assets/img/products/prd1.png'), name:'Sleeve striped T-sirt', priceAfter:130, priceBefore:160, priceDiscount:30, rating:4.5},
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
#newArrivals{
    #title{
        color: $primary-color;
        font-size: 48px;
        font-weight: bold;
    }

}
</style>