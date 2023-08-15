const Comment = require("../models/Comment");
const mongoose = require("mongoose");

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find(); 
    res.json(comments); 
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching comments" });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { username, comment } = req.body;

    const newComment = new Comment({
      username,
      comment,
    });

    const savedComment = await newComment.save();

    res.status(201).json({ message: "Success", comment: savedComment });
  } catch (error) {
    res.status(500).json({ message: "Fail", error: error.message });
  }
};