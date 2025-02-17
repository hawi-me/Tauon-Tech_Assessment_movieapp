import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-7xl font-bold text-blue-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-400 mt-2">The page you're looking for doesn't exist.</p>

      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
