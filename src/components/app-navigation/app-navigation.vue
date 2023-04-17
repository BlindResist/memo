<template>
  <nav class="app-navigation">
    <ul class="app-navigation__list">
      <li
        :key="item.id"
        class="app-navigation__item"
        v-for="item in data"
      >
        <router-link
          exact
          :to="item.link"
          class="app-navigation__link"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="./app-navigation.ts"></script>
<style lang="scss" src="./app-navigation.scss"></style>
