const express = require('express');
const axios = require('axios');
const Coin = require('../models/Coin');
const History = require('../models/History');

const router = express.Router();

router.get('/coins', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
    );

    await Coin.deleteMany({});
    const updatedCoins = response.data.map((coin) => ({
      coinId: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
      timestamp: new Date(coin.last_updated),
    }));

    await Coin.insertMany(updatedCoins);
    res.json(updatedCoins);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coins' });
  }
});

router.post('/history', async (req, res) => {
  try {
    const coins = await Coin.find({});
    await History.insertMany(coins);
    res.json({ message: 'History snapshot saved' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save history' });
  }
});

router.get('/history/:coinId', async (req, res) => {
  try {
    const history = await History.find({ coinId: req.params.coinId });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get history' });
  }
});

module.exports = router;
