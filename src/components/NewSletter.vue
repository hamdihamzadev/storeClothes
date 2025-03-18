<template>
    <section id="newSletter" class="d-flex align-items-center" >
    <b-row class="g-4" >
        <b-col cols="12" md="7" >
            <h1 id="title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </b-col>
        <b-col cols="12" md="5" >
            <div id="form">
            <b-input-group id="grp-input" class="d-flex align-items-center ">
                <b-input-group-append>
                    <b-icon id="icon" icon="envelope"></b-icon>
                </b-input-group-append>
                <b-form-input class="border-0 p-0" id="input" placeholder="Enter your email adress"></b-form-input>
            </b-input-group>
            <b-button class="d-flex justify-content-center align-items-center w-100" id="call-to-action">Subscribe to
                NewSletter
            </b-button>
        </div>
        </b-col>
    </b-row>
        
    </section>
</template>

<script>
    export default {
        name: "NewSletter"
    }
</script>

<style lang="scss" scoped>
    #newSletter {
        background-color: $primary-color;
        color: $color-white;
        padding: 36px 64px;
        border-radius: 20px;
        height: 180px;
        // position: absolute;
        // top: -90px;

        #title {
            font-size: 40px;
            font-weight: bold;
        }

        #form {
            #grp-input {
                height: 48px;
                background-color: $color-white;
                border-radius: 50px;
                gap: 12px;
                padding: 12px 16px;

                #icon {
                    color: $color-body;
                }

                #input:focus {
                    box-shadow: none;
                }
            }

            #call-to-action {
                background-color: $color-white;
                color: $primary-color;
                border-radius: 50px;
                height: 48px;
                padding: 16px 24px;
                font-weight: 400;
                margin-top: 12px;
                font-size: 16px;
            }
        }
    }


    // md
    @media (min-width: 768px) and (max-width: 991.98px) {
        #newSletter {
            background-color: $primary-color;
            color: $color-white;
            padding: 24px 32px;
            border-radius: 20px;
            height: 180px;

            #title {
                font-size: 32px;
                font-weight: bold;
                width: 100%;
            }

            #form {
                #grp-input {
                    height: 48px;
                    background-color: $color-white;
                    border-radius: 50px;
                    gap: 12px;
                    padding: 12px 16px;

                    #icon {
                        color: $color-body;
                    }

                    #input:focus {
                        box-shadow: none;
                    }
                }

                #call-to-action {
                    background-color: $color-white;
                    color: $primary-color;
                    border-radius: 50px;
                    height: 48px;
                    padding: 16px 24px;
                    font-weight: 400;
                    margin-top: 12px;
                    font-size: 16px;
                }
            }
        }
    }

    // extra sm - sm
    @media (max-width:767px) {

        #newSletter {
            background-color: $primary-color;
            color: $color-white;
            padding: 20px 24px;
            border-radius: 20px;
            height: 280px;
            // position: absolute;
            // top: -90px;

            #title {
                font-size: 24px;
                font-weight: bold;
                width: 100%;
            }

            #form {
                width: 100%;

                #grp-input {
                    height: 48px;
                    background-color: $color-white;
                    border-radius: 50px;
                    gap: 12px;
                    padding: 12px 16px;

                    #icon {
                        color: $color-body;
                    }

                    #input:focus {
                        box-shadow: none;
                    }
                }

                #call-to-action {
                    background-color: $color-white;
                    color: $primary-color;
                    border-radius: 50px;
                    height: 48px;
                    padding: 16px 24px;
                    font-weight: 400;
                    margin-top: 12px;
                    font-size: 16px;
                }
            }
        }
    }
</style>