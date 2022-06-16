<!--
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-06-16 13:29:25
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-06-16 13:31:46
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
-->
<template>
</template>

<script>
export default {
  props: ['slot-key'],
  mounted () {
      this.$page.lastUpdated = new Date().toLocaleString();
  }
};
</script>