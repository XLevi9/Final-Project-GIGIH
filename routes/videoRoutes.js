const express = require('express');
const videoController = require('../controllers/videoController');
const router = express.Router();

router.get('/videos', videoController.getAllVideos);
router.get('/videos/:id', videoController.getVideoById);

module.exports = router;