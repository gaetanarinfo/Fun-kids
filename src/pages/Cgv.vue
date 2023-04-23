<template>

  <div id="home">

    <div id="loading" class="container" style="max-width: 90% !important;">

      <div class="row">

        <div class="col">
        </div>

        <div class="col text-center mb-4">

          <div class="title" style="margin-bottom: 0 !important;">

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

        </div>

        <iframe src="http://31.33.145.219:45652/documents/CGV.pdf" width="100%" style="min-height: 800px;border: 0;"></iframe>

        <div class="mt-4">
          <q-item id="btn_exit_cgv" to="/"
            style="max-width: 250px;--bs-gutter-x: 0;--bs-gutter-y: 0;display: block;flex-wrap: wrap;margin-top: 0;margin-right: 0;margin-left: 0;margin: 0 auto !important;"
            class="btn_cgv">Quitter</q-item>
        </div>

      </div>

    </div>

    <!-- Bug -->
    <bug />

    <!-- Contact -->
    <contact />

    <!-- Aide -->
    <aide />

    <!-- Copyright -->
    <copyright />

  </div>

</template>

<script>
import { defineComponent } from 'vue'
import bug from '../components/home/bug.vue'
import contact from '../components/home/contact.vue'
import aide from '../components/home/aide.vue'
import copyright from '../components/home/copyright.vue'

export default defineComponent({
  name: 'CgvPage',
  components: {
    bug,
    contact,
    aide,
    copyright
  },
  setup() {

    return {

    }
  }
})
</script>
