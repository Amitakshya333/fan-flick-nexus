import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Film } from "lucide-react";
import { saveCurrentUser, User } from "@/lib/mockData";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const SignupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const genres = ["Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance", "Thriller", "Fantasy"];

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Create user account
    setTimeout(() => {
      const newUser: User = {
        id: "user-" + Date.now(),
        username: username,
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
        bio: `${username}'s movie collection`,
        favoriteGenres: selectedGenres,
        favorites: [],
        watchlist: [],
        joinDate: new Date().toISOString(),
      };

      saveCurrentUser(newUser);

      toast({
        title: "Account created!",
        description: "Welcome to MANIACS community",
      });

      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      {/* Background Effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="w-full max-w-md animate-scale-in">
        <div className="glass-card p-8 space-y-6">
          {/* Logo & Title */}
          <div className="text-center space-y-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Film className="w-8 h-8 text-white" />
              </div>
            </Link>
            <h1 className="text-3xl font-bold gradient-text">Join MANIACS</h1>
            <p className="text-muted-foreground">Create your account and start reviewing</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <Input
                id="username"
                type="text"
                placeholder="moviefan2024"
                className="glass-card border-white/10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="glass-card border-white/10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="glass-card border-white/10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {password && (
                <p className={`text-xs ${password.length >= 6 ? 'text-green-500' : 'text-destructive'}`}>
                  {password.length >= 6 ? '✓ Strong password' : '⚠ At least 6 characters required'}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="glass-card border-white/10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmPassword && (
                <p className={`text-xs ${password === confirmPassword ? 'text-green-500' : 'text-destructive'}`}>
                  {password === confirmPassword ? '✓ Passwords match' : '⚠ Passwords do not match'}
                </p>
              )}
            </div>

            {/* Favorite Genres */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Favorite Genres (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <Badge
                    key={genre}
                    variant={selectedGenres.includes(genre) ? "default" : "secondary"}
                    className="cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => toggleGenre(genre)}
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-1 rounded" required />
              <span className="text-sm text-muted-foreground">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
