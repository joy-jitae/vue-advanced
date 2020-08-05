<template>
    <div>
    </div>    
</template>

<script>
export default {
    created() {
        const itemId = this.$$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);

    }
}
</script>

<style scoped>

</style>