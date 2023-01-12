<template>
  <Nav/>
  <router-view/>
  <Footer/>
</template>


<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container{
  min-height: 250px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
