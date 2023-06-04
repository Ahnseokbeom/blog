<template>
    <div class="footer">
        <div class="left">
        <span><a href="https://github.com/ahnseokbeom" target="blank"><icon type="mdi" :path="github" color="white"></icon></a></span>
        <span>{{today}}. SeokBeom All Rights Reserved</span>
        </div>
        <div class="right">
            <icon type="mdi" :path="phone"></icon> 010-2374-0312<br>
            <icon type="mdi" :path="email"></icon> seokbeom0312@gmail.com
        </div>
    </div>
</template>  
<script>
import Icon from '@jamescoyle/vue-icon'
import {mdiGithub,mdiAccount, mdiEmailOutline, mdiCalendarBlank, mdiPhone} from '@mdi/js'
export default {
name: 'footer',
components : {Icon},
    data(){
        var today = new Date().getFullYear();
        return{
            account: mdiAccount,
            email : mdiEmailOutline,
            calendar : mdiCalendarBlank,
            phone : mdiPhone,
            github : mdiGithub,
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
.right{
    margin-right: -40%;
    float: right;
}
.left {
    margin-right: 30%;
}

</style>
  