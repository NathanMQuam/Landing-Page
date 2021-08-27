s<template>
  <div class="contactPage w-100">
    <div class="row mt-4">
      <div class="col-10 offset-1">
        <h1 class="small-heading">
          Places to Contact Me
        </h1>
        <ul class="list-group mt-4">
          <li class="list-unstyled">
            <a class="text-light" title="My LinkedIn" href="https://www.linkedin.com/in/nathan-q-9baaa3132/">
              <div class="w-100 h-100">
                <i class="link-icon fab fa-linkedin" aria-hidden="true"></i> LinkedIn
              </div>
            </a>
          </li>
          <li class="list-unstyled">
            <a class="text-light" title="My GitHub" href="https://github.com/NathanMQuam">
              <div class="w-100 h-100">
                <i class="link-icon fab fa-github" aria-hidden="true"></i> GitHub
              </div>
            </a>
          </li>
          <!-- <li class="list-unstyled">
            <a class="text-light" title="My Résumé" href="https://github.com/NathanMQuam/nathan-quam-career/blob/main/Nathan%20M%20Quam%20-%20Resume.pdf">
              <i class="link-icon fas fa-file" aria-hidden="true"></i> My Résumé
            </a>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-10 text-center offset-1">
        <iframe class="contact-form w-100" src="https://form.jotform.com/212384494808161" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  setup() {
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.link-icon {
  font-size: 2em;
  width: 1.25em;
  text-align: center;
  line-height: 1.25em;
}

.contact-form {
  height: 800px;
}

.small-heading {
  font-size: 1.75em;
}
</style>
