<template>
    <div id="list">
      <!-- {{title}} -->
      <home></home>
    </div>
</template>

<script>
    import Home from '../../../RouteView/home.vue'

    export default {
        name: 'list',
        components: {
            Home
        },
        data() {
            return {
                // title : '用户列表'
            }
        },
        mounted() {
            document.title = '用户列表'
        }
    }
</script>

<style lang='scss'></style>
