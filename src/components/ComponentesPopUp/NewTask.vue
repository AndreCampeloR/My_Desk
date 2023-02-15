<template>
    <div id="add-task-background">
        <div id="adding-task">

            <span class="material-symbols-outlined" id="close" @click="closeWindow()">
                close
            </span>
            <h2>Adicione uma Task</h2>

            <form @submit.prevent="addTask(task)">

                <label for="tipo-task" class="input-div">
                    <h3>Tipo de Task</h3>

                    <select name="tipo-task" id="tipo-task" class="select" v-model="task.TipoTask" required>
                        <option value="normal">Normal</option>
                        <option value="emergencial">Emergêncial</option>
                    </select>

                </label>

                <div id="prioridade-container" class="input-div">

                    <h3>Prioridade</h3>

                    <div class="radio-option" >
                        <label for="automatica">
                            Automatica
                        </label>
                        <input type="radio" name="prioridade-task" id="automatica" value="automatico" class="radio" checked v-model="tipoPrioridade">
                    </div>

                    <div class="radio-option">
                        <label for="manual">
                            Manual
                        </label>
                        <input type="radio" name="prioridade-task" id="manual" value="manual" class="radio" v-model="tipoPrioridade">
                    </div>

                    <input type="number" name="prioridade" id="prioridade-number" v-model="task.Prioridade" v-show="prioridadeIsManual()" min="0">
                </div>
                
                <label for="task-text" class="input-div">
                    <h3>Insira a tarefa</h3>
                    <input type="text" name="TaskText" id="task-text" maxlength="50" class="input is-small" v-model="task.Descricao" required>
                </label>

                <input type="submit" value="Criar Tarefa" id="create-task" class="button is-success">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewTask',
    data(){
        return{
            task:{
                Prioridade: 0,
                Descricao: "",   
                TipoTask: ""
            },
            tipoPrioridade: '',
        }
    },
    methods:{
        prioridadeIsManual(){
            return this.tipoPrioridade === "manual" 
        },

        closeWindow(){
            this.$emit('fecharPopUp', true)
        },

        async addTask(content){
            await this.$store.dispatch("postTask", content)
            this.closeWindow()
        }
    }
}
</script>

<style scoped>
#close{
    display: block;
    position: absolute;
    top: 5%;
    right: 5%;
    color: red;
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
}
#add-task-background{
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
#adding-task{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: clamp(300px, 50vw, 700px);
    height: 450px;
    background-color: #fff;
    border-radius: 5px;
}

h2{
    font-size: clamp(16px, 3vw, 21px);
    margin: 1.5rem auto 0.7rem auto;
}

h3{
    text-align: center;
    margin: 6px 0 4px 0;
}
form, label{
    display: flex;
    flex-direction: column;
    align-items: center;
}


select{
    margin: 5px;
}

#prioridade-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#prioridade-number{
    width: 50px;
    position: relative;
}

.radio-option{
    display: flex;
    justify-content: center;
    margin: 5px;
}

.input-div{
    margin: 5px 0px 10px 0;
    width: 50%;
}

#create-task{
    position: absolute;
    bottom: 5%;
}

#task-text{
    width: 100%;
}

#type-task{
    width: 60%;
}
</style>