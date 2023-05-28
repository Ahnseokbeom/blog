<template>
    <div class="app">
    <div class="header">
        <div class="left">
            SeokBeom Portfolio
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
</div>
</template>  
<script>
export default {
name: 'header'
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
.app{
    font-family: 'Jua',sans-serif;
}
td{
    font-size: 130%;
}
.header {
    width: 95%;
    height: 10%;
    left : 0%;
    top: 0%;
    position: fixed;
}
.left{
    margin-top: 1%;
    margin-left: 3%;
    float: left;
    font-size: 170%;
}
.right{
    float: right;
}
.right table td{
    padding-top: 1.5vh;
    padding-left: 5vw;
}
</style>

  