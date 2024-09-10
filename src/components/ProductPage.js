import React, { useState } from 'react';

function ProductPage({ product, addToCart }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ rating: 5, comment: '' });
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index}>
            <strong>Rating: {review.rating}</strong>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet</p>
      )}

      <form onSubmit={handleReviewSubmit}>
        <div>
          <label>Rating: </label>
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Review: </label>
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ProductPage;
