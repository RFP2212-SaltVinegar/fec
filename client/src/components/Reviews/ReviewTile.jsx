import React, {useState} from 'react';
import Stars from '../Stars/Stars.jsx';
import axios from 'axios';
import '../../css/Reviews/styles.css'
import Check from '../../assets/check-solid.svg'

const ReviewTile = ({review}) => {

  // console.log(review);

  const addHelpful = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/reviews/${review.review_id}/helpful`);
  }

  return(
    <div className='reviewTile'>
      <Stars rating={review.rating} tag={review.review_id}/>
      <p>{review.date}</p>
      <p>{review.reviewer_name}</p>
      <p>{review.summary}</p>
      <p>{review.body}</p>
      {review.recommend
      ? 'I recommend this product' //Add checkmark here!!!
      : null}
      <br/>
      {review.photos.map((photo, idx) =>
        <img src={photo.url} alt='image not available' key={idx}/>
      )}
      {review.response
      ? review.response
      : null}
      <p>optional response from seller?</p>
      <p>Was this review helpful?</p>
      <button onClick={addHelpful}>Yes</button>
      <button>No</button>
      <p>{review.helpfulness}</p>
    </div>
  );
}

export default ReviewTile;