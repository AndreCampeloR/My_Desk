<template>
  <div class="main-container">
    <h1>Main TASKs</h1>
    <TasksList/>
  </div>
</template>

<script>

import TasksList from '../components/TasksList.vue'

export default {
  name: 'Tasks',
  components: {
    TasksList
  }
}
</script>

<style scoped>
 h1{
  font-family: 'Courier New', Courier, monospace;
  margin: 20px;
 }

</style>
