<template>
    <section id="page-product">
        <b-row>
            <b-col lg="6">
                <div class="d-flex align-items-center justify-content-between">
                    <div id="img-active">
                        <VueSlickCarousel ref="slick" v-bind="settings" class="d-md-none">
                            <div v-for="img in product.imgs" :key="img.id" >
                                <b-img :src="img" alt="product-img" ></b-img>
                            </div>
                        </VueSlickCarousel>
                        <b-img :src="product.imgs[0]" alt="product-img"></b-img>
                    </div>
                </div>
            </b-col>
            <b-col lg="6">
                <div id="product-info">
                    <h1></h1>
                    <div class="d-flex">
                        <b-form-rating id="form-rating" class="p-0" :v-model="rating" color="#ff8800" no-border inline
                            readonly>
                        </b-form-rating>
                        <div>
                            <span id="value-rating">{{ rating }}/</span><span id="rating-max">5</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <h3 id="price-after">${{ priceAfter }}</h3>
                        <h3 id="price-before">${{ priceBefore }}</h3>
                        <p class="d-flex align-items-center justify-content-center" id="price-discount">
                            {{ priceDiscount }}%
                        </p>
                    </div>
                </div>
                <div id="products-colors">
                    <p>Select Colors</p>
                    <div id="colors">
                        <div id="color-item" v-for="itemColor in product.colors" :key="itemColor.id">
                            <b-icon icon="check"></b-icon>
                        </div>
                    </div>
                </div>
                <div id="products-size">
                    <div id="size-item" v-for="itemsize in product.sizes" :key="itemsize.id">{{ itemsize }}</div>
                </div>
                <div id="call-action">
                    <b-button>Add to cart</b-button>
                    <b-button id="btn-addToCart">Add to cart</b-button>
                </div>
            </b-col>
        </b-row>
    </section>
</template>


<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import "vue-slick-carousel/dist/vue-slick-carousel.css";
    export default {
        name: 'PageProduct',
        components: {
            VueSlickCarousel
        },
        data() {
            return {
                product: {
                    category:'Men',
                    imgs: [require('@/assets/img/products/prdpage/img1.png'), require(
                        '@/assets/img/products/prdpage/img2.png'), require(
                        '@/assets/img/products/prdpage/img3.png')],
                    name: 'T-shirt one life',
                    rating: 4.5,
                    priceBefore: 300,
                    priceAfter: 260,
                    description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
                    colors: ['#4F4631', '#314F4A', '#31344F'],
                    sizes: ['Small', 'Medium', 'Large', 'X-large'],
                    reviews: [{
                            rating: 4.5,
                            name: 'Alex M.',
                            review: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, Im quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
                            date: '03/08/2024'
                        },
                        {
                            rating: 3.5,
                            name: 'Samantha D..',
                            review: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt.',
                            date: '14/06/2024'
                        },
                        {
                            rating: 4,
                            name: 'Ethan R..',
                            review: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
                            date: '20/08/2024'
                        },
                        {
                            rating: 4.5,
                            name: 'Ava H..',
                            review: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
                            date: '13/07/2024'
                        },
                        {
                            rating: 4.5,
                            name: 'Liam K..',
                            review: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
                            date: '27/05/2024'
                        },
                        {
                            rating: 4,
                            name: 'Ethan R..',
                            review: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
                            date: '20/08/2024'
                        },
                        {
                            rating: 4.5,
                            name: 'Ava H..',
                            review: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
                            date: '13/07/2024'
                        },
                        {
                            rating: 4.5,
                            name: 'Liam K..',
                            review: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
                            date: '27/05/2024'
                        },
                    ],

                    details: {
                        Matière: "100% Coton",
                        "Type de col": 'Col rond',
                        Manches: ' Manches courtes',
                        Motif: 'Impression graphique',
                        Coupe: 'Coupe standard',
                        Tissu: 'Respirant et confortable',
                        Saison: ' Été / Printemps'
                    },
                    faq: [{
                            question: 'What materials is the T-shirt made of?',
                            response: {
                                para: null,
                                response: [
                                    `The T-shirt is made of 100% cotton, providing a soft, breathable, and comfortable fabric.`
                                ]
                            }
                        },
                        {
                            question: 'How do I choose the right size?',
                            response: {
                                para: `We recommend checking our size guide available on the product page. Here’s a quick overview of the measurements:`,
                                response: [`S (Small): 48 cm (chest) / 68 cm (length)`,
                                    `M (Medium): 52 cm (chest) / 72 cm (length)`,
                                    `L (Large): 56 cm (chest) / 74 cm (length)`,
                                    `XL (X-Large): 60 cm (chest) / 76 cm (length)`
                                ]
                            }
                        },
                        {
                            question: 'What colors are available?',
                            response: {
                                para: null,
                                response: [`The T-shirt is available in black, brown, and dark green.`]
                            }
                        },
                        {
                            question: 'How should I wash my T-shirt?',
                            response: {
                                para: `To keep your T-shirt in the best condition, follow these washing instructions:`,
                                response: [`Wash at 30°C (86°F) with similar colors)`, `Use a mild detergent`,
                                    `Do not bleach`, `Iron inside out at low temperature`
                                ]
                            }
                        },
                    ],
                    productsSuggestion: [{
                            name: 'Black Striped T-shirt',
                            priceAfter: 180,
                            priceBefore: 150,
                            discount: 30,
                            rating: 4.5,
                            img: require('@/assets/img/')
                        },
                        {
                            name: 'Polo with Tipping Details',
                            priceAfter: 120,
                            priceBefore: null,
                            discount: null,
                            rating: 5.0,
                            img: require('@/assets/img/')
                        },
                        {
                            name: 'Gradient Graphic T-shirt',
                            priceAfter: 145,
                            priceBefore: null,
                            discount: null,
                            rating: 3.5,
                            img: require('@/assets/img/')
                        },
                        {
                            name: 'Polo with Contrast Trims',
                            priceAfter: 212,
                            priceBefore: 245,
                            discount: 30,
                            rating: 4.0,
                            img: require('@/assets/img/')
                        },
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>