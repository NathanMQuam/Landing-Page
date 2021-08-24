<template>
  <div class="projectComponent row highlighted-project bg-dark no-gutters mb-4">
    <div class="col-5 p-4">
      <div class="row flex-column h-100">
        <div class="col-auto mb-2 project-type">
          <small>Web Design</small>
        </div>
        <div class="col-auto project-title">
          <h3>{{ project.projectName }}</h3>
        </div>
        <div class="col-auto project-description mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor natus eaque dolores numquam! Dolorem aliquid aspernatur suscipit, corporis minus quae consectetur quos totam quo, vitae sit rerum tenetur dignissimos.
        </div>
        <div class="col-auto mt-auto project-link">
          View Project ->
        </div>
      </div>
    </div>
    <div class="col">
      <!-- The background image is in an inline-style attribute for when this row is converted to a vue component -->
      <div class="highlighted-project-hero" style="background-image: url('https://picsum.photos/800');">
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
