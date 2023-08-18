import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CommentPopup = ({ comments, onClose, onCommentSubmit }) => {
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const commentText = event.target.commentText.value;
    const timestamp = new Date().toLocaleString();

    // Batasi jumlah huruf dalam komentar
    const maxCharacters = 50;
    if (commentText.length > maxCharacters) {
      alert(
        "Komentar terlalu panjang. Batasi jumlah huruf hingga " + maxCharacters
      );
      return;
    }

    // Buat objek komentar baru
    const newComment = {
      username: username,
      comment: commentText,
      timestamp: timestamp,
    };

    // Panggil fungsi onCommentSubmit untuk menambahkan komentar baru
    onCommentSubmit(newComment);

    // Bersihkan input
    event.target.username.value = "";
    event.target.commentText.value = "";
  };

  return (
    <div className="CommentPopup">
      <div className="CommentPopup-Content">
        <button className="CommentPopup-CloseButton" onClick={onClose}>
          X
        </button>
        {comments.map((comment, index) => (
          <div className="CommentPopup-Box" key={index}>
            <p>
              <span className="CommentPopup-Username">
                Username: {comment.username}
              </span>
            </p>
            <p>Komentar: {comment.comment}</p>
            <p>{comment.timestamp}</p>
          </div>
        ))}
        {/* Form untuk menambahkan komentar baru */}
        <form
          className="CommentPopup-SubmitComment"
          onSubmit={handleCommentSubmit}
        >
          <input
            className="CommentPopup-SubmitComment-Input"
            type="text"
            name="username"
            placeholder="Username"
          />
          <textarea
            className="CommentPopup-SubmitComment-Textarea"
            name="commentText"
            placeholder="Tambahkan komentar Anda"
          />
          <button className="CommentPopup-SubmitComment-Button" type="submit">
            Kirim Komentar
          </button>
        </form>
      </div>
    </div>
  );
};

const VideoDetail = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/videos/${id}`).then((response) => {
      setVideo(response.data);
      axios.get(`http://localhost:3000/products/${id}`).then((response) => {
        setProducts(response.data);
      });
      axios.get("http://localhost:3000/comments").then((response) => {
        setComments(response.data);
      });
    });
  }, [id]);

  const handleCommentSubmit = (newComment) => {
    const commentUrl = "http://localhost:3000/comments";

    axios
      .post(commentUrl, newComment)
      .then((response) =>
        setComments((prevComments) => [...prevComments, response.data])
      );
  };

  const handleShowComments = () => {
    setShowComments(true);
  };

  const handleCloseComments = () => {
    setShowComments(false);
  };

  if (!video) {
    return <div className="NotFound-DetailProduct">Video not found</div>;
  }

  return (
    <div className="Container-DetailProduct">
      <div className="DetailProduct-RelatedProducts">
        {products.map((product) => {
          if (product.videoId === video.id) {
            return (
              <div className="DetailProduct-perNumber" key={product.id}>
                <div className="RelatedProduct-Detail">
                  <a href={product.productUrl} className="Product-Link">
                    <div className="Product-Box">
                      <p className="Product-Title">{product.title}</p>
                      <p className="Product-Price">{product.price}</p>
                    </div>
                  </a>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="DetailProduct-VideoContainer">
        <iframe
          width="680"
          height="400"
          src={video.url}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="DetailProduct-CommentSection">
        <div className="CommentSection-Detail">
          {/* Menampilkan tombol "Lihat Komentar" */}
          <button
            className="Button-CommentSection-Detail"
            onClick={handleShowComments}
          >
            Lihat Komentar
          </button>
        </div>
      </div>

      {/* Menampilkan popup komentar jika showComments true */}
      {showComments && (
        <CommentPopup
          comments={comments}
          onClose={handleCloseComments}
          onCommentSubmit={handleCommentSubmit}
        />
      )}
    </div>
  );
};

export default VideoDetail;
