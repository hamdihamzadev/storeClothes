<template>
    <b-card
    title="Card Title"
    :img-src='require("@/assets/img/products/prd1.png")'
    img-alt="Image"
    img-top
    tag="product"
    class="border-0"
  >
    <b-card-text>
      <div class="d-flex">
        <b-form-rating class="p-0" v-model="value" color="#ff8800" no-border inline readonly></b-form-rating>
        <div>
            <span id="value-rating" >{{ valueRating }}/</span><span id="rating-max">5</span>
        </div>
      </div>
      <div>
        <h3>${{ priceAfter }}</h3>
        <h3>${{ priceBefore }}</h3>
        <p>{{ priceDiscount }}%</p>
      </div>
    </b-card-text>

  </b-card>
</template>

<script>
export default{
    name:'ProductCard',
    data:()=>({
        valueRating: 3,
        priceAfter: 199,
        priceBefore: 240,
        priceDiscount: 20,
    })
}
</script>


<style lang="scss" scoped>
.card-body{
  padding: 0px !important;
}
</style>