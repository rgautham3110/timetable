<template>
    <div class="home">
        <div class="time">{{time-1}}:00</div>
    </div>
</template>

<script>
export default {
    name: 'TimeSlot',
    props: ['time']
}
</script>

<style scoped>
.home{
    height: 120px;
    background-color: #E3EBF4;
    color: #718AB0;
    font-family: 'Roboto', sans-serif;
    font-size: 20;
    font-weight: 700;
}
.time{
    align-self: flex-end;
    padding: 10px;
}
</style>