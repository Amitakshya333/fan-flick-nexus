import { Link, useLocation } from "react-router-dom";
import { Film, Search, Menu, User, LogOut, Heart, LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getCurrentUser, User as UserType } from "@/lib/mockData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('maniacs_user');
    setCurrentUser(null);
    window.location.href = '/';
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-card shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-primary group-hover:shadow-glow-primary transition-all">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              MANIACS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative",
                  isActive(link.to)
                    ? "text-primary"
                    : "text-foreground hover:text-primary",
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300",
                  isActive(link.to) && "after:scale-x-100",
                  "hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden sm:block">
              {searchOpen ? (
                <div className="flex items-center gap-2 glass-card px-3 animate-slide-in-right">
                  <Search className="w-4 h-4 text-muted" />
                  <input
                    type="text"
                    placeholder="Search movies..."
                    className="bg-transparent border-none outline-none text-sm w-48"
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="w-5 h-5" />
                </Button>
              )}
            </div>

            {/* User Menu or Login */}
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="glass" size="icon" className="relative">
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.username}
                      className="w-8 h-8 rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-card border-white/10 w-48">
                  <div className="px-2 py-1.5">
                    <p className="font-semibold">{currentUser.username}</p>
                    <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <Heart className="w-4 h-4 mr-2" />
                      My Favorites
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-card border-white/10">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        isActive(link.to) ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  {!currentUser && (
                    <>
                      <Button variant="outline" asChild className="mt-4">
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button variant="hero" asChild>
                        <Link to="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
