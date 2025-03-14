<template>
    <section id="newSletter" class="d-flex justify-content-between align-items-center " >
        <h1 id="title" >STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div id="form" >
            <b-input-group id="grp-input" class="d-flex align-items-center" >
                <b-input-group-append>
                    <b-icon id="icon" icon="envelope" ></b-icon>
                </b-input-group-append>
                <b-form-input class="border-0 p-0" id="input"  placeholder="Enter your email adress" ></b-form-input>
            </b-input-group>
            <b-button class="d-flex justify-content-center align-items-center w-100" id="call-to-action" >Subscribe to NewSletter</b-button>
        </div>
    </section>
</template>

<script>
export default{
    name:"NewSletter"
}
</script>

<style lang="scss" scoped>

#newSletter{
    background-color: $primary-color;
    color:$color-white;
    padding: 36px 64px;
    border-radius: 20px;
    height: 180px;
    // position: absolute;
    // top: -90px;

    #title{
        font-size: 40px;
        font-weight: bold;
        width: 50%;
    }

    #form{
        #grp-input{
            height: 48px;
            background-color: $color-white;
            border-radius: 50px;
            gap: 12px;
            padding: 12px 16px;

            #icon{
                color:$color-body;
            }

            #input:focus{
                box-shadow: none;
            }
        }
        #call-to-action{
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

</style>