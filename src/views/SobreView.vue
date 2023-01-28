<template>
  <div class="main-container">
    <Nav/>
    <main>
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
  },
  data(){
    return {
      teste: "sou lindo"
    }
  }
}
</script>

<style scoped>

</style>
