<template>
  <div id="app">
    <NavBar class="nav-bar"/>
    <Timetable class="time-table"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Timetable from './components/Timetable'
export default {
  name: 'App',
  components: {
    NavBar,
    Timetable
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0px;
  padding: 0px;
}
.nav-bar{
  position: fixed;
  width: 100%;
}
.time-table{
  margin-top:70px
}

</style>
