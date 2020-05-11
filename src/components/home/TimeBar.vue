<template>
    <div class="home">
        
        <TimeSlot v-for="time in 24" :key="time" :time="time"/>
    </div>
</template>

<script>
import TimeSlot from './TimeSlot'
export default {
    name: 'TimeBar',
    components:{
        TimeSlot
    }
}
</script>

<style scoped>

.home{
    display: flex;
    flex-direction: column;
}

</style>