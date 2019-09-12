<template>
    <header
        :class="`Header flex-row align-items-center ${!left && !right ? 'justify-content-center':'justify-content-between'}`"
        :style="headerStyle"
    >
        <!-- left -->
        <span
            class="iconfont icon-menu menu"
            :style="leftStyle"
            v-if="(left || right) && !$slots['left']"
            @click="leftHandle"
        />
        <slot name="left" />
        <!-- title -->
        <span v-if="!$slots['title']">{{title}}</span>
        <slot name="title" />
        <!-- right -->
        <span
            v-if="(left || right) && !$slots['right']"
            :class="`iconfont icon-${right} right`"
            :style="rightStyle"
            @click="rightHandle"
        />
        <slot name="right" />
    </header>
</template>
<script>
export default {
    props: {
        title: { default: '' },
        left: { default: '' },
        right: { default: '' },
        headerStyle: { default: {} },
        leftStyle: { default: {} },
        rightStyle: { default: {} },
        leftHandle: { type: Function, default: () => {} },
        rightHandle: { type: Function, default: () => {} },
    },
    data: function() {
        return {};
    },
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
