<template>
    <div class="app">
        <header id="main_menu" class="header navbar-fixed-top">
            <div class="main_menu_bg">
                <div class="container">
                    <div class="row">
                        <div class="nave_menu">
                            <nav class="navbar navbar-default" id="navmenu">
                                <div class="container-fluid">
                                    <div class="navbar-header">
                                        <span class="title">SeokBeom Portfolio</span>
                                    </div>
                                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
.navbar-nav>li{
    font-size: 200px;
    float: left;
}
.main_menu{
    position: fixed;
    left: 0;
    top: 0;
}
.main_menu_bg{
    margin-top: 0px;
    background-color: #fff;
    border-bottom: 1px solid #FFC26F;
    height: 10vh;
    transition: all 0.3s;
}
.nave_menu{
    margin-left: -12%;
    margin-top: -2%;
    transition: all 0.6s;
}
.title{
    color: black;
    font-size: 3rem;
    margin-top: -50%;
}
</style>

  