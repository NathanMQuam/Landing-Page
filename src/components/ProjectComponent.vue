<template>
  <div class="projectComponent row highlighted-project bg-dark no-gutters mb-4">
    <div class="col-5 p-4">
      <div class="row flex-column h-100">
        <div class="col-auto mb-2 project-type">
          <small>{{ project.type }}</small>
        </div>
        <div class="col-auto project-title">
          <h3>{{ project.projectName }}</h3>
        </div>
        <div class="col-auto project-description mb-3">
          {{ project.description }}
        </div>
        <div class="col-auto mt-auto project-link">
          <!-- TODO: Change to specific project page -->
          <router-link :to="{name: 'Projects'}">
            View Project ->
          </router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="highlighted-project-hero" :style="`background-image: url('${project.heroImage}');`">
      </div>
    </div>
  </div>
</template>

<script>
import { Project } from '../models/projectModel.js'
export default {
  name: 'ProjectComponent',
  props: { project: { type: Project, default: () => new Project() } }
}
</script>

<style lang="scss" scoped>

</style>
