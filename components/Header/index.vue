<template>
  <section class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item a-font__m-m" v-for="(item, index) in routeLinks" :key="index">
          <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup lang="ts">
const routeLinks = [
  {
    name: 'Main',
    route: '/',
  },
  {
    name: 'Cards',
    route: '/cards',
  },
  {
    name: 'Nuxtemplate',
    route: '/nuxt',
  },
];
</script>

<style scoped lang="scss">
@import './header.scss';
</style>
