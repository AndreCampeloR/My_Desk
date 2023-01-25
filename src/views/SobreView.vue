<template>
  <div class="main-container">
    <Nav/>
    <main>

    <section id="sobre">
      <div class="divSobre">
        <h2>Sobre o Projeto</h2>
            <p>O my Desk é um gerenciador de produtividade baseado no método 'Zen To Done'. </p>
            <p>As tarefas são divididas em 2 grupos, Normal Tasks e Danger Tasks (Tarefas Emergenciais), </p>
            <p>as tasks normais são organizadas em 2 subgrupos, Main tasks (As 3 tarefas de maior prioridade) e as tasks secundarias (demais tarefas com menor prioridade), </p>
            <p>as danger tasks são tarefas que surgem de forma imprevista se assumindo um caráter emergencial</p>
      </div>

      <div id="divImgSobre">
        <img src="/img/diagrama.jpg" alt="">
      </div>

    </section>

    <section id="estudo">
      <div id="divEstudo">
         <h2>O estudo</h2>
             <p></p>
      </div>

      <div id="divImgEstudo">
        <img src="/img/diagrama.jpg" alt="">
      </div>

    </section>

    <section id="detalhes">
      <h2>funcao</h2>
      <h2>proposta</h2>
      <h2></h2>
    </section>
    </main>
    <Footer id="footer"/>
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
  font-size: 1.6rem;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

p{
  font-size: 1.0rem;
  margin: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

section{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 30px auto;
}

#sobre div{
  width: 45%;
}

#divImgSobre{
  display: flex;
  justify-content: center;
}

#divImgSobre img{
  width: 400px;
}

#estudo{
  flex-direction: column;
}

#divEstudo{
  width: 36%;
  display: flex;
  justify-content: right;
}

#footer{
  position: sticky;
}
</style>
