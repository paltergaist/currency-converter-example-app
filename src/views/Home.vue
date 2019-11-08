<template lang="pug">
  div(v-if="pending")
  div.white(v-else)
    div.pt-5.white.elevation-5
      input.pa-3.amount-input(type="number" v-model="amount")

      v-divider.grey.lighten-3

      div.pa-3.ma-0.grey.lighten-5
        CurrencyListItem(:currency="activeCurrency")
          v-icon mdi-chevron-down

    //- v-divider

    .list
      .list-item(v-for="curr in availableExchangeCurrencies" :key="curr.code")
        CurrencyListItem.pa-3(:currency="curr.code")
          .ex-rate {{ formatExchangeRate(curr) }}

        v-divider
</template>

<script>
import CurrencyMappedData from '../core/CurrencyMappedData';
import CurrencyListItem from '../layouts/CurrencyListItem.vue';

export default {
  name: 'home',

  components: {
    CurrencyListItem,
  },

  data: () => ({
    pending: true,
    CurrencyMappedData,
    amount: 100,
    exchangeRates: {},
    activeCurrency: 'USD',
  }),

  computed: {
    availableExchangeCurrencies() {
      return CurrencyMappedData.filter(e => this.exchangeRates[e.code]);
    },
    activeCurrencyDescriptor() {
      return CurrencyMappedData.find(e => e.code === this.activeCurrency);
    },
  },

  methods: {
    // eslint-disable-next-line camelcase
    formatExchangeRate({ code, decimal_digits }) {
      return `${(this.exchangeRates[code] * this.amount).toFixed(decimal_digits)}`;
    },
  },

  async mounted() {
    this.exchangeRates = (await (await fetch('https://api.exchangeratesapi.io/latest?base=USD')).json()).rates;
    // console.log(this.exchangeRates);
    this.pending = false;
  },
};
</script>

<style lang="scss" scoped>
.amount-input {
  font-size: 64px;
  width: 100%;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
}
.list {
  height: calc(100vh - 232px);
  overflow-y: scroll;
}
.ex-rate {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  display: flex;
  align-items: center;
}
</style>
