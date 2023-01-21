const express = require('express');
const shipCodeController = require('../../controllers/codes/shipCodeController');

const router = express.Router();

router
  .route('/')
  .get(shipCodeController.getAllShipCodes)
  .post(shipCodeController.createShipCode);
router
  .route('/:id')
  .get(shipCodeController.getShipCode)
  .patch(shipCodeController.updateShipCode)
  .delete(shipCodeController.deleteShipCode);

module.exports = router;
