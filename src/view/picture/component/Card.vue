<template>
    <article class="Card">
        <!-- 头部 -->
        <header class="flex-row align-items-center justify-content-between header">
            <!-- left -->
            <div class="left flex-row align-items-center">
                <span class="line"></span>
                <!-- title -->
                <span class="title">{{data.title}}</span>
                <!-- 副标题 -->
                <span class="sub-title" v-if="data.subTitle">{{data.subTitle}}</span>
                <!-- 倒计时 -->
                <div v-if="data.endTime" class="flex-row end-time">
                    <span class="time">{{limitTime[0]}}</span>
                    <span class="colon">:</span>
                    <span class="time">{{limitTime[1]}}</span>
                    <span class="colon">:</span>
                    <span class="time">{{limitTime[2]}}</span>
                    <span class="colon">:</span>
                    <span class="time">{{limitTime[3]}}</span>
                </div>
            </div>
            <!-- right -->
            <div class="flex-row align-items-center right">
                <span class="text">更多</span>
                <span class="iconfont icon-right icon"></span>
            </div>
        </header>
        <!-- navs -->
        <div class="flex-row navs" v-if="data.navs">
            <div
                v-for="(v,k) in data.navs"
                :key="k"
                :class="['nav','flex-row-center',k === data.navs.length-1?'':'rightBorder',v.isActive ? 'activeNav':'']"
            >
                <span>{{v.tag}}</span>
            </div>
        </div>
        <!-- 图片水平列表列表 -->
        <article v-if="!data.vertical" class="flex-row storyList">
            <div class="flex-column box" v-for="(v,k) in data.data" :key="k">
                <img :src="v.img" />
                <!-- 标题 -->
                <span class="title">{{v.title}}</span>
                <!-- 作者 -->
                <span class="user">{{v.user}}</span>
            </div>
        </article>
        <!-- 图片垂直列表 -->
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
        .left {
            height: 0.16rem;
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
            .end-time {
                .time {
                    font-size: 0.12rem;
                    line-height: 0.14rem;
                    height: 0.14rem;
                    padding: 0 0.01rem;
                    background: black;
                    color: white;
                }
                .colon {
                    color: #969ba3;
                    font-size: 0.01rem;
                    margin: 0 0.025rem;
                }
            }
        }
        .right {
            color: #969ba3;
            .text {
                font-size: 0.14rem;
                margin-right: 0.03rem;
            }
            .icon {
                font-size: 0.14rem;
            }
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
    .navs {
        border: 1px solid #ed424b;
        border-radius: 0.03rem;
        margin: 0.07rem 0.15rem;
        .nav {
            flex: 1;
            background: white;
            color: #ed424b;
            span {
                font-size: 0.13rem;
                line-height: 0.27rem;
                height: 0.27rem;
            }
        }
        .rightBorder {
            border-right: 1px solid #ed424b;
        }
        .activeNav {
            color: white;
            background: #ed424b;
        }
    }
}
</style>
