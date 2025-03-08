<template>
    <section id="DressStyle">
        <b-container>
            <div id="dressStyleContent">
                <h1 id="title">BROWSE BY dress STYLE</h1>
                <b-row>
                    <b-col>
                        <div id="category-style">
                            <h4>Casual</h4>
                            <b-img :src="require('@/assets/img/ctg-style1.png')" alt='img-style'></b-img>
                        </div>
                    </b-col>
                    <b-col>
                        <div id="category-style">
                            <h4>Formal</h4>
                            <b-img :src="require('@/assets/img/ctg-style2.png')" alt='img-style'></b-img>
                        </div>
                    </b-col>
                    <b-col>
                        <div id="category-style">
                            <h4>Sport</h4>
                            <b-img :src="require('@/assets/img/ctg-style3.png')" alt='img-style'></b-img>
                        </div>
                    </b-col>
                    <b-col>
                        <div id="category-style">
                            <h4>Class</h4>
                            <b-img :src="require('@/assets/img/ctg-style4.png')" alt='img-style'></b-img>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'DressStyle',
    }
</script>

<style lang="scss" scoped>

</style>