<template>
  <div class="header">
    <img class="logo" :src="logo" alt="">
    <ul class="headerRight">
      <li class="list">
        <a class="active titles" href="">网站首页</a>
      </li>
      <li class="list">
        <a class="titles" href="">公司简介</a>
        <ul>
          <li><a href="">关于我们</a></li>
          <li><a href="">联系我们</a></li>
        </ul>
      </li>
      <li class="list">
        <a class="titles" href="">业务范围</a>
        <ul>
          <li><a href="">安全技术资讯</a></li>
          <li><a href="">安全培训</a></li>
        </ul>
      </li>
      <li class="list">
        <a class="titles" href="">资讯</a>
        <ul>
          <li><a href="">法律法规</a></li>
          <li><a href="">公司新闻</a></li>
        </ul>
      </li>
      <li class="list">
        <a class="titles" href="">案例展示</a>
      </li>
      
    </ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      logo: 'http://www.ksxxkj.cn/temp/cus/ks/xx/kj/ksxxkj.cn/upload/logo.png',
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 383.83px;
    height: 76px;
    margin-left: 50px;
  }

  .headerRight {
    margin-right: 50px;
    .list {
      float: left;
      list-style: none;
      padding: 20px;
      .active{
        color: #166CB1;
      }
      a {
        text-decoration: none;
        font-size: 16px;
        color: #333;
      }

      ul {
        display: none;
        margin-top: 10px;
        position: absolute;
        z-index: 2;

        li {
          list-style: none;
          line-height: 36px;
          margin: auto;
          padding: 0 20px;
          background: #2e82c5;
          border-bottom: 1px solid #1e75bb;
          text-align: center;

          a {
            color: #fff;
            display: block;
            font-size: 16px;
          }
        }
      }
      
    }
    .list:hover .titles{
      color: #166CB1;
    }
    .list:hover ul{
      display: block;
    }
    

  }

}
</style>