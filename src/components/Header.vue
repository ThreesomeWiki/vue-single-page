<template>
    <header class="Header flex-row align-items-center justify-content-between" :style="headerStyle">
        <span class="iconfont icon-menu menu" v-if="left" @click="leftHandle"></span>
        <span>{{title}}</span>
        <span :class="`iconfont icon-${right} right`" v-if="left"></span>
    </header>
</template>
<script>
export default {
    props: ['title', 'left', 'right', 'headerStyle', 'leftHandle'],
    mounted: function() {},
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
    padding: 0 0.15rem;
    .menu {
        color: white;
        font-size: 0.24rem;
    }
    .right {
        color: white;
        font-size: 0.24rem;
    }
}
</style>
