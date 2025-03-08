<template>
    <div id="testimonial">
        <b-form-rating :v-model="value" color="#ff8800" no-border inline readonly></b-form-rating>
        <h4 id="name" >{{ name }} . <b-icon icon="check-circle"></b-icon>
        </h4>
        <p id="review" >{{ review }}</p>
    </div>
</template>

<script>
    export default {
        name: 'TestimonialComp',
        props:{
            name:{
                type:String,
                required:true
            },
            value:{
                type:Number,
                required:true
            },
            review:{
                type:String,
                required:true
            },
        }
    }
</script>

<style lang="scss" scoped></style>