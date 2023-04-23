var user_id = sessionStorage.getItem("user_id");

setTimeout(() => {
  $.ajax({
    url: 'http://31.33.145.219:45652/ajax/ajax-showLevel.php?user_id=' + user_id,
    success: function (data) {
      $('#levels').html(data);

      $.ajax({
        url: 'http://31.33.145.219:45652/ajax/ajax-showUserRegister.php',
        success: function (data) {
          $('#userRegisterPlayer').html(data)
        }
      })

      if ($.cookie("hud") != undefined) {
        if ($.cookie("hud") == "0") $('.header_items').hide()
        if ($.cookie("hud") == "0") $('#start_des').hide()
      }
    }
  })
}, 1500);

$(document).on('click', '#chest_btn', function (e) {

  e.preventDefault();

  playAudioClic();
  playAudioChest();

  $.ajax({
    url: 'http://31.33.145.219:45652/ajax/ajax-chestbonus.php?user_id=' + user_id,
    type: 'POST',
    data: {},
    success: function (data) {

      var res = JSON.parse(data);

      if (res.chest === true) { }

      if (res.chest === false) {

        countdownManager = {
          // Configuration
          targetTime: new Date(res.bonus), // Date cible du compte à rebours (00:00:00)
          displayElement: { // Elements HTML où sont affichés les informations
            day: null,
            hour: null,
            min: null,
            sec: null
          },

          // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
          init: function () {
            // Récupération des références vers les éléments pour l'affichage
            // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
            this.displayElement.hour = jQuery('#countdown_hour');
            this.displayElement.min = jQuery('#countdown_min');
            this.displayElement.sec = jQuery('#countdown_sec');

            // Lancement du compte à rebours
            this.tick(); // Premier tick tout de suite
            window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
          },

          // Met à jour le compte à rebours (tic d'horloge)
          tick: function () {
            // Instant présent
            var timeNow = new Date();

            // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
            if (timeNow > this.targetTime) {
              timeNow = this.targetTime;
            }

            // Calcul du temps restant
            var diff = this.dateDiff(timeNow, this.targetTime);

            if (diff.hour <= 9) '0' + this.displayElement.hour.text(diff.hour);
            else this.displayElement.hour.text(diff.hour);

            if (diff.min <= 9) '0' + this.displayElement.min.text(diff.min);
            else this.displayElement.min.text(diff.min);

            if (diff.sec <= 9) '0' + this.displayElement.sec.text(diff.sec);
            else this.displayElement.sec.text(diff.sec);
          },

          // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
          dateDiff: function (date1, date2) {
            var diff = {} // Initialisation du retour
            var tmp = date2 - date1;

            tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
            diff.sec = tmp % 60; // Extraction du nombre de secondes
            tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
            diff.min = tmp % 60; // Extraction du nombre de minutes
            tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
            diff.hour = tmp % 24; // Extraction du nombre d'heures
            diff.day = tmp;

            return diff;
          }
        };

        jQuery(function ($) {
          // Lancement du compte à rebours au chargement de la page
          countdownManager.init();
        });

        console.log(countdownManager['displayElement']['day']);

        if (countdownManager['displayElement']['day'] != null) $('.bonus_time').fadeIn(200);

      }

    }
  });

});

$(document).on('click', '#chest_btn_open', function (e) {

  e.preventDefault();

  playAudioClic();

  $(this).find('img').attr('style', 'animation: ChestOpen 0.5s cubic-bezier(.36, .07, .19, .97) infinite;');

  var ingot,
    coin,
    bambou,
    rubis,
    level = parseInt($('input[name=level]').val());

  // Pour chaque level la récompense augmente
  if (level == 1) {
    ingot = Math.floor(1 + Math.random() * 2);
    coin = Math.floor(1 + Math.random() * 2);
    bambou = Math.floor(1 + Math.random() * 2);
    rubis = Math.floor(1 + Math.random() * 2);
  } else if (level == 2) {
    ingot = Math.floor(1 + Math.random() * 2.5);
    coin = Math.floor(1 + Math.random() * 2.5);
    bambou = Math.floor(1 + Math.random() * 2.5);
    rubis = Math.floor(1 + Math.random() * 2.5);
  } else if (level == 3) {
    ingot = Math.floor(1 + Math.random() * 3);
    coin = Math.floor(1 + Math.random() * 3);
    bambou = Math.floor(1 + Math.random() * 3);
    rubis = Math.floor(1 + Math.random() * 3);
  } else if (level == 4) {
    ingot = Math.floor(1 + Math.random() * 3.5);
    coin = Math.floor(1 + Math.random() * 3.5);
    bambou = Math.floor(1 + Math.random() * 3.5);
    rubis = Math.floor(1 + Math.random() * 3.5);
  } else if (level == 5) {
    console.log(level);
    ingot = Math.floor(1 + Math.random() * 4);
    coin = Math.floor(1 + Math.random() * 4);
    bambou = Math.floor(1 + Math.random() * 4);
    rubis = Math.floor(1 + Math.random() * 4);
  } else if (level == 6) {
    ingot = Math.floor(1 + Math.random() * 4.5);
    coin = Math.floor(1 + Math.random() * 4.5);
    bambou = Math.floor(1 + Math.random() * 4.5);
    rubis = Math.floor(1 + Math.random() * 4.5);
  } else if (level == 7) {
    ingot = Math.floor(1 + Math.random() * 5);
    coin = Math.floor(1 + Math.random() * 5);
    bambou = Math.floor(1 + Math.random() * 5);
    rubis = Math.floor(1 + Math.random() * 5);
  }

  $('.grid_bonus .item_ingot span').html(ingot);
  $('.grid_bonus .item_coin span').html(coin);
  $('.grid_bonus .item_bambou span').html(bambou);
  $('.grid_bonus .item_rubis span').html(rubis);

  setTimeout(() => {
    $(this).find('img').attr('style', 'animation: none');
    $(this).find('img').attr('src', 'http://31.33.145.219:45652/assets/img/level/chest_bonus_1.png');
    $('.grid_bonus').attr('style', 'display: flex;');
    $(this).addClass('disabled');

    $.ajax({
      url: 'http://31.33.145.219:45652/ajax/ajax-chestbonus.php?user_id=' + user_id,
      type: 'POST',
      data: {
        ingot: ingot,
        coins: coin,
        bambou: bambou,
        rubis: rubis
      },
      success: function (data) {

        var res = JSON.parse(data);

        console.log(data);

        if (res.chest === true) {


          setTimeout(() => {

            countdownManager = {
              // Configuration
              targetTime: new Date(res.bonus), // Date cible du compte à rebours (00:00:00)
              displayElement: { // Elements HTML où sont affichés les informations
                day: null,
                hour: null,
                min: null,
                sec: null
              },

              // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
              init: function () {
                // Récupération des références vers les éléments pour l'affichage
                // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
                this.displayElement.hour = jQuery('#countdown_hour');
                this.displayElement.min = jQuery('#countdown_min');
                this.displayElement.sec = jQuery('#countdown_sec');

                // Lancement du compte à rebours
                this.tick(); // Premier tick tout de suite
                window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
              },

              // Met à jour le compte à rebours (tic d'horloge)
              tick: function () {
                // Instant présent
                var timeNow = new Date();

                // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
                if (timeNow > this.targetTime) {
                  timeNow = this.targetTime;
                }

                // Calcul du temps restant
                var diff = this.dateDiff(timeNow, this.targetTime);

                this.displayElement.hour.text(diff.hour);
                this.displayElement.min.text(diff.min);
                this.displayElement.sec.text(diff.sec);
              },

              // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
              dateDiff: function (date1, date2) {
                var diff = {} // Initialisation du retour
                var tmp = date2 - date1;

                tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
                diff.sec = tmp % 60; // Extraction du nombre de secondes
                tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
                diff.min = tmp % 60; // Extraction du nombre de minutes
                tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
                diff.hour = tmp % 24; // Extraction du nombre d'heures
                diff.day = tmp;

                return diff;
              }
            };

            jQuery(function ($) {
              // Lancement du compte à rebours au chargement de la page
              countdownManager.init();
            });

            $('.bonus_time').fadeIn(200);

          }, 200);

        }

        if (res.chest === false) {

        }

      }
    });

  }, 1600);

});
