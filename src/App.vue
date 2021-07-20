<template>
  <div id="app">
      <hello-world/>
      <HeaderComponent/>

    <!-- Importante carga las rutas q lleguen por la ulr!-->
        <router-view/>
        <sidebar/>
        <div class="clearfix"></div>
    
      <footerComponent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import Sidebar from './components/Sidebar.vue';

import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderComponent,
    Sidebar,
    FooterComponent
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
@import './assets/css/styles.css'

 

</style>
