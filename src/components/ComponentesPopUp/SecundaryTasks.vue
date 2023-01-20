<template>
    <div id="Secundary-background">
        <div id="Secundary-Body">
          <div id="Secundary-header">
            <h3>Tasks Secundárias</h3>
            <span class="material-symbols-outlined" id="close" @click="closeWindow()">
                close
            </span>
          </div>
            <form class="form scroll" action="">
                <Task class="taskSecundary" v-for="task in listaSecundaria" :key="task.id" :TaskBody="task">
                    <div id="icons">
                        
                            <span id="trash" class="material-symbols-outlined">delete</span>

                       <div id="arrows">
    
                            <span id="arrowUp" @click="subirTask()" class="material-symbols-outlined">expand_less</span>
                            <span id="arrowDown" @click="descerTask()" class="material-symbols-outlined">expand_more</span>
                    
                        </div>
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
            },
            {
                desc: "jogar de ash na ranked",
                id: 4,
            },
            {
                desc: "comprar carneiro",
                id: 5,
            },
            {
                desc: "ir na padaria",
                id: 6,
            },
            {
                desc: "jogar bola",
                id: 7,
            },
            {
                desc: "comprar carneiro",
                id: 5,
            },
            {
                desc: "ir na padaria",
                id: 6,
            },
            {
                desc: "jogar bola",
                id: 7,
            }
        ]
    }
  },
    methods:{
        closeWindow(){
            this.$emit('fecharPopUp', true)
        },
        descerTask(){
            console.log(0)
        },
        subirTask(){
            console.log(1)
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

#close{
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
    height: clamp(350px, 50vh, 500px);
    overflow-y: scroll;
}

.scroll{
    direction: ltr;
}

.taskSecundary{
    border: none;
    background-color: #D9D9D9;
    min-height: 35px;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #000;
    font-weight: bold;
}

#icons{
    display: flex;
    position: relative;
    right: 0;
    justify-content: center;
}

#trash{
    color: #ff0000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
}

#trash:hover{
    transform: scale(1.2);
} 

#arrows{
    display: flex;
    flex-direction: column;
    margin: auto 10px auto 10px;
}

#arrowUp{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: auto 10px auto 10px;
    cursor: pointer;
}

#arrowUp:hover{
    transform: scale(1.2);
}

#arrowDown:hover{
    transform: scale(1.2);
}

#arrowDown{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: auto 10px auto 10px;
    cursor: pointer;
}


</style>
