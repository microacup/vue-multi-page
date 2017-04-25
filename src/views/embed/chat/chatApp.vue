<template>
<div id="app">
  {{webname}}
  
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
  },
  methods: {
  },
};
</script>