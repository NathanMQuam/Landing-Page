<template>
  <div class="projects container">
    <div class="row">
      <div class="col-10 offset-1 text-left">
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
      projects: computed(() => AppState.projects)
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
