const cron = require('node-cron');
const axios = require('axios');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const History = require('../models/History');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

cron.schedule('0 * * * *', async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
    );
    const records = response.data.map((coin) => ({
      coinId: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
      timestamp: new Date(coin.last_updated),
    }));

    await History.insertMany(records);
    console.log('Hourly history saved');
  } catch (err) {
    console.error('Cron job error:', err);
  }
});
