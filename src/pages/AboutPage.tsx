import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Film, Users, Star, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold gradient-text mb-4">
            About MANIACS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where movie fans unite to share, discover, and celebrate cinema
          </p>
        </div>

        {/* Mission Section */}
        <div className="glass-card p-12 mb-12 animate-scale-in">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              MANIACS is built for the Gen Z movie enthusiast who wants more than just watching films. 
              We're creating a vibrant community where your voice matters, your reviews inspire others,
              and discovering your next favorite movie is an adventure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a casual viewer or a cinema fanatic, MANIACS is your digital home for 
              all things movies and TV shows.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 text-center hover-scale">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
              <Film className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Discover</h3>
            <p className="text-muted-foreground">
              Explore thousands of movies and shows with powerful filters
            </p>
          </div>

          <div className="glass-card p-6 text-center hover-scale">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-secondary flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Review</h3>
            <p className="text-muted-foreground">
              Share your honest opinions and rate what you watch
            </p>
          </div>

          <div className="glass-card p-6 text-center hover-scale">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Curate</h3>
            <p className="text-muted-foreground">
              Build your personal collection of favorites and watchlists
            </p>
          </div>

          <div className="glass-card p-6 text-center hover-scale">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <p className="text-muted-foreground">
              Join a community of passionate movie lovers
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="glass-card p-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">
                Create your free account in seconds
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore</h3>
              <p className="text-muted-foreground">
                Browse our extensive movie and show collection
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent text-background flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Share</h3>
              <p className="text-muted-foreground">
                Write reviews and connect with fellow fans
              </p>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="glass-card p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6">Community Guidelines</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>✨ Be respectful and kind to all members</p>
            <p>🎬 Keep discussions relevant to movies and shows</p>
            <p>💭 Share honest opinions without spoiling for others</p>
            <p>🌟 Support fellow fans and their diverse tastes</p>
            <p>🚫 No hate speech, harassment, or inappropriate content</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Ready to Join?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your movie journey with MANIACS today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/signup">Sign Up Free</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/gallery">Browse Movies</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 MANIACS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
