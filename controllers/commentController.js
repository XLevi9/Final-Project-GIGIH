const Comment = require("../models/Comment");

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { username, comment } = req.body;
    const videoId = req.params.videoId;

    if (!videoId) {
      return res.status(400).json({ message: "Missing videoId in parameter" });
    }

    const newComment = new Comment({
      username,
      comment,
      timestamp: new Date(),
    });

    const savedComment = await newComment.save();

    res.status(201).json({ message: "Success", comment: savedComment });
  } catch (error) {
    res.status(500).json({ message: "Fail", error: error.message });
  }
};
