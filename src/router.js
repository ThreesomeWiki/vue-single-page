import Vue from 'vue';
import Router from 'vue-router';
// 小说
import Story from '@/view/story/Story';
// 美图
import Picture from '@/view/picture/Picture';
// 福利吧
import Fuliba from '@/view/fuliba/Fuliba';
// 简书
import Jianshu from '@/view/jianshu/Jianshu';

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
        {
            path: '/fuliba',
            component: Fuliba,
        },
        {
            path: '/jianshu',
            component: Jianshu,
        },
    ],
});
