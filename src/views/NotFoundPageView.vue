<template>
    <div id="not-found">
        <h1>MY TASK</h1>
        <h2>Essa pagina não existe. Sentimos Muito :(</h2>
        <router-link :to="{name: 'home'}">Voltar Para o menu princiapal</router-link>
    </div>
</template>

<script>
export default {
    name: "NotFoundPageVew"
}
</script>

<style scoped>
    #not-found{
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }
    h1{
        font-size: 30px;
    }
    h2{
        font-weight: 700;
        font-size: 25px;
        margin: 5px 0 15px 0;
    }
    a{
        font-size: 20px;
    }
</style>