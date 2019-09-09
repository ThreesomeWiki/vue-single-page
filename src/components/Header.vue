<template>
    <header class="Header flex-row align-items-center justify-content-center">
        <span>{{title}}</span>
    </header>
</template>
<script>
export default {
    props: ['title'],
    mounted: function() {
        console.log(this.title);
    },
};
</script>
<style lang="scss" scoped>
.Header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 0.44rem;
    background: black;
    color: white;
    font-size: 0.2rem;
}
</style>
