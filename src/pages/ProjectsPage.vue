<template>
  <div class="projects container text-left">
    <div class="row mt-5">
      <div class="col-10 offset-1">
        <h2>Highlighted Projects</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
        <ProjectComponent v-for="project in state.featuredProjects" :key="project.id" :project="project" />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-10 offset-1">
        <h2>Other Projects</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
        <ProjectComponent v-for="project in state.projects" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState.js'
export default {
  name: 'ProjectsPage',
  setup() {
    const state = reactive({
      featuredProjects: computed(() => AppState.projects.filter(p => p.isFeatured)),
      projects: computed(() => AppState.projects.filter(p => !p.isFeatured))
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
