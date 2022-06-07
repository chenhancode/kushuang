<template>
    <div class="homeContent">
        <!-- 轮播图 -->
        <div class="swiper-container" ref="bannerSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="images" src="./images/01.jpg" />
                </div>
                <div class="swiper-slide">
                    <img class="images" src="./images/02.jpg" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

        <!-- 关于我们 -->
        <div class="dem01">
            <div class="about">
                <div class="aLeft">
                    <div class="aLiftTitle">
                        <h2>About us</h2>
                        <h1>关于我们</h1>
                    </div>
                    <em></em>
                    <p>福建酷爽信息科技有限公司成立于2015年，是一家专业从事安全生产管理信息化建设和远程安全教育培训的新型互联网公司。</p>
                    <div class="rmore">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div class="aRight">
                    <a href="">
                        <img src="./images/demleft.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>

        <!-- 产品展示 -->
        <div class="dem02">
            <div class="product">
                <div class="d2Title">
                    <h2>Product</h2>
                    <h1>产品展示</h1>
                </div>
                <div class="pAbout">
                    <div class="pBox">
                        <a href="">
                            <img src="./images/pAboutLeft.jpg" alt="">
                            <div class="display">
                                <div class="box">
                                    <h3>PRODUCT DISPLAY</h3>
                                    <span></span>
                                    <h4>软件产品</h4>
                                    <p></p>
                                    <h5>MORE+</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="pBox">
                        <a href="">
                            <img src="./images/pAboutRight.jpg" alt="">
                            <div class="display">
                                <div class="box">
                                    <h3>PRODUCT DISPLAY</h3>
                                    <span></span>
                                    <h4>硬件产品</h4>
                                    <p></p>
                                    <h5>MORE+</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="rmore but">
                    <a href="">READ MORE</a>
                </div>
            </div>
        </div>

        <!-- 新闻 -->
        <div class="journalism">
            <div class="journalismContent">
                <div class="newTitle">
                    <h2>News center</h2>
                    <h1>新闻中心</h1>
                </div>
                <ul class="newContent">
                    <li>
                        <a href="">
                            <h3>2022年国务院安委会办公室与应急管理部发布的关于开展“安全生产月”主题活动的通知</h3>
                            <p>2022年国务院安委会办公室与应急管理部发布的关于开展“安全生产月”主题活动的通知，主题是\\\"遵守安全生产法，当好第一责任人\\\",6月16日为全国安全宣传日。</p>
                        </a>
                        <h4>05-09</h4>
                        <span></span>
                    </li>
                    <li>
                        <a href="">
                            <h3>2022年国务院安委会办公室与应急管理部发布的关于开展“安全生产月”主题活动的通知</h3>
                            <p>2022年国务院安委会办公室与应急管理部发布的关于开展“安全生产月”主题活动的通知，主题是\\\"遵守安全生产法，当好第一责任人\\\",6月16日为全国安全宣传日。</p>
                        </a>
                        <h4>05-09</h4>
                        <span></span>
                    </li>
                    <li>
                        <a href="">
                            <h3>2022年国务院安委会办公室与应急管理部发布的关于开展“安全生产月”主题活动的通知</h3>
                            <p>2022年国务院安委会办公室与应急管理部发布的关于开展“安全生产月”主题活动的通知，主题是\\\"遵守安全生产法，当好第一责任人\\\",6月16日为全国安全宣传日。</p>
                        </a>
                        <h4>05-09</h4>
                        <span></span>
                    </li>
                    <li>
                        <a href="">
                            <h3>2022年国务院安委会办公室与应急管理部发布的关于开展“安全生产月”主题活动的通知</h3>
                            <p>2022年国务院安委会办公室与应急管理部发布的关于开展“安全生产月”主题活动的通知，主题是\\\"遵守安全生产法，当好第一责任人\\\",6月16日为全国安全宣传日。</p>
                        </a>
                        <h4>05-09</h4>
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
    mounted() {
        new Swiper(this.$refs.bannerSwiper, {
            // 如果需要分页器
            autoplay: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        console.log(1)
    }
};

</script>

<style lang="less" scoped>
.homeContent {
    .swiper-container {
        width: 1920px;
        height: 932px;
        margin-bottom: 36px;

        .images {
            width: 100%;
        }
    }

    .dem01,
    .dem02 {
        margin-bottom: 20px; //暂时使用
        width: 100%;
        height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/tiaowen02.png") repeat center center #fafafa;

        .rmore {
            margin-top: 80px;
            overflow: hidden;
            position: relative;

            a {
                display: block;
                background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/jbbg.jpg") no-repeat center center;
                width: 230px;
                height: 48px;
                border-radius: 24px;
                text-decoration: none;
                line-height: 48px;
                color: #fff;
                font-size: 16px;
                width: 230px;
                text-align: center;
            }
        }

        .about {
            display: flex;
            justify-content: space-between;
            width: 2034.39px;
            height: 600.77px;
            padding: 100px 0;

            .aLeft {
                width: 813.75px;
                height: 279px;
                margin-top: 40px;


                .aLiftTitle {
                    width: 100%;
                    height: 40px;
                    display: flex;

                    h2 {
                        float: left;
                        font-size: 36px;
                        line-height: 40px;
                        background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/ab.png") no-repeat left center;
                        padding-left: 60px;
                        font-weight: 400;
                    }

                    h1 {
                        margin-left: 15px;
                        font-size: 24px;
                        color: #4c4c4c;
                        font-weight: 600;
                        line-height: 40px;
                    }
                }

                em {
                    display: block;
                    width: 100px;
                    height: 2px;
                    margin: 40px 0;
                    border-top: 1px dashed #ccc;
                }

                p {
                    font-size: 14px;
                    color: #4c4c4c;
                    overflow: hidden;
                    line-height: 28px;
                    max-height: 80px;
                }

                // .rmore {
                //     margin-top: 80px;
                //     overflow: hidden;
                //     position: relative;

                //     a {
                //         display: block;
                //         background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/jbbg.jpg") no-repeat center center;
                //         width: 230px;
                //         height: 48px;
                //         border-radius: 24px;
                //         text-decoration: none;
                //         line-height: 48px;
                //         color: #fff;
                //         font-size: 16px;
                //         width: 230px;
                //         text-align: center;
                //     }
                // }
            }

            .aRight {

                img {
                    width: 1057.88px;
                    height: 600.77px;
                    border-radius: 60px 0 60px 0;
                }
            }
        }

        .product {
            width: 1188px;
            height: 578.75px;

            .d2Title {
                width: 316px;
                height: 40px;
                display: flex;
                margin: 0 auto 60px;

                h2 {
                    padding-left: 60px;
                    font-size: 36px;
                    line-height: 40px;
                    font-weight: 400;
                    background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/cp.png") no-repeat left center;
                }

                h1 {
                    margin-left: 15px;
                    font-size: 24px;
                    color: #4c4c4c;
                    font-weight: 600;
                    line-height: 40px;
                }
            }

            .pAbout {
                width: 1188px;
                height: 400.75px;
                display: flex;
                justify-content: space-between;

                .pBox {
                    width: 570.23px;
                    height: 320.35px;
                    position: relative;

                    img {
                        width: 570.23px;
                        height: 320.35px;
                    }

                    .display {
                        width: 490.39px;
                        height: 102px;
                        position: absolute;
                        left: 7%;
                        bottom: -51px;
                        overflow: hidden;
                        box-shadow: 1px 1px 26px 1px #dadada;

                        .box {
                            width: 100%;
                            height: 131.5px;
                            text-align: center;
                            background: #fff;

                            h3 {
                                font-size: 15px;
                                color: #2e82c5;
                                font-weight: 600;
                                line-height: 50px;
                            }

                            span {
                                width: 96%;
                                display: block;
                                height: 1px;
                                border-top: 1px dashed #ccc;
                                margin: auto;
                            }

                            h4 {
                                margin: auto;
                                font-size: 15px;
                                color: #4c4c4c;
                                font-weight: 400;
                                line-height: 50px;
                                max-width: 90%;
                            }

                            h5 {
                                font-size: 13px;
                                color: #2e82c5;
                                margin-top: 10px;
                                line-height: 50px;
                            }
                        }
                    }
                }
            }

            .but {
                a {
                    margin: 0 auto;
                }
            }
        }
    }

    .journalism {
        width: 100%;
        padding: 100px 0;
        background-color: #fafafa;
        display: flex;
        justify-content: center;

        .journalismContent {
            width: 1188px;
            height: 637.5px;
            background-color: #2e82c5;

            .newTitle {
                width: 374px;
                height: 40px;
                display: flex;
                justify-content: center;
                margin: 0 auto 60px;

                h2 {
                    float: left;
                    font-size: 36px;
                    line-height: 40px;
                    background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/ab.png") no-repeat left center;
                    padding-left: 60px;
                    font-weight: 400;
                }

                h1 {
                    margin-left: 15px;
                    font-size: 24px;
                    color: #4c4c4c;
                    font-weight: 600;
                    line-height: 40px;
                }
            }

            .newContent {
                width: 100%;
                height: 537.5px;
                background-color: aquamarine;

                li {
                    width: 43%;
                    height: 74px;
                    background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/tiaowen02.png") repeat center center #fafafa;
                    padding: 30px 2%;
                    position: relative;
                    margin-bottom: 80px;
                    list-style: none;
                    display: list-item;
                    text-align: -webkit-match-parent;

                    a {
                        display: block;
                        color: #333;
                        text-decoration: none;

                        h3 {
                            font-size: 15px;
                            color: #4c4c4c;
                            margin-bottom: 12px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            display: block;
                        }

                        p {
                            font-size: 13px;
                            color: #808080;
                            line-height: 20px;
                            max-height: 40px;
                            overflow: hidden;
                        }
                    }

                    h4 {
                        position: absolute;
                        width: 46px;
                        left: calc(107% - 23px);
                        font-size: 14px;
                        color: #808080;
                        line-height: 16px;
                        top: calc(50% - 8px);
                        text-align: center;
                        font-weight: 400;
                    }

                    span {
                        width: 12px;
                        height: 12px;
                        background: url("http://www.ksxxkj.cn/temp/temp/53/53-0011/201808100911/images/tiaowen02.png") repeat center center #fafafa;
                        position: absolute;
                        top: calc(50% - 6px);
                        right: -7px;
                        transform: rotate(45deg);
                        z-index: 1;
                    }
                }

                li:nth-child(even) {
                    float: right;
                    margin-top: -106px;

                    span {
                        left: -7px;
                        right: inherit;
                    }

                    h4 {
                        right: calc(106% - 23px);
                        left: inherit;
                    }
                }
            }

        }
    }

}
</style>