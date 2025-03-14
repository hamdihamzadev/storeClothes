<template>
    <section id="home" >
            <BannerCompo/>
            <BrandsHome/>
            <NewArrivals/>
            <b-container>
                <div id="br"></div>
            </b-container>
            <TopSelling/>
            <DressStyle/>
            <TestimonialsHome/>
    </section>
</template>

<script>
import BannerCompo from "./BannerCompo.vue"
import BrandsHome from "./BrandsHome.vue"
import NewArrivals from "./NewArrivals.vue"
import TopSelling from "./TopSelling.vue"
import DressStyle from "./DressStyle.vue"
import TestimonialsHome from "./TestimonialsHome.vue"

export default{
    name:"HomeView",
    components:{
        BannerCompo,
        BrandsHome,
        NewArrivals,
        TopSelling,
        DressStyle,
        TestimonialsHome,
        
    }
}
</script>

<style lang="scss" scoped>
#home{
    #br{
        height: 1px;
        width: 100%;
        background-color: $ui-line-color;
        margin-block: 96px;
    }
}
</style>