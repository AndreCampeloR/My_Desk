<template>
    <div class="menu-options" >
        <span class="material-symbols-outlined" id="done" >
            done
        </span>
        <span class="material-symbols-outlined" id="trash">
            close
        </span>
        <span class="material-symbols-outlined" id="config">
            settings
        </span>
    </div>
</template>

<script>

 export default{
    name: 'MenuConfig'
 }

</script>

<style scoped>

#done{
    color: green;
    cursor: pointer;
}
#trash{
    color: red;
    cursor: pointer;
}
#config{
    color: gray;
    cursor: pointer;
}
.menu-options{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.menu-options span{
    cursor: default;
    transition: 0.5s all;
    padding: 3px 0;
}
.menu-options span:hover{
    transform: scale(1.2);
}
</style>