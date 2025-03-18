<template>
  <div id="app">
    <TopBar/>
    <div style="position: sticky; top:0px; width:100%; z-index:500;" >
      <HeaderComp/>
    </div>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue';
export default {
  name: 'App',
  components:{
    TopBar,
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss" scoped>
#app{
  overflow-x: hidden;
}
</style>

