<template>
    <div class="home">
        <img src="../../assets/logo.png" class="logo" height="35">
        <div class="name">
            {{username}}
            <img src = "../../assets/logout.png" width="24" height="24" class="logout" @click="logout"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data(){
        return {
            username: localStorage.getItem("username")
        }
    },
    methods:{
        logout: function(){
            localStorage.clear();
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped> 
.home{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    background-color: #011627;
}

.logo{
    margin-left: 20px;
}

.name{
    height: 50px;
    display: flex;
    align-items: center;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 600;
}

.logout{
    margin-right: 20px;
    margin-left: 10px;
    cursor: pointer;
}

</style>