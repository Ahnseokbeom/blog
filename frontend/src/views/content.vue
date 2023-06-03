<template>
    <div class="app">
    <div class="banner" style="opacity: 95%;">
        <div class="top">
            <span>안녕하세요 개발자 안석범입니다</span>
            <span>Welcome to My Portfolio</span>
        </div>
        <div class="menu"> 
            <span class="nav">About Contact Education Skill Archiving</span>
    </div>
    </div>
    <div class="title"><span>About Me</span><br/></div>
    <div class="archiving_title"><span>Archiving</span>  
        <div class="archiving_container">
        <div class="archiving_box">
            <div class="archiving_box_title">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" height="40">
        <span style="vertical-align: super; margin-left: 5%;">Github</span> </div>
        <div class="archiving_box_content">
            <a href="https://github.com/Ahnseokbeom" target="blank">github.com/Ahnseokbeom</a><br>소스 저장소입니다.
            
            <ul style="list-style-type: disc;">
                <li>
                    팀 프로젝트 / 개인 프로젝트
                </li>
                <li>
                    교육과정 시 배운 수업의 소스코드
                </li>
                <li>
                    코딩테스트 연습
                </li>
            </ul>
        </div>
    </div>
    <div class="archiving_box">
            <div class="archiving_box_title">
            <img src="https://cdn-icons-png.flaticon.com/512/3959/3959542.png" height="40">
        <span style="vertical-align: super; margin-left: 5%; ">Portfolio</span> </div>
        <div class="archiving_box_content">
            <a href="https://github.com/Ahnseokbeom/blog" target="blank">Portfolio</a><br>포트폴리오용 웹사이트입니다.
            <ul style="list-style-type: disc;">
                <li>
                    제 자신에 대해 소개해줍니다
                </li>
            </ul>
        </div>
    </div>
    </div>
</div>
<div class="title"><span>Education</span><br/>
        <div class="left"><img class="school" src="@/img/school.jpeg"></div>
        <div class="right"><span class="content">
            현재까지 삶 적기(예시 - 2023.02 성공회대학교 졸업)
        </span> </div>
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
    <a href="javascript:window.scrollTo(0,0);">Back to top</a>
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
a {
    text-decoration: none;
}
.archiving_title {
    margin-top: 5%;
    color: #C38154;
    background: #F9E0BB37;
    padding: 45px 0 30px 0;
    font-weight: 200;
    font-size: 3rem;
    text-align: center;
    word-break: kiip-all;
    border-bottom: 0.01rem solid #fff;
}
.archiving_container{
    display: flex;
    flex-flow: column wrap;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.archiving_box {
    flex-shrink: 0;
    width: 24rem;
    padding: 1.5rem;
    margin: 20px;
    border-radius: 0.7rem;
    background-color: #fff;
    box-shadow: 1rem 1rem 1rem 0 rgb(255 255 255 / 20%);
}
.archiving_box_title{
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
    font-weight: 700;
    font-size: 1.4rem;
    color: #56585C;
}
.archiving_box_content{
    color : black;
    font-size: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
}
.archiving_box_content li{
    float: left;
    list-style-position: inside;
    text-indent: -20px;
    padding-left: 20px;
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
    font-size: 3rem;
    margin-top: 5%;
    width: 100%;
    height: 60vh;
    color : #C38154;
    background: #F9E0BB37;
    padding: 45px 0 30px 0;
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
  