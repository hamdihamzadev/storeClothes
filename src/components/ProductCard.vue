<template>

  <div id="product-cart">
    <div id="container-imgProduct" class="d-flex align-items-center justify-content-center">
      <b-img id="img-product" :src="require('@/assets/img/products/prd1.png')"></b-img>
    </div>
    <div id="text-cart" class="d-flex flex-column align-items-start">
      <router-link :to="`/${name}`" id="name-product" class="text-decoration-none">{{ name }}</router-link>
      <div class="d-flex">
        <b-form-rating id="form-rating" class="p-0" :v-model="rating" color="#ff8800" no-border inline readonly></b-form-rating>
        <div>
          <span id="value-rating">{{ rating }}/</span><span id="rating-max">5</span>
        </div>
      </div>
      <div class="d-flex align-items-center gap-2">
        <h3 id="price-after">${{ priceAfter }}</h3>
        <h3 id="price-before">${{ priceBefore }}</h3>
        <p class="d-flex align-items-center justify-content-center" id="price-discount">{{ priceDiscount }}%</p>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      name: {
        type: String,
        default: ''
      },
      rating: {
        type: Number,
        default: 0
      },
      priceAfter: {
        type: Number,
        default: 0
      },
      priceBefore: {
        type: Number,
        default: 0
      },
      priceDiscount: {
        type: Number,
        default: 0
      }
    }
  }
</script>


<style lang="scss" scoped>
  #product-cart {

    #container-imgProduct {

      background-color: $secondary-color;
      padding: 16px 24px;
      border-radius: 20px;

      #img-product {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

    }

    #text-cart {
      gap: 8px;
      margin-top: 12px;

      #name-product {
        font-size: 20px;
        font-weight: bold;
        color: $primary-color;
      }

      #value-rating {
        font-size: 14px;
        font-weight: 500;
        color: $primary-color;
      }

      #rating-max {
        font-size: 14px;
        font-weight: 500;
        color: $color-body;
      }

      #price-after {
        font-size: 24px;
        font-weight: bold;
        color: $primary-color;
      }

      #price-before {
        font-size: 24px;
        font-weight: bold;
        color: $color-body;
      }

      #price-discount {
        font-size: 12px;
        font-weight: 500;
        color: $color-danger-dark;
        height: 28px;
        width: 58px;
        border-radius: 50px;
        padding: 6px 14px;
        background-color: $color-danger-light;
      }
    }

  }


  // extra sm - sm
  @media (max-width:767px) {
    #product-cart {

      #text-cart {
        gap: 4px;

        #name-product {
          font-size: 14px;
        }

        #form-rating{
          font-size: 12px;
        }

        #value-rating {
          font-size: 12px;
        }

        #rating-max {
          font-size: 12px;
        }

        #price-after {
          font-size: 16px;
        }

        #price-before {
          font-size: 16px;
        }

        #price-discount {
          font-size: 10px;
          height: 20px;
          width: 42px;
        }
      }

    }
  }
</style>