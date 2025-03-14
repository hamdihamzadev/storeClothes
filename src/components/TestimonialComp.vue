<template>
    <div id="testimonial">
        <b-form-rating :v-model="value" class="p-0" color="#ff8800" no-border inline readonly></b-form-rating>
        <h4 id="name" >{{ name }} . <b-icon id="icon" icon="check-circle"></b-icon>
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

<style lang="scss" scoped>
#testimonial{
    border: 1px solid $ui-line-color;
    border-radius: 20px;
    padding: 28px 32px;
    width: 240px;
    #name{
        font-size: 20px;
        font-weight: bold;
        color: $primary-color;
        margin-bottom: 12px;
        margin-top: 15px;
        #icon{
            
            background-color: $color-success-dark;
            border-radius: 50px;
            color: $color-white;
            
        }
    }
    #review{
        font-size: 16px;
        color: $color-body;
    }
}

</style>