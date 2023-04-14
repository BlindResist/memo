<template>
  <header class="app-header">
    <h1 class="app-header__logo">memos</h1>
    <app-navigation/>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppNavigation from '@/components/app-navigation/app-navigation.vue'

export default defineComponent({
  name: 'app-header',
  components: {
    AppNavigation
  }
})
</script>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
  background-color: #ffffff;
  border-bottom: 1px solid #212121;

  @include breakpoint(v-mobile) {
    padding: 1rem;
    background-color: $white;
  }

  > * {
    pointer-events: auto;
  }

  &__logo {
    font: {
      size: 24px;
      weight: 700;
    };
  }
}
</style>
