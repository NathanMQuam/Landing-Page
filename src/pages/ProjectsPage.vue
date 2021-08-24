<template>
  <div class="projects container">
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
        <!-- TODO: Highlighted projects here in v-for -->
        <!-- TODO: Contact form -->
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
