const express = require("express");
const router = express.Router();
const imageController = require('../../controllers/image/image.js')

router.post('/bufferImg', imageController.getImage);

module.exports = router;