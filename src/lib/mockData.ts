// Mock data for MANIACS platform

export interface Movie {
  id: number;
  title: string;
  type: "Movie" | "TV Show";
  year: number;
  duration?: string;
  seasons?: number;
  genres: string[];
  director?: string;
  creator?: string;
  studio: string;
  language: string;
  description: string;
  poster: string;
  trailer?: string;
  rating: number;
  totalReviews: number;
  cast: {
    name: string;
    character: string;
    image: string;
  }[];
  streaming: {
    platform: string;
    type: "subscription" | "rent" | "buy";
    price?: string;
  }[];
  reviews?: Review[];
}

export interface Review {
  id: number;
  userId: string;
  userName: string;
  userAvatar: string;
  movieId: number;
  rating: number;
  title: string;
  content: string;
  helpful: number;
  date: string;
  spoiler?: boolean;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  bio?: string;
  favoriteGenres: string[];
  favorites: number[];
  watchlist: number[];
  joinDate: string;
}

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Stellar Odyssey",
    type: "Movie",
    year: 2024,
    duration: "148 min",
    genres: ["Sci-Fi", "Adventure", "Action"],
    director: "Alex Chen",
    studio: "Cosmic Pictures",
    language: "English",
    description: "In a distant future, a crew of explorers ventures beyond known space to discover a mysterious signal that could change humanity forever. As they journey through uncharted territories, they encounter breathtaking alien civilizations and face impossible choices that will determine the fate of their species.",
    poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
    trailer: "https://www.youtube.com/embed/example",
    rating: 4.5,
    totalReviews: 1247,
    cast: [
      { name: "Sarah Martinez", character: "Captain Nova", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
      { name: "James Park", character: "Engineer Ray", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
      { name: "Maya Johnson", character: "Dr. Cosmic", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya" },
    ],
    streaming: [
      { platform: "StreamFlix", type: "subscription" },
      { platform: "MovieBox", type: "rent", price: "$4.99" },
    ],
  },
  {
    id: 2,
    title: "Shadow Chronicles",
    type: "TV Show",
    year: 2023,
    seasons: 2,
    genres: ["Mystery", "Thriller", "Drama"],
    creator: "Lisa Wong",
    studio: "DarkScreen Studios",
    language: "English",
    description: "A detective with a troubled past investigates a series of supernatural murders in a city where shadows come to life. Each episode peels back layers of mystery as the line between reality and nightmare blurs.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    rating: 4.7,
    totalReviews: 892,
    cast: [
      { name: "Marcus White", character: "Det. Shadow", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
      { name: "Emma Davis", character: "Lt. Bright", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
    ],
    streaming: [{ platform: "StreamFlix", type: "subscription" }],
  },
  {
    id: 3,
    title: "Neon Dreams",
    type: "Movie",
    year: 2024,
    duration: "124 min",
    genres: ["Action", "Cyberpunk", "Thriller"],
    director: "Ryan Kim",
    studio: "NeonWave Pictures",
    language: "English",
    description: "In a neon-soaked cyberpunk city, a hacker races against time to prevent a digital apocalypse. With stunning visuals and pulse-pounding action, this film redefines the genre.",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    rating: 4.3,
    totalReviews: 2103,
    cast: [
      { name: "Alex Turner", character: "Zero", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
      { name: "Zoe Chen", character: "Cipher", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe" },
    ],
    streaming: [
      { platform: "CineStream", type: "subscription" },
      { platform: "MovieBox", type: "rent", price: "$5.99" },
    ],
  },
  {
    id: 4,
    title: "The Last Kingdom",
    type: "Movie",
    year: 2024,
    duration: "165 min",
    genres: ["Fantasy", "Adventure", "Drama"],
    director: "Michael Roberts",
    studio: "Epic Films",
    language: "English",
    description: "A young warrior must unite the fractured kingdoms to face an ancient evil that threatens to destroy their world. Epic battles, stunning landscapes, and unforgettable characters.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    rating: 4.8,
    totalReviews: 3421,
    cast: [
      { name: "David Stone", character: "King Arthur", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
      { name: "Isabella Grace", character: "Queen Aria", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella" },
    ],
    streaming: [{ platform: "StreamFlix", type: "subscription" }],
  },
  {
    id: 5,
    title: "Code Red",
    type: "TV Show",
    year: 2024,
    seasons: 1,
    genres: ["Action", "Spy", "Thriller"],
    creator: "Jordan Lee",
    studio: "ActionMax",
    language: "English",
    description: "An elite team of international spies works to prevent global catastrophes in this high-octane thriller series. Fast-paced, intelligent, and full of twists.",
    poster: "https://images.unsplash.com/photo-1574267432644-f71eea4f3939?w=400&h=600&fit=crop",
    rating: 4.4,
    totalReviews: 756,
    cast: [
      { name: "Chris Evans", character: "Agent X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris" },
    ],
    streaming: [{ platform: "ActionMax", type: "subscription" }],
  },
  {
    id: 6,
    title: "Cosmic Love",
    type: "Movie",
    year: 2024,
    duration: "118 min",
    genres: ["Romance", "Sci-Fi", "Drama"],
    director: "Sophie Anderson",
    studio: "Heartwave Studios",
    language: "English",
    description: "Two astronauts from different planets fall in love while on a mission to save both their worlds. A beautiful story about connection across the stars.",
    poster: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&h=600&fit=crop",
    rating: 4.6,
    totalReviews: 1834,
    cast: [
      { name: "Luna Star", character: "Astrid", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" },
      { name: "Orion Knight", character: "Zephyr", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Orion" },
    ],
    streaming: [{ platform: "Heartwave+", type: "subscription" }],
  },
  {
    id: 7,
    title: "Dark Legends",
    type: "TV Show",
    year: 2023,
    seasons: 3,
    genres: ["Horror", "Supernatural", "Mystery"],
    creator: "Thomas Black",
    studio: "HorrorHouse",
    language: "English",
    description: "Each episode explores a different urban legend that turns out to be terrifyingly real. Not for the faint of heart.",
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&h=600&fit=crop",
    rating: 4.2,
    totalReviews: 1156,
    cast: [
      { name: "Raven Dark", character: "Host", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raven" },
    ],
    streaming: [{ platform: "HorrorHouse", type: "subscription" }],
  },
  {
    id: 8,
    title: "Speed Demons",
    type: "Movie",
    year: 2024,
    duration: "132 min",
    genres: ["Action", "Racing", "Drama"],
    director: "Carlos Reyes",
    studio: "FastTrack Films",
    language: "English",
    description: "Underground street racers compete in a deadly tournament where only the fastest survive. Adrenaline-pumping from start to finish.",
    poster: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=600&fit=crop",
    rating: 4.5,
    totalReviews: 987,
    cast: [
      { name: "Velocity Jones", character: "Racer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Velocity" },
    ],
    streaming: [{ platform: "FastTrack+", type: "subscription" }],
  },
];

export const mockReviews: Review[] = [
  {
    id: 1,
    userId: "1",
    userName: "CinemaFan2024",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cinema",
    movieId: 1,
    rating: 5,
    title: "Mind-Blowing Space Epic!",
    content: "Stellar Odyssey is an absolute masterpiece! The visuals are stunning, the story is compelling, and the performances are top-notch. This is what sci-fi should be. Can't wait for the sequel!",
    helpful: 234,
    date: "2024-10-15",
  },
  {
    id: 2,
    userId: "2",
    userName: "MovieBuff_89",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Movie",
    movieId: 1,
    rating: 4,
    title: "Great but could be better",
    content: "Really enjoyed the first two acts, but the ending felt a bit rushed. Overall, a solid sci-fi adventure with beautiful cinematography.",
    helpful: 89,
    date: "2024-10-20",
  },
];

// Helper function to get current user from localStorage
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('maniacs_user');
  return userStr ? JSON.parse(userStr) : null;
};

// Helper function to save current user
export const saveCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem('maniacs_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('maniacs_user');
  }
};

// Get movie by ID
export const getMovieById = (id: number): Movie | undefined => {
  return mockMovies.find(movie => movie.id === id);
};

// Get reviews for a movie
export const getReviewsForMovie = (movieId: number): Review[] => {
  return mockReviews.filter(review => review.movieId === movieId);
};
