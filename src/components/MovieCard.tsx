import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Movie } from "@/lib/mockData";
import { Button } from "./ui/button";
import { StarRating } from "./StarRating";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
  onToggleFavorite?: (movieId: number) => void;
  onToggleWatchlist?: (movieId: number) => void;
  isFavorite?: boolean;
  inWatchlist?: boolean;
}

export const MovieCard = ({ 
  movie, 
  onToggleFavorite,
  onToggleWatchlist,
  isFavorite = false,
  inWatchlist = false
}: MovieCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative card-3d animate-fade-in">
      <Link to={`/movie/${movie.id}`}>
        <div className="glass-card overflow-hidden h-full">
          {/* Movie Poster */}
          <div className="relative aspect-[2/3] overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-primary animate-pulse" />
            )}
            <img
              src={movie.poster}
              alt={movie.title}
              className={cn(
                "w-full h-full object-cover transition-all duration-500",
                "group-hover:scale-110",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="icon"
                variant="glass"
                className={cn(
                  "backdrop-blur-xl",
                  inWatchlist && "bg-primary/20"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  onToggleWatchlist?.(movie.id);
                }}
              >
                <Heart className={cn("w-5 h-5", inWatchlist && "fill-primary")} />
              </Button>
              <Button
                size="icon"
                variant="glass"
                className={cn(
                  "backdrop-blur-xl",
                  isFavorite && "bg-gold/20"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  onToggleFavorite?.(movie.id);
                }}
              >
                <Star className={cn("w-5 h-5", isFavorite && "fill-gold text-gold")} />
              </Button>
            </div>

            {/* View Details on Hover */}
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <Button variant="hero" size="sm" className="w-full">
                View Details
              </Button>
            </div>
          </div>

          {/* Movie Info */}
          <div className="p-4 space-y-2">
            <h3 className="font-bold text-lg line-clamp-1 group-hover:gradient-text transition-all">
              {movie.title}
            </h3>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{movie.year}</span>
              <span className="text-xs bg-secondary/20 px-2 py-1 rounded-full">
                {movie.type}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <StarRating rating={movie.rating} readonly size="sm" showNumber={false} />
              <span className="text-sm font-semibold">{movie.rating.toFixed(1)}</span>
            </div>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-1">
              {movie.genres.slice(0, 2).map((genre) => (
                <span
                  key={genre}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
