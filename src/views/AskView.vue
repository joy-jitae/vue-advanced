<template>
    <div>
        <div v-for="(item, index) in fetchedAsk" v-bind:key="index"> 
            {{ item.title}}
            <router-link :to="`item/${item.id}`">
                {{item.title}}
            </router-link>
            <small>
                {{item.time_ago}} by {{ item.user }}
            </small>
        </div>

        <!-- <p v-for="(item, index) in this.$store.state.ask" v-bind:key="index">
            <router-link :to="`item/${item.id}`">
                {{item.title}}
            </router-link>
            <small>
                {{item.time_ago}} by {{ item.user }}
            </small>
        </p> -->
    </div>
</template>

<script>

import {  mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            fetchedAsk : 'fetchedAsk' 
        }),

        // #2 
        // ...mapState({
        //     fetchedAsk : state => state.ask
        // })

        // #1
        // ask() {
        //     return this.$store.state.ask;
        // }
    },

    created () {
        this.$store.dispatch('FETCH_ASKS');
    }

}
</script>

<style>

</style>

