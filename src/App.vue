<template>
  <app-header/>
  <router-view class="container"/>
  <app-footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/app-header/app-header.vue'
import AppFooter from '@/components/app-footer/app-footer.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style lang="scss">
.container {
  padding-top: 57px;

  p {
    margin: 0;
  }

  p + p {
    margin: 1rem 0 0;
  }

  .row {
    margin-top: -1.875rem;

    & > [class^="col"] {
      margin-top: 1.875rem;
    }
  }
}
</style>
