<template>
  <router-view/>
</template>


<script>

export default {
}
</script>

<style>
*{
  --second-font-familia: 'Oswald', sans-serif;
  font-family: 'Courier New', Courier, monospace;
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
