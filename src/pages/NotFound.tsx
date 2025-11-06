import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-6 p-8 animate-scale-in">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-primary mb-4">
          <Film className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-8xl font-bold gradient-text">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-xl text-muted-foreground max-w-md">
          Oops! Looks like this page went to a different dimension
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <Link to="/gallery">Browse Movies</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
