<template>
  <div class="main-container">
    <Nav/>
    <main>

    <section id="sobre">
      <h2>Sobre o Projeto</h2>
         <div>
              <p>O my Desk é um gerenciador de produtividade baseado no método 'Zen To Done'.</p>
              <p>As tarefas são divididas em 2 grupos, Normal Tasks e Danger Tasks (Tarefas Emergenciais).</p>
              <p>As tasks normais são organizadas em 2 subgrupos, Main tasks (As 3 tarefas de maior prioridade) e as tasks secundarias (demais tarefas com menor prioridade).</p>
              <p>As danger tasks são tarefas que surgem de forma imprevista se assumindo um caráter emergencial.</p>
          </div>
    </section>

    <section id="estudo">
      <h2>O estudo</h2>
      <p></p>
      <img src="/img/diagrama.jpg" alt="">
    </section>
    <section id="detalhes"></section>
    </main>
    <Footer/>
  </div>
</template>

<script>

import Nav from '../components/ComponentesPrincipais/Nav.vue';
import Footer from '../components/ComponentesPrincipais/Footer.vue'

export default {
  name: 'Sobre',
  components: {
    Nav,
    Footer
  }
}
</script>

<style scoped>

h2{
  font-size: 1.5rem;
}

p{
  font-size: 1.0rem;
  margin: 10px;
}


#sobre{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px auto;
}


</style>
