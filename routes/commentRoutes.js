const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.get('/comments', commentController.getComments);
router.post('/comments', commentController.addComment);

module.exports = router;