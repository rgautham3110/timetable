<template>
  <div class="home">
      <div class="blank"/>
      <DayHeader v-for="(day, index) in days" :key="index" :day="day" :isToday="today==day ? true : false" class="day-header"/>
  </div>
</template>

<script>
import DayHeader from './DayHeader';
export default {
    name: 'DateBar',
    components: {
        DayHeader
    },
    data(){
        return {
            today : 'Monday',
            days: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ]
        }
    }
}
</script>

<style scoped>

.home{
    background-color: #E3EBF4;
    display: flex;
    flex-direction: row;
}

.blank{
    width: 9%;
    height: 50px;
    border-bottom: 1px solid #ABB5C3;
}

.day-header{
    width: 13%;
    height: 50px;
    border-bottom: 1px solid #ABB5C3;
}

</style>