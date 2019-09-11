<template>
    <div class="App">
        <Drawer
            width="2rem"
            show-mode="push"
            placement="left"
            :show="show"
            :drawer-style="{'background-color':'#35495e', width: '2rem'}"
        >
            <!-- 侧边栏 -->
            <div slot="drawer">
                <div>hello world</div>
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
import { Drawer } from 'vux';
import { setInterval, setTimeout } from 'timers';

export default {
    components: { Drawer },
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
    // overflow: scroll;
    overflow: hidden;
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
