<template>
    <div class="header">
        <Header />
    </div>
    <div class="content">
        <Skill />
    </div>
    <div class="footer"><Footer /></div>
</template>
<script>
import Header from '../views/Header.vue'
import Footer from '../views/Footer.vue'
import Skill from '../views/content.vue'
export default{
    name : 'Home',
    components :{
        Header,
        Footer,
        Skill,
    }
    
}
</script>
<style scoped>
</style>
