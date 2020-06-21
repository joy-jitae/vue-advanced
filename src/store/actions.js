import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo} from "../api";

export default {
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
	},
	FETCH_USER({commit}, name) {
		fetchUserInfo(name)
		.then(({data}) => {
			commit('SET_USER', data);
		})
		.catch(error => {
			console.log(error)
		})
	}
}
