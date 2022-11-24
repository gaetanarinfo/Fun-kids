<template>

  <div id="levels">

    <div id="loader" style="display: flex;justify-content: center;">

      <div class="ajax-loader">
        <img src="../../public/img/_preloader.gif" alt="">
      </div>

    </div>

  </div>

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

$('.game_v').hide()

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
