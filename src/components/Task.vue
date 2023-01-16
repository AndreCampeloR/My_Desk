// ObjectUsed
// {
//     id: "IdDaTarefa INT",
//     desc: "descriocaoTarefa STRING",
// }
<template>
  <div id="task">
    <div id="task-body">
        <p>
            {{TaskBody.desc}}
        </p>
    </div>
    <div id="options-body">
        <span class="material-symbols-outlined" id="options" @click="configIsOpen = !configIsOpen" :class="{'open-options': configIsOpen}">
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
  </div>
</template>

<script>
export default {
    name: 'TaskItem',
    data(){
        return{
            configIsOpen:false
        }
    },
    props: {
        TaskBody: {
            type: Object,
            required: true
        }
    }
    
}
</script>

<style scoped>
    #task{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
    }
    #options-body{
        width: 10%;   
        height: 100%; 
        position: relative;
        display: flex;
        align-items: center;
    }
    #task-body{
        width: 90%;
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
    .menu-options{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        position: absolute;
        left: 60px;
        top: 0px;
    }
    .menu-options span{
        cursor: default;
        transition: 0.5s all;
        padding: 3px 0;
    }
    .menu-options span:hover{
        transform: scale(1.2);
    }
    #display-none{
        display: none;
    }
    #done{
        color: green;
    }
    #trash{
        color: red;
    }
    #config{
        color: gray;
    }
</style>