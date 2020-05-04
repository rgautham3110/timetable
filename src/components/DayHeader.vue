<template>
    <div class="home">
        <div class = "bg" :class="isToday ? 'selected' : 'not-selected'">
            {{day}}
            <div class="add" :class="isToday ? 'selected' : 'not-selected'" @click="toggleAddTaskModal()" /> 
        </div>
        <AddTaskModal v-if="showAddTaskModal" class="modal" :day="day"/>
    </div>
</template>

<script>
import AddTaskModal from './AddTaskModal'
export default {

    name: 'DayHeader',
    props: ['isToday', 'day'],
    components:{
        AddTaskModal
    },
    data(){
        return {
            showAddTaskModal: false
        }
    },
    methods:{
        toggleAddTaskModal(){
            this.showAddTaskModal = !this.showAddTaskModal;
        }
    }
}
</script>

<style scoped>

.home{
    position: relative;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 20;
    font-weight: 700;
}

.add{
    padding-left: 10px;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.add.not-selected{
    content:url("../assets/add-unselected.png")
}
.add.selected{
    content:url("../assets/add-selected.png")
}

.selected{
    color:white;
    background: #4C66B6;
    border-radius: 5px;
}

.not-selected{
    color:#718AB0;
    border-radius: 5px;
}

.bg{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    height: 35px;
}
.bg.selected{
    box-shadow: 0 0 4px grey;
} 

.modal{
    position: absolute;
    top:55px;
}

</style>