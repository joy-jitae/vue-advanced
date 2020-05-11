<template>
    <div>
        <div v-for="(ask, index) in askItems" :key="index">
            {{ask.title}}
        </div>
    </div>
</template>

<script>

import { maptState, mapGetters } from 'vuex'

export default {

    computed : {
    	//3
        ...mapGetters({
            askItems : 'fetchedAsk'
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

    created() {
        this.$store.dispatch('FETCH_ASKS');
    }

}
</script>

<style>

</style>
