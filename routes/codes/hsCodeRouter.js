const express = require('express');
const hsCodeController = require('../../controllers/codes/hsCodeController');

const router = express.Router();

router
  .route('/')
  .get(hsCodeController.getAllHsCodes)
  .post(hsCodeController.createHsCode);
router
  .route('/:id')
  .get(hsCodeController.getHsCode)
  .patch(hsCodeController.updateHsCode)
  .delete(hsCodeController.deleteHsCode);

module.exports = router;
