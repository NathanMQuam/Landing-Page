<template>
  <header>
    <Navbar />
  </header>
  <main class="text-light">
    <router-view />
  </main>
  <footer>
    <Footer />
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
