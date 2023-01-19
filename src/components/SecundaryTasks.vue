<template>
    <div id="Secundary-background">
        <div id="Secundary-Body">
          <div id="Secundary-header">
            <h3>Tasks Secundárias</h3>
            <span class="material-symbols-outlined" id="trash" @click="closeWindow()">
                close
            </span>
          </div>
            <form class="form" action="">
                <Task v-for="task in listaSecundaria" :key="task.id" :TaskBody="task">

                </Task>
            </form>
        </div>     
                    
    </div>
</template>

<script>

import Task from './ComponentesSecundarios/Task.vue'
import MenuConfig from '../components/MenuConfig.vue'

export default {

    name: 'SecundaryTasks',
    data(){
    return{
        listaSecundaria: [
            {
                desc: "fazer compras",
                id: 1,
            },
            {
                desc: "vender cachorro",
                id: 2,
            },
            {
                desc: "comprar ingresso do show do manuel gomes",
                id: 3,
            }
        ]
    }
  },
    methods:{
        closeWindow(){
            this.$emit('fecharPopUp', true)
        }
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

#trash{
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
}
</style>
