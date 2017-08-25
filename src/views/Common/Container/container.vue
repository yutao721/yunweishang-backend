<template>
    <div id="app-container" class="container">
        <div id="app-third-sidebar" class="js-app-third-sidebar">
            <nav class="ui-nav js-page-nav">
                <ul>
                    <li class="js-app-nav active">
                        <a href=""><span>店铺信息</span></a>
                    </li>
                    <li class="js-app-nav">
                        <a href=""><span>联系我们</span></a>
                    </li>
                    <li class="js-app-nav">
                        <a href=""><span>门店管理</span></a>
                    </li>
                    <li class="js-app-nav js-fenxiao-nav hide">
                        <a href=""><span>分销信息</span></a>
                    </li>
                    <li class="js-app-nav">
                        <a href=""><span>退货/维权设置</span></a>
                    </li>
                    <li class="js-app-nav">
                        <a href=""><span>商家地址库</span></a>
                    </li>
                    <li class="js-app-nav">
                        <a href=""><span>代制卡券授权</span></a>
                    </li>
                </ul>
            </nav>
            <div id="app-help-button" class="js-app-help-button">
                <i class="app-help-icon app-help-icon-help"></i>帮助和服务
            </div>
        </div>
        <div id="app-container-top"></div>
        <div class="app">
            <main-content></main-content>
        </div>
    </div>
</template>
<script>
    import MainContent from "../../Content/content.vue"
    export default {
        name: 'container',
        components: {
            MainContent
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    #app-container{
        &.container {
            zoom: 1;
            padding: 0;
            width: 1000px;
            position: relative;
        }
        background: #f2f2f2;
        width: auto;
        margin: 0 0 0 200px;
        padding-bottom: 50px;
        -webkit-transition: margin-right 0.5s;
        -moz-transition: margin-right 0.5s;
        transition: margin-right 0.5s;
        #app-third-sidebar {
            position: relative;
            height: 50px;
            min-width: 750px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #fff;
            border-bottom: 1px solid #e5e5e5;
            padding: 0 100px 0 5px;
            -webkit-transition: padding-right 0.5s;
            -moz-transition: padding-right 0.5s;
            transition: padding-right 0.5s;
            padding-right: 210px;
            .ui-nav {
                position: relative;
                border-bottom: none;
                margin-bottom: 0;
                display: block;
                ul{
                    zoom: 1;
                    margin-bottom: 0;
                    margin-left: 1px;
                    height: 50px;
                    line-height: 50px;
                    li{
                        float: left;
                        margin-left: 0;
                        a{
                            display: inline-block;
                            line-height: 48px;
                            text-align: center;
                            -webkit-box-sizing: border-box;
                            -moz-box-sizing: border-box;
                            box-sizing: border-box;
                            height: 50px;
                            padding: 0 20px;
                            min-width: 0;
                            border: none;
                            background: transparent;
                            font-size: 14px;
                            color: #666666;
                        }
                        span{
                            display: inline-block;
                        }
                        &.active{
                            span{
                                color: #333;
                                border-bottom: 2px solid #0099FC;
                            }
                        }
                    }
                }
            }
            #app-help-button {
                position: absolute;
                top: 0;
                right: 0;
                line-height: 50px;
                padding: 0 20px;
                border-left: 1px solid #f5f5f5;
                cursor: pointer;
                .app-help-icon{
                    display: inline-block;
                    background: url(./sidebar-icon@2x.png) no-repeat;
                    vertical-align: middle;
                    background-size: 72px 270px;
                    &.app-help-icon-help{
                        width: 16px;
                        height: 16px;
                        background-position: 0 -180px;
                        margin-top: -2px;
                        margin-right: 4px;
                    }
                }
            }
        }
        #app-container-top:empty {
            padding: 0;
            margin: 0;
            display: none;
        }
        .app {
            width: 100%;
            float: left;
        }
    }


    @media only screen and (min-width: 1200px){
        body #app-container {
            margin-right: 200px;
        }
        body.show-help #app-container {
            margin-right: 200px;
        }
        body.show-help.theme-new-ui.show-help #app-container {
            margin-right: 200px;
        }
        #app-third-sidebar {
            padding-right: 210px;
            margin-right: -200px;
        }
        body.show-help #app-third-sidebar {
            margin-right: -200px;
        }
        body.show-help.theme-new-ui.show-help #app-third-sidebar {
            margin-right: -200px;
        }
    }
</style>
