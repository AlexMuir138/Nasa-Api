<template>
  <form @submit.prevent="findImages">
    <div class="row m-auto d-flex align-items-center">
      <div class="col-12 m-3">
        <input type="date"
               v-model="state.query"
        />
        <button type="
               submit"
                class="btn btn-primary"
        >
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { imagesService } from '../services/ImagesService'
export default ({
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      test() {
      },
      findImages() {
        AppState.currentQuery = state.query
        imagesService.findImages()
      }
    }
  }
})
</script>
