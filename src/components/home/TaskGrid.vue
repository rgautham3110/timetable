<template>
    <div class="home">
        <TimeBar class="time-bar"/>
        <TaskLine v-for="(day,index) in days" :key="index" :classname="index%2==0?'odd':'even'" class="task-line" :tasks="tasksForDay(day)"/>
    </div>
</template>

<script>
import TimeBar from './TimeBar';
import TaskLine from './TaskLine';

import {mapGetters} from 'vuex';

export default {
    name: 'TaskGrid',
    data(){
        return{
            days: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ]
        }
    },
    components: {
        TimeBar,
        TaskLine
    },
    computed: mapGetters(["tasks"]),
    methods:{
        tasksForDay: function(day){
            return this.tasks.filter(task=>{
                return task.day == day
            })
        }
    },
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