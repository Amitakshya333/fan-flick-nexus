import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { MovieCard } from "@/components/MovieCard";
import { mockMovies, getCurrentUser, saveCurrentUser } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("popular");
  const currentUser = getCurrentUser();
  const [favorites, setFavorites] = useState<number[]>(currentUser?.favorites || []);
  const [watchlist, setWatchlist] = useState<number[]>(currentUser?.watchlist || []);

  const allGenres = ["All", ...Array.from(new Set(mockMovies.flatMap(m => m.genres)))];
  const types = ["All", "Movie", "TV Show"];

  const filteredMovies = useMemo(() => {
    let filtered = mockMovies;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Type filter
    if (selectedType !== "All") {
      filtered = filtered.filter(movie => movie.type === selectedType);
    }

    // Genre filter
    if (selectedGenre !== "All") {
      filtered = filtered.filter(movie => movie.genres.includes(selectedGenre));
    }

    // Sort
    switch (sortBy) {
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case "year":
        filtered = [...filtered].sort((a, b) => b.year - a.year);
        break;
      case "title":
        filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        break;
      default: // popular
        filtered = [...filtered].sort((a, b) => b.totalReviews - a.totalReviews);
    }

    return filtered;
  }, [searchQuery, selectedType, selectedGenre, sortBy]);

  const handleToggleFavorite = (movieId: number) => {
    if (!currentUser) {
      window.location.href = '/login';
      return;
    }
    
    const newFavorites = favorites.includes(movieId)
      ? favorites.filter(id => id !== movieId)
      : [...favorites, movieId];
    
    setFavorites(newFavorites);
    saveCurrentUser({ ...currentUser, favorites: newFavorites });
  };

  const handleToggleWatchlist = (movieId: number) => {
    if (!currentUser) {
      window.location.href = '/login';
      return;
    }
    
    const newWatchlist = watchlist.includes(movieId)
      ? watchlist.filter(id => id !== movieId)
      : [...watchlist, movieId];
    
    setWatchlist(newWatchlist);
    saveCurrentUser({ ...currentUser, watchlist: newWatchlist });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Movie Gallery
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover your next favorite film or show
          </p>
        </div>

        {/* Filters Section */}
        <div className="glass-card p-6 mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <Input
              type="text"
              placeholder="Search movies, shows, actors, genres..."
              className="pl-12 h-12 glass-card border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Type Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Type</label>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "glass"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={sortBy === "popular" ? "default" : "glass"}
                  size="sm"
                  onClick={() => setSortBy("popular")}
                >
                  Popular
                </Button>
                <Button
                  variant={sortBy === "rating" ? "default" : "glass"}
                  size="sm"
                  onClick={() => setSortBy("rating")}
                >
                  Top Rated
                </Button>
                <Button
                  variant={sortBy === "year" ? "default" : "glass"}
                  size="sm"
                  onClick={() => setSortBy("year")}
                >
                  Recent
                </Button>
                <Button
                  variant={sortBy === "title" ? "default" : "glass"}
                  size="sm"
                  onClick={() => setSortBy("title")}
                >
                  A-Z
                </Button>
              </div>
            </div>
          </div>

          {/* Genre Filter */}
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Genres
            </label>
            <div className="flex flex-wrap gap-2">
              {allGenres.map((genre) => (
                <Badge
                  key={genre}
                  variant={selectedGenre === genre ? "default" : "secondary"}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found <span className="text-primary font-semibold">{filteredMovies.length}</span> results
          </p>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onToggleFavorite={handleToggleFavorite}
                onToggleWatchlist={handleToggleWatchlist}
                isFavorite={favorites.includes(movie.id)}
                inWatchlist={watchlist.includes(movie.id)}
              />
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 text-center">
            <p className="text-xl text-muted-foreground">
              No movies found matching your criteria
            </p>
            <Button
              variant="hero"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedType("All");
                setSelectedGenre("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
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

export default GalleryPage;
