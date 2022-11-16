<template>

  <div id="contact" class="container">

    <div class="row">

      <div class="col text-center">

        <div class="box">

          <h2>
            Nous contacter
          </h2>

          <form id="form_contact" method="POST">

            <div class="body">

              <div class="lds-ring">
                <img src="<?= $static_img ?>clock-loading.gif" alt="">
              </div>

              <div class="message_success">
                <img src="<?= $static_img ?>message-check.png" alt="">
                <h3></h3>
                <p></p>
              </div>

              <div class="form">
                <label for="pseudo" class="form-label">Ton pseudo</label>
                <input type="text" class="form-control" name="pseudo" required>
              </div>

              <div class="mt-3 form">
                <label for="email" class="form-label">Ton adresse email</label>
                <input type="email" class="form-control" name="email" required>
              </div>

              <div class="mt-3 form">
                <label for="subject">Sujet de ta demande</label>
                <input type="text" name="subject" class="form-control" required>
              </div>

              <div class="mt-3 form">
                <label for="difficulte">Ton message</label>
                <textarea name="content" class="form-control" required></textarea>
              </div>

            </div>

            <div class="footer">
              <input type="submit" id="btn_contact" class="btn_play form" value="Envoyer" />
              <a id="quit_contact" class="btn_exit">Quitter</a>
            </div>

          </form>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactComponent'
})
</script>
