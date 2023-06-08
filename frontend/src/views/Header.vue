<template>
        <header id="main_menu" class="header navbar-fixed-top">
            <div class="main_menu_bg">
                <div class="container">
                    <div class="row">
                        <div class="nave_menu">
                            <nav class="navbar navbar-default" id="navmenu">
                                <div class="container-fluid">
                                    <div class="navbar-header">
                                        <a class="navbar-brand" id="title"><span>SeokBeom Portfolio</span></a>
                                    </div>
                                    <div class="collapse" id="bs-example-navbar-collapse-1" style="display: block!important;">
                                        <ul class="nav navbar-nav navbar-right">
                                            <li>About</li>
                                            <li>About</li>
                                            <li>About</li>
                                            <li>About</li>
                                            <li>About</li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>  
<script>
export default {
name: 'header'
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
header{
    font-family: 'Jua',sans-serif;
}
.navbar-nav>li{
    font-size: 20px;
    float: left;
}
.main_menu{
    position: fixed;
    left: 0;
    top: 0;
}
.main_menu_bg{
    margin-top: 0px;
    border-bottom: 1px solid #FFC26F;
    height: 10vh;
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

  