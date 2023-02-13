<template>
    <div class="form" :class="{'border': tasks.length == 0}">
        <p v-if="tasks.length == 0" id="semTasks">Sem tasks no momento</p>
        <Task v-for="task in tasks" :key="task.id" :TaskBody="task" @configClose="task.configIsOpen=$event" :configIsOpenProp="configIsOpen">
            <MenuConfig/>
        </Task> 
    </div>
    </template>

<script>
import Task from '../ComponentesSecundarios/Task.vue';
import MenuConfig from '../ComponentesSlots/MenuConfig.vue';

export default {
    name: 'MainTasks',
    components:{
        Task,
        MenuConfig
    },
    data(){
    return{
        tasks: [''],
        configIsOpen: false
    }
    },
    async beforeMount(){
        this.$store.dispatch("getTasks")
        this.tasks = this.$store.state.task.taskList
    }
}

</script>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    width: clamp(300px, 60%, 700px);
    border-radius: 10px;
    padding: 10px;
    align-items: center;
}


h2{
    color: red;
}

.border{
    border: 2px solid #000;
}

#semTasks{
    align-items: center;
}
</style>