import CurrencyData from '../resources/Currency';
import CountriesData from '../resources/Countries';

const CountriesDataTransformed = Object.entries(CountriesData)
  .map(([code, data]) => ({ code, ...data }));

const CurrencyDataTransformed = Object.values(CurrencyData);

export default CurrencyDataTransformed.map(cur => ({
  ...cur,
  countries_of_use: CountriesDataTransformed.filter(e => e.currency === cur.code).map(e => e.code),
}));
