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
    props: ['day', 'index'],
    components:{
        AddTaskModal
    },
    data(){
        return {
            showAddTaskModal: false,
            isToday: false,
        }
    },
    methods:{
        toggleAddTaskModal(){
            this.showAddTaskModal = !this.showAddTaskModal;
        }
    },
    created(){
        let today = new Date().getDay() - 1;
        if(this.index==today){
            this.isToday = true
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
    height: 24px;
    cursor: pointer;
}

.add.not-selected{
    content:url("../../assets/add-unselected.png")
}
.add.selected{
    content:url("../../assets/add-selected.png")
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
    padding-left: 10px;
    padding-right: 10px;
    height: 35px;
}
.bg.selected{
    box-shadow: 0 0 4px grey;
} 

.modal{
    position: absolute;
    top:55px;
}

.error-notification{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: lightsalmon;
    color: darkred;
    border-radius: 5px;
    font-weight: 600;
    width: 300px;
}

</style>