<template>

  <div id="loading" class="container">

    <div class="row">

      <div class="col"></div>

      <div class="col text-center">

        <div class="title mb-5">
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

        <h2 class="title_start mb-5" style="padding-left: 10px;">Jouer <span>gratuitement</span> 🎮</h2>

        <div class="btn-start">

          <div id="btn_start">
            <img src="../../../public/img/btn-play.webp" alt="Start Game">
          </div>

        </div>

        <div id="loader">

          <div class="ajax-loader">
            <img src="../../../public/img/_preloader.gif" alt="">
          </div>

        </div>

      </div>

      <div class="col"></div>

      <div class="m-auto w-100 text-center mb-4">

        <div id="caroussel" class="carousel slide" data-bs-ride="carousel">

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#caroussel" data-bs-slide-to="0" class="active" aria-current="true"
              aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#caroussel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#caroussel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../../public/img/galerie/cityskyline.png" class="d-block w-100" alt="Image 1">
            </div>
            <div class="carousel-item">
              <img src="../../../public/img/galerie/graveyard.png" class="d-block w-100" alt="Image 2">
            </div>
            <div class="carousel-item">
              <img src="../../../public/img/galerie/lucia-li-together.jpg" class="d-block w-100" alt="Image 3">
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#caroussel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Précédent</span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#caroussel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Suivant</span>
          </button>

        </div>

      </div>

      <div class="cards w-100 text-center mt-1 mb-1">

        <div class="row">

          <div class="col-sm-3 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Paiement sécurisé</h5>
                <p class="card-icon"><i class="fa-solid fa-circle-check"></i></p>
              </div>
            </div>
          </div>

          <div class="col-sm-3 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Item à vie</h5>
                <p class="card-icon"><i class="fa-solid fa-bolt"></i></p>
              </div>
            </div>
          </div>

          <div class="col-sm-3 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Joue sans limite</h5>
                <p class="card-icon"><i class="fa-solid fa-unlock"></i></p>
              </div>
            </div>
          </div>

        </div>

        <div class="row">

          <div class="col-sm-3 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Inscription Gratuite</h5>
                <p class="card-icon"><i class="fa-solid fa-user-astronaut"></i></p>
              </div>
            </div>
          </div>

          <div class="col-sm-3 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Joue n'importe où</h5>
                <p class="card-icon"><i class="fa-solid fa-chess"></i></p>
              </div>
            </div>
          </div>

          <div class="col-sm-3 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">100% Compatibles</h5>
                <p class="card-icon"><i class="fa-solid fa-mobile-screen"></i></p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="decouvrir m-auto w-100 text-center">

        <h2>
          Découvrir FunKids 🤖
        </h2>

        <div class="collapse mt-4 show" id="fun1">
          <div class="card card-body">

            <div class="m-auto text-center diamond">
              <img src="../../../public/img/fleche.png" alt="">
            </div>

            <ul>
              <li>FunKids et un jeu pour tout publique même si une large partie et destinée aux enfants, on peut très
                bien s'amuser en tant qu'Adulte.</li>
              <li>Nous possédons une boutique pour plus de diversité dans le jeu.</li>
              <li>Avec l'accord de tes parents, tu peux acheter divers objets, et avancer au fur et à mesure.</li>
              <li>Tout au long du développement de notre jeu, tu pourras ainsi découvrir différents niveaux avec
                différents, piège, des coffres bonus exceptionnels et rien que pour toi.</li>
              <li>Une simple inscription et requis pour jouer sur FunKinds.</li>
            </ul>
          </div>
        </div>

        <h2 class="mt-4">
          FunKids C'est aussi 😻
        </h2>

        <div class="collapse mt-4 show" id="fun2">
          <div class="card card-body">

            <div class="m-auto text-center diamond">
              <img src="../../../public/img/potion_p.png" alt="">
            </div>

            <ul>
              <li>De nombreux items seront à découvrir au fur et à mesure des niveaux, reste donc à l'affût pour en
                apprendre davantage sur FunKids.</li>
              <li>Entre chaque niveau, tu peux prendre une pause chocolat et revenir 😃 sur FunKids, à tout moment, tu
                peux jouer.</li>
              <li>Apprends-en davantage en t'amusant avec FunKids, nous regroupons plusieurs types de niveau.</li>
              <li>Il me reste plus qu'à te souhaiter un bon jeu sur FunKids.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="text-center mt-4">
        <h2 class="title_avis m-0">
          Derniers avis ⭐
        </h2>
      </div>

      <div class="avis m-auto w-100 mt-1">

        <div class="accordion accordion-flush" id="accordionAvis">

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                🐼 L'avis de Nathan sur FunKids
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionAvis">

              <div class="accordion-body">

                <div class="stars mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>

                J'aime trop le style du site internet. Avec mes parents, on s'amuse, je
                m'épanouis à travers ce jeu.
                <hr>
                <div class="avis_date">07/04/2022 12:35</div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                😻 L'avis de Marc sur FunKids
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionAvis">
              <div class="accordion-body">

                <div class="stars mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>

                Superbe jeux j'adore tout simplement.
                <hr>
                <div class="avis_date">29/03/2022 10:20</div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                😽 L'avis de Joan sur FunKids
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionAvis">
              <div class="accordion-body">

                <div class="stars mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>

                Je me suis amusé comme un petit fou. J'aime trop FunKids.
                <hr>
                <div class="avis_date">23/03/2022 13:55</div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFor">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFor" aria-expanded="false" aria-controls="flush-collapseFor">
                🤡 L'avis de Lilou sur FunKids
              </button>
            </h2>
            <div id="flush-collapseFor" class="accordion-collapse collapse" aria-labelledby="flush-headingFor"
              data-bs-parent="#accordionAvis">
              <div class="accordion-body">

                <div class="stars mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>

                Site internet sympa, avec divers items et jeux j'adore.
                <hr>
                <div class="avis_date">03/03/2022 15:35</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingComponent'
})
</script>
