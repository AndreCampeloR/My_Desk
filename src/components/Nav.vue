<template>
<div id="nav">
    <div id="menuTasks" class="navMenu">
       <router-link to="/">Tasks</router-link> 
    </div>

    <div id="menuEstatisticas" class="navMenu">
       <router-link to="/Estatisticas">Estatisticas</router-link>
    </div>

    <div id="menuSobre" class="navMenu">
       <router-link to="/Sobre">Sobre</router-link>
    </div>

    <div id="menuConfiguracoes" class="navMenu">
       <router-link to="/Configuracoes">config</router-link>
    </div>
</div>  
</template>

<script>

export default{
    name: "Nav"
}
</script>

<style scoped>
 #nav{
    background-color: rgb(0, 0, 0);
    border-bottom: 4px solid white;
    display: flex;
    justify-content: center;
     height: 58px;
   }

   .navMenu{
    display: flex;
    background-color: #000;
    width: 20%;
    border-left: 2px solid #fff;
    text-align: center;
    justify-content: center;
    padding-top: 15px;
   }

    .navMenu a {
    font-size: 1.0rem;
    font-family: 'Courier New', Courier, monospace;
    color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    text-decoration: none;
    transition: .5s;
   }

    #menuTasks{
       height: 50px;
    }
    #menuConfiguracoes{
       height: 50px;
       border-right: 2px solid #fff;
    }
    #menuEstatisticas{
       height: 50px;
    }
    #menuSobre{
       height: 50px;
    }

    
    #menuTasks:hover{
       height: 70px;
       transition: .5s;
    }
    #menuConfiguracoes:hover{
       height: 70px;
       transition: .5s;
    }
    #menuEstatisticas:hover{
       height: 70px;
       transition: .5s;
    }
    #menuSobre:hover{
       height: 70px;
       transition: .5s;
    }


    #menuTasks a:hover{
       font-size: 1.4rem;
    }
    #menuConfiguracoes a:hover{
       font-size: 1.4rem;
    }
    #menuEstatisticas a:hover{
       font-size: 1.4rem;
    }
    #menuSobre a:hover{
       font-size: 1.4rem;
    }

</style>