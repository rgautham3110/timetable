<template>
    <div class="home">
        <Profile :name="'John Doe'" :image="'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'"  class = "profile"/>
    </div>
</template>

<script>
import Profile from './Profile'
export default {
    name: 'NavBar',
    components:{
        Profile
    }
}
</script>

<style scoped> 
.home{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0px;
    background-color: #011627;
}

</style>