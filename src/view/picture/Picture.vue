<template>
    <div class="Picture">
        <Header
            title="妹子图"
            :left="true"
            right="search"
            :headerStyle="{'background':'#ff6b9c'}"
            :leftHandle="headerLeft"
        />
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
                    title: '长相清纯身材太有料 甜美萌妹朱可儿衣衫渐退露豪乳',
                    tag: '性感妹子',
                    time: '2019-09-10',
                    picture: 'http://localhost:3000/meizi/2019/07/02b40.jpg',
                },
                {
                    title: '宅男女神SOLO尹菲大尺度性感私照 女仆扮演体贴可人',
                    tag: '性感妹子',
                    time: '2019-09-10',
                    picture: 'http://localhost:3000/meizi/2019/07/01c14.jpg',
                },
                {
                    title: '深夜福利自备纸巾！御姐女神顾奈奈酱开档露乳情趣诱惑',
                    tag: '性感妹子',
                    time: '2019-09-09',
                    picture: 'http://localhost:3000/meizi/2019/07/02a33.jpg',
                },
                {
                    title: '女神级美女嫩模陆萱萱 大长腿高颜值身材超棒皮肤白皙',
                    tag: '性感妹子',
                    time: '2019-09-09',
                    picture: 'http://localhost:3000/meizi/2019/08/31b37.jpg',
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
.Picture {
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
