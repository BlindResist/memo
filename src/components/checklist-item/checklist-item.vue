<template>
  <div class="checklist-item">
    <div class="checklist-item__panel">
      <div class="checklist-item__button icon icon-pencil" title="Edit"></div>
      <span class="checklist-item__name">{{ data.name }}</span>
      <div class="checklist-item__button icon icon-plus" title="Done"></div>
      <div class="checklist-item__button icon icon-minus" title="Undone"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./checklist-item.ts"></script>
<style lang="scss" src="./checklist-item.scss"></style>
