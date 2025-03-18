<template>
    <section id="banner">
        <b-container>
            <b-row id="banner-row" class="d-flex justify-content-between ">
                <b-col xl="6" class="d-flex align-items-center">
                    <div id="banner-content" class="d-flex flex-column">
                        <div id="banner-text" class="d-flex flex-column">
                            <h1 id="title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                            <p id="subtitle">Browse through our diverse range of meticulously crafted garments, designed
                                to
                                bring out your individuality and cater to your sense of style.</p>
                            <b-button class="d-flex align-items-center justify-content-center" id="call-to-action">Shop
                                Now</b-button>
                        </div>

                        <b-row id="banner-stats" class="g-4 justify-content-center justify-content-md-between">
                            <b-col cols="4" md="auto" class="w-auto">
                                <div id="statis-item" class="d-flex flex-column ">
                                    <h1 id="number">200+</h1>
                                    <p id="name-statis-item">International Brands</p>
                                </div>
                            </b-col>

                            <b-col cols="4" md="auto" class="d-flex justify-content-center w-auto">
                                <div class="vr h-100"></div>
                            </b-col>

                            <b-col cols="4" md="auto" class="w-auto">
                                <div id="statis-item" class="d-flex flex-column  ">
                                    <h1 id="number">2000+</h1>
                                    <p id="name-statis-item">High-Quality Products</p>
                                </div>
                            </b-col>

                            <b-col md="auto" class="d-none d-md-block w-auto">
                                <div class="vr h-100 "></div>
                            </b-col>

                            <b-col cols="12" md="auto" class="d-flex justify-content-center w-auto">
                                <div id="statis-item" class="d-flex flex-column  ">
                                    <h1 id="number">30,000+</h1>
                                    <p id="name-statis-item">Happy Customers</p>
                                </div>
                            </b-col>
                        </b-row>

                    </div>
                </b-col>
                <b-col xl="5" id="col-img">
                    <div id="banner-imgs" class="d-flex justify-content-center" >
                        <div class="d-flex align-items-center" >
                            <b-img id="star-left"  :src="require('@/assets/img/star-banner.svg')">
                            </b-img>
                        </div>
                        <div>
                            <b-img class="h-auto" id="img-model" :src="require('@/assets/img/img-banner.png')">
                            </b-img>
                        </div>
                        <div>
                            <b-img id="star-right"  :src="require('@/assets/img/star-banner.svg')">
                            </b-img>
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
    // lg - xl - xxl
    #banner {
        background-color: $secondary-color;

        #banner-content {
            gap: 48px;
            padding-block: 40px;

            #banner-text {
                gap: 24px;

                #title {
                    color: $primary-color;
                    font-size: 64px;
                    font-weight: bold;
                    line-height: 1.2;
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

            #banner-stats {

                #statis-item {
                    gap: -2px;
                    width: fit-content;

                    #number {
                        font-size: 40px;
                        font-weight: bold;
                        width: fit-content;
                    }

                    #name-statis-item {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 22px;
                        color: $color-body;
                        width: fit-content;
                    }
                }
            }
        }

        #col-img {
            padding-top: 40px;

            #banner-imgs {

                #star-left {
                    width: 56px;
                    left: -56px;
                    top: 50%;
                }


                #star-right {
                    width: 100px;
                    right: -100px;
                }

            }
        }

    }

    // md
    @media (min-width: 768px) and (max-width: 991.98px) {

        #banner-row {
            gap: 54px;
        }

        #banner {
            background-color: $secondary-color;


            #banner-content {
                gap: 48px;
                padding-bottom: 0px;
             

                #banner-text {
                    gap: 24px;

                    #title {
                        color: $primary-color;
                        font-size: 48px;
                        font-weight: bold;
                        line-height: 1.25;
                    }

                    #subtitle {
                        line-height: 1.5;
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

                #banner-stats {

                    #statis-item {
                        gap: -2px;

                        #number {
                            font-size: 40px;
                            font-weight: bold;
                            width: fit-content;
                        }

                        #name-statis-item {
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 22px;
                            color: $color-body;
                            width: fit-content;
                        }
                    }
                }
            }


            #col-img {
                padding-top:0px;

                #banner-imgs {

                    #star-left {
                        width: 44px;
                        left: -44px;
                        top: 50%;
                    }

                    #star-right {
                        width: 76px;
                        right: -76px;
                    }

                }
            }
        }
    }

    // extra sm - sm
    @media (max-width:768px) {

        #banner-row {
            gap: 28px;
        }

        #banner {
            background-color: $secondary-color;

            #banner-content {
                gap: 48px;
                padding-bottom: 0px;


                #banner-text {
                    gap: 16px;

                    #title {
                        font-size: 32px;
                        ;
                        line-height: 1.3;
                    }

                    #subtitle {
                        font-size: 14px;
                        line-height: 1.6;
                    }
                }

                #banner-stats {


                    #statis-item {
                        gap: -2px;

                        #number {
                            font-size: 28px;
                            font-weight: bold;
                        }

                        #name-statis-item {
                            font-size: 14px;
                            line-height: 1.6;
                        }
                    }
                }
            }


            #col-img {
                padding-top: 0px;

                #banner-imgs {

                    #img-model{
                        width: 250px;
                    }

                    #star-left {
                        width: 44px;
                        left: -44px;
                        top: 50%;
                    }

                    #star-right {
                        width: 76px;
                        right: -76px;

                    }

                }
            }
        }
    }
</style>