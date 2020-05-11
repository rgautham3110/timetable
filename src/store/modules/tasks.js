export default{
    state: {
        tasks: []
    },
    
    getters: {
        tasks: function(state){
            return state.tasks
        }
    },

    actions: {
        addTask: function(context, task){
            let token = localStorage.getItem('authentication-token')
            fetch('https://timetable-rgautham3110.herokuapp.com/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ' + token
                },
                body: JSON.stringify(task)

            })
            .then(()=>{
                context.commit('addTask', task)
            })
            .catch(error=>console.log(error))
            
        },
        getTasks: function(context){
            let token = localStorage.getItem('authentication-token')
            fetch('https://timetable-rgautham3110.herokuapp.com/tasks', {
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ' + token
                }
            })
            .then(response=>response.json())
            .then(data=>{
                let tasks = data.tasks
                context.commit('getTasks', tasks)
            })
            .catch(error=>console.log(error))
        },
        deleteTask: function(context, id){
            let token = localStorage.getItem('authentication-token');
            fetch('https://timetable-rgautham3110.herokuapp.com/tasks', {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ' + token
                },
                body: JSON.stringify({
                    id
                })
            })
            .then(response=>response.json())
            .then(data=>{
                let tasks = data.tasks
                context.commit('getTasks', tasks)
            })
            
        }
    },

    mutations: {
        addTask: function(state, task){
            state.tasks.push(task)
        },
        getTasks: function(state, data){
            if(data.length){
                state.tasks = data
            }
        },
        deleteTask: function(state, id){
            const task = state.tasks.filter(task=>{return task._id === id})
            const index = state.tasks.indexOf(task[0]);
            console.log(index)
            if (index > -1) {
                state.tasks.splice(index, 1);
            }
        }
    }
}