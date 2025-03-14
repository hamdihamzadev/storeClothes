<template>
    <header class="d-flex align-items-center position-relative">
        <b-container>
            <div class="d-flex align-items-center justify-content-between" id="header-content">
                <!-- logo  -->
                <div class="d-flex align-items-center justify-content-between gap-3">

                    <!-- Menu sm md -->
                    <b-button id="btn-menu" v-b-toggle.sidebar
                        class="bg-transparent border-0 p-0 d-flex align-items-center justify-content-center d-lg-none">
                        <b-icon icon="list" scale="1.5"></b-icon>
                    </b-button>

                    <!-- side bar sm md -->
                    <b-sidebar id="sidebar" shadow>
                        <template #header>
                            <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div id="container-logo">
                                    <b-img :src="require('@/assets/img/logo.png')" alt="Logo" required></b-img>
                                </div>
                                <b-button id="btn-hiddeSidebar"
                                    class="d-flex align-items-center justify-content-center bg-transparent border-0 p-0"
                                    v-b-toggle.sidebar>
                                    <b-icon icon="x" scale="1.5"></b-icon>
                                </b-button>
                            </div>
                        </template>
                        <div>
                            <b-nav class="d-flex flex-column" id="nav">
                                <template v-for="item  in navitems">
                                    <li id="list-links" v-if="item.children && item.children.length" :key="item.id" v
                                        v-b-toggle.collapse>
                                        <span class="d-flex align-items-center gap-2">
                                            {{ item.text }}
                                            <b-icon icon="chevron-down"></b-icon>
                                        </span>

                                        <b-collapse :key="item.id" id="collapse">
                                            <b-nav-item id="link-child" v-for="child in item.children" :key="child.id"
                                                :to="child.link">
                                                {{ child.text }}
                                            </b-nav-item>
                                        </b-collapse>
                                    </li>

                                    <b-nav-item v-else id="link" :key="item.id" :to="item.link">
                                        {{ item.text }}
                                    </b-nav-item>

                                </template>
                            </b-nav>
                        </div>
                    </b-sidebar>

                    <!-- Logo -->
                    <div id="container-logo">
                        <b-img :src="require('@/assets/img/logo.png')" alt="Logo" required></b-img>
                    </div>
                </div>

                <!-- Nav lg xl xxl -->
                <b-nav class="d-lg-flex align-items-center justify-content-between  d-none " id="nav">
                    <template v-for="item  in navitems">
                        <b-nav-item-dropdown class="p-0" :key="item.id" v-if="item.children && item.children.length"
                            id="listSop" :text="item.text" toggle-class="nav-link-custom" right>
                            <b-dropdown-item v-for="child in item.children" :key="child.id" :to="child.link">
                                {{ child.text }}
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item id="link" v-else :key="item.id" :to="item.link">
                            {{ item.text }}
                        </b-nav-item>
                    </template>
                </b-nav>

                <!-- search lg xl xxl-->
                <b-input-group class="d-md-flex align-items-center d-none " id="form-search">
                    <b-input-group-append>
                        <b-icon icon="search"></b-icon>
                    </b-input-group-append>
                    <b-form-input id="input" class="bg-transparent border-0 p-0" placeholder="Search for products...">
                    </b-form-input>
                </b-input-group>

                <!-- collapse search sm md -->
                <b-collapse id="collapse-search" class="position-absolute d-md-none">
                    <b-container>
                        <b-input-group class="d-flex align-items-center px-0  " id="form-search">
                            <b-input-group-append>
                                <b-icon icon="search"></b-icon>
                            </b-input-group-append>
                            <b-form-input id="input" class="bg-transparent border-0 p-0"
                                placeholder="Search for products...">
                            </b-form-input>
                            <b-button v-b-toggle.collapse-search id="bnt-hidde-collpaseSearch"
                                class="d-flex align-items-center justify-center bg-transparent border-0 p-0">
                                <b-icon icon="x" scale="1.2"></b-icon>
                            </b-button>
                        </b-input-group>
                    </b-container>
                </b-collapse>

                <!-- Cart profil -->
                <div class="d-flex align-items-center justify-between" id="cart-profil">
                    <!-- Btn search sm md -->
                    <button v-b-toggle.collapse-search
                        class="bg-transparent border-0 p-0 d-flex align-items-center justify-content-center d-md-none">
                        <b-icon scale="1.5" icon="search"></b-icon>
                    </button>
                    <!-- Btn search sm md -->
                    <b-button class="bg-transparent border-0 p-0 d-flex align-items-center justify-content-center">
                        <b-icon scale="1.5" icon="cart2"></b-icon>
                    </b-button>
                    <b-button class="bg-transparent border-0 p-0 d-flex align-items-center justify-content-center">
                        <b-icon scale="1.5" icon="person"></b-icon>
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
    header {
        height: 96px;

        #header-content {
            gap: 40px;

            #btn-menu {
                color: $primary-color;
            }

            .nav {
                flex-wrap: nowrap;
            }

            #nav {
                gap: 24px;

                #listSop {
                    ::v-deep #listSop__BV_toggle_ {
                        padding: 0;
                        color: $primary-color;
                        font-size: 16px;
                        width: max-content;
                    }
                }

                #link {
                    a {
                        padding: 0;
                        color: $primary-color;
                        font-size: 16px;
                        width: max-content;
                    }
                }
            }

            #form-search {
                background-color: $secondary-color;
                gap: 12px;
                height: 48px;
                padding: 12px 16px;
                border-radius: 50px;
                color: $color-body;

                #input:focus {
                    box-shadow: none;
                }

            }

            #cart-profil {
                gap: 20px;

                button {
                    color: $primary-color;
                }
            }
        }
    }

    @media (max-width:576px),(min-width:576px),(min-width:768px) {
        header {
            height: 80px;

            #header-content {

                #sidebar {
                    #btn-hiddeSidebar {
                        color: $primary-color;
                    }

                    #nav {
                        gap: 0px;

                        #list-links {
                            padding-left: 1rem;
                            border-bottom: 1px solid $ui-line-color;
                            min-height: 54px;
                            height: fit-content;
                            line-height: 54px;

                            #link-child {
                                height: 40px;
                                display: flex;
                                align-items: center;

                                a {
                                    color: $color-body
                                }
                            }
                        }

                        #link {
                            border-bottom: 1px solid $ui-line-color;
                            height: fit-content;
                            min-height: 54px;
                            overflow-anchor: none;
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            padding-left: 1rem;
                        }
                    }
                }

                #collapse-search {
                    background-color: $secondary-color;
                    top: 80px;
                    left: 0px;
                    right: 0px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);


                    #bnt-hidde-collpaseSearch {
                        color: $primary-color
                    }
                }

            }
        }
    }
</style>