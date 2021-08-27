<template>
  <div class="skillsList">
    <Skill class="skill-box col-2 p-2" v-for="skill in state.skills" :key="skill.id" :skill="skill" />
    <div class="col-2 p-2 skill-box">
      <div class="h-100 w-100 d-flex flex-column justify-content-center">
        <div class="flex-grow-1 skill-img"></div>
        And more...
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState.js'

export default {
  name: 'SkillsList',
  setup() {
    const state = reactive({
      skills: computed(() => AppState.skills.filter(s => s.image !== ''))
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
