<template>
    <section id="brands">
        <b-container class="h-100">
            <div id="brands-items" class="h-100 d-flex justify-content-md-between justify-content-center align-items-center flex-wrap">
                <b-img :src="require('@/assets/img/gucci-logo.png')" alt="Logo" required></b-img>
                <b-img :src="require('@/assets/img/parada-logo.png')" alt="Logo" required></b-img>
                <b-img :src="require('@/assets/img/versace-logo.png')" alt="Logo" required></b-img>
                <b-img :src="require('@/assets/img/zara-logo.png')" alt="Logo" required></b-img>
                <b-img :src="require('@/assets/img/calvin-logo.png')" alt="Logo" required></b-img>
            </div>

        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'BrandsHome',

    }
</script>

<style lang="scss" scoped>
    #brands {
        background-color: black;
        height: 122px;

        #brands-items{
            column-gap: 16px;
        }
    }

    @media (max-width:768px) {

        #brands {
            height: 100px;

        }
    }
</style>