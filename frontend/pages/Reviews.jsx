import { useState } from 'react';

const reviewsStyles = {
  container: {
    padding: '20px',
  },
  searchInput: {
    border: '1px solid black',
    padding: '5px',
    marginBottom: '10px',
  },
  reviewsContainer: {
    border: '1px solid black',
    padding: '10px',
  },
  review: {
    marginBottom: '20px',
  },
  reviewHeader: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
};

const Reviews = () => {
  const [location, setLocation] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Fetch reviews for the specified location
      // and update the `reviews` state with the fetched data
      console.log(`Searching for reviews in ${location}`);
    }
  };

  return (
    <div style={reviewsStyles.container}>
      <h1>Reviews</h1>
      <input
        type="text"
        placeholder="Enter location (state, country, city)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleSearch}
        style={reviewsStyles.searchInput}
      />
      <div style={reviewsStyles.reviewsContainer}>
        {reviews.map((review) => (
          <div key={review.id} style={reviewsStyles.review}>
            <div style={reviewsStyles.reviewHeader}>
              <strong>{review.username}</strong> ({review.month}/{review.year})
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;