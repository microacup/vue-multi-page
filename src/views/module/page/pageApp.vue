<template>
<div id="app">
  {{webname}} - Page
  {{ new Date() | formatTime }}

  <p>
    <a href="/index.html">返回首页</a>
  </p>

</div>
</template> 

<script>

import { config } from '../../../assets/js/vue';

export default {
  name: 'App',
  data() {
    return {
      webname: config.title,
    };
  },
  mounted() {
    console.log(this.webname);
  },
  methods: {
  },
};
</script>