export const TrendingApi = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`

export const coinsListApi = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`

export const CoinDetailsApi = (coinId) => `https://api.coingecko.com/api/v3/coins/${coinId}`

export const CoinHistoricalChart = (id, currency, days) => `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`