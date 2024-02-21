const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = 'CG-kJ3bz6veRbWeTUxJNBydBmUn';

const getCoinList  = (page,currency)=> `${BASE_URL}/coins/markets?x_cg_demo_api_key=${API_KEY}&vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en`

const Searchcoin = query => `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`

const MarketChart = coin => `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`

export {getCoinList, Searchcoin, MarketChart} 