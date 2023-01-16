<template>
<div class="divForm">
     <form class="form" action="">
        <input type="text" v-for="task in lista" :key="task" :value="task"> 
     </form>
     <div class="divDangerZone">
        <h2>Danger Zone</h2>
        <input type="text">
     </div>
</div>
</template>



<script>

export default {
  name: 'MainTasks',
  data(){
    return{
        lista: [
            "fazer tarefa",
            "comprar cenoura",
            "vender banana"
    ]
    }
  }
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
</style>