<template>
    <header class="d-flex align-items-center" >
        <b-container>

            <div class="d-flex align-items-center justify-between" id="header-content" >
                <div id="container-logo" >
                    <b-img :src="require('@/assets/img/logo.png')" alt="Logo" required></b-img>
                </div>

                <b-nav class="d-flex align-items-center justify-between" id="nav" >
                    <template v-for="item  in navitems">
                        <b-nav-item-dropdown  class="p-0" :key="item.id" v-if="item.children && item.children.length" id="listSop"
                            :text="item.text" toggle-class="nav-link-custom" right>
                            <b-dropdown-item v-for="child in item.children" :key="child.id" :to="child.link">
                                {{ child.text }}
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item id="link"  v-else :key="item.id" :to="item.link">
                            {{ item.text }}
                        </b-nav-item>
                    </template>
                </b-nav>

                <b-input-group class="d-flex align-items-center"  id="form-search">
                    <b-input-group-append>
                        <b-icon icon="search"></b-icon>
                    </b-input-group-append>
                    <b-form-input id="input" class="bg-transparent border-0 p-0" placeholder="Search for products..."></b-form-input>
                </b-input-group>

                <div class="d-flex align-items-center justify-between" id="cart-profil" >
                    <b-button class="bg-transparent border-0 p-0">
                        <b-icon icon="cart2"></b-icon>
                    </b-button>
                    <b-button class="bg-transparent border-0 p-0">
                        <b-icon icon="person"></b-icon>
                    </b-button>
                </div>
            </div>

        </b-container>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComp',
        data() {
            return {
                navitems: [

                    {
                        children: [{
                                text: 'T-shirt',
                                link: '/tshirt'
                            },
                            {
                                text: 'Shirt',
                                link: '/shirt'
                            },
                            {
                                text: 'Hoodie',
                                link: '/hoodie'
                            },
                        ],
                        text: 'Shop'
                    },

                    {
                        text: 'On Sale',
                        link: '/onsale'
                    },
                    {
                        text: 'New Arrivals',
                        link: '/newArrivals'
                    },
                    {
                        text: 'Brands',
                        link: '/brands'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

header{
    height: 96px;
    #header-content{
        gap: 40px;

        .nav{
            flex-wrap: nowrap;
        }

        #nav{
            gap: 24px;

            #listSop{
                ::v-deep #listSop__BV_toggle_{
                    padding: 0;
                    color: $primary-color;
                    font-size: 16px;
                    width: max-content;
                }
            }

            #link{
                a{
                    padding: 0;
                    color: $primary-color;
                    font-size: 16px;
                    width: max-content;
                }
            }
        }

        #form-search{
            background-color: $secondary-color;
            gap: 12px;
            height: 48px;
            padding: 12px 16px;
            border-radius: 50px;
            color:$color-body;

            #input:focus{
                box-shadow: none;
            }
            
        }

        #cart-profil{
            gap: 14px;
            button{
                color: $primary-color;
            }
        }
    }
}
</style>