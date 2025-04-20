function DestinationSelector({ tours, selected, onSelect }) {
    // Generate a list of unique destination names from the tours array
    // Defaults to an empty array if tours is undefined or null
    const uniqueDestinations = ['All Destinations', ...new Set((tours || []).map(tour => tour.name))];
  
    return (
      <div style={{ marginBottom: "1rem" }}>
        {/* Dropdown label */}
        <label htmlFor="destination">Filter by Destination:</label>{" "}
        {/* Dropdown menu for selecting a destination filter */}
        <select
          id="destination"
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="destination-select"
        >
          {/* Render each destination option in the dropdown */}
          {uniqueDestinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default DestinationSelector;
// DestinationSelector component allows users to filter tours by destination  