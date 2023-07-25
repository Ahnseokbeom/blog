<template>
    <div class="app">     
        <header id="main_menu">
            <div class="main_menu_bg">
                <div class="container_box">
                    <div class="row">
                        <div class="nave_menu">
                            <nav class="navbar navbar-default" id="navmenu">
                                <div class="container-fluid">
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
        <div class="container_title"><span>About Me</span></div>
    </div>
    <div style="background: #F9E0BB20;">
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
    
    <div class="container_title" style="margin-top: 1%;" id="archiving"><span>Archiving</span>  
        <div class="container">
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
        <span style="vertical-align: super; margin-left: 5%; ">Blog</span> </div>
        <div class="box_content">
            <a href="https://beom-growth.tistory.com/" target="blank">Blog</a><br>성장을 위한 블로그입니다.<br>
            <ul style="list-style-type: disc;">
                <li>
                    성장을 위한 발판
                </li><br>
                <li>
                    코딩테스트 연습
                </li><br>
                <li>
                    MySQL 쿼리 연습
                </li>
            </ul>
        </div>
    </div>
    </div>
</div>
<div class="col-sm-12" style="margin-top: 1%;">
        <div class="container_title" id="project"><span>Project</span></div>
    </div>
    <div style="background: #F9E0BB20;">
    <div class="main" >
        <div class="project_main">
        <a href="https://github.com/Ahnseokbeom/DiconProject" target="blank"> 
            <div class="project_title">게임 추천 웹사이트</div>
        </a>
            <div class="project_subtitle">2022.08(1인 개인 프로젝트)</div>
            <div class="project_info">
                <div class="project_img"><img src="@/img/project1.png" style="max-width: 100%; width: 25vw; height: 50vh; margin-bottom: 5%;"/></div>
                <div class="project_desc">
                    <div class="project_desc_main"><b>온라인 게임을 추천해주는 웹사이트입니다.</b><br>
                    취미 중 하나인 온라인 게임을 하던 중 다양한 게임을 하고 싶다는 생각에 개발하였습니다.<br><br>
                    클라이언트는 Vue.js와 Vuetify를 통해서 구현하였고, 서버는 크롤링한 데이터를 Spring을 활용하여 MySQL에 적재한 값을 클라이언트에게 보내주는 형태로 구현하였습니다.</div>
                    <div class="project_desc_1" style="margin-bottom: 1rem;">
                    <div class="project_label">주요 기능</div> 
                    <div class="project_value">온라인 게임 랭킹 확인, 각 장르별 랭킹 확인, 게임별 추천 및 추천하기, 게시물 작성</div>
                    <div class="project_label">Github</div> 
                    <a href="https://github.com/Ahnseokbeom/DiconProject" target="blank"><div class="project_value">이동하기</div></a>
                    <div class="project_label">Frontend</div> 
                    <div class="project_value">Vue.js, JavaScript</div>
                    <div class="project_label">Backend</div> 
                    <div class="project_value">Spring, Spring Data JPA</div>
                    <div class="project_label">Database</div> 
                    <div class="project_value">MySQL</div>
                    <div class="project_label">Deployment</div> 
                    <div class="project_value">netlify,AWS</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project_main">
            <a href="https://github.com/Ahnseokbeom/SolvedSkhu" target="blank">  
            <div class="project_title">알고리즘 문제 추천 솔루션 웹사이트</div>
            </a>
            <div class="project_subtitle">2022.11(4인 개인 프로젝트)</div>
            <div class="project_info">
                <div class="project_img"><img src="@/img/project2.png" style="max-width: 100%; width: 25vw; height: 50vh; margin-bottom: 5%;"/></div>
                <div class="project_desc">
                    <div class="project_desc_main"><b>자신의 수준에 맞는 코딩테스트 문제를 추천해주는 웹사이트입니다.</b><br>
                    팀 프로젝트로 코딩테스트를 준비하는 개발자들에게 도움이 되고자하는 마음에 Solve.ad에서 각자의 티어에 맞는 문제를 추천해주는 웹사이트를 개발하였습니다.<br><br>
                    클라이언트 2인, 데이터베이스 1인, 서버 1인으로 구성된 4인 프로젝트입니다. 그 중 데이터베이스를 맡아서 Solve.ad에서 Java를 활용하여 크롤링한 데이터를
                    MySQL에 적재하여 클라이언트 측으로 보내주는 역할을 하였습니다.<br>그렇게 완성된 웹사이트로 교내 경진대회에서 은상을 수상한 이력도 있습니다.
                    </div>
                    <div class="project_desc_1" style="margin-bottom: 1rem;">
                    <div class="project_label">주요 기능</div> 
                    <div class="project_value">개인 수준에 맞는 문제 추천, 코테문제 과제 채점, 랜덤 문제 추천, 게시물 작성</div>
                    <div class="project_label">Github</div> 
                    <a href="https://github.com/Ahnseokbeom/SolvedSkhu" target="blank"><div class="project_value">이동하기</div></a>
                    <div class="project_label">Frontend</div> 
                    <div class="project_value">React,JavaScript</div>
                    <div class="project_label">Backend</div> 
                    <div class="project_value">Java, Node.js</div>
                    <div class="project_label">Database</div> 
                    <div class="project_value">MySQL</div>
                    <div class="project_label">Deployment</div> 
                    <div class="project_value">Oracle Cloud</div>
                    </div>
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
    <div class="container_title" style="margin-top: 1%;" id="contact"><span>Contact</span><br />
        <div style="font-weight: 600; text-align: center; margin-left: 25%; margin-top: 3%;">
            <tr><span><icon type="mdi" :path="account"></icon> 이름 : 안석범</span></tr>
            <tr><span><icon type="mdi" :path="calendar"></icon> 생년월일 : 1998.03.12</span></tr>
            <tr><span><icon type="mdi" :path="phone"></icon> 010-2374-0312</span></tr>
            <tr><span><icon type="mdi" :path="email"></icon> seokbeom0312@gmail.com</span></tr>
        </div>
    </div>
    <div class="OnTop"><a href="javascript:window.scrollTo(0,0);"><icon type="mdi" :path="arrow" color="#884A39" size="50"></icon></a></div>
</div>
</template>  
<script>
import Icon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiEmailOutline, mdiCalendarBlank, mdiPhone, mdiArrowUpDropCircle} from '@mdi/js'
export default {
name: 'Content',
components: {Icon},
	data() {
		return {
	  		account: mdiAccount,
            email : mdiEmailOutline,
            calendar : mdiCalendarBlank,
            phone : mdiPhone,
            arrow : mdiArrowUpDropCircle,
            scrollPosition: null
		}
	}
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
@import '@/css/style.css'
</style>
  