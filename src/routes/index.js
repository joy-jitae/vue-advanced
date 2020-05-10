import VueRouter from 'vue-router';
import Vue from 'vue';

import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history',
    routes: [
        {
            path: '/',
            redirect : '/news'
        },
        {
            // path : url 정보
            path : '/ask',
            
            // component : url 에 해당하는 컴포넌트
            component : AskView
        },
        {
            path: '/news',
            component: NewsView
        },
        {
            path: '/jobs',
            component: JobsView
        }
    ]
});

