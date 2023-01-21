const mongoose = require('mongoose');

const hsCodeSchema = new mongoose.Schema(
  {
    hsCode: {
      type: String,
      required: [true, 'HS Code field is required!'],
      unique: true
    },
    name: {
      type: String,
      uppercase: true
    },
    description: {
      type: String,
      required: [true, 'Description field is required!']
    },

    details: {
      type: String,
      required: [true, 'Details field is required!']
    }
  },
  {
    timestamps: true
  }
);

const HsCode = mongoose.model('HsCode', hsCodeSchema);

module.exports = HsCode;
