<template>
    <div>
        <p v-for="(item, index) in this.$store.state.ask" v-bind:key="index">
            <!-- <a v-bind:href="item.url">{{item.title}}</a> -->
            <small>
                {{item.time_ago}} by 
                <!-- <router-link v-bind:to="'/user/'+item.user"> -->
                    <router-link v-bind:to="item.id">
                    {{item.user}}
                </router-link>
            </small>
        </p>
    </div>
</template>

<script>

// import { mapGetters } from 'vuex'

export default {

    created () {
        this.$store.dispatch('FETCH_ASKS');

        console.log(this.$store.dispatch('FETCH_ASKS'),'ssdfsdf');
    }

}
</script>

<style>

</style>

