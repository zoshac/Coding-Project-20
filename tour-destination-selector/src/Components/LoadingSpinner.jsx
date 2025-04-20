// LoadingSpinner component shows a loading animation with a message
// Displayed while tour data is being fetched from the API
const LoadingSpinner = () => {
    return (
      // Wrapper for the spinner and loading text
      <div className="loading-container">
        {/* Visual spinner animation */}
        <div className="loading-spinner"></div>
        {/* Descriptive loading message */}
        <p>Loading amazing tours...</p>
      </div>
    );
  };
  
  export default LoadingSpinner;
// LoadingSpinner component shows a loading animation with a message  