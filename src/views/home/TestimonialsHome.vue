<template>
    <section id="testimonials">
        <b-container>
            <h1 id="title">OUR HAPPY CUSTOMERS</h1>
            <div>
                <TestimonialComp v-for="item in testimonials" :key="item.id" :name="item.name" :review="item.review" :value="item.value" />
            </div>
        </b-container>
    </section>
</template>

<script>
    import TestimonialComp from '@/components/TestimonialComp.vue';
    export default {
        name: 'TestimonialsHome',
        components: {
            TestimonialComp
        },

        data(){
            return{
                testimonials:[
                    {
                        name:"jam",
                        value:5,
                        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
                    },
                    {
                        name:"jam",
                        value:5,
                        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
                    },
                    {
                        name:"jam",
                        value:5,
                        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
                    },
                    {
                        name:"jam",
                        value:5,
                        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>