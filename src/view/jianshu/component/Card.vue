<template>
    <article class="Card">
        <Card class="box">
            <article slot="content" class="flex-row justify-content-between">
                <div class="left flex-column justify-content-between">
                    <span class="title">{{data.title}}</span>
                    <div class="flex-row justify-content-between align-items-center">
                        <span class="time">{{data.time}}</span>
                        <span class="zan">赞{{data.zan}}</span>
                    </div>
                </div>
                <img :src="data.picture" alt />
            </article>
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
    .box {
        padding: 0.12rem 0.15rem;
        .left {
            width: 2.1rem;
            .title {
                color: #555;
                font-size: 0.15rem;
                line-height: 0.2rem;
                text-align: justify;
            }
            .time {
                color: #bbb;
                font-size: 0.12rem;
                line-height: 0.17rem;
            }
            .zan {
                color: #bbb;
                font-size: 0.12rem;
                line-height: 0.12rem;
            }
        }
        img {
            width: 1.2rem;
            height: 0.82rem;
        }
    }
}
</style>
