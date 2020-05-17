<template>
    <div>
        <p v-for="(item, index) in fetchedAsk" v-bind:key="index">
            <a v-bind:href="item.url">{{item.title}}</a>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

    computed : {
    	//3
        ...mapGetters({
	        fetchedAsk : 'fetchedAsk'
        })

        /* #2
        ...maptState({
            fetchedAsk : state => state.ask
        })*/

        /* #1
        * ask() {
        * return this.$store.state.ask
        * }
        * */
    },


}
</script>

<style>

</style>

