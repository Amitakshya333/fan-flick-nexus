import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MovieCard } from "@/components/MovieCard";
import { Navbar } from "@/components/Navbar";
import { mockMovies } from "@/lib/mockData";
import { Film, TrendingUp, Star } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HomePage = () => {
  const featuredMovie = mockMovies[0];
  const trendingMovies = mockMovies.slice(0, 4);
  const topRatedMovies = mockMovies.filter(m => m.rating >= 4.5).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4">
            <Film className="w-5 h-5 text-primary animate-glow-pulse" />
            <span className="text-sm font-semibold text-primary">
              Your Ultimate Movie Community
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Discover. Review. Connect.
          </h1>

          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
            Join thousands of movie fans sharing reviews, building watchlists, and discovering your next favorite film
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">
                Explore Movies
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/signup">
                Join Community
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Movie */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass-card p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center animate-scale-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <img
              src={featuredMovie.poster}
              alt={featuredMovie.title}
              className="relative rounded-2xl shadow-card hover-scale"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Featured This Week</span>
            </div>
            
            <h2 className="text-4xl font-bold gradient-text">
              {featuredMovie.title}
            </h2>
            
            <p className="text-muted-foreground text-lg">
              {featuredMovie.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {featuredMovie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to={`/movie/${featuredMovie.id}`}>
                View Details
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Trending Now</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-8 h-8 text-gold fill-gold animate-star-glow" />
          <h2 className="text-3xl font-bold">Top Rated</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass-card p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Ready to Share Your Opinion?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community of movie enthusiasts and make your voice heard
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/signup">
                Get Started Free
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 MANIACS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
