<template>
  <app-header/>
  <app-container/>
  <app-footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/app-header/app-header.vue'
import AppFooter from '@/components/app-footer/app-footer.vue'
import AppContainer from '@/components/app-content/app-content.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    AppContainer
  }
})
</script>

<style lang="scss" src="./stylesheets/main.scss"></style>
