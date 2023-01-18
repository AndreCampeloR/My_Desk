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
        <span class="material-symbols-outlined" id="options" v-on:click="abreMenu" :class="{'open-options': configIsOpen}" >
            chevron_right
        </span>
         
        <div v-show="configIsOpen">
           <slot></slot>
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
    methods: {
        abreMenu(){
            this.configIsOpen = !this.configIsOpen
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
        height: auto;
        min-height: 90px;
    }
    #options-body{
        width: 10%;   
        height: 100%; 
        position: relative;
        display: flex;
        align-items: center;
        margin-right: 10px;
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
    
    #display-none{
        display: none;
    }
    
</style>