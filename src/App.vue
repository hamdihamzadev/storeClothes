<template>
  <div id="app">
    <TopBar/>
    <HeaderComp/>
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

