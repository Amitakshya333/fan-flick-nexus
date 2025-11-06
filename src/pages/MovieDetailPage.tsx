import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { getMovieById, getCurrentUser, mockReviews } from "@/lib/mockData";
import { Heart, Star, Play, Clock, Calendar } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const MovieDetailPage = () => {
  const { id } = useParams();
  const movie = getMovieById(Number(id));
  const currentUser = getCurrentUser();
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Movie Not Found</h1>
          <Button variant="hero" asChild>
            <Link to="/gallery">Browse Movies</Link>
          </Button>
        </div>
      </div>
    );
  }

  const movieReviews = mockReviews.filter(r => r.movieId === movie.id);

  const handleSubmitReview = () => {
    if (!currentUser) {
      window.location.href = '/login';
      return;
    }
    // In a real app, this would save to backend
    alert('Review submitted! (Demo mode)');
    setShowReviewForm(false);
    setUserRating(0);
    setReviewText("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Background Poster Blur */}
        <div 
          className="absolute inset-0 opacity-20 blur-3xl"
          style={{ backgroundImage: `url(${movie.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-[400px_1fr] gap-8 items-start">
            {/* Movie Poster */}
            <div className="relative group animate-scale-in">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <img
                src={movie.poster}
                alt={movie.title}
                className="relative rounded-2xl shadow-card w-full card-3d"
              />
              <div className="mt-4 flex gap-3">
                <Button variant="hero" className="flex-1">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Trailer
                </Button>
              </div>
            </div>

            {/* Movie Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h1 className="text-5xl font-bold gradient-text mb-4">
                  {movie.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                  </div>
                  {movie.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{movie.duration}</span>
                    </div>
                  )}
                  {movie.seasons && (
                    <span>{movie.seasons} Seasons</span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <StarRating rating={movie.rating} readonly size="lg" />
                  <span className="text-sm text-muted-foreground">
                    {movie.totalReviews.toLocaleString()} reviews
                  </span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <Button variant="glass" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="icon">
                  <Star className="w-5 h-5" />
                </Button>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <Badge key={genre} variant="secondary" className="bg-secondary/20 hover:bg-secondary/30">
                    {genre}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div className="glass-card p-6">
                <h2 className="text-xl font-bold mb-3">Synopsis</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {movie.description}
                </p>
              </div>

              {/* Details */}
              <div className="glass-card p-6 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  {movie.director && (
                    <div>
                      <p className="text-sm text-muted-foreground">Director</p>
                      <p className="font-semibold">{movie.director}</p>
                    </div>
                  )}
                  {movie.creator && (
                    <div>
                      <p className="text-sm text-muted-foreground">Creator</p>
                      <p className="font-semibold">{movie.creator}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Studio</p>
                    <p className="font-semibold">{movie.studio}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Language</p>
                    <p className="font-semibold">{movie.language}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cast Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Cast & Crew</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {movie.cast.map((actor) => (
            <div key={actor.name} className="glass-card p-4 text-center hover-scale">
              <img
                src={actor.image}
                alt={actor.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-primary/30"
              />
              <h3 className="font-semibold text-sm">{actor.name}</h3>
              <p className="text-xs text-muted-foreground">{actor.character}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Where to Watch</h2>
        <div className="glass-card p-6">
          <div className="flex flex-wrap gap-4">
            {movie.streaming.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Play className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">{service.platform}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {service.type} {service.price && `• ${service.price}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto px-4 py-12" id="reviews">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Fan Reviews</h2>
          {!showReviewForm && (
            <Button variant="hero" onClick={() => setShowReviewForm(true)}>
              Write Review
            </Button>
          )}
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <div className="glass-card p-6 mb-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Share Your Thoughts</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Rating</label>
                <StarRating 
                  rating={userRating} 
                  onRatingChange={setUserRating}
                  size="lg"
                  showNumber={false}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <textarea
                  className="w-full glass-card p-4 rounded-lg min-h-[150px] resize-none"
                  placeholder="Tell us what you thought about this movie..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <Button variant="hero" onClick={handleSubmitReview}>
                  Submit Review
                </Button>
                <Button variant="ghost" onClick={() => setShowReviewForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {movieReviews.length > 0 ? (
            movieReviews.map((review) => (
              <div key={review.id} className="glass-card p-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <img
                    src={review.userAvatar}
                    alt={review.userName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{review.userName}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <StarRating rating={review.rating} readonly size="sm" showNumber={false} />
                    </div>
                    <h5 className="font-semibold mb-2">{review.title}</h5>
                    <p className="text-muted-foreground">{review.content}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <Button variant="ghost" size="sm">
                        👍 Helpful ({review.helpful})
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="glass-card p-12 text-center">
              <p className="text-muted-foreground text-lg">No reviews yet. Be the first to share your thoughts!</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 FanHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MovieDetailPage;
