<template>
    <section id="announcement-bar" >
        <b-container class="h-100" >
            <div id="topbar-message" class="d-flex align-items-center justify-content-center position-relative h-100" >
                <div id="para" class="d-flex align-items-center justify-content-center" >
                    <p>Sign up and get 20% off to your first order. </p>
                    <router-link id="sign-up" to="/sign-up" >Sign Up Now</router-link> 
                </div>
                <b-button id="btn-delete" class="position-absolute end-0 pe-0" >
                    <b-icon icon="x" aria-hidden="true"></b-icon>
                </b-button>
            </div>
        </b-container>
    </section>
</template>

<script>
export default{
    name: 'TopBar'
}
</script>

<style lang="scss" scoped>
#announcement-bar{
    background-color:$primary-color;
    height: 36px;

    #topbar-message{
        #para{
        color: $color-white;
        font-size: 14px;
        font-weight: 400;

        #sign-up{
            font-weight: 550;
            text-decoration: underline;
            color:$color-white;
        }
    }

    #btn-delete{
        background-color: transparent;
        color: $color-white;
        border: none;
    }
    }
}
</style>