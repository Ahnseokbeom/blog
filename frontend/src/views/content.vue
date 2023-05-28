<template>
    <div class="app">
    <div class="home">home<hr style="border:solid 1% gray"></div>
    <div class="about">about<hr style="border:solid 1% gray"></div>
    <div class="education">education<hr style="border:solid 1% gray"></div>
    <div class="skill">
        Skill
        <table>
        </table>
        <hr style="border:solid 1% gray">
    </div>
    <div class="archiving">archiving<hr style="border:solid 1% gray"></div>
    <div class="contact">contact<hr style="border:solid 1% gray"></div>
</div>
</template>  
<script>
export default {
name: 'Skill'
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
.app{
    font-family: 'Jua',sans-serif;
}
div {
    margin-top: 10%;
}
.skill {
    width: 100%;
    height: 100%;
}
.about {
    width: 100%;
    height: 100%;
}
hr {
    margin-top: 2%;
    width:80%;
}
</style>
  