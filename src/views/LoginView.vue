<template>
    <div id="view">
        <header class="flex-all-center">
            <h1>MY TASKs</h1>
            <span class="material-symbols-outlined">
                import_contacts
            </span>
        </header>
        <main class="main-init">
            <h2>Login</h2>
            <form @submit.prevent="LogIn(login)">
                <label for="emailInput">E-Mail</label>
                <input type="email" required placeholder="E-Mail" id="emailInput" v-model="login.email">
                <label for="password">Senha</label>
                <input type="password" required placeholder="Senha" id="password" v-model="login.password">
                <router-link :to="{name: 'registro'}">Criar cadastro</router-link>
                <input type="submit" value="Entrar" id="submit">
            </form>
        </main>
        <span id="bg-light"></span>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data(){
        return{
            login:{
                email: '',
                password: '',
            }
        }
    },
    methods: {
        async LogIn(data) {
            try
            {
                const response = await this.$store.state.api.post("login", data)
                commit('UpdateJwtCode', response.data)
            }
            catch(error)
            {
                console.log(error.response.data)
            }
        }
    }
}
</script>

<style scoped>
    .material-symbols-outlined{
        color: white;
        font-size: 50px;
        margin: 0 0 0 10px;
    }
    .flex-all-center{
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    #bookIcon{
        color: #fff;
    }
    h1{
        font-size: 40px;
    }
    h2{
        margin: 5px auto 20px auto;
        font-size: 20px;
    }
    h1, h2{
        font-family: 'Oswald', sans-serif;
        color: #fff;
    }
    #view{
        background-color: black;
        height: 100vh;
        width: 100%;
    }
    header{
        width: 100%;
        height: 25%;
    }
    main{
        z-index: 1;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    form{
        display: flex;
        align-content: space-around;
        flex-direction: column;
        align-items: center;
        width: fit-content;
    }   
    input{
       height: 30px; 
       border-radius: 100px;
       border: none;
       outline: none;
       font-family: 'Oswald', sans-serif;
       z-index: 1;
    }
    input:focus-within{
        box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.249);
    }
    label{
        color: white;
        font-family: 'Oswald', sans-serif;
        width: 100%;
        text-align: left;
        text-indent: 10px;
    }
    #submit{
        width: clamp(150px, 15vw, 190px);
        margin: 15px;
        cursor: pointer;
        transition: 0.4s all;
    }
    #submit:hover{
        transform: scale(1.05);
    }
    #password, #emailInput{
        width: clamp(200px, 20vw, 290px);
        margin: 6px;
        padding: 0 7px;
    }
    input::placeholder{
        text-align: center;
        font-size: 14px;
    }
    #bg-light{
        z-index: 0;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10vw;
        height: 10vw;
        border-radius: 100%;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: rgba(255, 255, 255, 0.25) 0 0 100px 150px;
    }

    a{
        color: white;
        text-decoration: underline;
        font-size: 15px;
        z-index: 1;
    }
</style>