import React from 'react';
import '../styles/ShimmerCard.css'; // Your CSS file for styling the shimmer effect

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-content">
        <div className="shimmer-image"></div>
        <div className="shimmer-details">
          <div className="shimmer-text shimmer-title"></div>
          <div className="shimmer-text shimmer-description"></div>
          <div className="shimmer-text shimmer-price"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
