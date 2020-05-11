<template>
  <div class="app-home">
    <TaskGrid class="task-grid"/>
    <DateBar class="date-bar"/>
    <NavBar class="nav-bar"/>
  </div>
</template>

<script>
import NavBar from './NavBar';
import DateBar from './DateBar';
import TaskGrid from './TaskGrid';
import {mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    NavBar,
    DateBar,
    TaskGrid,
  },
  methods: {
    ...mapActions(['getTasks']),
  },
  created(){
    let token = localStorage.getItem("authentication-token")
    if(!token){
      this.$router.push('/login')
    }
    this.getTasks()
  }
}
</script>

<style>
.app-home {
  position: relative;
}
.nav-bar{
  position: fixed;
  top: 0px;
  width: 100%;
}
.date-bar{
  position: fixed;
  top:50px;
  width: 100%
}

.task-grid{
  margin-top: 100px;
}
</style>