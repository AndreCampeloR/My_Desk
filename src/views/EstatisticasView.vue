<template>
  <div class="main-container">
    <Nav/>
    <main>
    <h1>GRAFICOS AQUI</h1>
    <h2>GRAFICOS AQUI</h2>
    <h2>GRAFICOS AQUI</h2>
    </main>
    <Footer/>
  </div>
</template>

<script>

import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

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