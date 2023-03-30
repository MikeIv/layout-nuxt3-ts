<template>
  <section class="main">
    <h1 class="main__header">Главная</h1>
    <p>Контент</p>
    <ul class="main__list">
      <li v-for="item in articles" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.location }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import Articles from '~/types/Articles';

const articles = ref<Articles[]>([
  { title: 'Article1', location: 'point1', description: 'lorem lorem', id: '1' },
  { title: 'Article2', location: 'point2', description: 'lorem lorem', id: '2' },
  { title: 'Article3', location: 'point3', description: 'lorem lorem', id: '3' },
  { title: 'Article4', location: 'point4', description: 'lorem lorem', id: '4' },
]);
</script>

<style scoped lang="scss">
@import './main.scss';
</style>
