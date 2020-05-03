<template>
    <div class="home">
        <TimeBar class="time-bar"/>
        <TaskLine v-for="index in 7" :key="index" :classname="index%2==0?'odd':'even'" class="task-line"/>
    </div>
</template>

<script>
import TimeBar from './TimeBar';
import TaskLine from './TaskLine';

export default {
    name: 'TaskGrid',
    components: {
        TimeBar,
        TaskLine
    }
}
</script>

<style scoped>
.home{
    display: flex;
    flex-direction: row;
}
.time-bar{
    width: 9%;
    display: flex;
    flex-direction: column;
}
.task-line{
    width: 13%;
    height: 2880px;
}
</style>