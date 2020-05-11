<template>
    <div class="home" :class="classname" >
        <TaskCard v-for="(task, index) in tasks" :key="index" :task="task" class="task-card"/>
    </div>
</template>

<script>
import TaskCard from './TaskCard'

export default {  
    
    name: 'TaskLine',
    props: ['classname', 'tasks'],
    components: {
        TaskCard
    },
    methods: {
    }
}
</script>

<style scoped>
.home{
    position: relative;
}
.odd{
    background-color: #F7F9FC;
    border-left: 1px solid #ABB5C3;
}
.even{
    background-color: #F1F6FB;
    border-left: 1px solid #ABB5C3;
}
.task-card{
    position: absolute;
    width: 100%;
}
</style>