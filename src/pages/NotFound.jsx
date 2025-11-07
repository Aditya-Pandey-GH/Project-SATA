import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="mb-4 text-5xl font-extrabold text-gray-800">404</h1>
        <p className="mb-6 text-lg text-gray-600">Oops! The page you’re looking for doesn’t exist.</p>
        <a
          href="/"
          className="rounded-md bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
