<template>
  <div class="main-container">
    <Nav/>
      <button @click="this.$store.dispatch('LogIn')">Click</button>
    <Footer/>
  </div>
</template>

<script>

import Nav from '../components/ComponentesPrincipais/Nav.vue';
import Footer from '../components/ComponentesPrincipais/Footer.vue'

export default {
  name: 'EstatisticasView.vue',
  components: {
    Nav,
    Footer
  }
}
</script>

<style scoped>
  h1{
    width: 60px;
    height: 60px;
    color: blue;
    background-color: black;
  }
  h2{
    width: 100px;
    height: 100px;
    color: red;
    background-color: white;
  }
</style>