<template>
  <div class="home">
    <div class="row">
      <div class="col-10 offset-1">
        <h1 class="mt-5 mb-4 text-light text-left">
          <span class="text-white">Nathan Quam's Portfolio</span>
        </h1>
      </div>
      <div class="col-10 offset-1 mb-4">
        <div class="m-0 p-0 text-left">
          Hi there! My name is <b>Nathan Quam</b>, and I am a programmer. I love learning, and my list of skills and experiences is ever growing. I recently graduated from <b><a href="https://boisecodeworks.com/" class="text-light">Boise CodeWorks</a></b>, and I'm currently looking to work as a web application developer!
          <!-- TODO: Add something here about contacting me with the contact form below -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class="hero-banner col-12">
        <img src="https://picsum.photos/2000/500" class="hero-image img-fluid w-100">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-10 offset-1">
        <div class="row">
          <div class="col text-left">
            <h2>My Top Skills</h2>
          </div>
        </div>
        <div class="row">
          <Skill class="skill-box col-2 p-2" v-for="skill in state.skills" :key="skill.id" :skill="skill" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 text-left">
        <div>
          <h2 class="mt-5 mb-3">
            Highlighted Projects
          </h2>
          <p>
            These are some of my more recent or noteworthy projects that showcase some of my skills.
          </p>
        </div>
        <ProjectComponent v-for="project in state.projects" :key="project.id" :project="project" />
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
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
      projects: computed(() => AppState.projects.filter(project => project.isFeatured)),
      skills: computed(() => AppState.skills.filter(s => s.image !== ''))
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
</style>
