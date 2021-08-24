<template>
  <div class="home">
    <div class="row">
      <div class="col-10 offset-1">
        <h1 class="my-5 text-light text-left">
          <span class="text-white">Nathan Quam's Portfolio</span>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="hero-banner col-12">
        <img src="https://picsum.photos/2000/500" class="img-fluid w-100">
      </div>
    </div>
    <!-- TODO: Skills section with major coding languages and tools -->
    <div class="row">
      <div class="col-10 offset-1 text-left">
        <div>
          <h2 class="mt-5 mb-3">
            Highlighted Projects
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis maiores culpa esse consequuntur quibusdam adipisci numquam assumenda corporis minus itaque quaerat praesentium dicta aspernatur laborum, ea deserunt dolore laudantium laboriosam!
          </p>
        </div>
        <!-- TODO: Convert row into a v-for component -->
        <!-- TODO: Contact form -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      projects: computed(() => AppState.projects.filter(project => project.isFeatured))
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
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
