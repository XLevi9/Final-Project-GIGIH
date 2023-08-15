const Video = require("../models/Video");

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching videos", error: error.message });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const videoId = req.params.id;
    const video = await Video.findOne({ id: videoId });

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.status(200).json(video);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching video", error: error.message });
  }
};
