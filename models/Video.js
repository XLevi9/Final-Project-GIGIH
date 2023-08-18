const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    id: String,
    url: String,
    title: String,
    accountName: String,
    thumbnailUrl: String,
});

module.exports = mongoose.model('Video', VideoSchema, "videos");