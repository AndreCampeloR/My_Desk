<template>
<div id="options-body">
    <span class="material-symbols-outlined" id="options" v-on:click="abreMenu" :class="{'open-options': configIsOpen}" >
        chevron_right
    </span>
       <div class="menu-options" v-show="configIsOpen">
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
</div>
</template>

<script>

 export default{
    name: 'MenuConfig',
    data(){
        return{
            configIsOpen:false
        }
    },
    methods: {
        abreMenu(){
            this.configIsOpen = !this.configIsOpen
        }
    },
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

#options-body{
    width: 10%;   
    height: 100%; 
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 10px;
}
#options{
    display: block;
    font-size: 32px;
    margin: auto 0 auto auto;
    cursor: pointer;
}
.open-options{
    transform: rotate(180deg);
}
</style>