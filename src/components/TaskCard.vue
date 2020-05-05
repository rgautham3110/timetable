<template>
    <div class="task-card" :style="marginTopValue">
        <div class="card">
            <div class="heading">
                {{this.task.taskName}}
            </div>
            <div class="footer">
                <div class="time">
                    {{this.task.startTime}} to {{this.task.endTime}}
                </div>
                <img src="../assets/delete.svg" id="del-icon"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskCard',
    props: ['task'],
    data(){
        return {
            marginTop: 0,
            cardHeight: 0,
            innerHeight: 0
        }
    },
    computed:{
        marginTopValue(){
            return {
                '--margin-top': this.marginTop + 'px',
                '--card-height': this.cardHeight + 'px',
                '--inner-height': this.innerHeight + 'px'
            }
        }
    },
    created(){
        let start =  this.task.startTime.split(':')
        let end =  this.task.endTime.split(':')
        this.marginTop = (parseInt(start[0]) + parseInt(start[1])/60) * 120
        this.cardHeight = ( ( parseInt(end[0]) - parseInt(start[0]) ) ) * 120
        this.innerHeight = this.cardHeight - 10;
    }
}
</script>

<style scoped>
.task-card{
    position: relative;
    margin-top: var(--margin-top);
    height: var(--card-height);
    color: #83423F;
}

.card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: var(--inner-height);
    margin: 10px;
    padding: 10px;
    background: #FFA69E;
    box-shadow: 0 0 5px lightgrey;
    border-radius: 10px;
}

.heading{
    color: #83423F;
    font-size: 23px;
    font-weight: bold;
}

.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

#del-icon{
    color: red;
}

</style>