<template>
  <div class="main-container">
    <Nav/>
    <main>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Aperiam odio nemo laboriosam hic 
      assumenda dicta expedita repellat ipsum eligendi sed corrupti,
      fugiat excepturi incidunt? Quasi veniam 
      aliquam nostrum fuga quia!</p>
    </main>
    <Footer/>
  </div>
</template>

<script>

import Nav from '../components/ComponentesPrincipais/Nav.vue';
import Footer from '../components/ComponentesPrincipais/Footer.vue'

export default {
  name: 'Sobre',
  components: {
    Nav,
    Footer
  }
}
</script>

<style scoped>

</style>
