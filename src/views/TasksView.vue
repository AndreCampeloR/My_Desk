<template>
  <div class="main-container">
    <Nav/>
      <main>
        <h1 class="">Main TASKs</h1>
          <MainTasks/>
          <DangerZoneTasks/>
          <div class="btns">
             <button id="btnAdicionar" @click="showAddTaskWindow = !showAddTaskWindow">
             <span class="material-symbols-outlined">add_circle</span>
              Adicionar Tasks
             </button>
             <button id="btnSecundary" @click="showSecundaryTasksWindow = !showSecundaryTasksWindow">
              TASKs Secundárias 
             </button>
          </div>
      </main>
      <NewTask v-if="showAddTaskWindow" @fecharPopUp="showAddTaskWindow=false"/>
      <SecundaryTasks v-if="showSecundaryTasksWindow" @fecharPopUp="showSecundaryTasksWindow=false"/>
    <Footer/>
  </div>
</template>

<script>
import MainTasks from '../components/ComponentesPrincipais/MainTasks.vue'
import Nav from '../components/ComponentesPrincipais/Nav.vue';
import Footer from '../components/ComponentesPrincipais/Footer.vue'
import NewTask from '../components/ComponentesPopUp/NewTask.vue'
import SecundaryTasks from '../components/SecundaryTasks.vue'
import DangerZoneTasks from "../components/ComponentesPrincipais/DangerZoneTasks.vue"

export default {
  name: 'Tasks',
  components: {
    MainTasks,
    Nav,
    Footer,
    NewTask,
    SecundaryTasks,
    DangerZoneTasks
  },
  data(){
    return{
      showAddTaskWindow: false,
      showSecundaryTasksWindow: false
    }
  }
}
</script>

<style scoped>
 h1{
  font-size: 24px;
  font-weight: 700;
  margin: 15px;
 }

 button{
  background-color: rgba(0, 0, 0, 0.69);
  color: #fff;
  border-radius: 50px;
  width: 200px;
  height: 40px;
  cursor: pointer;
  font-size: 1.0rem;
  border: none;
}

.btns{
  display: flex;
}

#btnAdicionar{
    background-color: rgb(16, 163, 16);
    display: flex;
    align-items: center;
    justify-content: center;
}

.material-symbols-outlined{
    margin-right: 4px;
}

</style>
