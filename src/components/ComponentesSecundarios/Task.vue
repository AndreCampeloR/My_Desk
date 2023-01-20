// ObjectUsed
// {
//     id: "IdDaTarefa INT",
//     desc: "descriocaoTarefa STRING",
// }
<template>
  <div class="task"> 
    
     <div id="task-body">
        <p>
            {{TaskBody.desc}}
        </p>
     </div>
     
     <slot ></slot>

  </div>
</template>

<script>
export default {
    name: 'TaskItem',
    props: {
        TaskBody: {
            type: Object,
            required: true
        }
    }
    
}
</script>

<style scoped>
    .task{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: auto;
        min-height: 95px;
        border: solid 1px black;
        border-radius: 10px;
        margin-bottom: 5px;
        padding-left: 5px;
    }
    #task-body{
        width: 90%;
    }
    
    
    #display-none{
        display: none;
    }
    
</style>