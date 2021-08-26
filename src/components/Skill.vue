<template>
  <div class="skill col-2 p-2">
    <div class="h-100 w-100 d-flex flex-column justify-content-center">
      <div class="flex-grow-1 skill-img" :style="`background-image: url(${skill.image});`">
      </div>
      <div>{{ skill.name }}</div>
    </div>
  </div>
</template>

<script>
import { Skill } from '../models/SkillModel.js'
export default {
  name: 'Skill',
  setup() {
    return {}
  },
  components: {},
  props: { skill: { type: Skill, default: () => new Skill() } }
}
</script>

<style lang="scss" scoped>

</style>
