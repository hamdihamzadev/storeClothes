<template>
    <section id="banner">
        <b-container>
            <b-row   class="d-flex justify-content-between align-items-center" >
                <b-col lg="6" >
                    <div id="banner-content" class="d-flex flex-column" >
                        <div id="banner-text"  class="d-flex flex-column" >
                        <h1 id="title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p id="subtitle">Browse through our diverse range of meticulously crafted garments, designed to
                            bring out your individuality and cater to your sense of style.</p>
                        <b-button class="d-flex align-items-center justify-content-center" id="call-to-action">Shop Now</b-button>
                    </div>
                    <div id="banner-stats" class="d-flex justify-content-between align-items-center" >
                        <div id="statis-item" class="d-flex flex-column " >
                            <h1 id="number" >200+</h1>
                            <p id="name-statis-item" >International Brands</p>
                        </div>
                        <div class="vr"></div>
                        <div id="statis-item" class="d-flex flex-column " >
                            <h1 id="number" >2000+</h1>
                            <p id="name-statis-item" >High-Quality Products</p>
                        </div>
                        <div class="vr"></div>
                        <div id="statis-item" class="d-flex flex-column " >
                            <h1 id="number" >30,000+</h1>
                            <p id="name-statis-item" >Happy Customers</p>
                        </div>
                    </div>
                    </div>
                </b-col>
                <b-col lg="5" >
                    <div class="d-flex justify-content-between" id="banner-imgs" >
                        <div class="position-relative " >
                            <b-img id="star" class="position-absolute" :src="require('@/assets/img/star-banner.svg')"></b-img>
                        </div>
                        <div>
                            <b-img id="img-model" :src="require('@/assets/img/img-banner.png')"></b-img>
                        </div>
                        <div  >
                            <b-img  :src="require('@/assets/img/star-banner.svg')"></b-img>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'BannerCompo',
    }
</script>

<style lang="scss" scoped>
    #banner {
        background-color: $secondary-color;
        padding-top: 40px;

        #banner-content{
            gap: 48px;

            #banner-text {
            gap: 32px;
            #title {
                color: $primary-color;
                font-size: 64px;
                font-weight: bold;
                line-height: 64%;
            }

            #subtitle {
                color: $color-body;
                font-size: 16px;
                font-weight: 400;
            }

            #call-to-action {
                background-color: $primary-color;
                height: 52px;
                font-size: 16px;
                font-weight: 500;
                padding: 16px 24px;
                width: 210px;
                border-radius: 50px;
            }
        }

        #banner-stats{
            gap: 32px;
            #statis-item{
                gap: -2px;
                #number{
                    font-size: 40px;
                    font-weight: bold;
                }

                #name-statis-item{
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                    color: $color-body;
                }
            }
        }
        }

        #banner-imgs{
            #star{
                top: 50%;
                width: 50px;
            }

            #img-model{
                height: 600px;
            }
        }
    }
</style>