<template>
  <div class="home">
    <div class="row">
      <div class="col-10 offset-1">
        <h1 class="my-5 text-light text-left">
          <span class="text-white">Nathan Quam's Portfolio</span>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="hero-banner col-12">
        <img src="https://picsum.photos/800/300" class="img-fluid w-100">
      </div>
    </div>
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
        <!-- TODO: Convert row into a v-for component -->
        <div class="row bg-dark no-gutters">
          <div class="col-5 p-4">
            <div class="row flex-column h-100">
              <div class="col-auto mb-2 project-type">
                <small>Web Design</small>
              </div>
              <div class="col-auto project-title">
                <h3>Title</h3>
              </div>
              <div class="col-auto project-description">
                Description
              </div>
              <div class="col-auto mt-auto project-link">
                Project link
              </div>
            </div>
          </div>
          <div class="col">
            <img src="https://picsum.photos/400" class="highlighted-project-hero">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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

.highlighted-project-hero {
  max-height: 40vh;
  width: 100%;
  object-fit: cover;
}

.project-type {
  opacity: 60%;
}

.project-title {

}

.project-description {
  opacity: 90%;
}

.project-link {
  opacity: 90%;
}
</style>
