<template>
  <div class="main-container">
    <Nav/>
      <main>
        <h1>Main TASKs</h1>
          <MainTasks/>
          <div class="btns">
             <button id="btnAdicionar" @click="showAddTaskWindow = !showAddTaskWindow">
             <span class="material-symbols-outlined">add_circle</span>
              Adicionar Tasks
             </button>
             <button>
              TASKs Secundárias 
             </button>
          </div>
      </main>
      <NewTask v-if="showAddTaskWindow"/>
    <Footer/>
  </div>
</template>

<script>
import MainTasks from '../components/MainTasks.vue'
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import NewTask from '../components/NewTask.vue'


export default {
  name: 'Tasks',
  components: {
    MainTasks,
    Nav,
    Footer,
    NewTask
  },
  data(){
    return{
      showAddTaskWindow: false
    }
  }
}
</script>

<style scoped>
 h1{
  font-family: 'Courier New', Courier, monospace;
  margin: 20px;
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
