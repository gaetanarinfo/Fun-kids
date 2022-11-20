<template>

  <div id="levels"></div>

  <!-- Shop -->
  <shop />

  <!-- Copyright -->
  <copyright />


</template>

<script>
import { defineComponent } from 'vue'
import shop from '../components/home/shop.vue'
import copyright from '../components/home/copyright.vue'

import css from '../css/level.scss';
import js from '../../public/js/level.js';

css;
js;

export default defineComponent({
  name: 'HomePage',
  components: {
    shop,
    copyright
  },
  setup() {

    return {

    }
  }
})
</script>
