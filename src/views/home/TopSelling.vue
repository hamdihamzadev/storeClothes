<template>
    <section id="topSelling" >
        <b-container>
            <h2 id="title" >Top Selling</h2>
            <div id="products">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <b-button id="btn-all" >View All</b-button>
        </b-container>
    </section>
</template>


<script>
import ProductCard from '@/components/ProductCard.vue'
export default{
    name:'TopSelling',
    components:{
        ProductCard,
    }
}
</script>


<style lang="scss" scoped>

</style>