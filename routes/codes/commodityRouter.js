const express = require('express');
const commodityController = require('../../controllers/codes/commodityController');

const router = express.Router();

router
  .route('/')
  .get(commodityController.getAllCommodities)
  .post(commodityController.createCommodity);
router
  .route('/:id')
  .get(commodityController.getCommodity)
  .patch(commodityController.updateCommodity)
  .delete(commodityController.deleteCommodity);

module.exports = router;
