<template>
  <Header />
  <Menu />
  <AboutMe />
  <Skill />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import AboutMe from './components/AboutMe.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    AboutMe,
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
