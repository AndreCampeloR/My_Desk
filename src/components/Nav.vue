<template>
<div id="nav">
   <div id="menuTasks" class="navMenu">
      <router-link to="/" exact-active-class="page-is-active">Tasks</router-link> 
   </div>

   <div id="menuEstatisticas" class="navMenu">
      <router-link to="/estatisticas" exact-active-class="page-is-active">Estatisticas</router-link>
   </div>

   <div id="menuSobre" class="navMenu">
      <router-link to="/sobre" exact-active-class="page-is-active">Sobre</router-link>
   </div>

   <div id="menuConfiguracoes" class="navMenu">
   <router-link to="/configuracoes" exact-active-class="page-is-active-config">
      <span class="material-symbols-outlined">
         settings
      </span>
   </router-link>
   </div>
</div>  
</template>

<script>

export default{
    name: "Nav"
}
</script>

<style scoped>
   #menuTasks{
      border-left: none
   }
   #nav{
      background-color: rgb(0, 0, 0);
      border-bottom: 4px solid white;
      display: flex;
      justify-content: center;
      height: 58px;
      width: 100vw;
      top: 0;
   }

   .navMenu{
      display: flex;
      background-color: #000;
      width: 20%;
      border-left: 2px solid #fff;
      text-align: center;
      justify-content: center;
      padding-top: 15px;
      height: 50px;
      transition: .2s;
   }
   .navMenu a {
      font-size: 1.0rem;
      color: rgb(255, 255, 255);
      height: 100%;
      width: 100%;
      text-decoration: none;
      transition: .5s;
   }
   .page-is-active{
      height: 50px;
      font-size: 1.1rem;
   }
   .page-is-active-config{
      text-shadow: 0px 0px 10px 10px white;
      font-size: 1.1rem;
   }
   .navMenu:hover{
      height: 70px;
      transition: .5s;
   }
   .navMenu:hover a{
      font-size: 1.1rem;
   }

</style>