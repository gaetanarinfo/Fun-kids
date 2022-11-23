<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

screen.orientation.lock('landscape-primary');
screen.orientation.unlock();

function getOppositeOrientation() {
  return screen
    .orientation
    .startsWith("portrait") ? "portrait" : "portrait";
}

async function rotate() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
  }
  const newOrientation = getOppositeOrientation();
  await screen.orientation.lock(newOrientation);
}

rotate(this)

export default defineComponent({
  name: 'App'
})
</script>
