<template>

  <div class="div" :style="(loader) ? '' : 'display:none;'">
    <div id="wrapper">
      <div class="loader">
      </div>
      <div class="loading-bar">
        <div class="progress-bar"></div>
      </div>
      <div class="status">
        <div class="state"></div>
        <div class="percentage"></div>
      </div>
    </div>
  </div>


  <div id="home" :style="(loader) ? 'display:none;' : 'display:block;'">

    <div id="console"></div>

    <p id="gold-coins">L'ingot :</p>
    <div id="consumable1-purchase">Please wait...</div>

    <!-- Loading -->
    <loading />

    <!-- Menu -->
    <menuComponent />

    <!-- New game -->
    <new_game />

    <!-- Login game -->
    <login_game />

    <!-- Options -->
    <optionComponent />

    <!-- Bug -->
    <bug />

    <!-- Contact -->
    <contact />

    <!-- Aide -->
    <aide />

    <!-- Copyright -->
    <copyright />

    <!-- Son Ambiance -->
    <audio id="sound_1" loop volume="1">
      <source src="../../public/son/sound-1.mp3" type="audio/mpeg">
    </audio>

    <!-- Clic bouton -->
    <audio id="clic_1" volume="1">
      <source src="../../public/son/clic-1.mp3" type="audio/mpeg">
    </audio>

  </div>

</template>

<script>
import { defineComponent } from 'vue'
import loading from '../components/home/loading.vue'
import menuComponent from '../components/home/menu.vue'
import login_game from '../components/home/login_game.vue'
import new_game from '../components/home/new_game.vue'
import optionComponent from '../components/home/option.vue'
import bug from '../components/home/bug.vue'
import contact from '../components/home/contact.vue'
import aide from '../components/home/aide.vue'
import copyright from '../components/home/copyright.vue'

$('body').attr('style', "background: url('../img/backgrounds/fondloader.webp') !important;background-repeat: no-repeat !important;background-size: cover !important;background-position: center; transition: all 2ms;");

setTimeout(() => {
  $('body').attr('style', ' background: url(../img/background-1.webp) no-repeat center;background-attachment: fixed;');
}, 5500);

setTimeout(() => {

  var myCarousel = document.querySelector('#caroussel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    wrap: true
  })

}, 1000);

import home from '../../public/js/home.js';
import shop from '../../public/js/shop.js';

home;
shop;

export default defineComponent({
  name: 'HomePage',
  components: {
    loading,
    menuComponent,
    new_game,
    login_game,
    optionComponent,
    bug,
    contact,
    aide,
    copyright
  },
  data() {
    return {
      loader: true
    }
  },
  setup() {
    return {
    }
  },
  mounted() {

    setTimeout(() => {
      this.loader = false
    }, 5500);

  }
})
</script>
