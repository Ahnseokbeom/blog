<template>
    <div class="footer">
        <div>
        <span><a href="https://github.com/ahnseokbeom" target="blank"><img class="github" src="@/img/github.png" ></a></span>
        <span><a href="https://beom-growth.tistory.com/" target="blank"><img class="tistory" src="@/img/tistory.png" ></a></span><br/>
        <span>{{today}}. SeokBeom All Rights Reserved</span>
        </div>
    </div>
</template>  
<script>
export default {
name: 'footer',
    data(){
        var today = new Date().getFullYear();
        return{
            today
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Jua',sans-serif;
    width: 100%;
    background: #C38154;
    color:white;
    height: 8vh;
}
a{
    color : none;
    cursor: pointer;
}
.github{
    color : white;
    width: 30px;
    height: 30px;
}
.tistory{
    color : white;
    width: 30px;
    height: 30px;
}

</style>
  