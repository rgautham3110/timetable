<template>
  <div class="home">
      <DateBar class="date-bar"/>
      <TaskGrid class="task-grid"/>
  </div>
</template>

<script>
import DateBar from './DateBar';
import TaskGrid from './TaskGrid'
export default {
    name: 'Timetable',
    components: {
        DateBar,
        TaskGrid
    }
}
</script>

<style>
.date-bar{
    position:fixed;
    width: 100%;
}
.task-grid{
    margin-top:50px;
}
</style>