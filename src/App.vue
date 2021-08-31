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

.hero-image {
  height: 35vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url('https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/penrose-nebula.jpg');
}

.skill-box {
  min-height: 15vh;
  max-height: 15vh;
  > div {
    max-height: 100%;
    max-width: 100%;
  }
}

.skill-img {
  max-height: 100%;
  max-width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

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
