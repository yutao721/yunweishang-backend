<template>
    <div id="app-help-container-vue">
        <div class="zent-portal">
            <div id="app-help-container" class="vue-page-help show-help">
                <div class="help-container-head">
                    <i class="app-help-icon app-help-icon-help"></i>
                    <span>帮助和服务</span>
                    <i class="app-help-icon app-help-icon-close"></i>
                </div>
                <div class="help-container-body">
                    <div>
                        <div class="help-body-title">帮助中心
                            <a href="" target="_blank" rel="noopener noreferrer" class="pull-right">进入
                                <i class="app-help-icon app-help-icon-more"></i>
                            </a>
                        </div>
                        <div class="help-body-content">
                            <p>
                                <strong>店铺可以注销吗？<br></strong>
                                <span class="s1" style="color: #999999;">未提交认证的店铺可在切换店铺界面删除。</span>
                            </p>
                            <p class="p1"><span class="s1" style="color: #999999;">
                                <span style="color: #333333;">店铺名称可以修改吗？</span><br>店铺名修改次数已开放。交易成功的金额超过2000元或订单大于5笔的店铺修改店铺名，需要重新认证成功后店铺名才会修改成功。</span>
                            </p>
                            <hr>
                            <p>
                                <a href="" target="_blank">个人认证如何更改主体认证为企业认证？</a>
                            </p>
                            <p>
                                <a href="" target="_blank"><strong>食品类目商家应公示食品生产、流通、经营相关证照</strong></a>
                            </p>
                            <p>
                                <a href="" target="_blank"><br><br></a>
                                <a href="" target="_blank"><br></a>
                            </p>
                        </div>
                        <div>
                            <div class="help-body-split-line"></div>
                            <div class="help-body-title">有赞服务经理</div>
                            <div class="help-body-service">
                                <div class="zent-popover-wrapper zent-pop-wrapper page-help-inner-wrapper" style="display: inline-block;">
                                    <div class="service-region">
                                        <i class="service-avatar" style="background-image: url(&quot;https://img.yzcdn.cn/public_files/2016/12/02/c3bc25fd10f26b5d589edb04abb3e9df.jpg?imageView2/2/w/90/h/90/q/75/format/webp&quot;);"></i>
                                        <h4 class="service-name">朱柔伊</h4>
                                        <p>有问题来问我哦</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="help-body-split-line"></div>
                        <div class="help-body-title">找服务
                            <a href="" target="_blank" rel="noopener noreferrer" class="pull-right">发布服务需求
                                <i class="app-help-icon app-help-icon-more"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'help',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    #app-help-container{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 200px;
        min-height: 759px;
        // min-height: 1400px;
        background: #fff;
        z-index: 99;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transform: translateX(200px);
        -moz-transform: translateX(200px);
        -ms-transform: translateX(200px);
        transform: translateX(200px);
        -webkit-transition: -webkit-transform 0.5s;
        transition: -webkit-transform 0.5s;
        -moz-transition: -moz-transform 0.5s;
        transition: transform 0.5s;
        -webkit-transition: -webkit-transform 0.5s,-webkit-transform 0.5s;
        transition: transform 0.5s,-webkit-transform 0.5s;
        -webkit-box-shadow: -2px -2px 8px 0 rgba(0,0,0,0.1);
        box-shadow: -2px -2px 8px 0 rgba(0,0,0,0.1);
        .help-container-head {
            line-height: 50px;
            height: 50px;
            padding: 0 20px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border-bottom: 1px solid #f5f5f5;
        }
        .help-container-body{
            padding: 10px 10px 60px;
            .help-body-title {
                color: #333;
                border-left: 2px solid #3283FA;
                padding-left: 8px;
                padding-right: 10px;
                line-height: 12px;
                margin: 10px 0;
            }
            .help-body-content{
                padding: 10px;
                margin-bottom: -20px;
                p{
                    margin-bottom: 0.5em;
                    line-height: 1.8em;
                }
                span{
                    white-space: normal !important;
                }
                hr{
                    margin: 20px 0;
                    border: 0;
                    border-top: 1px solid #eee;
                    border-bottom: 1px solid #fff;
                }
            }
        }
        .help-body-split-line {
            border-top: 1px solid #e5e5e5;
            margin: 20px 10px;
        }
        .help-body-title {
            color: #333;
            border-left: 2px solid #3283FA;
            padding-left: 8px;
            padding-right: 10px;
            line-height: 12px;
            margin: 10px 0;
        }
        .help-body-service {
            position: relative;
            .service-region {
                padding: 20px 20px 20px 70px;
                background-color: #f8f8f8;
                border-radius: 2px;
                display: block;
                color: #666;
            }
            .service-avatar {
                position: absolute;
                top: 16px;
                left: 14px;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                display: inline-block;
                background-position: center;
                background-repeat: no-repeat;
                background-size: 100%;
            }
            .service-name {
                color: #333;
                font-size: 16px;
                line-height: 1em;
                margin-bottom: 5px;
            }
        }
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
            &.app-help-icon-close{
                width: 24px;
                height: 24px;
                background-position: 0 -196px;
                position: absolute;
                right: 10px;
                top: 12px;
                cursor: pointer;
            }
            &.app-help-icon-more{
                width: 10px;
                height: 14px;
                background-position: -28px -218px;
            }
        }
    }

    .pull-right {
        float: right;
    }

    a {
        color: #07d;
        text-decoration: none;
    }

    @media only screen and (min-width: 1200px){
        #app-help-container {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
            border-left: 1px solid #e5e5e5;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        body.show-help.theme-new-ui.show-help #app-help-container {
            z-index: 1;
        }
        #app-help-container .app-help-icon-close {
            display: none;
        }
    }
</style>
