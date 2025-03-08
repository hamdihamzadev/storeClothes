<template>
    <footer>
        <b-container>
            <NewSletter/>
            <b-row>
                <b-col>
                    <div>
                        <b-img :src="require('@/assets/img/logo.png')" alt="logo" ></b-img>
                        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div id="social-media" >
                            <div id="bg-media" >
                                <b-icon icon="twitter" ></b-icon>
                            </div>
                            <div id="bg-media" >
                                <b-icon icon="facebook" ></b-icon>
                            </div>
                            <div id="bg-media" >
                                <b-icon icon="instagram" ></b-icon>
                            </div>
                            <div id="bg-media" >
                                <b-icon icon="github" ></b-icon>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div id="pages" >
                        <p>COMPANY</p>
                        <div>
                            <router-link to="/about"  id="link">About</router-link>
                            <router-link to="/features"  id="link">Features</router-link>
                            <router-link to="/works"  id="link">Works</router-link>
                            <router-link to="/career"  id="link">Career</router-link>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div id="pages" >
                        <p>HELP</p>
                        <div>
                            <router-link to="/customer-support" id="link">Customer Support</router-link>
                            <router-link to="/delivery-details" id="link">Delivery Details</router-link>
                            <router-link to="/terms-conditions" id="link">Terms & Conditions</router-link>
                            <router-link to="/privacy-policy" id="link">Privacy Policy</router-link>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div id="pages" >
                        <p>FAQ</p>
                        <div>
                            <router-link to="/account" id="link">Account</router-link>
                            <router-link to="/manage-deliveries" id="link">Manage Deliveries</router-link>
                            <router-link to="/orders" id="link">Orders</router-link>
                            <router-link to="/payments" id="link">Payments</router-link>
                        </div>
                    </div>
                </b-col>
            </b-row>

            <hr>

            <div>
                <p id="copyright" >© 2000-2021, All rights reserved</p>
            </div>
            <div id="payment" >
                <b-img :src="require('@/assets/img/payment/visa.svg')" alt="payment" ></b-img>
                <b-img :src="require('@/assets/img/payment/paypal.svg')" alt="payment" ></b-img>
                <b-img :src="require('@/assets/img/payment/mastercard.svg')" alt="payment" ></b-img>
                <b-img :src="require('@/assets/img/payment/googlepay.svg')" alt="payment" ></b-img>
                <b-img :src="require('@/assets/img/payment/applepay.svg')" alt="payment" ></b-img>
            </div>
        </b-container>
    </footer>
</template>

<script>
import NewSletter from './NewSletter.vue';

export default {
    name: 'FooterComp',
    components:{
        NewSletter
    }
}
</script>