<template>

  <div id="menu" class="container">

    <div class="row show_mobile">

      <div class="col text-center hide_mobile">

        <div class="title mb-2">
          <h1 class="fw-bold">
            <div>F</div>
            <div>u</div>
            <div>n</div>
            <div></div>
            <div>K</div>
            <div>i</div>
            <div>d</div>
            <div>s</div>
          </h1>
        </div>

        <div class="garcon_play">
          <img src="../../../public/img/idea.png" alt="">
        </div>

        <a id="btn_play_game" class="btn_play">Nouvelle partie</a>

        <a id="btn_login_game" class="btn_play">Jouer</a>

        <div class="chest_shop">
          <img src="../../../public/img/level/chest_close.png" />
        </div>

        <a id="btn_shop" class="btn_shop">Boutique</a>

        <a id="btn_aide" class="btn_aide">Comment jouer ?</a>

        <a id="btn_classement_game" class="btn_classement">Classement</a>
        <a id="btn_option" class="btn_option">Option</a>
        <a id="btn_exit_game" class="btn_exit" onclick="stopAudio()">Quitter</a>
      </div>

      <div class="col text-center">

        <div class="new_game_loader">

          <h2>
            Chargement du jeu en cours...
          </h2>

          <div class="lds-ring">
            <img src="../../../public/img/clock-loading.gif" alt="">
          </div>
        </div>

        <div class="classement">

          <h2>
            Classement des joueurs
            <span id="close_classement" class="close_classement">
              <img src="../../../public/img/close.png">
            </span>
          </h2>

          <div class="body" id="showClassement">
          </div>

        </div>

        <shop />

      </div>

    </div>

  </div>

</template>
<script>
import { defineComponent } from 'vue'
import shop from '../home/shop.vue'

export default defineComponent({
  name: 'MenuComponent',
  components: {
    shop,
  },
})
</script>
