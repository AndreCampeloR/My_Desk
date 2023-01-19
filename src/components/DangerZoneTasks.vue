<template>
  <div class="danger-zone" id="danger-zone">
      <h2>Danger Zone</h2>
      <div id="danger-tasks">

      </div>
  </div>
</template>

<script>
export default {
    name: "DangerZoneTasks"
}
</script>

<style scoped>
.danger-zone{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: clamp(300px, 60%, 700px);
    padding: 15px;
}

#danger-tasks{
    border: 2px solid red;
    border-radius: 10px;
    width: 100%;
    min-height: 25px;
}

h2{
  color: red;
}
</style>