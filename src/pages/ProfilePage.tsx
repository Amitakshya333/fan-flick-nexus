import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCurrentUser, mockMovies, saveCurrentUser } from "@/lib/mockData";
import { Edit, Heart, Bookmark, Star, MessageSquare } from "lucide-react";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const favoriteMovies = mockMovies.filter(m => currentUser.favorites.includes(m.id));
  const watchlistMovies = mockMovies.filter(m => currentUser.watchlist.includes(m.id));

  const handleToggleFavorite = (movieId: number) => {
    const newFavorites = currentUser.favorites.includes(movieId)
      ? currentUser.favorites.filter(id => id !== movieId)
      : [...currentUser.favorites, movieId];
    
    const updatedUser = { ...currentUser, favorites: newFavorites };
    setCurrentUser(updatedUser);
    saveCurrentUser(updatedUser);
  };

  const handleToggleWatchlist = (movieId: number) => {
    const newWatchlist = currentUser.watchlist.includes(movieId)
      ? currentUser.watchlist.filter(id => id !== movieId)
      : [...currentUser.watchlist, movieId];
    
    const updatedUser = { ...currentUser, watchlist: newWatchlist };
    setCurrentUser(updatedUser);
    saveCurrentUser(updatedUser);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Profile Header */}
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative group">
              <img
                src={currentUser.avatar}
                alt={currentUser.username}
                className="w-32 h-32 rounded-full border-4 border-primary/30 group-hover:border-primary/60 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold gradient-text mb-2">
                {currentUser.username}
              </h1>
              <p className="text-muted-foreground mb-4">{currentUser.email}</p>
              {currentUser.bio && (
                <p className="text-foreground mb-4">{currentUser.bio}</p>
              )}

              {/* Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{currentUser.favorites.length}</p>
                  <p className="text-sm text-muted-foreground">Favorites</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">{currentUser.watchlist.length}</p>
                  <p className="text-sm text-muted-foreground">Watchlist</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gold">0</p>
                  <p className="text-sm text-muted-foreground">Reviews</p>
                </div>
              </div>

              {/* Favorite Genres */}
              {currentUser.favoriteGenres.length > 0 && (
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {currentUser.favoriteGenres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm border border-primary/30"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Edit Button */}
            <Button variant="glass" size="icon">
              <Edit className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="favorites" className="space-y-6">
          <TabsList className="glass-card p-1 w-full justify-start overflow-x-auto">
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="watchlist" className="flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              Watchlist
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              My Reviews
            </TabsTrigger>
          </TabsList>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            {favoriteMovies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onToggleFavorite={handleToggleFavorite}
                    onToggleWatchlist={handleToggleWatchlist}
                    isFavorite={true}
                    inWatchlist={currentUser.watchlist.includes(movie.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="glass-card p-12 text-center">
                <Heart className="w-16 h-16 mx-auto mb-4 text-muted" />
                <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start adding movies to your favorites collection
                </p>
                <Button variant="hero" asChild>
                  <a href="/gallery">Browse Movies</a>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Watchlist Tab */}
          <TabsContent value="watchlist" className="space-y-6">
            {watchlistMovies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {watchlistMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onToggleFavorite={handleToggleFavorite}
                    onToggleWatchlist={handleToggleWatchlist}
                    isFavorite={currentUser.favorites.includes(movie.id)}
                    inWatchlist={true}
                  />
                ))}
              </div>
            ) : (
              <div className="glass-card p-12 text-center">
                <Bookmark className="w-16 h-16 mx-auto mb-4 text-muted" />
                <h3 className="text-xl font-semibold mb-2">Your watchlist is empty</h3>
                <p className="text-muted-foreground mb-4">
                  Add movies you want to watch later
                </p>
                <Button variant="hero" asChild>
                  <a href="/gallery">Browse Movies</a>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="glass-card p-12 text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-muted" />
              <h3 className="text-xl font-semibold mb-2">No reviews yet</h3>
              <p className="text-muted-foreground mb-4">
                Share your thoughts on movies you've watched
              </p>
              <Button variant="hero" asChild>
                <a href="/gallery">Start Reviewing</a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
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

export default ProfilePage;
