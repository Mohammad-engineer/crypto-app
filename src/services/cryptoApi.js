const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = 'CG-kJ3bz6veRbWeTUxJNBydBmUn';

const getCoinList  = ()=>{
    return `${BASE_URL}/coins/markets?x_cg_demo_api_key=${API_KEY}&vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
}

export {getCoinList}