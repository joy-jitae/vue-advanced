import Vuex from 'vuex';
import Vue from 'vue';

import { fetchNewsList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state : {
        news : [],
        jobs : [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions : {
        FETCH_NEWS(context) {
            fetchNewsList().then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            }).catch(error => {
                console.log(error);
            })
        },
        FETCH_JOBS({commit}) {
            // context 안에 인자로 commit 이 있음
            fetchJobsList().then(({data}) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
})