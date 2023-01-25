<template>
  <div class="main-container">
    <Nav/>
    <main>
      <p v-for="item in this.$store.state.tasks" :key="item">{{item}}</p>
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
