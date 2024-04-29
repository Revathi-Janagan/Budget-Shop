import React from "react";

const StarRating = ({ rating }) => {
  // Calculate the number of filled stars
  const filledStars = Math.floor(rating);
 
  return (
    <div className="star-rating">
      {[...Array(5).keys()].map((index) => (
        <span key={index}>
          {index < filledStars ? (
            <i className="fas fa-star"></i> // Filled star
          ) : index === filledStars ? (
            <i className="fas fa-star-half-alt"></i> // Half-filled star
          ) : (
            <i className="far fa-star"></i> // Empty star
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
