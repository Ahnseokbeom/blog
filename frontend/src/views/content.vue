<template>
    <div class="app">
    <div class="banner" style="opacity: 95%;">
        <div class="top">
            <span>안녕하세요 개발자 안석범입니다</span>
            <span>Welcome to My Portfolio</span>
        </div>
        <div class="menu"> 
            <span class="nav">Contact Education Skill Archiving About</span>
    </div>
    </div>
    <div class="title"><span>Education</span><br/>
        <div class="left"><img class="school" src="@/img/school.jpeg"></div>
        <div class="right"><span class="content">
            현재까지 삶 적기(예시 - 2023.02 성공회대학교 졸업)
        </span> </div>
    </div>
    <div class="title"><span>Archiving</span><br/>
        <div class="left"><img class="school" src="@/img/school.jpeg"></div>
        <div class="right"><img class="school" src="@/img/school.jpeg"></div>
    </div>
    <div class="title"><span>Contact</span><br />
        <!-- <div class="left" style="width: 20%;">
            <tr><img class="photo" src="@/img/photo.jpeg" /></tr>
        </div> -->
        <div class="left">
            <tr><span><icon type="mdi" :path="account"></icon> 이름 : 안석범</span></tr>
            <tr><span><icon type="mdi" :path="calendar"></icon> 생년월일 : 98.03.12</span></tr>
            <tr><span><icon type="mdi" :path="phone"></icon> 010-2374-0312</span></tr>
            <tr><span><icon type="mdi" :path="email"></icon> seokbeom0312@gmail.com</span></tr>
        </div>
    </div>
    <div class="title"><span>Skill</span><br/>
        <div class="left"><img class="school" src="@/img/school.jpeg"></div>
    </div>
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
.photo {
    width: 60%;
    height: 60%;
    margin-left: 23vw;
}
.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: bottom;
    margin-top: -10%;
    width: 100%;
    height: 50vh;
    background-image: url('@/img/banner.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.top{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 200%;
    opacity: 80%;
}
.menu{
    position: absolute;
    margin: -5% 0 -30% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8%;
    background: #FFC26F;
    color: white;
}
.menu .nav{
    font-size: 1.5vw;
    word-spacing: 5em;
}
.left{
    float: left;
    width: 50%;
}
.right{
    float: right;
    width: 50%;
}
.right .content{
    font-size: 1vw;
}
tr span{
    margin : 2vw 0 0 20vw;
    font-size: 1.3vw;
    float: left;
}
.title {
    font-size: 3vw;
    margin-top: 5%;
    width: 100%;
    height: 60vh;
    color : #C38154;
    background: #F9E0BB37;
}
.school{
    margin-top: 5%;
    width: 60%;
    height: 40vh;
}
hr {
    margin-top: 2%;
    width:80%;
}
</style>
  