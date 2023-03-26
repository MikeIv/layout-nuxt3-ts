<template>
  <section>
    <nav class="header__mobile-menu">
      <ul class="header__list">
        <li class="header__item-mob a-font__m-m" v-for="(item, index) in routeLinks" :key="index">
          <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup>
const routeLinks = [
  {
    name: 'Nuxtemplate',
    route: '/nuxt',
  },
  {
    name: 'Main',
    route: '/',
  },
];
</script>

<style scoped></style>
