<template>
  <div id="app">
    <TaskGrid class="task-grid"/>
    <DateBar class="date-bar"/>
    <NavBar class="nav-bar"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import DateBar from './components/DateBar';
import TaskGrid from './components/TaskGrid'

export default {
  name: 'App',
  components: {
    NavBar,
    DateBar,
    TaskGrid
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; 
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav-bar{
  position: fixed;
  top: 0px;
  width: 100%;
}
.date-bar{
  position: fixed;
  top:70px;
  width: 100%
}

.task-grid{
  margin-top: 120px;
}

</style>
