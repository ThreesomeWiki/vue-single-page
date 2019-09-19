<template>
    <div class="Hupu">
        <Header>
            <nav slot="title" class="header">
                <ul>
                    <li v-for="(v,k) in navs" :key="k">{{v}}</li>
                </ul>
            </nav>
        </Header>
        <div class="ContentFirst body">
            <!-- 二级导航 -->
            <nav class="second-nav">
                <ul class="flex-row">
                    <li v-for="(v,k) in navs" :key="k">{{v}}</li>
                </ul>
            </nav>
            <!-- 三级导航 -->
            <nav class="third-nav">
                <ul class="flex-row">
                    <li>首页</li>
                    <li class="iconfont icon-right right"></li>
                    <li>足球</li>
                    <li class="iconfont icon-right right"></li>
                    <li class="end">全部</li>
                </ul>
            </nav>
            <!-- swiper -->
            <swiper :options="swiperOptions" ref="mySwiper" class="swiper">
                <swiperSlide v-for="(v,k) in swiper" :key="k">
                    <img :src="v" />
                </swiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <!-- list -->
            <div class="list">
                <div
                    v-for="(v,k) in list1"
                    :key="k"
                    class="item flex-row justify-content-between align-items-center item"
                >
                    <span>{{v.title}}</span>
                    <span class="time">{{v.time}} 开始</span>
                </div>
            </div>
            <!-- list2 -->
            <div class="list2">
                <div class="item" v-for="(v,k) in list2" :key="k">{{v.title}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header';
import Card from './component/Card';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { Cell, Group } from 'vux';
import '../../../node_modules/swiper/dist/css/swiper.css';

export default {
    components: { Header, Card, swiper, swiperSlide, Cell, Group },
    data: function() {
        return {
            navs: ['足球', '新闻', '比赛', '社区', '游戏', '积分榜', '射手榜'],
            secondNavs: ['全部', '中国足球', '英超', '西甲', '德甲', '意甲', '欧冠', '法甲'],
            swiperOptions: {
                notNextTick: true,
                loop: true,
                initialSlide: 0,
                autoplay: true,
                speed: 800,
                direction: 'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            swiper: [
                'https://w3.hoopchina.com.cn/19/fc/ea/19fcea57435351d0f52aacd0c945f58f001.jpg',
                'https://w2.hoopchina.com.cn/a9/2f/85/a92f8569808e5302d8161884c88e43e4001.jpg',
                'https://w1.hoopchina.com.cn/d6/fd/8e/d6fd8e6d7f9783c27c6a9b70b50ee14e001.jpg',
                'https://w4.hoopchina.com.cn/99/28/fe/9928fec39f194bdfd78a67ed935fab3c001.jpg',
            ],
            list1: [
                { title: '埃瓦尔vs西班牙人', time: '18:00' },
                { title: '热那亚vs亚特兰大', time: '18:30' },
                { title: '阿拉维斯vs塞维利亚', time: '20:00' },
            ],
            list2: [
                {
                    title: '普基传射，诺维奇3-2曼城',
                },
                {
                    title: '内马尔绝杀，巴黎1-0斯堡',
                },
                {
                    title: '法蒂德容传射，巴萨5-2瓦伦',
                },
                {
                    title: '莱万连场破门，拜仁1-1莱比锡',
                },
                {
                    title: '奥布拉克伤退，马竞负皇社',
                },
                {
                    title: '森西头槌制胜，国米胜乌迪内斯',
                },
            ],
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
            padding-left: 0.1rem;
            li {
                display: inline-block;
                font-size: 0.14rem;
                margin-right: 0.2rem;
                height: 100%;
                line-height: 0.44rem;
            }
        }
    }
    .body {
        background: white;
        .second-nav {
            ul {
                margin: 0;
                padding-left: 0.04rem;
                height: 0.37rem;
                background: #e11b1c;
                color: white;
                font-size: 0.14rem;
                width: 4rem;
                li {
                    display: inline-block;
                    box-sizing: border-box;
                    height: 0.37rem;
                    line-height: 0.37rem;
                    padding: 0.02rem 0.06rem;
                    margin-right: 0.1rem;
                }
            }
        }
        .third-nav {
            ul {
                margin: 0;
                padding-left: 0.1rem;
                height: 0.37rem;
                font-size: 0.14rem;
                color: #e01b1b;
                li {
                    display: inline-block;
                    box-sizing: border-box;
                    height: 0.37rem;
                    line-height: 0.37rem;
                }
                .right {
                    font-size: 0.12rem;
                    color: #ddd;
                    margin: 0 0.08rem;
                }
                .end {
                    color: #444;
                }
            }
        }
        .swiper {
            height: 2rem;
            img {
                height: 2rem;
                display: block;
            }
        }
        // 重写bottom
        .swiper-pagination-fraction,
        .swiper-pagination-custom,
        .swiper-container-horizontal > .swiper-pagination-bullets {
            bottom: 0;
        }
        .list {
            .item {
                padding: 0 0.15rem;
                height: 0.4rem;
                font-size: 0.14rem;
                color: #444;
                border-bottom: 1px solid #ddd;
                .time {
                    color: #999;
                }
            }
        }
        .list2 {
            .item {
                height: 0.57rem;
                line-height: 0.57rem;
                font-size: 0.18rem;
                padding: 0 0.15rem;
                border-bottom: 1px solid #ddd;
                color: #999;
            }
        }
    }
}
</style>
