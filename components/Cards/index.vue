<template>
  <section class="cards">
    <h1 class="cards__header">Карточки</h1>
    <div class="cards__btn-group">
      <button class="cards__btn-filter" @click="handleClick('value')">Сортировка по Организации</button>
      <button class="cards__btn-filter" @click="handleClick('name')">Сортировка по имени</button>
      <button class="cards__btn-filter" @click="handleClick('ogrn')">Сортировка по ОГРН</button>
    </div>
    <div class="">Сортировка по {{ order }}</div>
    <ul class="cards__list">
      <li class="cards__item" v-for="item in currency.suggestions" :key="item.index">
        <h2 class="cards__item-header a-font__h3">{{ item.value }}</h2>
        <div class="cards__content">
          <p>{{ item.data.address.value }}</p>
          <p v-if="item.data.management">{{ item.data.management.name }}</p>
          <p v-if="item.data.ogrn">{{ item.data.ogrn }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import OrderCards from '~~/types/OrderCards';

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
const currency = data.value;
console.log('currency', currency);

const order = ref<OrderCards>('value');

const handleClick = (card: OrderCards) => {
  order.value = card;
};
</script>

<style scoped lang="scss">
@import './cards.scss';
</style>
