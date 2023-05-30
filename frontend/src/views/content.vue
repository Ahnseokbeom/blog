<template>
    <div class="app">
    <div class="home">home<hr style="border:solid 1% gray"></div>
    <div class="about">About Me<br />
        <div class="left" style="width: 20%;">
            <tr><img src="@/img/photo.jpeg" /></tr>
        </div>
        <div class="left">
            <tr><span><icon type="mdi" :path="account"></icon> 이름 : 안석범</span></tr>
            <tr><span><icon type="mdi" :path="calendar"></icon> 생년월일 : 98.03.12</span></tr>
            <tr><span><icon type="mdi" :path="phone"></icon> 010-2374-0312</span></tr>
            <tr><span><icon type="mdi" :path="email"></icon> seokbeom0312@gmail.com</span></tr>
        </div>
    <hr style="border:solid 1% gray"></div>
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
import Icon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiEmailOutline, mdiCalendarBlank, mdiPhone} from '@mdi/js'
export default {
name: 'Skill',
components: {Icon},
	data() {
		return {
	  		account: mdiAccount,
            email : mdiEmailOutline,
            calendar : mdiCalendarBlank,
            phone : mdiPhone
		}
	}
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
.app{
    font-family: 'Jua',sans-serif;
}
img {
    width: 60%;
    height: 60%;
    margin-left: 23vw;
}
.left{
    float: left;
}
.right{
    float: right;
}
span{
    margin : 2vw 0 0 20vw;
    font-size: 1.3vw;
    float: left;
}
.skill {
    font-size: 2vw;
    margin-top: 2%;
    width: 100%;
    height: 100%;
}
.about {
    font-size: 2vw;
    margin-top: 2%;
    width: 100%;
    height: 100%;
}
hr {
    margin-top: 2%;
    width:80%;
}
</style>
  