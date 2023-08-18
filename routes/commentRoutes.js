const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.get('/', commentController.getComments);
router.post('/:videoId', commentController.addComment);

module.exports = router;