<template>
    <footer id="footer">
       <p>My Tasks &copy; 2023</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    #footer{
        position: absolute;
        bottom: 0;
        height: 200px;
        background-color: #222;
        border-top: 4px solid #111;
        color: #fCBA03;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>