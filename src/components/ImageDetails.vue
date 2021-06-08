<template>
  <div class="container-fluid p-3 rounded">
    <div class="row">
      <div class="col-12 ">
        <div class="card bg-dark" v-if="image">
          <u class="text-light"><h3 class="text-center text-light p-3 m-3">
            {{ image.title }}
          </h3></u>
          <div class="card-body">
            <span class="d-flex justify-content-center">
              <img :src="image.url" height="500" />
            </span>
          </div>
          <p class="m-5 p-3 text-light border-light">
            {{ image.explanation }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default ({
  setup() {
    return {
      image: computed(() => AppState.images)
    }
  }
})
</script>
