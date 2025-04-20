import React, { useState, useEffect } from 'react';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(''); // For filtering tours

  // main app component 
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://api.example.com/tours'); // Replace with your API URL
        const data = await response.json();
        setTours(data);
      } catch (error) {
        setError('Error fetching tours');
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours(); // invoke the fetch feature
  }, []);

  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ChildComponent
        tours={filteredTours}
        loading={loading}
        error={error}
        setFilter={setFilter}
      />
    </div>
  );
};

// Child component to display tours and filter input
const ChildComponent = ({ tours, loading, error, setFilter }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Filter tours"
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>{tour.name}</li> //use unique id for each tour
        ))}
      </ul>
    </div>
  );
};

export default App;
