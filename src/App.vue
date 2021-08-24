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
.highlighted-project {
  min-height: 30vh;
}

.highlighted-project-hero {
  width: 100%;
  height:100%;
  background-size: cover;
  object-fit: cover;
}

.project-type {
  opacity: 60%;
}

.project-title {

}

.project-description {
  opacity: 90%;
}

.project-link {
  opacity: 90%;
}
</style>
