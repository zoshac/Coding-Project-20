// ErrorMessage component displays an error notification with a retry option
// Props:
// - message: the error text to show
// - onRetry: function to handle retry action
const ErrorMessage = ({ message, onRetry }) => {
    return (
      // Wrapper for error content and retry button
      <div className="error-container">
        {/* Visual error indicator */}
        <div className="error-icon">❌</div>
        {/* Error title */}
        <h2>whoops! Something went wrong</h2>
        {/* Display the error message received via props */}
        <p className="error-message">{message}</p>
        {/* Button to trigger retry logic */}
        <button className="btn btn-primary" onClick={onRetry}>
          Try Again
        </button>
      </div>
    );
  };
  
  export default ErrorMessage;
  