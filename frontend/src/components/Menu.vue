<template>
    <div class="menu">
        <div class="nav"></div>
    </div>
</template>  
<script>
export default {
name: 'menu'
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
    width: 30%;
    height: 100%;
    background: yellow;
    left : 0%;
    top: 0%;
    position: absolute;
}
.nav{
    float: left;
}
.nav table tr{
    padding-top: 20vh;
    padding-left: 25vh;
}
</style>
  