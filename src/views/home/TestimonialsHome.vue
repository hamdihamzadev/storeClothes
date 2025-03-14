<template>
    <section id="testimonials">
        <b-container>
            <div>
                <div id="testimonial-top"  class="d-flex align-items-center justify-content-between">
                    <h1 id="title">OUR HAPPY CUSTOMERS</h1>
                    <div class="d-flex align-items-center justify-content-between gap-2">
                        <b-button id="btn-scroll" @click="showPrev"
                            class="d-flex align-items-center justify-content-center bg-transparent">
                            <b-icon icon="arrow-left"></b-icon>
                        </b-button>
                        <b-button id="btn-scroll" @click="showNext"
                            class="d-flex align-items-center justify-content-center bg-transparent">
                            <b-icon icon="arrow-right"></b-icon>
                        </b-button>
                    </div>
                </div>
                <VueSlickCarousel ref="slick" v-bind="settings">
                    <TestimonialComp v-for="item in testimonials" :key="item.id" :name="item.name" :review="item.review"
                        :value="item.value" />
                </VueSlickCarousel>
            </div>
        </b-container>
    </section>
</template>

<script>
    import TestimonialComp from '@/components/TestimonialComp.vue';
    import VueSlickCarousel from 'vue-slick-carousel'
    import "vue-slick-carousel/dist/vue-slick-carousel.css";

    export default {
        name: 'TestimonialsHome',
        components: {
            TestimonialComp,
            VueSlickCarousel

        },

        data() {
            return {
                testimonials: [{
                        name: "jam",
                        value: 5,
                        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
                    },
                    {
                        name: "jam",
                        value: 5,
                        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
                    },
                    {
                        name: "jam",
                        value: 5,
                        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
                    },
                    {
                        name: "jam",
                        value: 5,
                        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
                    },
                ],

                settings: {
                    centerMode: true, // Active le mode centré
                    centerPadding: "100px", // Définit l’espace autour du slide centré
                    slidesToShow: 3, // Nombre d’images visibles (doit être impair pour un bon centrage)
                    infinite: true, // Défilement infini
                    autoplay: false, // Défilement automatique
                    autoplaySpeed: 2000, // Vitesse de l’autoplay
                    arrows: false, // Affiche les flèches de navigation
                    dots: false, // Active la pagination en bas
                    responsive: [{
                        breakpoint: 768, // Sur mobiles
                        settings: {
                            slidesToShow: 1, // Affiche une seule image centrée
                            centerPadding: "20px"
                        }
                    }]
                }
            }
        },

        methods: {
            showNext() {
                this.$refs.slick.next();
            },
            showPrev() {
                this.$refs.slick.prev();
            }
        }
    }
</script>

<style lang="scss" scoped>
    #testimonials {

        #testimonial-top{
            margin-bottom: 48px;

            #title {
            color: $primary-color;
            font-size: 48px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
        }
        }


        ::v-deep .slick-track {
            position: relative;
        }

        ::v-deep .slick-cloned {
            width: 240px;
        }


        ::v-deep .slick-track::before {
            content: '';
            height: 100%;
            width: 10px;
            background-color: black;
            display: block;
            position: absolute;
        }

        ::v-deep .slick-track.slick-center {
            display: flex;
            gap: 20px;

        }

        ::v-deep .slick-slide:not(.slick-active) {
            filter: blur(5px);
            opacity: 0.5;
        }

        #btn-scroll {
            color: $primary-color;
            font-size: 24px;
            font-weight: bold;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            transition: all 0.3s;

            &:hover {
                color: $color-body;
            }
        }
    }
</style>