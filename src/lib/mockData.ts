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
  // Real Movies
  {
    id: 9,
    title: "Inception",
    type: "Movie",
    year: 2010,
    duration: "148 min",
    genres: ["Sci-Fi", "Thriller", "Action"],
    director: "Christopher Nolan",
    studio: "Warner Bros.",
    language: "English",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. A mind-bending masterpiece that explores the depths of the subconscious.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop&q=80",
    rating: 4.9,
    totalReviews: 8943,
    cast: [
      { name: "Leonardo DiCaprio", character: "Dom Cobb", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo" },
      { name: "Tom Hardy", character: "Eames", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom" },
      { name: "Ellen Page", character: "Ariadne", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ellen" },
    ],
    streaming: [
      { platform: "Netflix", type: "subscription" },
      { platform: "Amazon Prime", type: "rent", price: "$3.99" },
    ],
  },
  {
    id: 10,
    title: "The Dark Knight",
    type: "Movie",
    year: 2008,
    duration: "152 min",
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    studio: "Warner Bros.",
    language: "English",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&q=80",
    rating: 5.0,
    totalReviews: 12456,
    cast: [
      { name: "Christian Bale", character: "Bruce Wayne / Batman", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Christian" },
      { name: "Heath Ledger", character: "Joker", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Heath" },
      { name: "Aaron Eckhart", character: "Harvey Dent", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aaron" },
    ],
    streaming: [
      { platform: "HBO Max", type: "subscription" },
      { platform: "Apple TV", type: "buy", price: "$14.99" },
    ],
  },
  {
    id: 11,
    title: "Spider-Man: Across the Spider-Verse",
    type: "Movie",
    year: 2023,
    duration: "140 min",
    genres: ["Animation", "Action", "Adventure"],
    director: "Joaquim Dos Santos",
    studio: "Sony Pictures Animation",
    language: "English",
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. A visual masterpiece with stunning animation.",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop&q=80",
    rating: 4.8,
    totalReviews: 6732,
    cast: [
      { name: "Shameik Moore", character: "Miles Morales", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shameik" },
      { name: "Hailee Steinfeld", character: "Gwen Stacy", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hailee" },
      { name: "Oscar Isaac", character: "Miguel O'Hara", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oscar" },
    ],
    streaming: [
      { platform: "Netflix", type: "subscription" },
      { platform: "Amazon Prime", type: "rent", price: "$5.99" },
    ],
  },
  {
    id: 12,
    title: "Oppenheimer",
    type: "Movie",
    year: 2023,
    duration: "180 min",
    genres: ["Biography", "Drama", "History"],
    director: "Christopher Nolan",
    studio: "Universal Pictures",
    language: "English",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. A haunting exploration of genius and its consequences.",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&q=80",
    rating: 4.7,
    totalReviews: 5421,
    cast: [
      { name: "Cillian Murphy", character: "J. Robert Oppenheimer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cillian" },
      { name: "Robert Downey Jr.", character: "Lewis Strauss", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RDJ" },
      { name: "Emily Blunt", character: "Kitty Oppenheimer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" },
    ],
    streaming: [
      { platform: "Peacock", type: "subscription" },
      { platform: "Amazon Prime", type: "rent", price: "$6.99" },
    ],
  },
  {
    id: 13,
    title: "Everything Everywhere All at Once",
    type: "Movie",
    year: 2022,
    duration: "139 min",
    genres: ["Action", "Adventure", "Comedy"],
    director: "Daniel Kwan, Daniel Scheinert",
    studio: "A24",
    language: "English",
    description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop&q=80",
    rating: 4.6,
    totalReviews: 7834,
    cast: [
      { name: "Michelle Yeoh", character: "Evelyn Wang", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michelle" },
      { name: "Ke Huy Quan", character: "Waymond Wang", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ke" },
      { name: "Stephanie Hsu", character: "Joy Wang", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephanie" },
    ],
    streaming: [
      { platform: "Paramount+", type: "subscription" },
      { platform: "Amazon Prime", type: "rent", price: "$4.99" },
    ],
  },
  {
    id: 14,
    title: "John Wick: Chapter 4",
    type: "Movie",
    year: 2023,
    duration: "169 min",
    genres: ["Action", "Thriller", "Crime"],
    director: "Chad Stahelski",
    studio: "Lionsgate",
    language: "English",
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80",
    rating: 4.7,
    totalReviews: 5632,
    cast: [
      { name: "Keanu Reeves", character: "John Wick", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Keanu" },
      { name: "Donnie Yen", character: "Caine", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Donnie" },
      { name: "Bill Skarsgård", character: "Marquis", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bill" },
    ],
    streaming: [
      { platform: "Peacock", type: "subscription" },
      { platform: "Amazon Prime", type: "rent", price: "$5.99" },
    ],
  },
  // Anime
  {
    id: 15,
    title: "Attack on Titan",
    type: "TV Show",
    year: 2013,
    seasons: 4,
    genres: ["Anime", "Action", "Drama"],
    creator: "Hajime Isayama",
    studio: "MAPPA / Wit Studio",
    language: "Japanese",
    description: "Humanity lives within cities surrounded by enormous walls that protect them from gigantic man-eating humanoids called Titans. A dark, intense story about survival and freedom.",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop&q=80",
    rating: 4.9,
    totalReviews: 14523,
    cast: [
      { name: "Eren Yeager", character: "Protagonist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eren" },
      { name: "Mikasa Ackerman", character: "Main Character", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mikasa" },
      { name: "Armin Arlert", character: "Main Character", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Armin" },
    ],
    streaming: [
      { platform: "Crunchyroll", type: "subscription" },
      { platform: "Hulu", type: "subscription" },
    ],
  },
  {
    id: 16,
    title: "Demon Slayer: Kimetsu no Yaiba",
    type: "TV Show",
    year: 2019,
    seasons: 3,
    genres: ["Anime", "Action", "Fantasy"],
    creator: "Koyoharu Gotouge",
    studio: "ufotable",
    language: "Japanese",
    description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Breathtaking animation and emotional storytelling.",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop&q=80",
    rating: 4.8,
    totalReviews: 11234,
    cast: [
      { name: "Tanjiro Kamado", character: "Protagonist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanjiro" },
      { name: "Nezuko Kamado", character: "Sister", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nezuko" },
      { name: "Zenitsu Agatsuma", character: "Demon Slayer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zenitsu" },
    ],
    streaming: [
      { platform: "Crunchyroll", type: "subscription" },
      { platform: "Netflix", type: "subscription" },
    ],
  },
  {
    id: 17,
    title: "Jujutsu Kaisen",
    type: "TV Show",
    year: 2020,
    seasons: 2,
    genres: ["Anime", "Action", "Supernatural"],
    creator: "Gege Akutami",
    studio: "MAPPA",
    language: "Japanese",
    description: "A boy swallows a cursed talisman and must learn to control his newfound powers at a school for Jujutsu Sorcerers. Modern dark fantasy with incredible fight scenes.",
    poster: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop&q=80",
    rating: 4.7,
    totalReviews: 9876,
    cast: [
      { name: "Yuji Itadori", character: "Protagonist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yuji" },
      { name: "Megumi Fushiguro", character: "Jujutsu Sorcerer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Megumi" },
      { name: "Satoru Gojo", character: "Teacher", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gojo" },
    ],
    streaming: [
      { platform: "Crunchyroll", type: "subscription" },
      { platform: "Netflix", type: "subscription" },
    ],
  },
  {
    id: 18,
    title: "One Piece",
    type: "TV Show",
    year: 1999,
    seasons: 20,
    genres: ["Anime", "Adventure", "Comedy"],
    creator: "Eiichiro Oda",
    studio: "Toei Animation",
    language: "Japanese",
    description: "Monkey D. Luffy and his pirate crew explore the Grand Line in search of the legendary treasure One Piece. The longest-running anime adventure with over 1000 episodes.",
    poster: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=600&fit=crop&q=80",
    rating: 4.8,
    totalReviews: 18234,
    cast: [
      { name: "Monkey D. Luffy", character: "Captain", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luffy" },
      { name: "Roronoa Zoro", character: "Swordsman", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoro" },
      { name: "Nami", character: "Navigator", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nami" },
    ],
    streaming: [
      { platform: "Crunchyroll", type: "subscription" },
      { platform: "Netflix", type: "subscription" },
    ],
  },
  {
    id: 19,
    title: "My Hero Academia",
    type: "TV Show",
    year: 2016,
    seasons: 6,
    genres: ["Anime", "Action", "Superhero"],
    creator: "Kohei Horikoshi",
    studio: "Bones",
    language: "Japanese",
    description: "In a world where most humans have superpowers, a boy born without them dreams of becoming a hero. Inspiring story about determination and heroism.",
    poster: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=400&h=600&fit=crop&q=80",
    rating: 4.6,
    totalReviews: 8765,
    cast: [
      { name: "Izuku Midoriya", character: "Deku", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deku" },
      { name: "Katsuki Bakugo", character: "Rival", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bakugo" },
      { name: "All Might", character: "Symbol of Peace", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AllMight" },
    ],
    streaming: [
      { platform: "Crunchyroll", type: "subscription" },
      { platform: "Hulu", type: "subscription" },
    ],
  },
  {
    id: 20,
    title: "Death Note",
    type: "TV Show",
    year: 2006,
    seasons: 1,
    genres: ["Anime", "Thriller", "Psychological"],
    creator: "Tsugumi Ohba",
    studio: "Madhouse",
    language: "Japanese",
    description: "A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name in it. A psychological cat-and-mouse game.",
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&h=600&fit=crop&q=80",
    rating: 4.9,
    totalReviews: 13456,
    cast: [
      { name: "Light Yagami", character: "Protagonist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Light" },
      { name: "L Lawliet", character: "Detective", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=L" },
      { name: "Ryuk", character: "Shinigami", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryuk" },
    ],
    streaming: [
      { platform: "Netflix", type: "subscription" },
      { platform: "Crunchyroll", type: "subscription" },
    ],
  },
  {
    id: 21,
    title: "Chainsaw Man",
    type: "TV Show",
    year: 2022,
    seasons: 1,
    genres: ["Anime", "Action", "Horror"],
    creator: "Tatsuki Fujimoto",
    studio: "MAPPA",
    language: "Japanese",
    description: "Following a betrayal, a young man is reborn as a chainsaw devil. Dark, violent, and wildly entertaining with stunning animation.",
    poster: "https://images.unsplash.com/photo-1574267432644-f71eea4f3939?w=400&h=600&fit=crop&q=80",
    rating: 4.5,
    totalReviews: 6234,
    cast: [
      { name: "Denji", character: "Protagonist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Denji" },
      { name: "Power", character: "Blood Fiend", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Power" },
      { name: "Makima", character: "Devil Hunter", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Makima" },
    ],
    streaming: [
      { platform: "Crunchyroll", type: "subscription" },
      { platform: "Hulu", type: "subscription" },
    ],
  },
  // TV Series
  {
    id: 22,
    title: "Breaking Bad",
    type: "TV Show",
    year: 2008,
    seasons: 5,
    genres: ["Crime", "Drama", "Thriller"],
    creator: "Vince Gilligan",
    studio: "AMC",
    language: "English",
    description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student. One of the greatest TV dramas ever made.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80",
    rating: 5.0,
    totalReviews: 22345,
    cast: [
      { name: "Bryan Cranston", character: "Walter White", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bryan" },
      { name: "Aaron Paul", character: "Jesse Pinkman", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AaronP" },
      { name: "Anna Gunn", character: "Skyler White", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna" },
    ],
    streaming: [
      { platform: "Netflix", type: "subscription" },
      { platform: "AMC+", type: "subscription" },
    ],
  },
  {
    id: 23,
    title: "Stranger Things",
    type: "TV Show",
    year: 2016,
    seasons: 4,
    genres: ["Sci-Fi", "Horror", "Drama"],
    creator: "The Duffer Brothers",
    studio: "Netflix",
    language: "English",
    description: "When a young boy disappears, his friends, family and local police are pulled into a mystery involving a secret experiment, terrifying supernatural forces and a strange little girl.",
    poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop&q=80",
    rating: 4.7,
    totalReviews: 16789,
    cast: [
      { name: "Millie Bobby Brown", character: "Eleven", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Millie" },
      { name: "Finn Wolfhard", character: "Mike Wheeler", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Finn" },
      { name: "Winona Ryder", character: "Joyce Byers", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Winona" },
    ],
    streaming: [
      { platform: "Netflix", type: "subscription" },
    ],
  },
  {
    id: 24,
    title: "The Last of Us",
    type: "TV Show",
    year: 2023,
    seasons: 1,
    genres: ["Drama", "Horror", "Sci-Fi"],
    creator: "Craig Mazin, Neil Druckmann",
    studio: "HBO",
    language: "English",
    description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&h=600&fit=crop&q=80",
    rating: 4.8,
    totalReviews: 9234,
    cast: [
      { name: "Pedro Pascal", character: "Joel", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro" },
      { name: "Bella Ramsey", character: "Ellie", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bella" },
      { name: "Anna Torv", character: "Tess", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnnaT" },
    ],
    streaming: [
      { platform: "HBO Max", type: "subscription" },
    ],
  },
  {
    id: 25,
    title: "Wednesday",
    type: "TV Show",
    year: 2022,
    seasons: 1,
    genres: ["Comedy", "Fantasy", "Mystery"],
    creator: "Alfred Gough, Miles Millar",
    studio: "Netflix",
    language: "English",
    description: "Wednesday Addams' years as a student at Nevermore Academy, where she navigates her psychic ability, stops a killing spree, and solves the mystery that embroiled her parents.",
    poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop&q=80",
    rating: 4.5,
    totalReviews: 8932,
    cast: [
      { name: "Jenna Ortega", character: "Wednesday Addams", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jenna" },
      { name: "Emma Myers", character: "Enid Sinclair", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaM" },
      { name: "Catherine Zeta-Jones", character: "Morticia Addams", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Catherine" },
    ],
    streaming: [
      { platform: "Netflix", type: "subscription" },
    ],
  },
  {
    id: 26,
    title: "The Witcher",
    type: "TV Show",
    year: 2019,
    seasons: 3,
    genres: ["Fantasy", "Action", "Drama"],
    creator: "Lauren Schmidt Hissrich",
    studio: "Netflix",
    language: "English",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop&q=80",
    rating: 4.4,
    totalReviews: 11234,
    cast: [
      { name: "Henry Cavill", character: "Geralt of Rivia", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Henry" },
      { name: "Anya Chalotra", character: "Yennefer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anya" },
      { name: "Freya Allan", character: "Ciri", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Freya" },
    ],
    streaming: [
      { platform: "Netflix", type: "subscription" },
    ],
  },
  {
    id: 27,
    title: "Game of Thrones",
    type: "TV Show",
    year: 2011,
    seasons: 8,
    genres: ["Fantasy", "Drama", "Adventure"],
    creator: "David Benioff, D.B. Weiss",
    studio: "HBO",
    language: "English",
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop&q=80",
    rating: 4.6,
    totalReviews: 28456,
    cast: [
      { name: "Emilia Clarke", character: "Daenerys Targaryen", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emilia" },
      { name: "Kit Harington", character: "Jon Snow", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kit" },
      { name: "Peter Dinklage", character: "Tyrion Lannister", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter" },
    ],
    streaming: [
      { platform: "HBO Max", type: "subscription" },
    ],
  },
  {
    id: 28,
    title: "The Boys",
    type: "TV Show",
    year: 2019,
    seasons: 4,
    genres: ["Action", "Comedy", "Crime"],
    creator: "Eric Kripke",
    studio: "Amazon Studios",
    language: "English",
    description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers. A dark, violent, and satirical take on the superhero genre.",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop&q=80",
    rating: 4.7,
    totalReviews: 14567,
    cast: [
      { name: "Karl Urban", character: "Billy Butcher", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karl" },
      { name: "Antony Starr", character: "Homelander", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Antony" },
      { name: "Jack Quaid", character: "Hughie Campbell", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JackQ" },
    ],
    streaming: [
      { platform: "Amazon Prime", type: "subscription" },
    ],
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
