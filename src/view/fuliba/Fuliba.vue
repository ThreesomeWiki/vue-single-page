<template>
    <div class="Fuliba">
        <Header
            title="福利吧"
            :left="true"
            right="search"
            :headerStyle="{'background':'white'}"
            :leftHandle="headerLeft"
            :leftStyle="{color:'#777'}"
            :rightStyle="{color:'#777'}"
        >
            <img
                slot="title"
                src="https://tva1.sinaimg.cn/large/007awY0bly1g2oaya6trhj307i01x3yx.jpg"
                style="height:20px;"
            />
        </Header>
        <div class="ContentFirst body">
            <Card v-for="(v,k) in list" :key="k" :data="v" />
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header';
import Card from './component/Card';

export default {
    components: { Header, Card },
    data: function() {
        return {
            list: [
                {
                    title: '淘宝优惠商品汇总，9月12日9点更新-福利吧',
                    picture:
                        'https://img.alicdn.com/imgextra/i2/3919613880/TB2CMoAEQOWBuNjSsppXXXPgpXa_!!3919613880.jpg',
                    zan: 9226,
                    time: '2019-09-12',
                },
                {
                    title: '2019福利汇总第124期：都走了',
                    picture: 'https://tva1.sinaimg.cn/mw690/006OBeunly1g6vaxjxh3uj31400u04qp.jpg',
                    zan: 58,
                    time: '2019-09-11',
                },
                {
                    title: '韩国女主播edoongs2直播意外走光，含泪宣告退出直播行业',
                    picture: 'https://tva1.sinaimg.cn/large/007qbgWbgy1g6vften5c2j311y0lcgqf.jpg',
                    zan: 99,
                    time: '2019-09-11',
                },
                {
                    title: '红警死了十年，玩家们做的MOD却一个比一个好玩',
                    picture: 'https://tva1.sinaimg.cn/large/007qbgWbgy1g6upa6leksj30on0cm47q.jpg',
                    zan: 22,
                    time: '2019-09-10',
                },
                {
                    title: '推荐一款小游戏TAP TO DUAL（IOS）',
                    picture: 'https://tva1.sinaimg.cn/large/007qbgWbgy1g6tjm9hl6sj30ku0d174q.jpg',
                    zan: 100,
                    time: '2019-09-09',
                },
            ],
        };
    },
    mounted: function() {},
    methods: {
        headerLeft: function() {
            this.$bus.emit('app-show');
        },
    },
};
</script>>
<style lang="scss" scoped>
.Fuliba {
    .body {
        background: #f3efe0;
        div {
            box-sizing: border-box;
        }
        .cell {
            height: 0.44rem;
        }
    }
}
</style>
