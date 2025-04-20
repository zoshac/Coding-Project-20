// Import the useState hook from React
import { useState } from 'react';

// TourCard component renders details for a single tour
// Props:
// - id: tour's unique ID
// - name: tour name
// - info: description text
// - image: image URL
// - price: tour cost
// - onRemove: function to remove tour from the list
const TourCard = ({ id, name, info, image, price, onRemove }) => {
  // Tracks whether full tour info is shown or truncated
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      {/* Image section with a price tag overlay */}
      <div className="tour-img-container">
        <img src={image} alt={name} className="tour-img" />
        <p className="tour-price">${price}</p>
      </div>

      {/* Textual tour details */}
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {/* Toggle between full and shortened description */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button 
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        {/* Button to remove tour from display */}
        <button 
          className="btn btn-danger delete-btn"
          onClick={() => onRemove(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;
