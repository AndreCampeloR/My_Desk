<template>
<div class="divForm">
     <form class="form" action="">
        <input type="text">
        <input type="text">
        <input type="text">
     </form>
     <div class="divDangerZone">
        <h2>Danger Zone</h2>
        <input type="text">
     </div>
     <button>
       Secundary TASKs
     </button>
</div>
</template>



<script>

export default {
  name: 'TasksList'
}

</script>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 10px;
}

.form input{
    width: 400px;
    height: 45px;
    border-radius: 50px;
    margin: 15px;
    background-color: rgba(37, 37, 37, 0.849);
}

.divDangerZone{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
}

h2{
    color: red;
}

.divDangerZone input{
    border: 2px solid red;
    border-radius: 10px;
    width: 400px;
    height: 25px;
    margin: 15px;
}

button{
    background-color: #000;
    color: #fff;
    border-radius: 50px;
    width: 180px;
    height: 40px;
    position: absolute;
    right: 500px;
}
</style>