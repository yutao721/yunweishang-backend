<template>
    <div class="home">
        <left-menu></left-menu>
        <container></container>
        <help></help>
    </div>
</template>
<script>
    import LeftMenu from '../Common/LeftMenu/leftMenu.vue'
    import Container from '../Common/Container/container.vue'
    import Help from '../Common/Help/help.vue'
    export default {
        name: 'home',
        components: {
            LeftMenu,
            Container,
            Help
        },
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            // console.log(LeftMenu);
        }
    }
</script>
<style>
    .home{
        height: 100%;
    }
</style>
