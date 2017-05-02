<template>
<div id="index-app">
  <h1>Vue多页面模板: {{ title }}</h1>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1"><a :href="contextPath + '/module/page.html'">Page</a></el-menu-item>
    <el-menu-item index="2"><a :href="contextPath + '/module/chat.html'">Chat</a></el-menu-item>
    <el-menu-item index="2"><a :href="contextPath + '/all'">Router-All</a></el-menu-item>
  </el-menu>
</div>
</template> 
<script>
import { config } from '../../../assets/js/vue';

export default {
  name: 'App',
  data() {
    return {
      contextPath: config.contextPath,
      title: this.$store.getters.WEB_INDEX,
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
  },
};
</script>
<style lang="scss">
  #app {
    border-radius: 5px;
    margin: 10px auto;
    padding: 16px;
    background-color: #fff;
    width: 50%;
    height: 200px;
    text-align: center;
    box-shadow: 0px 0px 4px 0 #20a0ff;

    h1 {
      font-weight: 300;
      font-style: normal;
    }
  }
</style>