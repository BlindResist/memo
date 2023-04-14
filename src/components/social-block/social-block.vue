<template>
  <div class="social-block">
    <a
      target="_blank"
      :key="item.name"
      :href="item.link"
      :title="item.name"
      v-for="item in data"
      :class="`social-block__item icon icon-${item.name}`"
    ></a>
  </div>
</template>

<script lang="ts" src="./social-block.ts"></script>
<style lang="scss" src="./social-block.scss"></style>
