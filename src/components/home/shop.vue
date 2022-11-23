<template>

  <div id="shop" class="shop">

    <h2>
      La boutique
      <span id="close_shop" class="close_shop">
        <img src="../../../public/img/close.png">
      </span>
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

      <div class="beforePay">

        <div class="header">

          <div class="gcard">
            <img src="../../../public/img/cb.png" alt="">
            <p>Carte banquaire</p>
          </div>

          <div class="gpay">
            <img src="../../../public/img/gpay.png" alt="">
            <p>Achats intégrés</p>
          </div>

          <div class="bpaypal">
            <img src="../../../public/img/paypal.png" alt="">
            <p>Paypal</p>
          </div>

        </div>

        <div class="d_back_items">

          <a id="back_items" class="btn_exit">Retour</a>

        </div>

      </div>

      <div class="gPayScreen">

        <div class="header">

          <p id="gold-coins">L\'ingot :</p>
          <div id="consumable1-purchase">Please wait...</div>

          <div class="gerror"></div>

        </div>

        <div class="d_back_items">
          <a id="back_items" class="btn_exit">Retour</a>
        </div>

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

      <div class="paypalScreen">

        <div class="header"></div>

        <div class="Paypal">

          <div id="smart-button-container">
            <div style="text-align: center;">
              <div id="paypal-button-container"></div>
            </div>
          </div>

        </div>

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

$(document).on('click', '.btn_shop_item', function (e) {

  e.preventDefault();

  var item = $(this).data('item'),
    item_name = $(this).data('name'),
    item_id = $(this).data('id'),
    item_price = $(this).data('price'),
    item_price_amount = $(this).data('amount'),
    pseudo = $('input[name=pseudo_shop_login]').val(),
    item_image = $(this).data('image'),
    item_amountp = $(this).data('amountp');

  $(document).on('click', '.bpaypal', function (e) {

    e.preventDefault();

    $('.beforePay').hide();
    $('.pay').hide();
    $('.gPayScreen').hide();
    $('.grid_shop').hide();
    $('.grid_sorter').hide();

    $('.beforePay').hide();

    $('.footer_grid_shop').hide();

    $('.paypalScreen .header').html('<div class="item_shop"><img src="https://funkids.site/assets/img/level/' + item_image + '.png" /><p>' + item_name + ' - <span class="price">' + item_price + '</span></p></div>');

    $('.paypalScreen').fadeIn(300);

    $('.paypalScreen .d_back_items').show();

    $('.pay .header').show();
    $('.pay .stripe').show();

    initPayPalButton(item_amountp, pseudo, item, item_name);

    function initPayPalButton(item_amountp, pseudo, item, item_name) {

      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'blue',
          layout: 'horizontal',
          label: 'pay',
          tagline: true
        },

        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              "description": item_name + ' - Funkids à vie',
              "amount": {
                "currency_code": "EUR",
                "value": item_amountp
              }
            }]
          });
        },

        onApprove: function (data, actions) {
          return actions.order.capture().then(function (orderData) {

            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Merci pour votre paiement !</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            $.ajax({
              url: "https://funkids.site/ajax/ajax-paiementSuccessful.php",
              method: 'POST',
              data: {
                pseudo: pseudo,
                origin: "paypal",
                id_produit: item,
                transaction_id: orderData.id,
                statut_transaction: orderData.status
              },
              cache: false,
              success: function (data) {

                $('.paypalScreen .d_back_items').hide();
                $(".paypalScreen .lds-ring").hide();
                $('.paypalScreen .Paypal').remove();
                $('.paypalScreen .header').remove();

                $('.paypalScreen .after_paiement img').attr('src', 'https://funkids.site/assets/img/check.png');
                $('.paypalScreen .after_paiement h2').html('Ton paiement est accepté.');
                $('.paypalScreen .after_paiement p').html('Ton compte a été crédité de <span class="credit"></span>.<br/><br/>');
                $('.paypalScreen .after_paiement p').append('Tu as reçu un email de récapitulatif de ta commande.');

                $('.paypalScreen .after_paiement .credit').html(item_name);

                setTimeout(() => {
                  $(".paypalScreen .after_paiement").show();
                }, 200);

              }

            });

          });
        },

        onError: function (data) {

          $.ajax({
            url: "https://funkids.site/ajax/ajax-paiementCanceled.php",
            method: 'POST',
            data: {
              pseudo: pseudo,
              id_produit: item,
              origin: "paypal",
              transaction_id: "",
              statut_transaction: "CANCELED"
            },
            cache: false,
            success: function (data) {

              $('.paypalScreen .Paypal').hide()
              $('.paypalScreen .d_back_items').hide();
              $(".paypalScreen .lds-ring").hide();
              $('.paypalScreen .stripe').remove();
              $('.paypalScreen .header').remove();

              $('.after_paiement img').attr('src', 'https://funkids.site/assets/img/cancel.png');
              $('.after_paiement h2').html('Ton paiement a été refusé');
              $('.after_paiement p').html('Tu n\'as pas été débité sur ton compte bancaire.');

              $('.after_paiement .credit').html(item_name);

              setTimeout(() => {
                $(".after_paiement").show();
              }, 200);

            }

          });

        },

        onCancel: function (data) {

          $.ajax({
            url: "https://funkids.site/ajax/ajax-paiementCanceled.php",
            method: 'POST',
            data: {
              pseudo: pseudo,
              id_produit: item,
              origin: "paypal",
              transaction_id: "",
              statut_transaction: "ERROR"
            },
            cache: false,
            success: function (data) {

              $('.paypalScreen .Paypal').hide()
              $('.paypalScreen .d_back_items').hide();
              $(".paypalScreen .lds-ring").hide();
              $('.paypalScreen .stripe').remove();
              $('.paypalScreen .header').remove();

              $('.after_paiement img').attr('src', 'https://funkids.site/assets/img/cancel.png');
              $('.after_paiement h2').html('Ton paiement a été refusé');
              $('.after_paiement p').html('Tu n\'as pas été débité sur ton compte bancaire.');

              $('.after_paiement .credit').html(item_name);

              setTimeout(() => {
                $(".after_paiement").show();
              }, 200);

            }

          });

        }

      }).render('#paypal-button-container');
    }

  })

})

export default defineComponent({
  name: 'ShooComponent'
})
</script>
