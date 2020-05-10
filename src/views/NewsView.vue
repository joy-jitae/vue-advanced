<template>
    <div>
        <div v-for="(user, index) in this.$store.state.news" v-bind:key="index">
            {{user.title}}
        </div>
    </div>
</template>

<script>


export default {
    
    created () {
        this.$store.dispatch('FETCH_NEWS');
        // var vm = this;

        // console.log('호출 전 : ', this);

        // fetchNewsList()
        // .then(function(response) {
        //     console.log(response);
        //     console.log('호출 후 : ', this);
        //     vm.users = response.data;
        // })
        // .catch(function(error){
        //     console.log(error)
        // })
    }
    
}
</script>

<style>

</style>