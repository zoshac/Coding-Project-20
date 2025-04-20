// Import required dependencies and components
import { useState, useEffect } from 'react'
import Gallery from './Components/Gallery'
import LoadingSpinner from './Components/LoadingSpinner'
import ErrorMessage from './Components/ErrorMessage'
import DestinationSelector from './Components/DestinationSelector'
import './styles/style.css'

function App() {
  // State for tours data, loading indicator, error messages, and selected destination filter
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  // Load tour data on initial render
  useEffect(() => {
    console.log('App loaded');
    fetchTours();
  }, []);

  // Fetch tour data from API
  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours. Please check your internet connection and try again.');
      }
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Remove a tour from the list using its ID
  const removeTour = (id) => {
    const updatedTours = tours.filter(tour => tour.id !== id);
    setTours(updatedTours);
  };

  // Apply destination filter to tours
  const filteredTours = selectedDestination === 'All Destinations' 
    ? tours 
    : tours.filter(tour => tour.name === selectedDestination);

  // Display loading spinner while data is being fetched
  if (loading) {
    return <LoadingSpinner />;
  }

  // Display error message and retry option if fetch fails
  if (error) {
    return <ErrorMessage message={error} onRetry={fetchTours} />;
  }

  // Show a refresh button if no tours are left to display
  if (tours.length === 0) {
    return (
      <div className="refresh-container">
        <h2>No Tours Left</h2>
        <button className="btn btn-primary" onClick={fetchTours}>
          Refresh Tours
        </button>
      </div>
    );
  }

  // Render the main app UI with heading, filter, and tour gallery
  return (
    <div className="container">
      <h1>Tour Gallery</h1>
      <DestinationSelector 
        tours={tours}
        selected={selectedDestination}
        onSelect={setSelectedDestination}
      />
      <Gallery tours={filteredTours} onRemove={removeTour} />
    </div>
  )
}

export default App;
