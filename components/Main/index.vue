<template>
  <section class="main">
    <h1 class="main__header">Главная</h1>
    <p>Контент</p>
    <ul>
      <li v-for="item in articles" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.location }}</p>
      </li>
    </ul>

    <br />
    <li v-for="item in currency.suggestions" :key="item.index">
      <p>{{ item.value }}</p>
    </li>
  </section>
</template>

<script setup lang="ts">
import Articles from '~/types/articles';

const articles = ref<Articles[]>([
  { title: 'Article1', location: 'point1', description: 'lorem lorem', id: '1' },
  { title: 'Article2', location: 'point2', description: 'lorem lorem', id: '2' },
  { title: 'Article3', location: 'point3', description: 'lorem lorem', id: '3' },
  { title: 'Article4', location: 'point4', description: 'lorem lorem', id: '4' },
]);

const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party';
const token = '0845425a22e3e674a4ef51f59dca016bc1c775b5';
const query = 'сбербанк';

const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Token ' + token,
  },
  body: JSON.stringify({ query: query }),
};

const { data } = await useFetch(url, options);
console.log('dataDD', data);
const currency = data.value;
console.log('currency', currency);
</script>

<style scoped lang="scss">
@import './main.scss';
</style>
