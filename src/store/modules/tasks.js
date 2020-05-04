export default{
    state: {
        tasks: [
            {
                id:1,
                day: 'Monday',
                taskName: 'My Task',
                startTime: "08:00",
                endTime: "10:00"
            },
            {
                id:2,
                day: 'Monday',
                taskName: 'My Task',
                startTime: "10:00",
                endTime: "12:00"
            },
            {
                id:3,
                day: 'Monday',
                taskName: 'My Task',
                startTime: "13:00",
                endTime: "14:00"
            },
            {
                id:4,
                day: 'Tuesday',
                taskName: 'My Task',
                startTime: "13:00",
                endTime: "14:00"
            }
        ]
    },
    
    getters: {
        tasks: function(state){
            return  state.tasks
        }
    },

    actions: {
        addTask: function(context, task){
            context.commit('addTask', task)
        }
    },

    mutations: {
        addTask: function(state, task){
            state.tasks.push(task)
        }
    }
}