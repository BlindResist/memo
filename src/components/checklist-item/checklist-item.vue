<template>
  <div
    class="checklist-item"
    :class="itemClassObject"
  >
    <div class="checklist-item__panel">
      <div
        class="checklist-item__button icon icon-pencil"
        title="Edit"
        @click="editItem()"
      ></div>
      <input
        class="checklist-item__name"
        type="text"
        :value="data.name"
        :disabled="disabledProp"
      />
      <div
        class="checklist-item__button icon icon-plus"
        title="Done"
        @click="setItemStatus('done')"
      ></div>
      <div
        class="checklist-item__button icon icon-minus"
        title="Undone"
        @click="setItemStatus('undone')"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" src="./checklist-item.ts"></script>
<style lang="scss" src="./checklist-item.scss"></style>
