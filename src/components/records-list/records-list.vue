<template>
  <div class="records-list">
    <ul class="records-list__list">
      <li
        v-for="item in data"
        :key="item.id"
        class="records-list__item"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" src="./records-list.ts"></script>
<style lang="scss" src="./records-list.scss"></style>
