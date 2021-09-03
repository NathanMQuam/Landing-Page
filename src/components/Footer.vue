<template>
  <div class="footer mt-4">
    <div class="bg-dark text-light text-center p-4 mt-auto container-fluid px-5">
      <div class="row mb-3">
        <div class="col">
          <b>Nathan Quam's</b> Portfolio
        </div>
      </div>
      <div class="row">
        <div class="col">
          This is my personal website for showcasing my skills and projects. Here are some of my highlights:
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- TODO: Add a link to a list of all of my projects -->
        <b class="col-auto mx-2 px-2" v-for="project in state.projects" :key="project.id">
          <router-link class="text-light" :to="{name: 'ProjectDetailsPage', params: {id: project.id}}">
            {{ project.projectName }}
          </router-link>
        </b>
      </div>
      <div class="row mt-3 justify-content-center">
        <a class="col-auto mx-2 px-2" title="My LinkedIn" href="https://www.linkedin.com/in/nathan-quam/">
          <i class="fab fa-linkedin text-light"></i>
        </a>
        <a class="col-auto mx-2 px-2" title="My GitHub" href="https://github.com/NathanMQuam">
          <i class="fab fa-github text-light"></i>
        </a>
        <a class="col-auto mx-2 px-2" title="My Résumé" href="https://github.com/NathanMQuam/nathan-quam-career/blob/main/Nathan%20M%20Quam%20-%20Resume.pdf">
          <i class="fas fa-file text-light" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
export default {
  name: 'Footer',
  setup() {
    const state = reactive({
      projects: computed(() => AppState.projects.filter(p => p.isFeatured))
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
