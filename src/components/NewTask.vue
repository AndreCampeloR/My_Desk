<template>
    <div id="add-task-background">
        <div id="adding-task">
            <span class="material-symbols-outlined" id="trash" @click="closeWindow()">
                close
            </span>
            <h2>Adicione uma Task</h2>
            <form @action.prevent="">

                <label for="type-task">
                    <p>Tipo de Task</p>
                    <select name="type-task" id="type-task">
                        <option value="normal">Normal</option>
                        <option value="emergencial">Emergencial</option>
                    </select>
                </label>

                <div id="prioridade-container">

                    <h3>Prioridade</h3>

                    <div class="radio-option">
                        <label for="automatica">
                            Automatica
                        </label>
                        <input type="radio" name="prioridade-task" id="automatica" v-model="prioridade" value="automatico">
                    </div>

                    <div class="radio-option">
                        <label for="manual">
                            Manual
                        </label>
                        <input type="radio" name="prioridade-task" id="manual" v-model="prioridade" value="manual">
                    </div>
                    <input type="number" name="prioridade" id="prioridade-number" value="0" v-show="prioridadeIsManual">

                </div>
                
                <label for="task-text">
                    Insira a tarefa
                    <input type="text" name="TaskText" id="task-text" maxlength="50">
                </label>

                <input type="button" value="Criar Tarefa" id="create-task">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewTask',
    data(){
        return{
            prioridade: " "
        }
    },
    computed: {
        prioridadeIsManual(){
            return this.prioridade === "manual" 
        }
    },
    methods:{
        closeWindow(){
            this.$emit('fecharPopUp', true)
        }
    }
}
</script>

<style scoped>
#trash{
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
    height: 400px;
    background-color: #fff;
    border-radius: 5px;
}

h2{
    font-size: clamp(16px, 3vw, 21px);
    margin: 1.5rem auto 1.5rem auto;
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
    padding: 10px 0 50px 0;
}

#prioridade-number{
    width: 50px;
}

.radio-option{
    display: flex;
    justify-content: center;
    margin: 5px;
}

</style>