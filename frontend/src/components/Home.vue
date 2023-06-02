<template>
        <div class="content">
            <Content />
        </div>
        <div class="footer"><Footer /></div>
</template>
<script>
import Footer from '../views/Footer.vue'
import Content from '../views/content.vue'
export default{
    name : 'Home',
    components :{
        Footer,
        Content,
    }
    
}
</script>
<style scoped>
</style>
