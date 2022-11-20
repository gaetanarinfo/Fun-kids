<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

screen.orientation.lock('landscape-primary');

screen.orientation.addEventListener('change', function () {
  screen.orientation.lock('landscape-primary');
});

export default defineComponent({
  name: 'App'
})
</script>
