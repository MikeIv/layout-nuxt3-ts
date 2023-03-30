<template>
  <section class="cards">
    <h1 class="cards__header">Карточки</h1>
    <ul class="cards__list">
      <li class="cards__item" v-for="item in currency.suggestions" :key="item.index">
        <p>{{ item.value }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
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
@import './cards.scss';
</style>
