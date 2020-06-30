<template>
    <div>
        <p v-for="(item, index) in fetchedAsk" v-bind:key="index">
            <a v-bind:href="item.url">{{item.title}}</a>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p>
    </div>
</template>

<script>

// import { mapGetters } from 'vuex'

export default {

    created () {
        // this.$store.dispatch('FETCH_ASKS');
    }

}
</script>

<style>

</style>

