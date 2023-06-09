<template>
    <div :class="{original_color: scrollPosition < 100, change_color: scrollPosition > 100}">
        <p class="h-title">제목</p>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            scrollPosition: null
        }
    },
    methods: {
        updateScroll(){
           this.scrollPosition = window.scrollY
        }
    },
    mounted(){
        window.addEventListener('scroll', this.updateScroll);
    },
}
</script>

<style>

.original_color {
    position: fixed;
    background-color: black;
    width: 100%;
    height: 100px;
    top: 0;
    border-bottom: 1px solid #EBEBEB;
}

.change_color {
    position: fixed;
    background-color: white;
    width: 100%;
    height: 100px;
    top: 0;
    border-bottom: 1px solid #EBEBEB;
}

</style>