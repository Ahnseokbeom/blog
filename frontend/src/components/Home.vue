<template>
    <!-- <div class="header"><Header /></div> -->
         <div class="content">
            <Content />
        </div>
        <div class="footer"><Footer /></div> 
        <div>
            <Test />
        </div>
</template>
<script>
// import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
import Content from '@/views/content.vue'
// import Test from '@/views/Test.vue'
export default{
    name : 'Home',
    components :{
        Footer,
        Content,
        // Header
        // Test
    }
    
}
</script>
<style scoped>
</style>
