<template>
<div id="app">
  {{webname}}
  {{ new Date() | formatTime }}
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