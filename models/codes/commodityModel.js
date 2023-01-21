const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true
    },

    keywords: [{ type: String, trim: true, uppercase: true }]
  },
  {
    timestamps: true
  }
);

const Commodity = mongoose.model('Commodity', commoditySchema);

module.exports = Commodity;
