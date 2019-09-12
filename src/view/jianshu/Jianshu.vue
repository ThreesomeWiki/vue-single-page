<template>
    <div class="Jianshu">
        <!-- 头部 -->
        <Header
            :left="true"
            right="search"
            :headerStyle="{'background':'white'}"
            :leftHandle="headerLeft"
            :leftStyle="{color:'#777'}"
            :rightStyle="{color:'#777'}"
            class="header"
        >
            <header slot="left" class="left flex-row align-items-center">
                <img
                    src="https://cdn2.jianshu.io/asimov/src/assets/image/nav-logo.faf216af.png"
                    class="icon"
                />
                <span class="slogan">创作你的创作</span>
            </header>
            <header slot="right" class="right flex-row align-items-center">
                <span class="slogan">免费下载</span>
                <span class="iconfont icon-right" />
            </header>
        </Header>
        <!-- body -->
        <article class="ContentFirst body">
            <!-- tags -->
            <card class="tags">
                <cell slot="header" title="热门专题" class="header">
                    <div slot class="flex-row align-items-center right">
                        <span class="iconfont icon-huanyipi icon"></span>
                        <span>换一批</span>
                    </div>
                </cell>
                <div slot="content" class="content flex-row">
                    <span v-for="(v,k) in tags" :key="k">{{v}}</span>
                </div>
            </card>
            <!-- lists -->
            <div
                v-for="(v,k) in list"
                :key="k"
                class="flex-row justify-content-between align-items-center list"
            >
                <card class="card" :style="{width:v.cover ? '2.44rem':'100%'}">
                    <header slot="header" class="header">{{v.title}}</header>
                    <article slot="content" class="content">{{v.content}}</article>
                    <footer slot="footer" class="footer flex-row align-items-center">
                        <span class="iconfont icon-jewelry jewelry"></span>
                        <span>{{v.count}}</span>
                        <span class="jianshu">简书</span>
                        <span class="iconfont icon-heart heart"></span>
                        <span>{{v.love}}</span>
                    </footer>
                </card>
                <img :src="v.cover" class="cover" v-if="v.cover" />
            </div>
        </article>
    </div>
</template>
<script>
import Header from '@/components/Header';
import { Card, Cell } from 'vux';

export default {
    components: { Header, Card, Cell },
    data: function() {
        return {
            tags: ['旅行.在路上', '摄影', '读书', '自然科普', '故事', '手绘'],
            list: [
                {
                    title: '公告：关于暂停用户发布功能，并全面清查平台内容',
                    content:
                        '亲爱的简书用户 「简书」因个别上传作品用户违反《中华人民共和国网络安全法》《互联网信息服务管理办法》《互联网新闻信...',
                    count: 4580.827,
                    love: 8400,
                },
                {
                    title: '简书一年，我找到了一份好工作',
                    content:
                        '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年...',
                    count: 4580.827,
                    love: 8400,
                    cover:
                        'https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp',
                },
                {
                    title: '简书一年，我出版了人生第一本书——给想出书的朋友们',
                    content:
                        '翻看文集，才发现来到简书已经一年了。 第一篇文章发表与2017年7月24日，从那时起，我便开始了在简书定期写作更新...',
                    count: 4580.827,
                    love: 8400,
                    cover:
                        'https://upload-images.jianshu.io/upload_images/5303650-16bd31b30bff0a71.png?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp',
                },
                {
                    title: '简书一年，我出版了人生第一本书——给想出书的朋友们',
                    content:
                        '翻看文集，才发现来到简书已经一年了。 第一篇文章发表与2017年7月24日，从那时起，我便开始了在简书定期写作更新...',
                    count: 4580.827,
                    love: 8400,
                    cover:
                        'https://upload-images.jianshu.io/upload_images/5303650-16bd31b30bff0a71.png?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp',
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
.Jianshu {
    div {
        box-sizing: border-box;
    }
    .header {
        .left {
            .icon {
                height: 0.42rem;
                width: 0.56rem;
            }
            .slogan {
                margin-left: 0.12rem;
                font-size: 0.16rem;
                line-height: 0.2rem;
                color: #333;
            }
        }
        .right {
            color: #ea6f5a;
            font-size: 0.16rem;
            .slogan {
                line-height: 2.5rem;
                margin-right: 0.06rem;
            }
        }
    }
    .body {
        background: #f5f5f5;
        .tags {
            .header {
                height: 0.42rem;
                font-size: 0.14rem;
                color: #545454;
                font-weight: bold;
                .right {
                    font-size: 0.12rem;
                    color: #888;
                    .icon {
                        margin-right: 0.05rem;
                    }
                }
            }

            .content {
                padding: 0 0.15rem;
                flex-wrap: wrap;
                span {
                    display: inline-block;
                    font-size: 0.14rem;
                    height: 0.26rem;
                    line-height: 0.26rem;
                    border: 1px solid #ea6f5a;
                    color: #ea6f5a;
                    border-radius: 0.04rem;
                    padding: 0 0.1rem;
                    margin-right: 0.12rem;
                    margin-bottom: 0.12rem;
                    font-weight: normal;
                }
            }
        }
        .list {
            margin-top: 0;
            padding: 0.15rem;
            background: white;
            div.weui-panel.weui-panel_access.card:before {
                content: ' ';
                position: absolute;
                z-index: 999;
                left: 0;
                top: 0;
                right: 0;
                height: 1px;
                border-top: 1px solid transparent;
            }
            .card {
                border-top: 0;

                .header {
                    border-top: 0;
                    font-size: 0.18rem;
                    line-height: 0.25rem;
                    color: #333;
                    font-weight: bold;
                }
                .content {
                    font-size: 0.13rem;
                    color: #999;
                    margin-top: 0.06rem;
                    line-height: 0.19rem;
                    font-weight: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .footer {
                    height: 0.28rem;
                    font-size: 0.12rem;
                    line-height: 0.14rem;
                    color: #999;
                    .jewelry {
                        color: #ea6f5a;
                        margin-right: 0.03rem;
                    }
                    .jianshu {
                        margin: 0 0.12rem;
                    }
                    .heart {
                        color: #b1b1b1;
                        margin-right: 0.03rem;
                    }
                }
            }

            .cover {
                width: 0.8rem;
                height: 0.8rem;
            }
        }
    }
}
</style>
