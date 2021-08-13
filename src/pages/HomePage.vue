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
        <img src="https://picsum.photos/2000/500" class="img-fluid w-100">
      </div>
    </div>
    <!-- TODO: Skills section with major coding languages and tools -->
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
        <div class="row highlighted-project bg-dark no-gutters">
          <div class="col-5 p-4">
            <div class="row flex-column h-100">
              <div class="col-auto mb-2 project-type">
                <small>Web Design</small>
              </div>
              <div class="col-auto project-title">
                <h3>Title</h3>
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
        <!--  -->
        <!-- TODO: Contact form -->
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

.highlighted-project {
  min-height: 35vh;
}

.highlighted-project-hero {
  width: 100%;
  height:100%;
  background-size: cover;
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
