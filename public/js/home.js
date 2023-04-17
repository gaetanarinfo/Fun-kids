setTimeout(() => {
  // home //

  $(".show_hide_password a").on('click', function (event) {
    event.preventDefault();
    if ($('.show_hide_password input').attr("type") == "text") {
      $('.show_hide_password input').attr('type', 'password');
      $('.show_hide_password i').addClass("fa-eye-slash");
      $('.show_hide_password i').removeClass("fa-eye");
    } else if ($('.show_hide_password input').attr("type") == "password") {
      $('.show_hide_password input').attr('type', 'text');
      $('.show_hide_password i').removeClass("fa-eye-slash");
      $('.show_hide_password i').addClass("fa-eye");
    }
  });

  $('#home #btn_start').show();

  // Show user online
  setInterval(() => {

    $.ajax({
      url: 'http://31.33.145.219:45652/ajax/ajax-showUserOnline.php',
      success: function (data) {

        $('.numberPlayer').html(data)

      }
    })

  }, 1000);

  $.ajax({
    url: 'http://31.33.145.219:45652/ajax/ajax-showUserRegister.php',
    success: function (data) {

      $('#userRegisterPlayer').html(data)

    }
  })

  $.ajax({
    url: 'http://31.33.145.219:45652/ajax/ajax-selectColor.php',
    success: function (data) {

      $('#color').html(data)

    }
  })

  $.ajax({
    url: 'http://31.33.145.219:45652/ajax/ajax-showClassement.php',
    success: function (data) {

      $('#showClassement').html(data)

    }
  })

  var sound_1 = document.getElementById("sound_1"),
    clic_1 = document.getElementById("clic_1"),
    timeout_1 = 500;

  $.cookie.raw = true;

  if ($.cookie("hud") == undefined) {
    $.cookie("hud", 1, {
      expires: 365,
      path: '/'
    });
  }

  if ($.cookie("hud") != undefined && $.cookie("hud") == "1") {
    $('#switchHud').prop('checked', true)
  }

  if ($.cookie("pseudoPlayer") != undefined) {
    $('input[name="pseudo_login"]').val($.cookie('pseudoPlayer'))
  }

  if ($.cookie("passwordPlayer") != undefined) {
    $('input[name="password_login"]').val($.cookie('passwordPlayer'))
  }

  if ($.cookie("soundGeneral") != undefined) {
    sound_1.volume = parseFloat($.cookie("soundGeneral"));
  }

  if ($.cookie("soundBruitage") != undefined) {
    clic_1.volume = parseFloat($.cookie("soundBruitage"));
  }

  function playAudio() {
    sound_1.play();
  }

  function stopAudio() {
    sound_1.pause();
    sound_1.currentTime = 0;
  }

  function playAudioClic() {
    clic_1.play();
  }

  $(document).on('click', '#btn_start', function (e) {

    e.preventDefault();

    playAudioClic();
    playAudio();

    $('.btn-start').hide()

    $('#home #loader').fadeIn(600);

    setTimeout(() => {

      $('#home #loading').hide();
      $('#home #menu').show();

    }, timeout_1 * 7);

  })

  $(document).on('click', '#btn_exit_game', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #menu').hide();
    $('#home #option').hide();
    $('#home #loader').hide();
    $('#home #new_game').hide();
    $('#home #login_game').hide();
    $('#home #aide').hide();
    $('#home #classement').hide();
    $('#home #shop').hide();
    $('#home #loading').show();
    $('#home #btn_start').show();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })

  $(document).on('click', '#btn_option', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #menu').hide();
    $('#home #option').show();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })

  $(document).on('click', '#quit_option', function (e) {

    e.preventDefault();

    playAudioClic();

    var sound_1s = document.getElementById("sound_1")
    var clic_1s = document.getElementById("clic_1")

    sound_1.volume = sound_1s.volume;
    clic_1.volume = clic_1s.volume;

    $('#home #option').hide();
    $('#home #menu').show();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })

  $(document).on('change', '#soundGeneral', function (e) {

    var value = parseFloat($(this).val());

    sound_1.volume = value;

  })

  $(document).on('change', '#soundBruitage', function (e) {

    var value = parseFloat($(this).val());

    clic_1.volume = value;

  })

  $(document).on('change', '#switchHud', function (e) {

    var check = $(this).prop('checked');

    if (check) {
      $.cookie("hud", "1");
      $(this).prop('checked', true)
    } else {
      $.cookie("hud", "0");
      $(this).prop('checked', false)
    }

  })


  $(document).on('click', '#save_option', function (e) {

    e.preventDefault();

    playAudioClic();

    $.cookie("soundGeneral", parseFloat($('#soundGeneral').val()), {
      expires: 365,
      path: '/'
    });

    $.cookie("soundBruitage", parseFloat($('#soundBruitage').val()), {
      expires: 365,
      path: '/'
    });

    $('#sound_1').attr('volume', parseFloat($('#soundGeneral').val()));
    $('#clic_1').attr('volume', parseFloat($('#soundBruitage').val()));

    $('#home #option').hide();
    $('#home #menu').show();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })

  $(document).on('click', '#btn_classement_game', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #shop').hide();
    $('#home .classement').fadeIn();

    $('html, body').animate({
      scrollTop: $(".classement").offset().top - 10
    }, "slow");

  })


  $(document).on('click', '#close_shop', function (e) {

    e.preventDefault();

    playAudioClic();

    $('.shop').fadeOut();
    $('#home #bug').hide();
    $('#home #menu').show();
    $('#home .menu').show();
    $('#home .classement').hide();
    $('#home #option').hide();
    $('#home #new_game').hide();
    $('#home #login_game').hide();
    $('#home #aide').hide();
    $('#home #bug').hide();
    $('#home #contact').hide();

  })

  $(document).on('click', '#close_classement', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home .classement').fadeOut();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })

  $(document).on('click', '#quit_bug', function (e) {

    e.preventDefault();

    playAudioClic();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

    $('#home #bug').hide();
    $('#home #menu').show();
    $('#home .menu').show();
    $('#home .classement').hide();
  })

  $(document).on('click', '#report_bug', function (e) {

    e.preventDefault();

    playAudioClic();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

    $('#home #loading').hide();
    $('#home #menu').hide();
    $('#home #classement').hide();
    $('#home #shop').hide();
    $('#home #option').hide();
    $('#home #new_game').hide();
    $('#home #login_game').hide();
    $('#home #aide').hide();
    $('#home #bug').show();
    $('#home #contact').hide()

  })

  $('#form_bug').submit(function (e) {

    e.preventDefault();

    var url = "http://31.33.145.219:45652/ajax/ajax-requestBug.php",
      formData = $("#form_bug").serialize();

    $('#btn_request_bug').attr('disabled', '');

    $("#form_bug :input").prop("disabled", true);
    $('.form').addClass('loading');
    $('.lds-ring').show();
    $("#form_bug").parent().css('min-height', 'auto');
    $('.lds-ring').parent().css('min-height', 'auto');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      success: function (data) {

        var res = JSON.parse(data);

        setTimeout(() => {
          $('.lds-ring').hide();
        }, 600);

        if (res.submit === true) {
          $('.message_success img').attr('src', res.icone);
          $('.message_success h3').attr('class', res.color);
          $('.message_success h3').html(res.title);
          $('.message_success p').html(res.message);
          $('.message_success').delay(500).fadeIn();
        } else {
          $('.message_success img').attr('src', res.icone);
          $('.message_success h3').attr('class', res.color);
          $('.message_success h3').html(res.title);
          $('.message_success p').html(res.message);
          $('.message_success').delay(500).fadeIn();
        }

      },
      error: function (err) {
        console.log("Error: ", err);
      }
    })

  })

  $(document).on('click', '#btn_play_game', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #menu').hide();
    $('#home #option').hide();
    $('#home #loader').hide();
    $('#home #classement').hide();
    $('#home #shop').hide();
    $('#home #aide').hide();
    $('#home #new_game').show();

  })
  new_game
  $(document).on('click', '#btn_login_game', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #menu').hide();
    $('#home #option').hide();
    $('#home #loader').hide();
    $('#home #classement').hide();
    $('#home #shop').hide();
    $('#home #aide').hide();
    $('#home #new_game').hide();
    $('#home #login_game').show();

  })

  $('#form_new_game').submit(function (e) {

    e.preventDefault();

    newGame();

  })

  function newGame() {

    playAudioClic();

    var url = "http://31.33.145.219:45652/ajax/ajax-newGame.php",
      formData = $("#form_new_game").serialize();

    $('#btn_new_game').attr('disabled', '');

    $("#form_new_game :input").prop("disabled", true);
    $('#new_game .form').addClass('loading');
    $('#new_game .lds-ring').show();
    $("#form_new_game").parent().css('min-height', 'auto');
    $('#new_game .lds-ring').parent().css('min-height', 'auto');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      success: function (data) {

        var res = JSON.parse(data);

        if (res.register === true) {

          sessionStorage.setItem("user_id", res.id);
          localStorage.setItem("user_id", res.id);

          $('html, body').animate({
            scrollTop: $("html").offset().top
          }, "slow");

          setTimeout(() => {

            location.href = '#/level';

          }, 1600);

        }

        if (res.register === false) {

          $('html, body').animate({
            scrollTop: $("html").offset().top
          }, "slow");

          setTimeout(() => {
            $('.lds-ring').hide();
            $('#new_game .message_success img').attr('src', res.icone);
            $('#new_game .message_success h3').attr('class', res.color);
            $('#new_game .message_success h3').html(res.title);
            $('#new_game .message_success p').html(res.message);
            $('#new_game .message_success').show();
          }, 700);

          setTimeout(() => {
            $("#form_new_game :input").prop("disabled", false);
            $('#new_game .lds-ring').hide();
            $('#new_game .form').removeClass('loading');
            $('#new_game .message_success').hide();
            $("#new_game .box").removeAttr('style');
            $('#new_game .body').removeAttr('style');
          }, 2100);


        }

      },
      error: function (err) {
        console.log("Error: ", err);
      }
    })

  }

  $('#connexion_game').submit(function (e) {

    e.preventDefault();

    loginGame();

  })

  function loginGame() {

    playAudioClic();

    $('#btn_login_games').attr('disabled', '');

    $("#connexion_game :input").prop("disabled", true);
    $('#login_game .form').addClass('loading');
    $('#login_game .lds-ring').show();
    $("#connexion_game").parent().css('min-height', 'auto');
    $('#login_game .lds-ring').parent().css('min-height', 'auto');
    $('#login_game .footer').hide();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

    var url = "http://31.33.145.219:45652/ajax/ajax-loginGame.php";

    var sendCode = 'true';

    if (localStorage.getItem("code") != null) {
      sendCode = 'false';
    }

    $.ajax({
      url: url,
      type: "POST",
      data: {
        pseudo_login: $('input[name=pseudo_login]').val(),
        password_login: $('input[name=password_login]').val(),
        code_mail: $('input[name=code_login]').val(),
        sendCode: sendCode
      },
      success: function (data) {


        var res = JSON.parse(data);

        if (res.login === true) {

          if (localStorage.getItem("code") != null) {

            sessionStorage.setItem("user_id", res.user_id);
            localStorage.setItem("user_id", res.user_id);

            location.href = '#/level';
            location.reload();

          } else {
            setTimeout(() => {

              $('#login_game .form').hide('loading');
              $('#login_game .lds-ring').hide();
              $("#connexion_game .verification input").prop("disabled", false);
              $('#login_game .verification').show();

            }, 1500);
          }

        }

        if (res.login === false) {

          $('html, body').animate({
            scrollTop: $("html").offset().top
          }, "slow");

          setTimeout(() => {
            $('.lds-ring').hide();
            $('#login_game .message_success img').attr('src', res.icone);
            $('#login_game .message_success h3').attr('class', res.color);
            $('#login_game .message_success h3').html(res.title);
            $('#login_game .message_success p').html(res.message);
            $('#login_game .message_success').show();
          }, 700);

          setTimeout(() => {
            $("#connexion_game :input").prop("disabled", false);
            $('#login_game .lds-ring').hide();
            $('#login_game .form').removeClass('loading');
            $('#login_game .message_success').hide();
            $("#login_game .box").removeAttr('style');
            $('#login_game .body').removeAttr('style');
            $('#login_game .footer').show();
          }, 2100);


        }

      },
      error: function (err) {
        console.log("Error: ", err);
      }
    })

  }

  $(document).on('keyup', '#login_game .verification input', function (e) {

    var input = $(this).val();

    if ($(this).val().length > 5 && $(this).val().length < 7) {

      var url2 = "http://31.33.145.219:45652/ajax/ajax-verifLogin.php";

      $.ajax({
        url: url2,
        type: "POST",
        data: {
          pseudo_login: $('input[name=pseudo_login]').val(),
          code_mail: $('input[name=code_login]').val()
        },
        success: function (data) {

          var res = JSON.parse(data);

          if (res.login === true) {

            $('input[name=code_login]').removeAttr('style');

            sessionStorage.setItem("user_id", res.user_id);
            localStorage.setItem("user_id", res.user_id);
            sessionStorage.setItem("code", input);
            localStorage.setItem("code", input);

            location.href = '#/level';
            location.reload();

          }

          if (res.login === false) {
            $('input[name=code_login]').attr('style', 'width: 110px !important;border: 2px dashed red !important;');
          }

        }

      })

    }

  })

  $(document).on('click', '#quit_new_game', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#new_game .message_success').hide();
    $('#home #loading').hide();
    $('#home #menu').show();
    $('#home #option').hide();
    $('#home #new_game').hide();
    $('#home #classement').hide();
    $('#home #shop').hide();
    $('#home #login_game').hide();
    $('#home #aide').hide();
    $('#home #bug').hide();
    $("#form_new_game :input").prop("disabled", false);
    $('#new_game .form').removeClass('loading');
    $('#btn_new_game').removeAttr('disabled');
    $(".box").parent().removeAttr('css');
    $('.body').parent().removeAttr('css');

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })


  $(document).on('click', '#btn_aide', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #loading').hide();
    $('#home #menu').hide();
    $('#home #option').hide();
    $('#home #classement').hide();
    $('#home #shop').hide();
    $('#home #new_game').hide();
    $('#home #login_game').hide();
    $('#home #aide').show();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })

  $(document).on('click', '#btn_quit_aide', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #loading').hide();
    $('#home #menu').show();
    $('#home #option').hide();
    $('#home .classement').hide();
    $('#home #shop').hide();
    $('#home #new_game').hide();
    $('#home #login_game').hide();
    $('#home #aide').hide();
    $('#home #bug').hide();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow")

  })

  $(document).on('click', '#shop_home', function (e) {

    e.preventDefault();

    playAudioClic();
    playAudio();

    $('.btn-start').hide();
    $('.decouvrir').fadeOut();
    $('#home #loader').show();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

    $('#home #loading').hide();
    $('#home .classement').hide()
    $('#home #menu').show();
    $('#home #shop').fadeIn();
    $('#menu .row .col:first-child').hide()

    $('.grid_shop').addClass('no_grid');
    $.ajax({
      url: 'http://31.33.145.219:45652/ajax/ajax-showShop.php',
      success: function (data) {
        setTimeout(() => {
          $('.grid_shop').html(data)
          $('.grid_shop').removeClass('no_grid');
        }, 1200);
      }
    })

  })

  $(document).on('click', '#btn_shop', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #shop').fadeIn();
    $('#home .classement').hide();
    $('#menu .row .col:first-child').hide();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

    $('.grid_shop').addClass('no_grid');
    $.ajax({
      url: 'http://31.33.145.219:45652/ajax/ajax-showShop.php',
      success: function (data) {
        setTimeout(() => {
          $('.grid_shop').html(data)
          $('.grid_shop').removeClass('no_grid');
        }, 1200);
      }
    })

  })

  $(document).on('click', '#btn_shop_games', function (e) {

    e.preventDefault();

    playAudioClic();

    var pseudo = $('input[name=pseudo_shop_login]').val();

    if (pseudo < 2) {

      $('input[name=pseudo_shop_login]').addClass('error_input');

      setTimeout(() => {
        $('input[name=pseudo_shop_login]').removeClass('error_input');
      }, 500);

    } else {

      $.ajax({
        url: "http://31.33.145.219:45652/ajax/ajax-verifPseudo.php",
        method: 'POST',
        data: {
          pseudo: pseudo,
        },
        cache: false,
        success: function (data) {

          var res = JSON.parse(data);

          if (res.user === true) {

            $('#home .login_shop').hide();
            $('#home .grid_shop').removeClass('hide_shop');
            $('#home .grid_sorter').removeClass('hide_shop');
            $('#home .footer_grid_shop').show();

          }

          if (res.user === false) {

            $('input[name=pseudo_shop_login]').addClass('error_input');
            $('.label_error').html('Ton compte n\'éxiste pas !');
            $('.label_error').show();

            setTimeout(() => {
              $('input[name=pseudo_shop_login]').removeClass('error_input');
              $('.label_error').html('');
              $('.label_error').hide();
            }, 1200);

          }

        }

      });

    }

  })

  $(document).on('click', '.btn_shop_item', function (e) {

    e.preventDefault();
    playAudioClic();

    var item = $(this).data('item'),
      item_name = $(this).data('name'),
      item_id = $(this).data('id'),
      item_price = $(this).data('price'),
      item_price_amount = $(this).data('amount'),
      pseudo = $('input[name=pseudo_shop_login]').val(),
      item_image = $(this).data('image');

    $('.footer_grid_shop').hide();
    $('.grid_shop').hide();
    $('.grid_sorter').hide();

    $('.beforePay').fadeIn(300);

    $('.beforePay .d_back_items').show();
    $('.beforePay .header').show();

    $(document).on('click', '.gcard', function (e) {

      e.preventDefault();

      playAudioClic();

      $('.gPayScreen').hide();
      $('.paypalScreen').hide();

      cardPay(item, item_name, item_price, item_price_amount, pseudo, item_image);

    })

    $(document).on('click', '.gpay', function (e) {

      e.preventDefault();

      playAudioClic();

      $('.beforePay').hide();
      $('.pay').hide();
      $('.paypalScreen').hide();
      $('.grid_shop').hide();
      $('.grid_sorter').hide();

      $('.gPayScreen').fadeIn(300);

      gPay(item_name, item_id, item_price, item_image);

    })

    $(document).on('click', '.bpaypal', function (e) {

      e.preventDefault();

      playAudioClic();

    })

  })

  function onDeviceReady() {
    $('.gpay').show();
  }

  document.addEventListener('deviceready', function () {
    onDeviceReady()
  });

  var image_item = "";
  var init = false

  function gPay(item_name, item_id, item_price, item_image) {

    $('.gPayScreen .header').show();
    $('.gPayScreen .d_back_items').show();

    image_item = item_image;

    if (!init) document.addEventListener('deviceready', initStore(item_name, item_id));
    document.addEventListener('deviceready', refreshGoldCoinsUI(item_name, item_price, item_image));

  }

  var name_item = "";
  var id_item = 0;

  function initStore(item_name, item_id) {

    if (!window.store) {
      $('.gerror').html('Magasin non disponible');
      return;
    }

    name_item = item_name;
    id_item = item_id;

    store.register({
      id: item_id,
      alias: item_name,
      type: store.CONSUMABLE
    });

    store.error(function (error) {
      $('.gerror').html('Erreur ' + error.code + ': ' + error.message);
    });

    store.when(item_name).updated(refreshProductUI);

    store.when(item_name).approved(function (p) {
      $('.gerror').html(p);
      p.verify();
    });

    store.when(item_name).verified(finishPurchase);

    store.refresh();
  }

  function refreshGoldCoinsUI(item_name, item_price, item_image) {
    $('.gPayScreen .header').html('<div class="item_shop"><img src="http://31.33.145.219:45652/assets/img/level/' + item_image + '.png" /><p>' + item_name + ' - <span class="price">' + item_price + '</span></p></div>');
  }

  function refreshProductUI(product) {

    $('.gerror').html(product);

    $('.gPayScreen .header').html('<div class="item_shop"><img src="http://31.33.145.219:45652/assets/img/level/' + image_item + '.png" /><p>' + product.title + ' - <span class="price">' + product.price + '</span></p></div>');

    const button = product.canPurchase ? '<a class="btn_achat_gpay" data-name="' + name_item + '" id="purchaseConsumable">Acheter !</a>' : '';

    const el = document.getElementById('consumable-purchase');

    el.innerHTML = button;

  }

  $(document).on('click', '#purchaseConsumable', function (e) {

    e.preventDefault();

    var name_i = $(this).data('name');
    store.order(name_i);

  })

  // Paiement final gpay
  function finishPurchase(p) {

    $.ajax({
      url: "http://31.33.145.219:45652/ajax/ajax-paiementGpaySuccessful.php",
      method: 'POST',
      data: {
        pseudo: $('input[name=pseudo_shop_login]').val(),
        id_produit: id_item,
      },
      cache: false,
      success: function (data) {
        $('.gerror').html(p);

        $('#purchaseConsumable').hide();
        $('.gPayScreen .header').hide();
        $('.gPayScreen .d_back_items').hide();
        $('.gPayScreen .after_paiement img').attr('src', 'http://31.33.145.219:45652/assets/img/check.png');
        $('.gPayScreen .after_paiement h2').html('Ton paiement est accepté.');
        $('.gPayScreen .after_paiement p').html('Ton compte a été crédité de <span class="credit"></span>.<br/><br/>');

        $('.gPayScreen .after_paiement .credit').html(name_item);

        setTimeout(() => {
          $(".gPayScreen .after_paiement").show();
        }, 200);

        setTimeout(() => {
          location.reload();
        }, 10500);

      }

    });

    p.finish();
    refreshGoldCoinsUI();
  }

  function cardPay(item, item_name, item_price, item_price_amount, pseudo, item_image) {

    $('.beforePay').hide();

    $('.footer_grid_shop').hide();

    $('.grid_shop').hide();
    $('.grid_sorter').hide();

    $('.pay .header').html('<div class="item_shop"><img src="http://31.33.145.219:45652/assets/img/level/' + item_image + '.png" /><p>' + item_name + ' - <span class="price">' + item_price + '</span></p></div>');

    $('.pay').fadeIn(300);

    $('.pay .stripe').html('<div class="card_element"><form id="payment-form"><div id="card-element"></div><button id="submit_card"><div class="spinner hidden" id="spinner"></div><span id="button-text">Payer</span></button></form></div>');

    $('.pay .d_back_items').show();

    $('.pay .header').show();
    $('.pay .stripe').show();

    // Paiement
    var prod = "pk_live_51KZXrwFGWvBXDlKDZbQHkmfwDDBht2rZ8mNw6Cktwn8bHTsnoQeYY8Y7qpkZYmO8Fm2A0mhVX3w2VNTUNkq6CKdQ00B6eEJ0jW",
      stripe,
      api;

    api = prod;

    purchase = {
      items: [{
        id: item,
        amount: parseFloat(item_price_amount),
        description: 'Motif : ' + item_name + ' - Total : ' + item_price + ' - ' + ' Personnage : ' + pseudo
      }]
    };

    // A reference to Stripe.js initialized with your real test publishable API key.
    stripe = Stripe(api);

    // Disable the button until we have Stripe set up on the page
    document.querySelector("#submit_card").disabled = true;

    fetch("http://31.33.145.219:45652/ajax/ajax-card.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(purchase)
    })
      .then(function (result) {
        return result.json();
      }).catch(function (error) {
        console.log(error);
      })
      .then(function (data) {

        var elements = stripe.elements();
        var card = elements.create("card", {
          //style: style
        });

        // Stripe injects an iframe into the DOM

        card.mount("#card-element");

        card.on("change", function (event) {

          // Disable the Pay button if there are no card details in the Element
          document.querySelector("button").disabled = event.empty;

          // Disable the Pay button if there are no card details in the Element
          document.querySelector("button").disabled = event.empty;
        });

        $(document).on('submit', '#payment-form', function (event) {
          event.preventDefault();
          // Complete payment when the submit button is clicked
          payWithCard(stripe, card, data.clientSecret);
        })
        // var form = document.getElementById("payment-form");
        // form.addEventListener("submit", function(event) {

        // });

      }).catch(function (error) {
        console.log(error);
      });

    // Calls stripe.confirmCardPayment
    // If the card requires authentication Stripe shows a pop-up modal to
    // prompt the user to enter authentication details without leaving your page.
    var payWithCard = function (stripe, card, clientSecret) {

      // Show a success message within this page, e.g.
      $(".pay .stripe").fadeOut(300);

      $('.pay #quit_shop_login').hide();
      $('.pay #back_items').hide();

      setTimeout(() => {
        $(".pay .lds-ring").fadeIn(600);
      }, 200);

      stripe
        .confirmCardPayment(clientSecret, {
          // receipt_email: $('input[name=email]').val(),
          payment_method: {
            card: card
          }
        })
        .then(function (result) {

          if (result.error) {
            // Show error to your customer

            if (result.error.type == "card_error") {

              if (result.error.payment_method != undefined) {
                showError(result.error.payment_method['id'], result.error.payment_method['code']);
              } else {
                showError2(result.error.code);
              }

            } else if (result.error.type == "invalid_request_error") {

              showError3(result.error.payment_method['id'], result.error.payment_method['code']);

            } else if (result.error.type == "api_error") {

              showError4(result.error.payment_method['id'], result.error.payment_method['code']);

            }


          } else {

            // The payment succeeded!
            orderComplete(result.paymentIntent.id, result.paymentIntent.status);
          }
        });
    };

    /* ------- UI helpers ------- */
    // Shows a success message when the payment is complete
    var orderComplete = function (paymentIntentId, status) {

      $.ajax({
        url: "http://31.33.145.219:45652/ajax/ajax-paiementSuccessful.php",
        method: 'POST',
        data: {
          pseudo: pseudo,
          origin: "stripe",
          id_produit: item,
          transaction_id: paymentIntentId,
          statut_transaction: status
        },
        cache: false,
        success: function (data) {

          $(".pay .lds-ring").hide();
          $('.pay .stripe').remove();
          $('.pay .header').remove();

          $('.after_paiement img').attr('src', 'http://31.33.145.219:45652/assets/img/check.png');
          $('.after_paiement h2').html('Ton paiement est accepté.');
          $('.after_paiement p').html('Ton compte a été crédité de <span class="credit"></span>.<br/><br/>');
          $('.after_paiement p').append('Tu as reçu un email de récapitulatif de ta commande.');

          $('.after_paiement .credit').html(item_name);

          setTimeout(() => {
            $(".after_paiement").show();
          }, 200);

        }

      });

    };

    // Show the customer the error from Stripe if their card fails to charge
    var showError = function (paymentIntentId, status) {

      $.ajax({
        url: "ajax/ajax-paiementCanceled.php",
        method: 'POST',
        data: {
          pseudo: pseudo,
          id_produit: item,
          origin: "stripe",
          transaction_id: "",
          statut_transaction: "CANCELED"
        },
        cache: false,
        success: function (data) {

          $(".pay .lds-ring").hide();
          $('.pay .stripe').remove();
          $('.pay .header').remove();

          $('.after_paiement img').attr('src', 'http://31.33.145.219:45652/assets/img/cancel.png');
          $('.after_paiement h2').html('Ton paiement à été refusée');
          $('.after_paiement p').html('Tu n\'a pas été débité sur ton compte bancaire.');

          $('.after_paiement .credit').html(item_name);

          setTimeout(() => {
            $(".after_paiement").show();
          }, 200);

        }

      });

    };

    var showError2 = function () {

      $.ajax({
        url: "http://31.33.145.219:45652/ajax/ajax-paiementCanceled.php",
        method: 'POST',
        data: {
          pseudo: pseudo,
          id_produit: item,
          origin: "stripe",
          transaction_id: "",
          statut_transaction: "CANCELED"
        },
        cache: false,
        success: function (data) {

          $(".pay .lds-ring").hide();
          $('.pay .stripe').remove();
          $('.pay .header').remove();

          $('.after_paiement img').attr('src', 'http://31.33.145.219:45652/assets/img/cancel.png');
          $('.after_paiement h2').html('Ton paiement à été refusée');
          $('.after_paiement p').html('Tu n\'a pas été débité sur ton compte bancaire.');

          $('.after_paiement .credit').html(item_name);

          setTimeout(() => {
            $(".after_paiement").show();
          }, 200);

        }

      });

    };

    var showError3 = function () {

      $.ajax({
        url: "http://31.33.145.219:45652/ajax/ajax-paiementError.php",
        method: 'POST',
        data: {
          pseudo: pseudo,
          id_produit: item,
          origin: "stripe",
          transaction_id: "",
          statut_transaction: "CANCELED"
        },
        cache: false,
        success: function (data) {

          $(".pay .lds-ring").hide();
          $('.pay .stripe').remove();
          $('.pay .header').remove();

          $('.after_paiement img').attr('src', 'http://31.33.145.219:45652/assets/img/cancel.png');
          $('.after_paiement h2').html('Ton paiement à été refusée');
          $('.after_paiement p').html('Tu n\'a pas été débité sur ton compte bancaire.');

          $('.after_paiement .credit').html(item_name);

          setTimeout(() => {
            $(".after_paiement").show();
          }, 200);

        }

      });

    };

    var showError4 = function () {

      $.ajax({
        url: "http://31.33.145.219:45652/ajax/ajax-paiementError.php",
        method: 'POST',
        data: {
          pseudo: pseudo,
          id_produit: item,
          origin: "stripe",
          transaction_id: "",
          statut_transaction: "CANCELED"
        },
        cache: false,
        success: function (data) {

          $(".pay .lds-ring").hide();
          $('.pay .stripe').remove();
          $('.pay .header').remove();

          $('.after_paiement img').attr('src', 'http://31.33.145.219:45652/assets/img/cancel.png');
          $('.after_paiement h2').html('Ton paiement à été refusée');
          $('.after_paiement p').html('Tu n\'a pas été débité sur ton compte bancaire.');

          $('.after_paiement .credit').html(item_name);

          setTimeout(() => {
            $(".after_paiement").show();
          }, 200);

        }

      });
    };

  }

  $(document).on('click', '#quit_shop_login', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home .shop').fadeOut();
    $('#menu .row .menu').show();
    $('#home #contact').hide();
    $('#home #bug').hide();

  })

  $(document).on('click', '#quit_shop_login_end', function (e) {

    e.preventDefault();

    playAudioClic();

    $('.stripe').html('');
    $('.stripe').hide();
    $('.paypalScreen .Paypal').html('');
    $('.paypalScreen').hide();
    $('#consumable-purchase').html('');
    name_item = "";
    image_item = "";
    id_item = "";
    $('.header').hide();
    $('.d_back_items').hide();
    $('.after_paiement').hide();
    $('.grid_shop').show();
    $('.grid_sorter').show();
    $('#home #contact').hide();
    $('#home #bug').hide();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })

  $(document).on('click', '#back_items', function (e) {

    e.preventDefault();

    playAudioClic();

    $('.stripe').html('');
    $('.stripe').hide();
    $('.paypalScreen .Paypal').html('');
    $('.paypalScreen').hide();
    $('#consumable-purchase').html('');
    name_item = "";
    image_item = "";
    id_item = "";
    $('.header').hide();
    $('.d_back_items').hide();
    $('.after_paiement').hide();
    $('.grid_shop').show();
    $('.grid_sorter').show();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  });

  // Sorter Shop

  $(document).on('click', '.shop .grid_sorter .item', function (e) {

    e.preventDefault();

    var name = $(this).data('name');

    if (name == "item_ingot") {
      $('.shop .grid_shop .item_ingot').show();
      $('.shop .grid_shop .item_rubis').hide();
      $('.shop .grid_shop .item_coin').hide();
    } else if (name == "item_coin") {
      $('.shop .grid_shop .item_coin').show();
      $('.shop .grid_shop .item_ingot').hide();
      $('.shop .grid_shop .item_rubis').hide();
    } else if (name == "item_rubis") {
      $('.shop .grid_shop .item_rubis').show();
      $('.shop .grid_shop .item_ingot').hide();
      $('.shop .grid_shop .item_coin').hide();
    } else if (name == "all") {
      $('.shop .grid_shop .item_coin').show();
      $('.shop .grid_shop .item_ingot').show();
      $('.shop .grid_shop .item_rubis').show();
    }

  })

  $(document).on('click', '#quit_contact', function (e) {

    e.preventDefault();

    playAudioClic();

    $('#home #contact').hide();
    $('#home #menu').show();
    $('#home .classement').hide();
    $('#home .menu').show();

    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, "slow");

  })

  $(document).on('click', '#btn_cp_contact', function (e) {

    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, "slow");

    playAudioClic();

    $('#home #loading').hide();
    $('#home #menu').hide();
    $('#home #classement').hide();
    $('#home #shop').hide();
    $('#home #option').hide();
    $('#home #new_game').hide();
    $('#home #login_game').hide();
    $('#home #aide').hide();
    $('#home #bug').hide();
    $('#home #contact').show();

  });


  $('#form_contact').submit(function (e) {

    e.preventDefault();

    var url = "http://31.33.145.219:45652/ajax/ajax-contact.php",
      formData = $("#form_contact").serialize();

    $('#btn_request_bug').attr('disabled', '');

    $("#form_contact :input").prop("disabled", true);
    $('.form').addClass('loading');
    $('.lds-ring').show();
    $("#form_contact").parent().css('min-height', 'auto');
    $('.lds-ring').parent().css('min-height', 'auto');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      success: function (data) {

        var res = JSON.parse(data);

        setTimeout(() => {
          $('.lds-ring').hide();
        }, 600);

        if (res.submit === true) {
          $('.message_success img').attr('src', res.icone);
          $('.message_success h3').attr('class', res.color);
          $('.message_success h3').html(res.title);
          $('.message_success p').html(res.message);
          $('.message_success').delay(500).fadeIn();
        } else {
          $('.message_success img').attr('src', res.icone);
          $('.message_success h3').attr('class', res.color);
          $('.message_success h3').html(res.title);
          $('.message_success p').html(res.message);
          $('.message_success').delay(500).fadeIn();
        }

      }
    });

  });

  // home //

}, 1200);

$(document).on('keyup', 'input[name="pseudo_login"]', function (e) {
  $.cookie('pseudoPlayer', $(this).val());
})

$(document).on('keyup', 'input[name="password_login"]', function (e) {
  $.cookie('passwordPlayer', $(this).val());
})
