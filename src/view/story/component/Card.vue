<template>
    <article class="Card">
        <header class="flex-row align-items-center header">
            <span class="line"></span>
            <span class="title">{{data.title}}</span>
            <span class="sub-title">{{data.subTitle}}</span>
        </header>
        <article class="flex-row storyList">
            <div class="flex-column box" v-for="(v,k) in data.data" :key="k">
                <img :src="v.img" />
                <span class="title">{{v.title}}</span>
                <!-- 副标题 -->
                <span class="user" v-if="v.user">{{v.user}}</span>
                <!-- 倒计时 -->
                <div v-if="v.endTime" class="flex-row">
                    <span>{{limitTime[0]}}</span>
                    <span>:</span>
                    <span>{{limitTime[1]}}</span>
                    <span>:</span>
                    <span>{{limitTime[2]}}</span>
                    <span>:</span>
                    <span>{{limitTime[3]}}</span>
                </div>
            </div>
        </article>
    </article>
</template>
<script>
export default {
    props: ['data'],
    data: function() {
        return {
            limitTime: ['00', '00', '00', '00'], // 倒计时
        };
    },
    mounted: function() {
        setInterval(() => {
            this.caculateLimitTime();
        }, 1000);
    },
    methods: {
        caculateLimitTime: function() {
            const { endTime } = this.data;
            if (!endTime) return;
            const now = Date.now();
            if (endTime <= now) return;
            const diff = endTime - now;
            let day = Math.floor(diff / 86400 / 1000);
            let hour = Math.floor((diff % (86400 * 1000)) / 3600 / 1000);
            let minute = Math.floor((diff % (3600 * 1000)) / 60 / 1000);
            let sec = Math.floor((diff % (60 * 1000)) / 1000);
            this.limitTime = [
                ('00' + day).slice(-2),
                ('00' + hour).slice(-2),
                ('00' + minute).slice(-2),
                ('00' + sec).slice(-2),
            ];
        },
    },
};
</script>
<style lang="scss" scoped>
.Card {
    background: white;
    padding: 0.15rem 0 0;
    .header {
        padding: 0 0.15rem;
        .line {
            width: 0.02rem;
            height: 0.16rem;
            background: #ed424b;
        }
        .title {
            font-size: 0.16rem;
            line-height: 0.16rem;
            color: #33373d;
            margin: 0 0.08rem 0 0.06rem;
        }
        .sub-title {
            font-size: 0.13rem;
            line-height: 0.13rem;
            color: #969ba3;
        }
    }
    .storyList {
        padding-left: 0.08rem;
        overflow: scroll;
        .box {
            padding: 0.12rem 0.08rem 0.08rem;
            img {
                width: 0.66rem;
                height: 0.88rem;
            }
            .title {
                font-size: 0.13rem;
                line-height: 0.16rem;
                margin: 0.08rem 0 0.02rem;
                color: #33373d;
            }
            .user {
                font-size: 0.12rem;
                line-height: 0.17rem;
                color: #969ba3;
            }
        }
    }
}
</style>
