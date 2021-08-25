<template>
  <div class="projectDetailsPage w-100">
    <div class="row">
      <div class="col-10 offset-1">
        <h1 class="my-5 text-light text-left">
          <span class="text-white">{{ state.activeProject.projectName }}</span>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="hero-banner col-12">
        <div :style="`background-image: url(${state.activeProject.heroImage});`" class="hero-image w-100">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 my-3 text-left">
        <p>{{ state.activeProject.description }}</p>
      </div>
      <div class="col-10 offset-1 mb-3">
        Skills used:<br />
        <span class="p-2" v-for="skill in state.activeProject.skillsUsed" :key="skill">
          {{ skill }}
        </span>
      </div>
    </div>
    <div class="row bg-dark justify-content-center">
      <div class="col-4 no-gutters" v-for="image in state.activeProject.images" :key="image">
        <img :src="image" class="projectImage img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { computed, onMounted } from '@vue/runtime-core'
import { Project } from '../models/projectModel.js'
import { AppState } from '../AppState.js'

export default {
  name: 'ProjectDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      activeProject: computed(() => AppState.activeProject)
    })
    onMounted(() => {
      AppState.activeProject = new Project(AppState.projects.find(p => p.id === route.params.projectId))
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.projectDetailsPage {
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}

.projectImage {
  height: 100%;
  max-height: 35vh;
  max-width: 100%;
}
</style>
