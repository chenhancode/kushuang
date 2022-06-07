<template>
    <div class="footer clearfix">
        <div class="footerMid">
            <ul class="nav1">
                <li><a href="">网站首页</a></li>
                <li><a href="">公司简介</a></li>
                <li><a href="">产品服务</a></li>
                <li><a href="">新闻中心</a></li>
                <li><a href="">客户案例</a></li>
                <li><a href="">在线留言</a></li>
                <li><a href="">联系我们</a></a></li>
            </ul>
            <div class="nav2">
                <div class="lianxi">
                    <h3>福建酷爽信息科技有限公司</h3>
                    <div class="config">
                        <span class="iconfont icon-qq"></span>
                        <a href="">3105361314</a>
                    </div>
                    <div class="config">
                        <span class="iconfont icon-24gl-telephone"></span>
                        <a href="">0591-83519815</a>
                    </div>
                    <div class="config">
                        <span class="iconfont icon-dizhi"></span>
                        <a href="">福建省福州市鼓楼区北二环中路18号恒力博纳广场南区1号楼1326室</a>
                    </div>
                    <div class="config">
                        <span class="iconfont icon-lianjie"></span>
                        <dl>
                            <tr>
                                <a href="">中华人民共和国应急管理部</a>
                                <a href="">安全管理网</a>
                                <a href="">福建省应急管理厅</a>
                            </tr>
                            <tr><a href="">福州市应急管理局</a></tr>
                        </dl>
                    </div>
                </div>
                <div class="lianxi">
                    <h3>服务热线</h3>
                    <h2>0591-83519815</h2>
                    <div class="guanzhu">
                        <a class="iconfont icon-qq1" href=""></a>
                        <a class="iconfont icon-89" href="" style="margin-top:-5px"></a>
                        <a class="iconfont icon-weixingongzhonghao" href=""></a>
                    </div>
                </div>
                <div class="lianxi" style="padding-left:120px">
                    <h3>关注我们</h3>
                    <img :src="images" alt="">
                </div>
            </div>
        </div>
        <div class="fotterButtom">
            <span>
                <a href="">网站地图</a>
            </span>
            <span>
                <a href="">sitemapM</a>
            </span>
            <span>
                <a href="">sitemapPC</a>
            </span>
            <span>
                Copyright © 2022 福建酷爽信息科技有限公司(<a href="">ksxxkj.cn</a>)版权所有
            </span>
            <span>
                备案号：<a href="">闽ICP备19010974号-3</a>
            </span>
            <span>
                技术支持：<a href="">万美云计算</a>
            </span>
            <span>
                关键词：酷爽信息科技官网 安全生产管理信息化建设 远程安全教育培训
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: 'http://www.ksxxkj.cn/temp/cus/ks/xx/kj/ksxxkj.cn/temp/53-0011/201808100911/images/weixin_qrcode.jpg',
        }
    }
}
</script>

<style lang="less" scoped>
.footer {
    width: 100%;

    .footerMid {
        width: 1920px;
        height: 319px;
        margin: 0 auto;
        background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/f-bg.jpg") no-repeat center center;
        overflow: hidden;

        .nav1 {
            width: 1188px;
            height: 18px;
            margin: 40px auto;
            display: flex;
            justify-content: center;

            li {
                width: 140px;
                height: 15px;
                text-align: center;
                list-style: none;
                border-right: 1px solid white;

                a {
                    text-decoration: none;
                    color: white;
                    font-size: 15px;
                }
            }
        }

        .nav2 {
            width: 1188px;
            height: 181px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            .lianxi {
                color: #fff;


                img {
                    width: 114px;
                    height: 114px;
                }

                h2 {
                    color: #fff;
                    font-family: "Arial";
                    font-size: 26px;
                }

                .guanzhu {
                    width: 356px;
                    height: 48px;
                    margin-top: 15px;
                    display: flex;
                    align-items: center;

                    a {
                        display: block;
                        width: 36px;
                        height: 36px;
                        margin-right: 10px;
                        line-height: 36px;
                        text-decoration: none;
                        color: #fff;
                        font-size: 36px;
                    }
                }

                h3 {
                    color: #fff;
                    font-size: 14px;
                    margin-bottom: 10px;
                }

                .config {
                    display: flex;


                    .iconfont {
                        margin: 0 5px;
                    }

                    a {
                        text-decoration: none;
                        color: #fff;
                        line-height: 23px;
                    }

                    dl {

                        tr {
                            a {
                                display: inline-block;
                                margin-right: 10px;
                            }
                        }

                        dd {
                            padding-right: 30px;
                        }
                    }
                }
            }
        }
    }
    .fotterButtom{
        width: 100%;
        height: 24px;
        padding: 16px;
        background-color: #0a161f;
        display: flex;
        justify-content: center;
        span{
            padding-right: 5px;
            color: #e5e5e5;
            a{
                color: #e5e5e5;
                text-decoration: none;
            }
        }
    }
}
</style>