import Vue from 'vue';
import Router from 'vue-router';
// 小说
import Story from '@/view/story/Story';
// 美图
import Picture from '@/view/picture/Picture';

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
        {
            path: '/picture',
            component: Picture,
        },
    ],
});
