<template>
    <section id="home" >
            <BannerCompo/>
            <BrandsHome/>
            <NewArrivals/>
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