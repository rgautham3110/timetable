<template>
  <div class="home">
      <div class="name">{{name}}</div>
      <img :src="image" class="profile-picture"/>
      <img src="../assets/arrow_down.png" class="arrow"/>
  </div>
</template>

<script>
export default {
    name: 'Profile',
    props: ['name', 'image']
}
</script>

<style scoped>

.name{
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 600;
}

.home{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile-picture{
    border-radius: 10px;
    margin: 10px;
    height: 50px;
    width: 50px;
    box-shadow: 0 0 10px;
}

.arrow{
    height:24px;
    width: 24px;
    margin-right: 10px;
}

</style>