<template>
    <section id="topSelling" >
        <b-container>
            <div class="text-center" >
                <h2 id="title" >Top Selling</h2>
                <b-row id="products"  class="gx-4" >
                    <b-col  
                        v-for="item in products" 
                        :key="item.id"
                        cols="6"
                        md="6"
                        lg="3"                   
                        >
                        <ProductCard :name="item.name" :price-after="item.priceAfter" :price-before="item.priceBefore"
                            :price-discount="priceDiscount" :rating="item.rating" />
                    </b-col>
                </b-row>
            <b-button id="btn-all" >View All</b-button>
            </div>
        </b-container>
    </section>
</template>


<script>
import ProductCard from '@/components/ProductCard.vue'
export default{
    name:'TopSelling',
    components:{
        ProductCard,
    },
    data() {
            return {
                products: [{
                        img: require('@/assets/img/products/prd1.png'),
                        name: 'T-shirt with tape details',
                        priceAfter: 120,
                        priceBefore: 0,
                        priceDiscount: 0,
                        rating: 4.5
                    },
                    {
                        img: require('@/assets/img/products/prd1.png'),
                        name: 'Skinny fit jeans ',
                        priceAfter: 240,
                        priceBefore: 260,
                        priceDiscount: 20,
                        rating: 4.5
                    },
                    {
                        img: require('@/assets/img/products/prd1.png'),
                        name: 'Checkered shirt',
                        priceAfter: 180,
                        priceBefore: 0,
                        priceDiscount: 0,
                        rating: 4.5
                    },
                    {
                        img: require('@/assets/img/products/prd1.png'),
                        name: 'Sleeve striped T-sirt',
                        priceAfter: 130,
                        priceBefore: 160,
                        priceDiscount: 30,
                        rating: 4.5
                    },
                ]
            }
        }
}
</script>


<style lang="scss" scoped>
#topSelling{
    margin-bottom: 96px;
    #title{
        color:$primary-color;
        font-size: 48px;
        font-weight: bold;
        margin-bottom:55px;
    }

    #btn-all{
            background-color:transparent;
            height:52px;
            width:218px;
            color:$primary-color;
            border: 1px solid $ui-line-color;
            border-radius:50px;
            margin-top:36px;
        }
}
</style>