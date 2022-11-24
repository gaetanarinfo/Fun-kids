<template>

  <div class="container copyright w-100">
    <div class="row m-auto w-70">
      <div id="donate-button-container">
        <div id="donate-button"></div>
      </div>
      <p style="margin-top: 20px;margin-bottom: 0;">Faites un don avec PayPal</p>
      <hr class="m-auto mt-3 mb-3 w-50">

      <p class="m-0 mb-3 p-0"><span id="report_bug" class="link">Signaler un bug ? 🐭</span></p>

      <p class="m-0 mb-3 p-0"><span class="link" id="shop_home">Boutique 🎉 </span></p>

      <p class="m-0 mb-3 p-0"><span class="link" id="btn_cp_contact">Nous contacter 🤙</span></p>

      <p class="m-0 mb-3 p-0">
        <q-item class="link" to="/confidentialite">Politique de confidentialité</q-item>
      </p>

      <p class="m-0 p-0">
        <q-item class="link" to="/cgv">CGV</q-item>
      </p>

      <hr class="m-auto mt-3 mb-3 w-50">
      <p class="m-0 p-0">
        <span class="online"></span>
        En ligne <span class="numberPlayer">0</span>
        <span style="margin: 0 10px;"></span>
        <span><img class="userRegisterPlayer" src="../../../public/img/player.png" alt=""></span>
        Inscrits
        <span id="userRegisterPlayer">{{ countUserRegister }}</span>
      </p>
      <hr class="m-auto mt-3 mb-3 w-50">
      <p class="m-0 p-0">Version {{ replaceGuillemet(params.appVersion) }} - <span style="text-transform:capitalize;">{{
          platform.platform
      }} - Build {{ params.appBuild }}</span>
      </p>
      <hr class="m-auto mt-3 mb-3 w-50">
      <p class="m-0 p-0">© 2022
        Développeur <a href="https://www.linkedin.com/in/ga%C3%ABtan-seigneur-2b3357200/" target="_blank">Gaëtan
          Seigneur</a>
      </p>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'CopyrightComponent',
  data() {
    return {
      countUserRegister: 0
    }
  },
  setup() {
    const $q = useQuasar()

    return {
      replaceGuillemet(value) {
        return value.replaceAll('"', '');
      },
      params: {
        appVersion: '1.0.17',
        appBuild: '10017',
      },
      platform: $q.platform.is,
    }
  }
})
</script>
