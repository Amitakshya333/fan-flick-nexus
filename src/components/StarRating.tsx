import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export const StarRating = ({ 
  rating, 
  onRatingChange, 
  readonly = false,
  size = "md",
  showNumber = true 
}: StarRatingProps) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const handleClick = (newRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= rating;
        const halfFilled = star - 0.5 <= rating && star > rating;
        
        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            disabled={readonly}
            className={cn(
              "transition-all duration-200",
              !readonly && "cursor-pointer hover:scale-110 active:scale-95",
              readonly && "cursor-default"
            )}
          >
            <Star
              className={cn(
                sizes[size],
                "transition-all duration-200",
                filled && "fill-gold text-gold animate-star-glow",
                halfFilled && "fill-gold/50 text-gold",
                !filled && !halfFilled && "text-muted"
              )}
            />
          </button>
        );
      })}
      {showNumber && (
        <span className="ml-2 text-sm font-semibold text-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
