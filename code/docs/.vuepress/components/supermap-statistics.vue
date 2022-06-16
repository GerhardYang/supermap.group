<!--
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2021-04-23 18:29:47
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2021-04-24 22:00:48
 * @Description:  百度统计全局组件
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
-->

<template>
  <div class="footer">
    <div>@杨光辉_GerhardYang</div>
  </div>
</template>

<script>
export default {
  name: "supermap-statistics",
  mounted() {
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?510a05b47ce6df158ead06028eeecc22";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  },
};
</script>
<style lang="stylus">
.footer {
  width: 100% !important;
  padding-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  text-align: right;
}
</style>
