<template>
    <div class="footer">
        <span class="bottom"><a href="https://github.com/ahnseokbeom" target="blank"><icon type="mdi" :path="github" color="black"></icon></a></span><br />
        {{today}}. SeokBeom All Rights Reserved
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
    font-family: 'Jua',sans-serif;
    width: 100%;
    height: 10%;
    left : 0%;
    bottom: 0%;
}
a{
    color : none;
    cursor: pointer;
}

</style>
  