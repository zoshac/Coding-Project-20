// Importing necessary libraries and components
import { useEffect } from 'react';
import TourCard from './TourCard';

// component to display a gallery of tours
const Gallery = ({ tours, onRemove }) => {
  // Log when component renders (for debugging)
  useEffect(() => {
    console.log('Gallery rendered');
  }, []);

  return (
    // Container for the gallery grid
    <div className="gallery">
      {/* Map through tours array and render a TourCard component for each tour */}
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Gallery;