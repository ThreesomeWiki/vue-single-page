<template>
    <div class="Hupu">
        <Header>
            <nav slot="title" class="header">
                <ul>
                    <li v-for="(v,k) in navs" :key="k">{{v}}</li>
                </ul>
            </nav>
        </Header>
        <div class="ContentFirst body"></div>
    </div>
</template>
<script>
import Header from '@/components/Header';
import Card from './component/Card';

export default {
    components: { Header, Card },
    data: function() {
        return {
            navs: ['足球', '新闻', '比赛', '社区', '游戏', '积分榜', '射手榜'],
        };
    },
    mounted: function() {},
    methods: {},
};
</script>>
<style lang="scss" scoped>
.Hupu {
    .header {
        min-width: 3.75rem;
        height: 100%;
        background: white;
        color: #e01b1b;
        ul {
            margin: 0;
            padding: 0;
            height: 100%;
            li {
                display: inline-block;
                font-size: 0.14rem;
                margin-right: 0.2rem;
                height: 100%;
            }
        }
    }
    .body {
        background: white;
        div {
            box-sizing: border-box;
        }
        .cell {
            height: 0.44rem;
        }
    }
}
</style>
