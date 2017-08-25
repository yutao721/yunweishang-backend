<template>
  <div id="app">
    <router-view class="app-view"></router-view>
  </div>
</template>

<script>
    export default {
      name: 'app',
      watch:{
          $route(to,from){
              // 如果没有此路由则报404
              if (!to.matched.length) {
                  this.$router.push('/404');
              }
          }
      }
    }
</script>

<style lang="scss">
  @import './common/scss/style.scss';

  body{
    min-width: 1000px;
    font-size: 12px;
    line-height: 1.5em;
    font-family: Helvetica,STHeiti,"Microsoft YaHei",Verdana,Arial,Tahoma,sans-serif;
    background-color: #fff;
    &.theme-new-ui {
        position: relative;
        background: #f2f2f2;
    }
  }

  #app{
    width: 100%;
    height: 100%;
  }
</style>
