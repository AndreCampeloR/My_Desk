<template>
<div class="form">
    <Task v-for="task in lista" :key="task.id" :TaskBody="task" @configClose="task.configIsOpen=$event" :configIsOpenProp="configIsOpen">
        <menu-config/>
    </Task> 
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
    width: clamp(300px, 60%, 700px);
    border: 2px solid #000;
    border-radius: 10px;
    padding: 10px;
}


h2{
    color: red;
}


</style>