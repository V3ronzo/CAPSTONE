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
  const [searchTerm, setSearchTerm] = useState('');
  const [reviews, setReviews] = useState([]);
  const[newReview, setNewReview] = useState({
    title: '',
    description: '',
    rating: 0,
  });

  const handleSearch = (e) => {
    // perform search based on the searchTerm
    // update the rveiws state with the search results
  };
  const handleSubmitReview = (e) => {
    if (newReview.startsWith('#')) {
      setReviews([...reviews, newReview]);
      setNewReview(' ');
    
    }
  };

  return (
    <div>
      {/*... */}
      <input
      type="text"
      placeholder="Search reviews (e.g. #Pittsburgh)"
      value={searchTerm}
      onChange={(e) => searchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/*... */}
      <div>
        <h2>Write a Review</h2>
        <textarea
          placeholder='Write your review (start with #locaion)'
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          ></textarea>
          <button onClick={handleSubmitReview}>Submit Review</button>
          </div>
        </div>
  );
  };

export default Reviews;