<template>
    <div class="header">
        <div class="left">
            SeokBeom's PPT
        </div>
        <div class="right">
            <table>
                <td>Home</td>
                <td>About</td>
                <td>Education</td>
                <td>Skill</td>
                <td>Archiving</td>
                <td>Contact</td>
            </table>
        </div>
    </div>
</template>  
<script>
import 'primeicons/primeicons.css';
export default {
name: 'header'
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr{
    font-size: 3vh;
}
.header {
    width: 100%;
    height: 10%;
    background: yellow;
    left : 0%;
    top: 0%;
    position: absolute;
}
.left{
    float: left;
}
.right{
    float: right;
}
.right table tr{
    padding-top: 20vh;
    padding-left: 25vh;
}
</style>

  