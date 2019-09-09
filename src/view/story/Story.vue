<template>
    <div class="content">
        <Header title="小说" />
        <div class="ContentFirst">1234</div>
    </div>
</template>
<script>
import Header from '@/components/Header';

export default {
    components: { Header },
};
</script>>
<style lang="scss" scoped>
.content {
    flex: 1;
    .body {
        display: flex;
        flex: 1;
    }
}
</style>
