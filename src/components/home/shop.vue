<template>

  <div id="shop" class="shop">

    <h2>
      La boutique
    </h2>

    <div class="body">

      <div class="login_shop">

        <div class="login_chest">
          <img class="w-50" src="../../../public/img/chest.png" alt="">
        </div>

        <div class="form_shop">

          <div class="form">
            <label for="pseudo_shop_login" class="form-label">Ton pseudo</label>
            <input type="text" class="form-control" name="pseudo_shop_login" required>
            <span class="label_error"></span>
          </div>

        </div>

        <div class="footer">
          <a id="btn_shop_games" class="btn_play form mt-0">Continuer</a>
          <a id="quit_shop_login" class="btn_exit">Quitter</a>
        </div>

      </div>

      <div class="grid_sorter hide_shop">
        <div class="item"><span>Filtré par :</span></div>
        <div class="item" data-name="all"><img src="../../../public/img/menu.png" alt=""><span>Tous</span></div>
        <div class="item" data-name="item_ingot"><img src="../../../public/img/level/lingo_1.png"
            alt=""><span>L'ingot</span></div>
        <div class="item" data-name="item_coin"><img src="../../../public/img/level/coin.png" alt=""><span>Pièce
            d'or</span></div>
      </div>

      <div class="grid_shop hide_shop">



      </div>

      <div class="footer_grid_shop">
        <a id="quit_shop_login" class="btn_exit">Quitter</a>
      </div>

      <div class="pay">

        <div class="header"></div>

        <div class="stripe"></div>

        <div class="d_back_items">
          <a id="back_items" class="btn_exit">Retour</a>
        </div>

        <div class="lds-ring">

          <h3>Paiement en cours...</h3>

          <img src="../../../public/img/clock-loading.gif" alt="">
        </div>

        <div class="after_paiement">

          <img />
          <h2></h2>
          <p></p>

          <a id="quit_shop_login_end" class="btn_exit">Quitter</a>

        </div>

      </div>

    </div>

  </div>

</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShooComponent'
})
</script>
