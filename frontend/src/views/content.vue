<template>
    <div class="app">     
        <header id="main_menu" class="header navbar-fixed-top">
            <div class="main_menu_bg">
                <div class="container">
                    <div class="row">
                        <div class="nave_menu">
                            <nav class="navbar navbar-default" id="navmenu">
                                <div class="container-fluid" style="">
                                    <div class="navbar-header">
                                        <a class="navbar-brand" id="title"><span>SeokBeom Portfolio</span></a>
                                    </div>
                                    <div class="collapse.show" id="bs-example-navbar-collapse-1">
                                        <ul class="nav">
                                            <a href="#about"><li>About</li></a>
                                            <a href="#archiving"><li>Archiving</li></a>
                                            <a href="#project"><li>Project</li></a>
                                            <a href="#education"><li>Education</li></a>
                                            <a href="#contact"><li>Contact</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    <div class="col-sm-12" id="about">
        <div class="archiving_title"><span>About Me</span></div>
    </div>
    <div class="main" style="background: #F9E0BB20;">
        <div class="single">
            <div class="row">
                <div class="col-sm-6">
                    <div class="single_left">
                        <img src="@/img/reader.jpeg" style="max-width: 100%; width: 35vw; height: 35vh; margin-bottom: 5%;"/>
                    </div>
                </div>
                <div class="col-sm-5 col-sm-push-1" style="text-align: left; margin-top: 1%;">
                    <div class="single">
                        <h2>빠르게 성장하는 개발자</h2>
                        <h3>뛰어난 적응력 빠른 습득력</h3><br>
                        <p>이끌어가는 힘이 있는 사람</p>
                        <p>새로운 환경에서도 적응을 잘하는 사람</p>
                        <p>뒤쳐지는 것을 싫어하며 항상 앞에서 나아가려고 노력하는 개발자가 되겠습니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="single" style="margin-top: 5%;">
            <div class="row">
                <div class="col-sm-6">
                    <div class="single_left" style="margin-top: 5%; text-align: left; margin-left: 20%;">
                        <div class="single">
                        <h2>배움의 재미를 아는 개발자</h2>
                        <h3>항상 배우겠다는 자세로 임하는 사람</h3><br>
                        <p>새로운 방법을 시도하는것에 두려움이 없는 사람</p>
                        <p>경력없는 주니어 개발자이지만 열심히 하겠습니다.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-5">
                    <img src="@/img/study.jpeg" style="max-width: 100%; width: 35vw; height: 35vh; margin-bottom: 5%;"/>
                    
                </div>
            </div>
        </div>
    </div>
    
    <div class="archiving_title" style="margin-top: 1%;" id="archiving"><span>Archiving</span>  
        <div class="archiving_container">
        <div class="box">
            <div class="box_title">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" height="40">
        <span style="vertical-align: super; margin-left: 5%;">Github</span> </div>
        <div class="box_content">
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
    <div class="box">
            <div class="box_title">
            <img src="https://cdn-icons-png.flaticon.com/512/3959/3959542.png" height="40">
        <span style="vertical-align: super; margin-left: 5%; ">Portfolio</span> </div>
        <div class="box_content">
            <a href="https://github.com/Ahnseokbeom/blog" target="blank">Portfolio</a><br>포트폴리오용 웹사이트입니다.
            <ul style="list-style-type: disc;">
            </ul>
        </div>
    </div>
    </div>
</div>
<div class="col-sm-12" style="margin-top: 1%;">
        <div class="archiving_title" id="project"><span>Project</span></div>
    </div>
    <div class="main" style="background: #F9E0BB20;">
        <div class="project_main">
            <div class="project_title">게임 추천해주세요</div>
            <div class="project_subtitle">2022.08(1인 개인 프로젝트)</div>
            <div class="project_info">
                <div class="project_img"><img src="@/img/project1.png" style="max-width: 100%; width: 25vw; height: 50vh; margin-bottom: 5%;"/></div>
                <div class="project_desc">
                    <div class="project_desc_main"><b>안녕하세요 반갑습니다 하하하</b></div>
                    <div class="project_desc_1" style="margin-bottom: 1rem;">
                    <div class="project_label">메롱메롱</div> 
                    <div class="project_value">푸하하하</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project_main">
            <div class="project_title">코딩테스트 문제 추천해주세요</div>
            <div class="project_subtitle">2022.11(4인 개인 프로젝트)</div>
            <div class="project_info">
                <div class="project_img"><img src="@/img/project2.png" style="max-width: 100%; width: 25vw; height: 50vh; margin-bottom: 5%;"/></div>
                <div class="project_desc">
                    <div class="project_desc_main"><b>안녕하세요 반갑습니다 하하하</b></div>
                    <div class="project_desc_1" style="margin-bottom: 1rem;">
                    <div class="project_label">메롱메롱</div> 
                    <div class="project_value">푸하하하</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project_main">
            <div class="project_title">개인 포트폴리오</div>
            <div class="project_subtitle">2023.06(1인 개인 프로젝트)</div>
            <div class="project_info">
                <div class="project_img"><img src="@/img/project3.png" style="max-width: 100%; width: 25vw; height: 50vh; margin-bottom: 5%;"/></div>
                <div class="project_desc">
                    <div class="project_desc_main"><b>안녕하세요 반갑습니다 하하하</b></div>
                    <div class="project_desc_1" style="margin-bottom: 1rem;">
                    <div class="project_label">메롱메롱</div> 
                    <div class="project_value">푸하하하</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="title" style="margin-top: 1%;" id="education"><span>Education</span><br/>
        <div class="left"><div class="edutitle">
                금곡고등학교 졸업
                <div class="educontent">
                    미디어콘텐츠학과<br>
                    2014.03 ~ 2017.02
                </div>
            </div>
            <div class="edutitle">
                성공회대학교 졸업
                <div class="educontent">
                     디지털콘텐츠학과 / 소프트웨어학과(복수전공)<br>
                    2017.03 ~ 2023.02
                </div>
            </div></div>
        <div class="right">
            <img class="school" src="@/img/school.jpeg">
        </div>
    </div>
    <div class="archiving_title" style="margin-top: 1%;" id="contact"><span>Contact</span><br />
        <!-- <div class="left" style="width: 20%;">
            <tr><img class="photo" src="@/img/photo.jpeg" /></tr>
        </div> -->
        <div style="font-weight: 600; text-align: center; margin-left: 25%; margin-top: 3%;">
            <tr><span><icon type="mdi" :path="account"></icon> 이름 : 안석범</span></tr>
            <tr><span><icon type="mdi" :path="calendar"></icon> 생년월일 : 98.03.12</span></tr>
            <tr><span><icon type="mdi" :path="phone"></icon> 010-2374-0312</span></tr>
            <tr><span><icon type="mdi" :path="email"></icon> seokbeom0312@gmail.com</span></tr>
        </div>
    </div>
    <div class="OnTop"><a href="javascript:window.scrollTo(0,0);"><icon type="mdi" :path="arrow" color="#884A39" size="50"></icon></a></div>
</div>
</template>  
<script>
import Icon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiEmailOutline, mdiCalendarBlank, mdiPhone, mdiGithub, mdiArrowUpDropCircle} from '@mdi/js'
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
            arrow : mdiArrowUpDropCircle
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
p {
    line-height: 1.375rem;
    margin-bottom: 30px;
    font-size: 1.2rem;
}
.project_main{
    width: 50%;
    padding: 3rem;
    margin: 0 auto 2rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 1rem 1rem 1rem 0 rgba(68,68,68,.2);
    -webkit-box-shadow: 1rem 1rem 1rem 0 rgba(68,68,68,.2);
}
.project_title{
    padding-bottom: 0.5rem;
    font-weight: 400;
    font-size: 2.5rem;
    color: #222;
    text-align: center;
}
.project_subtitle{
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
    color: #6c757d;
    text-align: center;
    opacity: .8;
}
.project_info{
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-pack: center;
}
.project_img{
    overflow: hidden;
    position: relative;
    width: 50%;
    margin-right: 3rem;
}
.project_desc{
    width: -moz-calc(50% - 3rem);
    width: calc(50% - 3rem);
}
.project_desc_title{
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    font-weight: 400;
    font-size: 1rem;
}
.project_label{
    display: inline-block;
    vertical-align: top;
    width: 8.4rem;
    font-weight: 900;
    font-size: 1rem;
}
.project_value{
    display: inline-block;
    vertical-align: bottom;
    width: -moz-calc(100% - 8.4rem);
    width: calc(100% - 8.4rem);
    font-weight: 400;
    font-size: 1rem;
}
.hello {
    width: 115px;
    height: 49px;
    position: relative;
    box-sizing: border-box;
    overflow: visible;
    visibility: inherit;
    display: inline-block;
    list-style-type: none;
}
.OnTop {
    position: fixed;
    right: 0;
    bottom: 1%;
}
.photo {
    width: 60%;
    height: 60%;
    margin-left: 23vw;
}
a {
    text-decoration: none;
}
.about_box { 
    text-align: left;   
    width: 40rem;
    height: 25rem;
    margin: 2rem;
}
.about_box_1{
    width: 40rem;
    height: 25rem;
    background-image: url(@/img/school.jpeg);
}
.about_box_2{
    width: 40rem;
    height: 25rem;
    background-image: url(@/img/photo.jpeg);
}
.archiving_title {
    color: #C38154;
    background: #F9E0BB20;
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
.box {
    flex-shrink: 0;
    width: 30rem;
    padding: 1.5rem;
    margin: 5rem;
    border-radius: 0.7rem;
    background-color: #fff;
    box-shadow: 1rem 1rem 1rem 0 rgba(68,68,68,.2);
    -webkit-box-shadow: 1rem 1rem 1rem 0 rgba(68,68,68,.2);
}
.box_title{
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
    font-weight: 700;
    font-size: 1.4rem;
    color: #56585C;
}
.box_content{
    color : black;
    font-size: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
}
.box_content li{
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
    width: 100%;
    height: 200px;
    background:url('@/img/banner.png') no-repeat top center;
    background-size: contain;
}
.top{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 3rem;
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
.edutitle{
    background: none;
    color : black;
    font-size: 1.5rem;
    margin-top: 3%;
}
.educontent{
    font-size: 1rem;
}
tr span{
    margin : 2vw 0 0 20vw;
    font-size: 1.3vw;
    float: left;
}
.title {
    font-size: 3rem;
    margin-top: 1%;
    width: 100%;
    height: 60vh;
    color : #C38154;
    background: #F9E0BB20;
    padding: 45px 0 30px 0;
}
.school{
    width: 60%;
    height: 40vh;
}
hr {
    margin-top: 2%;
    width:80%;
}
li{
    font-size: 1.3rem;
    margin-right: 40px;
}
a {
    text-decoration: none;
    color : black;
}
.main_menu{
    position: fixed;
    left: 0;
    top: 0;
}
.main_menu_bg{
    margin-top: 0px;
    border-bottom: 1px solid #FFC26F;
    height: 8vh;
    transition: all 0.3s;
}
.nave_menu{
    margin-left: -12%;
    margin-top: -2%;
    transition: all 0.6s;
}
#title{
    text-align: center;
    color: black;
    font-size: 2rem;
}
.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
</style>
  