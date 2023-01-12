<template>
    <div id="view">
        <header class="flex-all-center">
            <h1>My TASKs <font-awesome-icon icon="fa-regular fa-book-open"/></h1>
        </header>
        <main>
            <h2>Login</h2>
            <form action="">
                <input type="email" required placeholder="E-Mail" id="emailInput">
                <input type="password" required placeholder="Senha" id="password">
                <input type="submit" value="Entrar" id="submit">
            </form>
        </main>
        <span id="bg-light"></span>
    </div>
</template>

<script>
export default {
    name: 'LoginView'
}
</script>

<style scoped>
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
        margin-bottom: 30px;
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;
        display: flex;
        align-content: center;
        align-items: center;
    }
    form{
        display: flex;
        align-content: space-around;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }   
    input{
       height: 30px; 
       border-radius: 100px;
    }
    #submit{
        width: clamp(150px, 15vw, 190px);
        margin: 10px;
        cursor: pointer;
        transition: 0.4s all;
    }
    #submit:hover{
        transform: scale(1.05);
    }
    #password, #emailInput{
        width: clamp(200px, 20vw, 290px);
        margin: 3px;
        padding: 0 7px;
    }
    input::placeholder{
        text-align: center;
        
    }
    #bg-light{
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
</style>