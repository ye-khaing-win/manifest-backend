const ShipCode = require('../../models/codes/shipCodeModel');

const factory = require('../../utils/handlerFactory');

exports.getAllShipCodes = factory.getAll(ShipCode);
exports.getShipCode = factory.getOne(ShipCode);
exports.createShipCode = factory.createOne(ShipCode);
exports.updateShipCode = factory.updateOne(ShipCode);
exports.deleteShipCode = factory.deleteOne(ShipCode);
