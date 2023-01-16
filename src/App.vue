<template>
  <router-view/>
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
  font-family: 'Courier New', Courier, monospace;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
}

.main-container{
  min-height: 250px;
  height: 100%;
  width: 100%;
}

main{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
