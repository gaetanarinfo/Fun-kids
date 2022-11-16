<template>

  <q-page>

    <!-- Loading -->
    <loading />

    <!-- Menu -->
    <menuComponent />

    <!-- Login game -->
    <login_game />

    <!-- Option -->
    <optionComponent />

    <!-- Bug -->
    <bug />

    <!-- Contact -->
    <contact />

    <!-- Aide -->
    <aide />

    <!-- Son Ambiance -->
    <audio id="sound_1" loop volume="1">
      <source src="../../public/son/sound-1.mp3" type="audio/mpeg">
    </audio>

    <!-- Clic bouton -->
    <audio id="clic_1" volume="1">
      <source src="../../public/son/clic-1.mp3" type="audio/mpeg">
    </audio>

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import loading from '../components/home/loading.vue'
import menuComponent from '../components/home/menu.vue'
import login_game from '../components/home/login_game.vue'
import optionComponent from '../components/home/option.vue'
import bug from '../components/home/bug.vue'
import contact from '../components/home/contact.vue'
import aide from '../components/home/aide.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    loading,
    menuComponent,
    login_game,
    optionComponent,
    bug,
    contact,
    aide,
  },
  setup() {

    return {

    }
  }
})
</script>
