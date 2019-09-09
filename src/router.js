import Vue from 'vue';
import Router from 'vue-router';
// 主页
import Story from '@/view/story/Story';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Story,
        },
        {
            path: '/story',
            component: Story,
        },
    ],
});
