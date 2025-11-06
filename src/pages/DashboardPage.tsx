import { Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { getCurrentUser, mockMovies } from "@/lib/mockData";
import { Film, Heart, Bookmark, MessageSquare, TrendingUp } from "lucide-react";
import { MovieCard } from "@/components/MovieCard";

const DashboardPage = () => {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const recommendedMovies = mockMovies.filter(movie => 
    movie.genres.some(genre => currentUser.favoriteGenres.includes(genre))
  ).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Welcome Section */}
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Welcome back, {currentUser.username}!
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to discover your next favorite movie?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Film className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold">
                  {currentUser.favorites.length + currentUser.watchlist.length}
                </p>
                <p className="text-sm text-muted-foreground">Movies Tracked</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-secondary">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Reviews Written</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gold">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold">{currentUser.favorites.length}</p>
                <p className="text-sm text-muted-foreground">Favorites</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent">
                <Bookmark className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold">{currentUser.watchlist.length}</p>
                <p className="text-sm text-muted-foreground">Watchlist Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended for You */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Recommended for You</h2>
          </div>
          
          {recommendedMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="glass-card p-12 text-center">
              <p className="text-muted-foreground">
                Select your favorite genres in your profile to get personalized recommendations
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 FanHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
