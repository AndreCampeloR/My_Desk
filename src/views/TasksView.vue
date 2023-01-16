<template>
  <div class="main-container">
    <h1>Main TASKs</h1>
    <MainTasks/>
    <button>
      Secundary TASKs
    </button>
  </div>
</template>

<script>

import MainTasks from '../components/MainTasks.vue'

export default {
  name: 'Tasks',
  components: {
    MainTasks
  }
}
</script>

<style scoped>
 h1{
  font-family: 'Courier New', Courier, monospace;
  margin: 20px;
 }

 button{
  background-color: #000;
  color: #fff;
  border-radius: 50px;
  width: 180px;
  height: 40px;
  position: absolute;
  right: 500px;
  bottom:260px;
  cursor: pointer;
  font-size: 1.0rem;
}
</style>
