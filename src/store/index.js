import Vuex from 'vuex';
import Vue from 'vue';

import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';


Vue.use(Vuex);


export const store = new Vuex.Store({
    state : {
        news : [],
        jobs : [],
        ask : [],
    },
    getters: {
      fetchedAsk(state) {
          return state.ask;
      }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASKS(state, asks) {
            state.ask = asks
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
        },
        FETCH_ASKS({commit}) {
            fetchAskList()
                .then(({data}) => {
                    commit('SET_ASKS', data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})
