<template>
<div class="all-app">
  <h1>Vue多页面模板: {{ title }}</h1>
  
  <p>
    <router-link to="/">返回首页</router-link>
  </p>
</div>
</template> 
<script>
import config from '../../../assets/js/config';

export default {
  name: 'App',
  data() {
    return {
      contextPath: config.contextPath,
      title: 'All',
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