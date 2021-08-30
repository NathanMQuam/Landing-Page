<template>
  <div class="projectDetailsPage w-100 text-left">
    <div class="row">
      <div class="col-6 offset-1">
        <a :href="state.activeProject.projectLink" title="View the live project">
          <h1 class="my-5 text-light text-left">
            <span class="text-white">{{ state.activeProject.projectName }}</span>
          </h1>
        </a>
      </div>
      <div class="col-4 d-flex align-content-center justify-content-end">
        <a :href="state.activeProject.sourceLink" class="my-auto text-light">View this project on GitHub -></a>
      </div>
    </div>
    <div class="row mb-4">
      <div class="hero-banner col-12">
        <div class="text-center w-100">
          <img :src="state.activeProject.heroImage" class="hero-image">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 project-type">
        {{ state.activeProject.type }}
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
        Skills used:
        <span class="p-2" v-for="skill in state.activeProject.skillsUsed" :key="skill">
          {{ skill }}
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 mb-4">
        <a :href="state.activeProject.projectLink" :title="state.activeProject.projectName">View the live project -></a>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 my-3 text-left">
        <p>{{ state.activeProject.description }}</p>
      </div>
    </div>
    <div class="row bg-dark justify-content-center" v-if="state.activeProject.images[0] != ''">
      <div class="col-4 no-gutters" v-for="image in state.activeProject.images" :key="image">
        <img :src="image" class="project-image img-fluid">
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
      AppState.activeProject = computed(() => new Project(AppState.projects.find(p => p.id === route.params.id)))
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

.project-image {
  height: 100%;
  max-height: 35vh;
  max-width: 100%;
}

.hero-image {
  height: 50vh;
}
</style>
