<template>
    <section id="DressStyle">
        <b-container>
            <div id="dressStyleContent" class="d-flex flex-column ">
                <h1 id="title">BROWSE BY dress STYLE</h1>

                <b-row class="g-4"  >
                    <b-col lg="5">
                        <div id="category-style">
                            <h4 id="name-style">Casual</h4>
                            <b-img :src="require('@/assets/img/ctg-style1.png')" alt='img-style'></b-img>
                        </div>
                    </b-col>
                    <b-col lg="7">
                        <div id="category-style">
                            <h4 id="name-style">Formal</h4>
                            <b-img :src="require('@/assets/img/ctg-style2.png')" alt='img-style'></b-img>
                        </div>
                    </b-col>
                    <b-col lg="7">
                        <div id="category-style">
                            <h4 id="name-style">Sport</h4>
                            <b-img :src="require('@/assets/img/ctg-style3.png')" alt='img-style'></b-img>
                        </div>
                    </b-col>
                    <b-col lg="5">
                        <div id="category-style">
                            <h4 id="name-style">Class</h4>
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
    #DressStyle {
        margin-bottom: 96px;

        #dressStyleContent {
            background-color: $secondary-color;
            border-radius: 32px;
            gap: 64px;
            padding: 80px 104px;

            #title {
                color: $primary-color;
                font-size: 48px;
                font-weight: bold;
                text-transform: uppercase;
                text-align: center;
            }

            #category-style {
                background-color: $color-white;
                border-radius: 24px;
                padding: 24px 24px 0px;
                display: flex;
                justify-content: space-between;
                height: 300px;

                #name-style {
                    color: $primary-color;


                }

                b-img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>