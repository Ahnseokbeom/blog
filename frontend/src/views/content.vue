<template>
    <div class="app">
    <div class="title">
        <div class="title2"> 
             <span>안녕하세요 개발자 안석범입니다.</span>
             <hr style="border: solid 1% black; width: 5%;">
        </div>    
        <hr style="border:solid 1% gray"></div>
        <div class="title">Contact<hr style="border:solid 1% gray"></div>
    <div class="title">Education<br />
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
    <div class="title">
        Skill
        <table>
        </table>
        <hr style="border:solid 1% gray">
    </div>
    <div class="title">Archiving<hr style="border:solid 1% gray"></div>
    <div class="title">About Me<br />
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
</div>
</template>  
<script>
import Icon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiEmailOutline, mdiCalendarBlank, mdiPhone, mdiGithub} from '@mdi/js'
export default {
name: 'Content',
components: {Icon},
	data() {
		return {
	  		account: mdiAccount,
            email : mdiEmailOutline,
            calendar : mdiCalendarBlank,
            phone : mdiPhone,
            github : mdiGithub,
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
.title2{
    top: 10%;
    margin-left: 30%;
    width: 40vw;
    height: 50vh;
    background-image: url('@/img/home2.jpeg');
    background-repeat: no-repeat;
}
.title2 span{
    margin: auto;
    font-size: 1.5vw;
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
tr span{
    margin : 2vw 0 0 20vw;
    font-size: 1.3vw;
    float: left;
}
.title {
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
  