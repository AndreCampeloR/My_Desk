<template>
    <footer id="footer">
       <p>My Desk &copy; 2023</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    #footer{
        color: #fCBA03;
        background-color: #222;
        height: 130px;
        width: 100vw;
        display: flex;
        align-content: center;
        position: absolute;
        bottom: 0;
    }
    p{
        margin: auto;
        width: fit-content;
        text-align: center;
    }
</style>