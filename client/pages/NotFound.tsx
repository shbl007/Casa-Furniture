import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-secondary bg-opacity-5">
      <div className="text-center max-w-md px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-serif font-bold text-primary mb-4">
            404
          </h1>
        </div>
        <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          We couldn't find the page you're looking for. Let's get you back to
          discovering beautiful furniture.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:gap-4"
        >
          Back to Home
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
