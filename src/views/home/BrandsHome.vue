<template>
    <section id="brands" >
        <b-container class="h-100" >
            <div id="brands-items" class="d-flex align-items-center justify-content-between h-100" >
                <b-img :src="require('@/assets/img/prada.svg')" alt="Logo" required ></b-img>
                <b-img :src="require('@/assets/img/calvinklein.svg')" alt="Logo" required ></b-img>
                <b-img :src="require('@/assets/img/zara.svg')" alt="Logo" required ></b-img>
                <b-img :src="require('@/assets/img/versace.svg')" alt="Logo" required ></b-img>
                <b-img :src="require('@/assets/img/gucci.svg')" alt="Logo" required ></b-img>
            </div>
        </b-container>
    </section>
</template>

<script>
export default{
    name:'BrandsHome',

}
</script>

<style lang="scss" scoped>
#brands{
    background-color:black;
    height: 122px;

}
</style>