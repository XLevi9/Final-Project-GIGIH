const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const videoId = req.params.videoId;

    if (!videoId) {
      return res.status(400).json({ message: "Missing videoId in parameter" });
    }

    const relatedProducts = await Product.find({ videoId: videoId });

    res.status(200).json(relatedProducts);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching related products",
        error: error.message,
      });
  }
};
