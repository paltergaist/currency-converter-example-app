<template lang="pug">
  .currency-list-item
    div
      .currency-list-item_info-primary
        .currency-list-item_code {{ currencyDescriptor.code }}
        .currency-list-item_symbol {{ currencyDescriptor.symbol_native }}

      .currency-list-item_name {{ currencyDescriptor.name }}

    slot
</template>

<script>
import CurrencyMappedData from '../core/CurrencyMappedData';

export default {
  // name: 'CurrencyListItem',

  components: {},

  props: {
    currency: String,
  },

  computed: {
    currencyDescriptor() {
      return CurrencyMappedData.find(e => e.code === this.currency);
    },
  },
};
</script>

<style lang="scss" scoped>
.currency-list-item {
  display: flex;
  justify-content: space-between;

  &_code {
    font-weight: 700;
    font-size: 28px;
    font-family: 'Roboto Mono', monospace;
  }

  &_name {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.7;
  }

  &_symbol {
    margin-inline-start: 10px;
    opacity: 0.5;
    font-weight: 300;
    font-size: 28px;
  }

  &_info-primary {
    display: flex;
    flex-direction: row;
  }
}
</style>
