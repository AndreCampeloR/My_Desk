<template>
    <div class="divConfig">
    <h2>André Luiz Campelo</h2>
    <h3>E-mail</h3>
    <h4>Andre.campelo@benner.com.br</h4>
    <img :src="img_src">
    <button>
      Mudar senha
    </button>
    </div>
</template>

<script>
export default {
    name: 'Config',
    data(){
    return{
      img_src: '/img/iconPerfil.png'
    }
  }
}
</script>

<style scoped>

.divConfig{
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
}

.divConfig img{
  width: 30%;
  height: 30%;
}

h2, h3, h4{
  margin: 10px;
}

</style>