<template>
    <div class="login">
        <div class="card">
            <h1>Login</h1>
            <div class="success-notification" v-if="!isError && showMessage">
                {{message}}
            </div>
            <div class="error-notification" v-if="isError && showMessage">
                {{message}}
            </div>
            <form action="">
                <div class="input-div">
                    <label>Username: </label>
                    <input type="text" v-model="username">
                </div>
                <div class="input-div">
                    <label>Password: </label>
                    <input type="password" v-model="password">
                </div>
                <div class="btn-div">
                    <div class="btn" @click="login">
                        Login
                    </div>
                    <div class="btn" @click="signup">
                        Signup
                    </div> 
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        async login(){
            fetch('https://timetable-rgautham3110.herokuapp.com/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })
            .then(response=>response.json())
            .then(data=>{
                localStorage.setItem("authentication-token", data.token)
                localStorage.setItem("username", this.username)
                this.$router.push('/')
            })
            .catch(error=>console.log(error))
        },
        signup(){
            if(!(this.password.length >= 4 && this.username.length >= 4)){
                this.showMessage = true;
                this.isError = true;
                this.message = "Username and Password should be longer than 4 characters"
                return
            }
            fetch('https://timetable-rgautham3110.herokuapp.com/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })
            .then(response=>{
                let status = response.status.toString()
                if(status[0] != '2'){
                    this.isError = true
                }else{
                    this.isError = false
                }
                response.json()
                .then(data=>{
                    this.message = data.msg
                    this.showMessage = true;
                });
            })
            
        }
    },
    data(){
        return {
            username: '',
            password: '',
            message: '',
            isError: false,
            showMessage: false,
        }
    },
    created(){
        let token = localStorage.getItem("authentication-token")
        if(token){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

.login{
    position: relative;
    display: flex;
    background-image: url('../../assets/Rangitikei.svg');
    background-color: #011627;
    height: 100vh;
    justify-content: left;
    align-items: center;
}

.card{
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    padding: 40px;
    background:white;
    border-radius: 10px;
    box-shadow: 0 0 5px grey;
    justify-content: center;
    align-items: center;

}

.input-div{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.btn-div{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
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

.success-notification{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: lightgreen;
    color: darkgreen;
    border-radius: 5px;
    font-weight: 600;
    width: 300px;
}

.btn{
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    background: #011627;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 4px grey;
    width: 150px;
    height: 50px;
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    justify-content: center;
    align-items: center;
}

input{
    height: 50px;
}

h1{
    margin-bottom: 20px;
}
</style>