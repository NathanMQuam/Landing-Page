<template>
  <div class="home">
    <div class="row">
      <div class="col-10 offset-1">
        <h1 class="mt-5 mb-4 text-light text-left">
          <span class="text-white">Nathan Quam's Portfolio</span>
        </h1>
      </div>
      <div class="col-10 offset-1">
        <div class="m-0 p-0 text-left">
          Hi there! My name is <b>Nathan Quam</b>, and I am a programmer. I love learning, and my list of skills and experiences is ever growing. I recently graduated from <b><a href="https://boisecodeworks.com/" class="text-light">Boise CodeWorks</a></b>, and I'm currently looking to work as a web application developer!
        </div>
      </div>
      <!-- <div class="col-12 text-center mt-3">
        <h2 class="small-h2">
          Links
        </h2>
      </div> -->
      <div class="col-10 offset-1 my-4 d-flex justify-content-center">
        <a class="col-auto mx-2 px-2 text-light" title="My Résumé" href="https://github.com/NathanMQuam/nathan-quam-career/blob/main/Nathan%20M%20Quam%20-%20Resume.pdf">
          <i class="fas fa-file text-light" aria-hidden="true"></i> My Résumé
        </a>
        <a class="col-auto mx-2 px-2 text-light" title="My LinkedIn" href="https://www.linkedin.com/in/nathan-q-9baaa3132/">
          <i class="fab fa-linkedin text-light" aria-hidden="true"></i> My LinkedIn
        </a>
        <a class="col-auto mx-2 px-2 text-light" title="My GitHub" href="https://github.com/NathanMQuam">
          <i class="fab fa-github text-light" aria-hidden="true"></i> My GitHub
        </a>
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
        <SkillsList class="row" />
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
    <div class="row mt-5">
      <ContactForm class="col-10 offset-1" />
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

.small-h2 {
  font-size: 1.5em;
}
</style>
