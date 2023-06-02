<template>
    <div class="footer">
        <span><a href="https://github.com/ahnseokbeom" target="blank"><icon type="mdi" :path="github" color="white"></icon></a></span>
        <span>{{today}}. SeokBeom All Rights Reserved</span>
    </div>
</template>  
<script>
import Icon from '@jamescoyle/vue-icon'
import {mdiGithub} from '@mdi/js'
export default {
name: 'footer',
components : {Icon},
    data(){
        var today = new Date().getFullYear();
        return{
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

</style>
  