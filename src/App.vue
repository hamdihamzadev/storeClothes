<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col v-for="item in 12" :key="item" >
          <span>hamza</span>
        </b-col>
      </b-row>
    </b-container>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>


<style>
#app{
  color: rgb(31, 31, 31);
}
</style>
