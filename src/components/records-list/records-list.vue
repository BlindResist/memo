<template>
  <div class="records-list">
    <ul class="records-list__list">
      <li
        v-for="item in data"
        :key="item.id"
        class="records-list__item"
        :class="activeRecordClass(item.id)"
      >
        <span
          class="records-list__item-text"
          @click="itemClick(item.id)"
        >{{ item.name }}</span>
        <div class="records-list__item-button">
          <span>&bullet;&bullet;&bullet;</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./records-list.ts"></script>
<style lang="scss" src="./records-list.scss"></style>
