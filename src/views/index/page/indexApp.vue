<template>
<div id="app">
  <h1>Vue多页面模板: {{ title }}</h1>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1"><a href="/module/page.html">Page</a></el-menu-item>
    <el-menu-item index="2"><a href="/module/chat.html">Chat</a></el-menu-item>
  </el-menu>
</div>
</template> 
<script>
export default {
  name: 'App',
  data() {
    return {
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