<template>
    <div class="App">
        <Drawer
            width="2.3rem"
            show-mode="push"
            placement="left"
            :show="show"
            :drawer-style="{'background-color':'#333332', width: '2.3rem'}"
        >
            <!-- 侧边栏 -->
            <div slot="drawer" class="drawer">
                <div class="flex-row justify-content-center align-items-center user">
                    <img src="http://localhost:3000/meizi/mfiles/img/logo.jpg" />
                    <div class="flex-column justify-content-center msg">
                        <span>妹子图</span>
                        <span class="slogan">美女图片每日更新</span>
                    </div>
                </div>
                <group>
                    <cell-box class="tab">首页</cell-box>
                    <cell-box class="tab">下载美之图APP</cell-box>
                    <cell-box class="tab">性感妹子</cell-box>
                    <cell-box class="tab">日本妹子</cell-box>
                    <cell-box class="tab">台湾妹子</cell-box>
                    <cell-box class="tab">清纯妹子</cell-box>
                    <cell-box class="tab">妹子自拍</cell-box>
                    <cell-box class="tab">街拍美女</cell-box>
                    <cell-box class="tab">热门妹子</cell-box>
                    <cell-box class="tab">推荐妹子</cell-box>
                    <cell-box class="tab">美女专题</cell-box>
                    <cell-box class="tab">每日跟新</cell-box>
                </group>
            </div>
            <!-- 主要编辑区 -->
            <div>
                <router-view />
                <!-- footer -->
                <footer class="Footer flex-row justify-content-around align-items-center">
                    <router-link v-for="(v,k) in tabs" :key="k" class="tab" :to="v.link">
                        <span>{{v.tag}}</span>
                    </router-link>
                </footer>
            </div>
        </Drawer>
    </div>
</template>

<script>
import { Drawer, Cell, CellBox, Group } from 'vux';

export default {
    components: { Drawer, Cell, CellBox, Group },
    data: function() {
        return {
            show: false,
            tabs: [
                {
                    tag: '小说',
                    link: '/',
                },
                {
                    tag: '图片',
                    link: '/',
                },
                {
                    tag: '视频',
                    link: '/',
                },
                {
                    tag: '漫画',
                    link: '/',
                },
            ],
        };
    },
    mounted: function() {
        this.$bus.on('app-show', () => {
            console.log('is show');
            this.show = !this.show;
        });
    },
};
</script>

<style lang="scss">
::-webkit-scrollbar {
    width: 0 !important;
}
html,
body {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    font-size: 0.16rem;
}
.App {
    max-width: 500px;
    margin: 0 auto;
    height: 100%;
    .drawer {
        .tab {
            background: #1a1a19;
            color: white;
            font-size: 0.14rem;
        }
        .user {
            margin: 0.2rem 0;
            img {
                width: 0.66rem;
                height: 0.66rem;
                border-radius: 0.33rem;
            }
            .msg {
                font-size: 0.12rem;
                line-height: 0.12rem;
                margin-left: 0.15rem;
                color: white;
                .slogan {
                    height: 0.29rem;
                    line-height: 0.29rem;
                    color: #ff88af;
                }
            }
        }
    }
}
.Footer {
    position: fixed;
    z-index: 1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    background: black;
    max-width: 500px;
    margin: 0 auto;
    .tab {
        color: white;
        font-size: 0.18rem;
    }
    a {
        text-decoration: none;
    }
}
.ContentFirst {
    position: fixed;
    top: 0.44rem;
    right: 0;
    bottom: 0.5rem;
    left: 0;
    overflow: scroll;
}
.flex1 {
    display: flex;
    flex-direction: 1;
}
.flex-row {
    display: flex;
    flex-direction: row;
}
.flex-column {
    display: flex;
    flex-direction: column;
}
.flex-row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.flex-column-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.justify-content-center {
    justify-content: center;
}
.justify-content-between {
    justify-content: space-between;
}
.justify-content-around {
    justify-content: space-around;
}
.align-items-center {
    align-items: center;
}
</style>
