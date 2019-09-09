<template>
    <article class="Card">
        <header class="flex-row align-items-center">
            <span class="line"></span>
        </header>
    </article>
</template>
<script>
export default {
    props: ['title', 'subTitle'],
};
</script>
<style lang="scss" scoped>
.Card {
    background: white;
    padding: 0.15rem 0 0.15rem 0.15rem;
    .line {
        width: 0.02rem;
        height: 0.16rem;
        background: #ed424b;
    }
}
</style>
