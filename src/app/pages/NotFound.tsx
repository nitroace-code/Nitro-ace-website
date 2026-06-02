import { Link } from "react-router";
import { AlertCircle } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-center">
        <AlertCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
        <h1 className="text-6xl text-white mb-4">404</h1>
        <h2 className="text-3xl text-white mb-4">Page Not Found</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Looks like this page took a wrong turn at the pit lane. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
