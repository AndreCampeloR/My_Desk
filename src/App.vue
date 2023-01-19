<template>
  <router-view/>
</template>


<script>

export default {
}
</script>

<style>
*{
  --second-font-family: 'Oswald', sans-serif;
  --primary-font-family: 'Courier New', Courier, monospace;
  font-family: var(--second-font-family);
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
