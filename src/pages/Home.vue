<template>

  <div id="home" class="fadeIn opacity">

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

setTimeout(() => {
  $('body').attr('style', ' background: url(../img/background-1.webp) no-repeat center;background-attachment: fixed;');
}, 2000);

setTimeout(() => {
  $('#home').removeClass('opacity');
}, 4000);

import home from '../../public/js/home.js';

home;

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
    }
  },
  setup() {
    return {

    }
  },
  mounted() {
  }
})
</script>
