<template>
<div class="divForm">
    <form class="form" action="">
    <Task v-for="task in lista" :key="task.id" :TaskBody="task" @configClose="task.configIsOpen=$event" :configIsOpenProp="configIsOpen">
        <MenuConfig/>
    </Task> 
    </form>
    <div class="divDangerZone">
    <h2>Danger Zone</h2>
    <input type="text">
    </div>
</div>
</template>



<script>
import Task from './Task.vue';
import MenuConfig from './MenuConfig.vue';

export default {
  name: 'MainTasks',
  components:{
    Task,
    MenuConfig
  },
  data(){
    return{
        lista: [
            {
                desc: "fazer tarefa",
                id: 1,
            },
            {
                desc: "comprar cenoura",
                id: 2,
            },
            {
                desc: "vender banana",
                id: 3,
            }
        ],
        configIsOpen: false
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