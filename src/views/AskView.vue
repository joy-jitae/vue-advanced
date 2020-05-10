<template>
    <div>
        <div v-for="(ask, index) in asks" :key="index"> 
            {{ask.title}}
        </div>
    </div>
</template>

<script>
import {fetchAskList} from '../api/index.js'
export default {
    data() {
        return {
            asks : [],
        }
    },
    created() {
        var vm = this;
        fetchAskList()
        .then(response => vm.asks = response.data)
        .catch(error => console.log(error))
    }
    
}
</script>

<style>

</style>