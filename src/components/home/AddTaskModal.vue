<template>
    <div class="home">
        <div class="header">
            Add Task 
        </div>
        <div class="error-notification" v-if="showMessage">
                {{message}}
            </div>
        <div class="task-name">
            <input type="text" placeholder="Task Name" v-model="taskName" class="text-input">
        </div>
        <div class="time">
            <div class="time-div">
                <div>Start time:</div> 
                <input type="time" class="time-input" v-model="startTime">
            </div>
            <div class="time-div">
                <div>End time:</div> 
                <input type="time" class="time-input" v-model="endTime">
            </div>
        </div>
        <div class="add" @click="onAdd">Add</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddTaskModal',
    props: ['day'],
    data(){
        return {
            taskName: "",
            startTime: "",
            endTime: "",
            message: "",
            showMessage: false
        }
    },
    methods:{
        ...mapActions(['addTask']),
        onAdd(){
            let error = false;
            if(!this.taskName.length > 0){
                error = true;
                this.message += 'Enter a taskname. '
            }
            if(!this.startTime.length > 0){
                error = true;
                this.message += 'Enter a start-time. '
            }
            if(!this.endTime.length > 0){
                error = true;
                this.message += 'Enter an end-time.\n '
            }

            if(this.startTime.length > 0 && this.endTime.length > 0){
                let startTimeNum = this.startTime.split(':')
                let endTimeNum = this.endTime.split(':')

                let totalStart = parseInt(startTimeNum[0] + startTimeNum[1]);
                let totalEnd = parseInt(endTimeNum[0] + endTimeNum[1]);

                if(totalStart >= totalEnd){
                    error = true;
                    this.message += 'End-time should be after start-time.'
                }
            }

            if(error){
                this.showMessage = true
                return
            }

            this.addTask( {
                day: this.day,
                taskName: this.taskName,
                startTime: this.startTime,
                endTime: this.endTime
            })
            this.$parent.showAddTaskModal = false
        }
    }
}
</script>

<style scoped>
.home{
    padding: 20px;
    background: white;
    color: black;
    border: 1px solid #ABB5C3;
    border-radius: 5px;
    box-shadow: 0 0 5px lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header{
    color: #011627;
    margin-bottom: 10px;
    font-size: 20px;
}
.task-name{
    margin-bottom: 20px;
}
.time{
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: #718AB0;
    width: 100%;
}
.time-div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
    margin-bottom: 10px;
}
.time-input{
    height: 40px;
}
.text-input{
    height: 40px;
}
.add{
    align-self: flex-start;
    background: #011627;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 4px grey;
    width: fit-content;
    cursor: pointer;
}

.error-notification{
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: lightsalmon;
    color: darkred;
    border-radius: 5px;
    font-weight: 600;
    width: 200px;
    margin-bottom: 20px;
}

</style>