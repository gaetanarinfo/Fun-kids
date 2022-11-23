<template>

  <div class="div" v-if="show === false">
    <div id="wrapper">
      <img src="../public/img/_preloader.gif" alt="">
    </div>

    <div class="game_v">Version {{ replaceGuillemet(params.appVersion) }} - Build {{ params.appBuild }}</div>

  </div>

  <router-view v-if="show === true" />

</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

$('body').attr('style', "background: url('../img/backgrounds/fondloader.webp') !important;background-repeat: no-repeat !important;background-size: cover !important;background-position: center;background-attachment: fixed !important;");

export default defineComponent({
  name: 'App',
  data() {
    return {
      show: false,
    }
  },
  setup() {
    const $q = useQuasar()

    return {
      replaceGuillemet(value) {
        return value.replaceAll('"', '');
      },
      params: {
        appVersion: '1.0.13',
        appBuild: '10013',
      },
      platform: $q.platform.is,
    }
  },
  methods: {
    showLoading() {
      // hiding in 2s
      setTimeout(() => {
        this.show = true;
      }, 2000);
    },
  },
  mounted() {
    this.showLoading();
  },
})
</script>
