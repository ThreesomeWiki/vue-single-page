<template>
    <div class="Story">
        <Header title="小说" />
        <div class="ContentFirst body">
            <!-- 热门小说 -->
            <Card :data="hotStory" />
            <!-- labs -->
            <div class="labs flex-row justify-content-between">
                <button>新书强推</button>
                <button>三江.网文新风</button>
            </div>
            <!-- 限时免费 -->
            <Card :data="freeLimitTime" />
            <!-- 排行榜 -->
            <div class="rank">
                <Card :data="rankList" />
            </div>
            <!-- banner -->
            <div class="banner">
                <img
                    src="http://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/267bbcc94f3759a000aedc4419409b9b.jpg"
                    alt
                />
            </div>
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
            hotStory: {
                // 热门小说
                title: '热门小说',
                subTitle: '起点编辑推荐',
                data: [
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015154561/150',
                        title: '建造狂魔',
                        user: '好多牛',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015056750/150',
                        title: '我可以无限强化',
                        user: '林二十一',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015490320/150',
                        title: '花掉1000000亿',
                        user: '张饭否',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015990091/150',
                        title: '烂柯棋缘',
                        user: '真费事',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1014988550/150',
                        title: '我能看见经验值',
                        user: '红颜三千',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015990091/150',
                        title: '烂柯棋缘',
                        user: '真费事',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1014988550/150',
                        title: '我能看见经验值',
                        user: '红颜三千',
                    },
                ],
            },
            freeLimitTime: {
                // 限时免费
                title: '限时免费',
                endTime: Date.now() + 86400 * 1000,
                more: true,
                data: [
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015154561/150',
                        title: '建造狂魔',
                        user: '好多牛',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015056750/150',
                        title: '我可以无限强化',
                        user: '林二十一',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015490320/150',
                        title: '花掉1000000亿',
                        user: '张饭否',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015990091/150',
                        title: '烂柯棋缘',
                        user: '真费事',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1014988550/150',
                        title: '我能看见经验值',
                        user: '红颜三千',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015990091/150',
                        title: '烂柯棋缘',
                        user: '真费事',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1014988550/150',
                        title: '我能看见经验值',
                        user: '红颜三千',
                    },
                ],
            },
            rankList: {
                // 排行榜
                title: '排行榜',
                more: true,
                navs: [
                    {
                        tag: '热销榜',
                        isActive: true,
                    },
                    {
                        tag: '风云榜',
                    },
                    {
                        tag: '签约榜',
                    },
                    {
                        tag: '推荐榜',
                    },
                ],
                data: [
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015154561/150',
                        title: '建造狂魔',
                        user: '好多牛',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015056750/150',
                        title: '我可以无限强化',
                        user: '林二十一',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015490320/150',
                        title: '花掉1000000亿',
                        user: '张饭否',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015990091/150',
                        title: '烂柯棋缘',
                        user: '真费事',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1014988550/150',
                        title: '我能看见经验值',
                        user: '红颜三千',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015990091/150',
                        title: '烂柯棋缘',
                        user: '真费事',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1014988550/150',
                        title: '我能看见经验值',
                        user: '红颜三千',
                    },
                ],
            },
            newList: {
                // 排行榜
                title: '新书抢先',
                subTitle: '24小时热销新书',
                more: true,
                vertical: true,
                data: [
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015154561/150',
                        title: '建造狂魔',
                        user: '好多牛',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015056750/150',
                        title: '我可以无限强化',
                        user: '林二十一',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015490320/150',
                        title: '花掉1000000亿',
                        user: '张饭否',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015990091/150',
                        title: '烂柯棋缘',
                        user: '真费事',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1014988550/150',
                        title: '我能看见经验值',
                        user: '红颜三千',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1015990091/150',
                        title: '烂柯棋缘',
                        user: '真费事',
                    },
                    {
                        img: 'http://bookcover.yuewen.com/qdbimg/349573/1014988550/150',
                        title: '我能看见经验值',
                        user: '红颜三千',
                    },
                ],
            },
        };
    },
};
</script>>
<style lang="scss" scoped>
.Story {
    .body {
        background: #f6f7f9;
        .labs {
            margin: 0.15rem;
            button {
                color: #ed424b;
                font-size: 0.13rem;
                height: 0.29rem;
                border: 1px solid #ed424b;
                border-radius: 0.15rem;
                background: transparent;
                width: 1.65rem;
            }
        }
        .rank {
            margin-top: 0.12rem;
        }
        .banner {
            margin: 0.12rem 0.15rem;
            height: 0.52rem;
            img {
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
}
</style>
