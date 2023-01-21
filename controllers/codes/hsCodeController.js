const HsCode = require('../../models/codes/hsCodeModel');

const factory = require('../../utils/handlerFactory');

exports.getAllHsCodes = factory.getAll(HsCode);
exports.getHsCode = factory.getOne(HsCode);
exports.createHsCode = factory.createOne(HsCode);
exports.updateHsCode = factory.updateOne(HsCode);
exports.deleteHsCode = factory.deleteOne(HsCode);
