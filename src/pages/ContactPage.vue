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
              <div class="h-100">
                <i class="link-icon fab fa-linkedin" aria-hidden="true"></i> LinkedIn
              </div>
            </a>
          </li>
          <li class="list-unstyled">
            <a class="text-light" title="My GitHub" href="https://github.com/NathanMQuam">
              <div class="h-100">
                <i class="link-icon fab fa-github" aria-hidden="true"></i> GitHub
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-4">
      <ContactForm class="col-10 offset-1" />
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

.small-heading {
  font-size: 1.75em;
}
</style>
