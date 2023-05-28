<template>
        <div class="header">
            <Header />
        </div>
        <div class="content">
            <Content />
        </div>
        <div class="footer"><Footer /></div>
</template>
<script>
import Header from '../views/Header.vue'
import Footer from '../views/Footer.vue'
import Content from '../views/content.vue'
export default{
    name : 'Home',
    components :{
        Header,
        Footer,
        Content,
    }
    
}
</script>
<style scoped>
</style>
