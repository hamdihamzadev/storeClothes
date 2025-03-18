<template>

    <b-collapse id="announcement-bar"  visible>
        <b-container class="h-100">
            <div id="topbar-message"
                class="d-flex align-items-center justify-content-between justify-content-md-center position-relative h-100">
                <div id="para" class="d-flex align-items-center justify-content-center">
                    <p>Sign up and get 20% off to your first order. </p>
                    <router-link id="sign-up" to="/sign-up">Sign Up Now</router-link>
                </div>

                <b-button id="btn-delete"
                    class="position-absolute end-0 p-0 d-flex align-items-center justify-content-center ">
                    <b-icon v-b-toggle.announcement-bar icon="x" aria-hidden="true"></b-icon>
                </b-button>
            </div>
        </b-container>
    </b-collapse>


</template>

<script>
    export default {
        name: 'TopBar'
    }
</script>

<style lang="scss" scoped>
    #announcement-bar {
        background-color: $primary-color;
        height: 36px;

        #topbar-message {
            #para {
                color: $color-white;
                font-size: 14px;
                font-weight: 400;

                #sign-up {
                    font-weight: 550;
                    text-decoration: underline;
                    color: $color-white;
                }
            }

            #btn-delete {
                background-color: transparent;
                color: $color-white;
                border: none;
            }
        }
    }

    @media(max-width: 576px) {
        #announcement-bar {

            #topbar-message {
                #para {
                    color: $color-white;
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }
    }
</style>