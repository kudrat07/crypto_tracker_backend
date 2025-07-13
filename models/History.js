const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  coinId: String,
  name: String,
  symbol: String,
  price: Number,
  marketCap: Number,
  change24h: Number,
  timestamp: Date,
});

module.exports = mongoose.model('History', HistorySchema);
