<template>
  <header>
    <Navbar />
  </header>
  <main class="text-light">
    <router-view />
  </main>
  <footer class="mt-4">
    <div class="bg-dark text-light text-center p-4 mt-auto">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
