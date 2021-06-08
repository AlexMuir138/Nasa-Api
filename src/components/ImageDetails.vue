<template>
  <div class="container-fluid p-3 rounded">
    <div class="row">
      <div class="col-12 ">
        <div class="card bg-dark" v-if="image">
          <h3 class="text-center text-info p-3 m-3">
            {{ image.title }}
          </h3>
          <div class="card-body">
            <span class="d-flex justify-content-center border-light border-top shadow-lg">
              <img :src="image.url" height="500" class="pt-5" />
            </span>
          </div>
          <p class="m-5 p-3 text-light border-light text-center border-top">
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
