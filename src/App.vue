<template>
  <Nav/>
  <router-view/>
</template>


<script>
import Nav from './components/Nav.vue'

export default {
  components: {
    Nav
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
  margin: 50px;
  min-height: 250px;
}
</style>
