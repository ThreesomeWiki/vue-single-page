<template>
    <div class="App">
        <router-view />
        <!-- footer -->
        <footer class="Footer flex-row justify-content-around align-items-center">
            <router-link v-for="(v,k) in tabs" :key="k" class="tab" :to="v.link">
                <span>{{v.tag}}</span>
            </router-link>
        </footer>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
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
}
.App {
    max-width: 500px;
    margin: 0 auto;
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
    bottom: 0;
    left: 0;
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
