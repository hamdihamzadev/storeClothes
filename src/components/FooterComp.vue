<template>
    <footer>
        <b-container>
            <div class="position-relative">
                <div id="newsletter-component" class="position-absolute end-0 start-0">
                    <NewSletter />
                </div>
                <b-row class="g-4" id="footer-links">
                    <b-col  cols="12" md="3" >
                        <div id="footer-brand" class="d-flex flex-column">
                            <router-link to="/">
                                <b-img id="logo" :src="require('@/assets/img/logo.png')" alt="logo"></b-img>
                            </router-link>
                            <p id="description">We have clothes that suits your style and which you’re proud to wear.
                                From
                                women to men.</p>
                            <div id="social-media" class="d-flex align-items-center">
                                <a href="#" id="media-item" class="d-flex align-items-center justify-content-center">
                                    <b-icon icon="twitter"></b-icon>
                                </a>
                                <a href="#" id="media-item" class="d-flex align-items-center justify-content-center">
                                    <b-icon icon="facebook"></b-icon>
                                </a>
                                <a href="#" id="media-item" class="d-flex align-items-center justify-content-center">
                                    <b-icon icon="instagram"></b-icon>
                                </a>
                                <a href="#" id="media-item" class="d-flex align-items-center justify-content-center">
                                    <b-icon icon="github"></b-icon>
                                </a>
                            </div>
                        </div>
                    </b-col>
                    <b-col  cols="6" md="3" >
                        <div id="pages">
                            <p id="title-page">COMPANY</p>
                            <div class="d-flex flex-column" id="grp-links">
                                <router-link to="/about" id="link" class="text-decoration-none">About</router-link>
                                <router-link to="/features" id="link" class="text-decoration-none">Features
                                </router-link>
                                <router-link to="/works" id="link" class="text-decoration-none">Works</router-link>
                                <router-link to="/career" id="link" class="text-decoration-none">Career</router-link>
                            </div>
                        </div>
                    </b-col>
                    <b-col  cols="6" md="3" >
                        <div id="pages">
                            <p id="title-page">HELP</p>
                            <div class="d-flex flex-column" id="grp-links">
                                <router-link to="/customer-support" id="link" class="text-decoration-none">Customer
                                    Support
                                </router-link>
                                <router-link to="/delivery-details" id="link" class="text-decoration-none">Delivery
                                    Details
                                </router-link>
                                <router-link to="/terms-conditions" id="link" class="text-decoration-none">Terms &
                                    Conditions</router-link>
                                <router-link to="/privacy-policy" id="link" class="text-decoration-none">Privacy Policy
                                </router-link>
                            </div>
                        </div>
                    </b-col>
                    <b-col  cols="6" md="3" >
                        <div id="pages">
                            <p id="title-page">FAQ</p>
                            <div class="d-flex flex-column" id="grp-links">
                                <router-link to="/account" id="link" class="text-decoration-none">Account</router-link>
                                <router-link to="/manage-deliveries" id="link" class="text-decoration-none">Manage
                                    Deliveries</router-link>
                                <router-link to="/orders" id="link" class="text-decoration-none">Orders</router-link>
                                <router-link to="/payments" id="link" class="text-decoration-none">Payments
                                </router-link>
                            </div>
                        </div>
                    </b-col>
                </b-row>

                <hr>
                <div id="legal-info" class="d-flex justify-content-between align-items-center flex-column flex-md-row">
                    <p id="copyright">© 2000-2021, All rights reserved</p>
                    <div id="payment">
                        <b-img :src="require('@/assets/img/payment/visa.svg')" alt="payment"></b-img>
                        <b-img :src="require('@/assets/img/payment/paypal.svg')" alt="payment"></b-img>
                        <b-img :src="require('@/assets/img/payment/mastercard.svg')" alt="payment"></b-img>
                        <b-img :src="require('@/assets/img/payment/googlepay.svg')" alt="payment"></b-img>
                        <b-img :src="require('@/assets/img/payment/applepay.svg')" alt="payment"></b-img>
                    </div>
                </div>
            </div>
        </b-container>
    </footer>
</template>

<script>
    import NewSletter from './NewSletter.vue';

    export default {
        name: 'FooterComp',
        components: {
            NewSletter
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        background-color: $secondary-color;
        margin-top: calc(96px + 90px);

        #newsletter-component{
            top: -90px;
        }


        #footer-links {
            margin-block: 40px;
            padding-top: 130px;

            #footer-brand {
                gap: 24px;

                #logo {
                    height: 24px;
                    width: 167px;
                }

                #description {
                    color: $color-body;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    width: 75%;
                }

                #social-media {
                    gap: 12px;

                    #media-item {
                        height: 28px;
                        width: 28px;
                        background-color: $color-white;
                        color: $primary-color;
                        border-radius: 50px;
                        border: 1px solid $color-body;
                        font-size: 12px;
                        transition: all 0.3s;

                        &:hover {
                            background-color: $primary-color;
                            color: $color-white;
                        }
                    }
                }
            }

            #pages {
                display: flex;
                flex-direction: column;
                gap: 24px;

                #title-page {
                    color: $primary-color;
                    font-size: 16px;
                    font-weight: 600;
                }

                #grp-links {
                    gap: 12px;

                    #link {
                        color: $color-body;
                        font-size: 16px;
                    }
                }


            }
        }

        #legal-info {
            #copyright {
                color: $color-body;
            }
        }

    }
    // extra sm - sm
    @media (max-width:767px) {
        footer {
        background-color: $secondary-color;
        margin-top: calc(96px + 160px);

        #newsletter-component{
            top: -140px;
        }


        #footer-links {
            margin-block: 40px;
            padding-top: 180px;

            #footer-brand {
                gap: 24px;

                #logo {
                    height: 24px;
                    width: 167px;
                }

                #description {
                    color: $color-body;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    width: 75%;
                }

                #social-media {
                    gap: 12px;

                    #media-item {
                        height: 28px;
                        width: 28px;
                        background-color: $color-white;
                        color: $primary-color;
                        border-radius: 50px;
                        border: 1px solid $color-body;
                        font-size: 12px;
                        transition: all 0.3s;

                        &:hover {
                            background-color: $primary-color;
                            color: $color-white;
                        }
                    }
                }
            }

            #pages {
                display: flex;
                flex-direction: column;
                gap: 24px;

                #title-page {
                    color: $primary-color;
                    font-size: 16px;
                    font-weight: 600;
                }

                #grp-links {
                    gap: 12px;

                    #link {
                        color: $color-body;
                        font-size: 16px;
                    }
                }


            }
        }

        #legal-info {
            #copyright {
                color: $color-body;
            }
        }

    }
    }

</style>