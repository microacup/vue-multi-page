<template>
<div id="app">
  {{webname}} - Chat
  <p>
    <a :href="contextPath + '/'">返回首页</a>
  </p>
  
</div>
</template> 

<script>

import { config } from '../../../assets/js/vue';

export default {
  name: 'App',
  data() {
    return {
      contextPath: config.contextPath,
      webname: config.title,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>