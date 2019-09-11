<template>
    <article class="Card">
        <Card class="box">
            <div slot="header">
                <h3 class="title">{{data.title}}</h3>
                <div class="flex-row align-items-center user">
                    <span class="tag">{{data.tag}}</span>
                    <span>{{data.time}}</span>
                </div>
            </div>
            <img slot="content" :src="data.picture" />
        </Card>
    </article>
</template>
<script>
import { Card } from 'vux';

export default {
    components: { Card },
    props: ['data'],
    data: function() {
        return {};
    },
    mounted: function() {},
    methods: {},
};
</script>
<style lang="scss" scoped>
.Card {
    margin: 0.075rem;
    .box {
        padding: 0.07rem;
        .title {
            font-size: 0.14rem;
            height: 0.2rem;
            line-height: 0.2rem;
            color: #ff88af;
            font-weight: bold;
            margin: 0;
        }
        .user {
            margin-top: 0.07rem;
            font-size: 0.12rem;
            height: 0.17rem;
            line-height: 0.17rem;
            color: #b4b4b4;
            .tag {
                color: #ff88af;
                margin-right: 0.1rem;
            }
        }
        img {
            width: 100%;
            display: block;
            margin-top: 0.07rem;
        }
    }
}
</style>
