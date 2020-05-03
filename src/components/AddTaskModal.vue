<template>
    <div class="home">
        <div class="header">
            Add Task 
        </div>
        <div class="task-name">
            <input type="text" placeholder="Task Name">
        </div>
        <div class="time">
            <div class="time-div">
                <div>Start time:</div> 
                <input type="time" class="time-input">
            </div>
            <div class="time-div">
                <div>End time:</div> 
                <input type="time" class="time-input">
            </div>
        </div>
        <div class="add">Add</div>
    </div>
</template>

<script>
export default {
    name: 'AddTaskModal'
}
</script>

<style scoped>
.home{
    padding: 10px;
    background: white;
    color: black;
    border: 1px solid #ABB5C3;
    border-radius: 5px;
    box-shadow: 0 0 5px lightgrey;

}

.header{
    color: #011627;
    margin-bottom: 10px;
}
.task-name{
    margin-bottom: 20px;
}
.time{
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: #718AB0;
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
    height: 30px;
}
.add{
    background: #011627;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 4px grey;
    width: fit-content;
}

</style>