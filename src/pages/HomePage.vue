<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <Search />
    </div>
    <div>
      <ImageDetails />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      images: computed(() => AppState.images)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
