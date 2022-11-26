<template>

  <div id="option" class="container">

    <div class="row">

      <div class="col text-center">

        <div class="box">

          <h2>
            Menu des options
          </h2>

          <div class="body">

            <div>
              <label for="soundGeneral" class="form-label">Son général</label>
              <div id="slider">
                <input type="range" class="form-range" min="0" max="1.0" step="0.1" :value="soundGeneral"
                  id="soundGeneral" onchange="soundGeneralValue.value=value">
                <output id="soundGeneralValue">
                  {{ soundGeneral }}
                </output>
              </div>
            </div>

            <div class="mt-3">
              <label for="soundBruitage" class="form-label">Bruitage</label>
              <div id="slider">
                <input type="range" class="form-range" min="0" max="1.0" step="0.1" :value="soundBruitage"
                  id="soundBruitage" onchange="soundBruitageValue.value=value">
                <output id="soundBruitageValue">
                  {{ soundBruitage }}
                </output>
              </div>
            </div>

            <div class="mt-3">
              <label for="switchHud" class="form-label">Afficher le HUD</label>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="switchHud">
                <label class="custom-control-label" for="switchHud"></label>
              </div>
            </div>

          </div>

          <div class="footer">
            <a id="save_option" class="btn_play">Sauvegarder</a>
            <a id="quit_option" class="btn_exit">Quitter</a>
          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { Cookies } from 'quasar'

var soundBruitage = 1,
  soundGeneral = 1;

export default defineComponent({
  name: 'OptionComponent',
  data() {

    return {
      soundBruitage: (Cookies.has('soundBruitage')) ? soundBruitage = Cookies.get('soundBruitage') : 1,
      soundGeneral: (Cookies.has('soundGeneral')) ? soundGeneral = Cookies.get('soundGeneral') : 1,
    }

  }
})
</script>
