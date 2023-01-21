const mongoose = require('mongoose');

const shipCodeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: true,
      uppercase: true
    },

    name: {
      type: String,
      uppercase: true
    }
  },
  {
    timestamps: true
  }
);

const ShipCode = mongoose.model('ShipCode', shipCodeSchema);

module.exports = ShipCode;
