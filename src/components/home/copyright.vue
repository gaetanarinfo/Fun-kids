<template>

  <div class="iframe_facebook">
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffunkids72&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
      width="500" height="140" scrolling="no" frameborder="0" allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  </div>

  <div class="container copyright w-50">
    <div class="row m-auto">
      <div id="donate-button-container">
        <div id="donate-button"></div>
      </div>
      <p style="margin-top: 20px;margin-bottom: 0;">Faites un don avec PayPal</p>
      <hr class="m-auto mt-3 mb-3 w-50">
      <p class="m-0 p-0"><span id="report_bug" class="link">Signaler un bug ? 🐭</span> - <span class="link"
          id="shop_home">Boutique 🎉 </span> - <span class="link" id="btn_cp_contact">Nous contacter 🤙</span></p>
      <hr class="m-auto mt-3 mb-3 w-50">
      <p class="m-0 p-0">
        <span class="online"></span>
        En ligne <span class="numberPlayer">0</span>
        <span style="margin: 0 10px;"></span>
        <span><img class="userRegisterPlayer" src="<?= $static_img ?>player.png" alt=""></span>
        Inscrits
        <?= count($countUserRegister) ?>
      </p>
      <hr class="m-auto mt-3 mb-3 w-50">
      <p class="m-0 p-0">Version
        <?= $version ?> -
        <?= $ua['name'] . " " . $ua['version']; ?>
      </p>
      <hr class="m-auto mt-3 mb-3 w-50">
      <p class="m-0 p-0">© 2022
        <?= $site ?> - Développeur <a href="https://www.linkedin.com/in/ga%C3%ABtan-seigneur-2b3357200/"
          target="_blank">Gaëtan Seigneur</a>
      </p>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CopyrightComponent'
})
</script>
