<template>

  <div class="container w-50" id="aide">

    <div class="row">

      <div class="col text-center">

        <h2>
          Comment jouer a Fun Kids ?
        </h2>

        <div class="book">
          <img src="../../../public/img/livre.png">
        </div>

        <h3>
          But du jeu
        </h3>

        <div id="desc" class="aide_grid">

          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

        </div>

        <h3>
          Les items du jeu
        </h3>

        <div class="aide_grid">

          <div>
            <img src="../../../public/img/level/ladder_small.png" alt="">
            <p>Echelle</p>
            <p>Permet de grimper de Case en Case.</p>
          </div>

          <div>
            <img src="../../../public/img/level/potion_1.png" alt="">
            <p style="margin-top: 40px;">Potion</p>
            <p>Permet de sauter un grand nombre de Case.</p>
          </div>

          <div>
            <img src="../../../public/img/level/monstre_1.png" alt="">
            <p style="margin-top: 40px;">Monstre</p>
            <p>Ce monstre fait descendre de quelque .</p>
          </div>

          <div>
            <img src="../../../public/img/level/bombe.png" alt="">
            <p style="margin-top: 40px;">Bombe</p>
            <p>Une bombe qui fait descendre de quelque Case.</p>
          </div>

          <div>
            <img src="../../../public/img/level/chest_close.png" alt="">

            <p style="margin-top: 40px;">Coffre</p>
            <p>Un coffre qui permet de gagner 2 lingots.</p>
          </div>

          <div>
            <img src="../../../public/img/level/lingo_1.png" alt="">

            <p style="margin-top: 40px;">L'ingot</p>
            <p>L'ingot en cours de dev.</p>
          </div>

          <div>
            <img src="../../../public/img/level/coin.png" alt="">

            <p style="margin-top: 40px;">Pièce d'or</p>
            <p>Les pièces d'or te permettent de passer les niveaux.</p>
          </div>

          <div>
            <img src="../../../public/img/level/bambou.png" alt="" style="width: 35px;min-height: auto;">

            <p style="margin-top: 40px;">Bambou</p>
            <p>En cours de dev.</p>
          </div>

          <div>
            <img src="../../../public/img/level/rubis.png" alt="" style="width: 35px;min-height: auto;">

            <p style="margin-top: 40px;">Rubis</p>
            <p>En cours de dev.</p>
          </div>

        </div>

        <div>
          <a id="btn_quit_aide" class="btn_aide">Retour</a>
        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AideComponent'
})
</script>
