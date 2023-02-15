<template>
    <div id="Secundary-background">
        <div id="Secundary-Body">
            <div id="Secundary-header">
                <h3>Todas Tasks</h3>
                <span class="material-symbols-outlined" id="closePopup" @click="closeWindow()">
                    close
                </span>
            </div>
            <form class="form scroll" action="">
                <Task class="taskSecundary" v-for="task in this.$store.state.task.taskList" :key="task.id" :TaskBody="task">

                    <div class="menu-options">
                        <span class="material-symbols-outlined" id="done" >done</span>
                        <span class="material-symbols-outlined" id="close">close</span>
                        <span class="material-symbols-outlined" id="config">settings</span>
                    </div>

                </Task>
            </form>
        </div>             
    </div>
</template>

<script>

import Task from '../ComponentesSecundarios/Task.vue'
import MenuConfig from '../ComponentesSlots/MenuConfig.vue'

export default {

    name: 'SecundaryTasks',
    data(){
    return{

    }
  },
    methods:{
        closeWindow(){
            this.$emit('fecharPopUp', true)
        },
        
        
    },
    components: {
        Task,
        MenuConfig
    }
  }

    
</script>

<style scoped>

#Secundary-background{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);
}

#Secundary-Body{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 500px;
    min-height: 250px;
    background-color: #222;
    border-radius: 5px;
}

#Secundary-header{
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   padding-top: 15px;
}

#Secundary-header h3{
    color: rgba(255, 255, 255, 0.829);
    margin-bottom: 30px;
}

#closePopup{
    display: block;
    position: absolute;
    top: 5%;
    right: 5%;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
}

.form{
    display: flex;
    flex-direction: column;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 10px;
    height: clamp(340px, 40vh, 350px);
    overflow-y: scroll;
}

.scroll{
    direction: rtl;
}

.taskSecundary{
    border: none;
    background-color: #D9D9D9;
    min-height: 35px;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #000;
    font-weight: 700;
    direction: ltr;
}

#done{
    color: green;
    cursor: pointer;
}
#close{
    color: red;
    cursor: pointer;
}
#config{
    color: gray;
    cursor: pointer;
}
.menu-options{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.menu-options span{
    cursor: default;
    transition: 0.5s all;
    padding: 3px 5px;
}
.menu-options span:hover{
    transform: scale(1.2);
}


</style>
