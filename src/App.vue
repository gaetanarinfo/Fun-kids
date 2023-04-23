<template>
  <div class="div">
    <div class="game_v">Version {{ replaceGuillemet(params.appVersion) }} - Build {{ params.appBuild }}</div>
  </div>

  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'App',
  data() {
    return {
    }
  },
  setup() {
    const $q = useQuasar()

    return {
      replaceGuillemet(value) {
        return value.replaceAll('"', '');
      },
      params: {
        appVersion: '1.0.29',
        appBuild: '10027',
      },
      platform: $q.platform.is,
    }
  },
})
</script>
