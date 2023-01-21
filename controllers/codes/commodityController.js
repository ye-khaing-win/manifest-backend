const Commodity = require('../../models/codes/commodityModel');

const factory = require('../../utils/handlerFactory');

exports.getAllCommodities = factory.getAll(Commodity);
exports.getCommodity = factory.getOne(Commodity);
exports.createCommodity = factory.createOne(Commodity);
exports.updateCommodity = factory.updateOne(Commodity);
exports.deleteCommodity = factory.deleteOne(Commodity);
