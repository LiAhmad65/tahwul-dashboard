import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-dark-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-primary-dark-blue mb-2">Page Not Found</h2>
        <p className="text-gray-text text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={handleBack}
          className="px-6 py-3 cursor-pointer bg-primary-dark-blue text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
