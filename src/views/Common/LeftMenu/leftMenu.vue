<template>
    <aside id="app-sidebar">
        <!-- 左边的导航栏 -->
        <div id="app-first-sidebar">
            <div class="app-first-sidebar-transform">
                <a class="team-logo-wrap" href="###">
                    <div class="team-logo" style="background-image: url(https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png?imageView2/2/w/60/h/60/q/75/format/webp)">
                    </div>
                </a>
                <nav>
                    <ul class="clearfix">
                                <li>
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-dashboard"></i>
                                概况
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-shop"></i>
                                店铺
                            </a>
                        </li>
                        <li class="js-guide-goods ">
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-goods"></i>
                                商品
                            </a>
                        </li>
                        <li class="js-guide-trade ">
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-order"></i>
                                订单
                            </a>
                        </li>
                        <li class="js-guide-fans ">
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-fans"></i>
                                客户
                            </a>
                        </li>
                                <li>
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-stat"></i>
                                数据
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-asset"></i>
                                资产
                            </a>
                        </li>

                                <li style="margin-top: 44px;">
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-app"></i>
                                营销
                            </a>
                        </li>
                                <li class="js-guide-setting active">
                            <a href="">
                                <i class="sidebar-icon sidebar-icon-setting"></i>
                                设置
                            </a>
                        </li>
                        <li style="margin-top: 44px;">
                            <a href="" target="_blank">
                                <i class="sidebar-icon sidebar-icon-youzan"></i>
                                有赞
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- 最左边的导航栏的底部 -->
        <div id="app-user-info">
            <span class="user-name">Ben生</span>
            <span class="user-arrow"></span>
            <div class="user-dropdown">
                <div class="user-dropdown-meta">
                    <div>Ben生</div>
                    <div>+86-15217681427</div>
                </div>
                <div class="user-dropdown-select">
                    <a class="new-select" href="">个人邀请奖励</a>
                    <a href="">帐号设置</a>
                    <a href="">切换店铺</a>
                    <a href="">退出</a>
                </div>
            </div>
        </div>
        <!-- 右边的导航栏 -->
        <div id="app-second-sidebar">
            <div class="app-second-sidebar-transform">
                <div class="second-sidebar-title">
                    设置
                </div>
                <nav>
                    <ul>
                        <li class="active">
                            <a href="">店铺信息</a>
                        </li>
                        <li>
                            <a href="">服务协议</a>
                        </li>
                        <li>
                            <a href="">店铺管理员</a>
                        </li>
                        <li>
                            <a href="">支付/交易</a>
                        </li>
                        <li>
                            <a href="">消费保障</a>
                        </li>
                        <li class="js-guide-setting-trade ">
                            <a href="">订单设置</a>
                        </li>
                        <li>
                            <a href="">通用设置</a>
                        </li>
                        <li>
                            <a href="">掌柜任务</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'left-menu',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    #app-sidebar{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 200px;
        box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
        z-index: 99;
        // 左侧
        #app-first-sidebar{
            position: fixed;
            top: 0px;
            bottom: 0;
            left: 0;
            width: 90px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #444;
            .app-first-sidebar-transform{
                transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
                transition-duration: 0ms;
                transform: translate(0px, 0px) translateZ(0px);
                .team-logo-wrap{
                    display: block;
                    width: 90px;
                    height: 63px;
                    overflow: hidden;
                    .team-logo{
                        margin: 15px auto 0;
                        width: 32px;
                        height: 32px;
                        border-radius: 16px;
                        background-size: cover;
                        background-position: 50% 50%;
                        background-color: #fff;
                    }
                }
                nav{
                    padding: 0 0 60px 0;
                    width: 90px;
                    li{
                        font-size: 14px;
                        height: 36px;
                        line-height: 36px;
                        margin-bottom: 14px;
                        cursor: pointer;
                        &:hover{
                            background: #666;
                        }
                        &.active{
                            background: #f8f8f8;
                            a{
                                color: #333;
                            }
                        }
                        a{
                            color: #CACACA;
                            display: block;
                            padding-left: 18px;
                            .sidebar-icon{
                                position: relative;
                                top: -1px;
                                display: inline-block;
                                width: 18px;
                                height: 18px;
                                vertical-align: middle;
                                background-image: url(./sidebar-icon@2x.png);
                                background-size: 72px 270px;
                                &.sidebar-icon-dashboard{
                                    background-position: 0px 0px;
                                }
                                &.sidebar-icon-shop{
                                    background-position: 0px -18px;
                                }
                                &.sidebar-icon-goods{
                                    background-position: 0px -36px;
                                }
                                &.sidebar-icon-order{
                                    background-position: 0px -54px;
                                }
                                &.sidebar-icon-fans{
                                    background-position: 0px -72px;
                                }
                                &.sidebar-icon-stat{
                                    background-position: 0px -90px;
                                }
                                &.sidebar-icon-asset{
                                    background-position: 0px -108px;
                                }
                                &.sidebar-icon-app{
                                    background-position: 0px -126px;
                                }
                                &.sidebar-icon-setting{
                                    background-position: -18px -144px;
                                }
                                &.sidebar-icon-youzan{
                                    background-position: 0px -162px;
                                }
                            }
                        }
                    }
                }
            }
        }
        // 底部
        #app-user-info{
            position: fixed;
            bottom: 0px;
            color: #e5e5e5;
            height: 30px;
            padding: 10px 0;
            word-break: break-word;
            background: #535353;
            z-index: 100;
            font-size: 12px;
            &:hover{
                .user-dropdown{
                    display: block;
                }
            }
            .user-name{
                width: 66px;
                display: block;
                line-height: 30px;
                padding: 0 12px;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .user-dropdown{
                background: #fff;
                display: none;
                position: absolute;
                bottom: 45px;
                left: 10px;
                color: #333;
                width: 145px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                border-radius: 2px;
                -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,0.4);
                box-shadow: 0 1px 4px 0 rgba(0,0,0,0.4);
                &:after{
                    content: ' ';
                    width: 0;
                    height: 0;
                    position: absolute;
                    left: 28px;
                    border: 6px solid #fff;
                    border-color: #fff transparent transparent transparent;
                }
                .user-dropdown-meta{
                    padding: 10px 20px;
                    line-height: 24px;
                    background: #f8f8f8;
                    border-radius: 2px 0 0 2px;
                    div{
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
                .user-dropdown-select{
                    padding: 10px 0;
                    line-height: 30px;
                    a{
                        display: block;
                        color: #666;
                        padding: 0 20px;
                        line-height: 30px;
                        &.new-select{
                            color: #FF4444;
                        }
                        &:hover{
                            background: #3283FA;
                            color: #fff;
                        }
                    }
                }
            }
        }
        // 右侧
        #app-second-sidebar{
            position: fixed;
            top: 0px;
            bottom: 0;
            left: 90px;
            width: 110px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #fff;
            .app-second-sidebar-transform{
                transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
                transition-duration: 0ms;
                transform: translate(0px, 0px) translateZ(0px);
                .second-sidebar-title{
                    padding-left: 20px;
                    font-size: 14px;
                    height: 50px;
                    line-height: 50px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    border-bottom: 1px solid #f2f2f2;
                }
                nav{
                    padding: 13px 10px;
                    width: 90px;
                    ul{
                        li{
                            font-size: 14px;
                            height: 36px;
                            line-height: 36px;
                            margin-bottom: 14px;
                            overflow: hidden;
                            cursor: pointer;
                            border-radius: 2px;
                            &.active{
                                background: #f8f8f8;
                                a{
                                    color: #333;
                                }
                            }
                            a{
                                color: #666;
                                display: block;
                                padding: 0 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
