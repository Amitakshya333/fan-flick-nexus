import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Heart, MessageCircle, Share2, AlertTriangle, Sparkles } from "lucide-react";
import { mockMovies } from "@/lib/mockData";
import { Link } from "react-router-dom";

interface Post {
  id: string;
  user_id: string;
  movie_id: number;
  post_type: string;
  title: string;
  content: string;
  image_url: string | null;
  spoiler: boolean;
  created_at: string;
  profiles: {
    username: string;
    avatar: string;
  };
}

interface PostWithCounts extends Post {
  likes_count: number;
  comments_count: number;
  user_has_liked: boolean;
}

const CommunityPage = () => {
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<PostWithCounts[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [filter, setFilter] = useState("all");

  // Form states
  const [selectedMovie, setSelectedMovie] = useState("");
  const [postType, setPostType] = useState("discussion");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [spoiler, setSpoiler] = useState(false);

  useEffect(() => {
    checkUser();
    loadPosts();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setUser(session?.user || null);
  };

  const loadPosts = async () => {
    setLoading(true);
    try {
      const { data: postsData, error: postsError } = await supabase
        .from("posts")
        .select(`
          *,
          profiles!posts_user_id_fkey (username, avatar)
        `)
        .order("created_at", { ascending: false });

      if (postsError) throw postsError;

      // Get likes and comments counts
      const postsWithCounts = await Promise.all(
        (postsData || []).map(async (post) => {
          const { count: likesCount } = await supabase
            .from("likes")
            .select("*", { count: "exact", head: true })
            .eq("post_id", post.id);

          const { count: commentsCount } = await supabase
            .from("comments")
            .select("*", { count: "exact", head: true })
            .eq("post_id", post.id);

          let userHasLiked = false;
          if (user) {
            const { data: likeData } = await supabase
              .from("likes")
              .select("id")
              .eq("post_id", post.id)
              .eq("user_id", user.id)
              .maybeSingle();
            userHasLiked = !!likeData;
          }

          return {
            ...post,
            likes_count: likesCount || 0,
            comments_count: commentsCount || 0,
            user_has_liked: userHasLiked,
          };
        })
      );

      setPosts(postsWithCounts as any);
    } catch (error: any) {
      toast({
        title: "Error loading posts",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to create a post",
        variant: "destructive",
      });
      return;
    }

    if (!selectedMovie || !title || !content) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setCreating(true);
    try {
      const { error } = await supabase.from("posts").insert({
        user_id: user.id,
        movie_id: parseInt(selectedMovie),
        post_type: postType,
        title,
        content,
        spoiler,
      });

      if (error) throw error;

      toast({
        title: "Post created!",
        description: "Your POV has been shared with the community",
      });

      // Reset form
      setSelectedMovie("");
      setTitle("");
      setContent("");
      setSpoiler(false);

      // Reload posts
      loadPosts();
    } catch (error: any) {
      toast({
        title: "Error creating post",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setCreating(false);
    }
  };

  const handleLike = async (postId: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to like posts",
        variant: "destructive",
      });
      return;
    }

    try {
      const post = posts.find((p) => p.id === postId);
      if (!post) return;

      if (post.user_has_liked) {
        // Unlike
        await supabase.from("likes").delete().eq("post_id", postId).eq("user_id", user.id);
      } else {
        // Like
        await supabase.from("likes").insert({
          post_id: postId,
          user_id: user.id,
        });
      }

      // Reload posts to update counts
      loadPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getMovieTitle = (movieId: number) => {
    const movie = mockMovies.find((m) => m.id === movieId);
    return movie ? movie.title : "Unknown Movie";
  };

  const filteredPosts = posts.filter((post) => {
    if (filter === "all") return true;
    return post.post_type === filter;
  });

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10" />
            Share Your POV
          </h1>
          <p className="text-xl text-muted-foreground">
            Be a MANIAC - Share your thoughts with the community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Create Post Section */}
          <div className="lg:col-span-1">
            <Card className="glass-card p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Create Post</h2>
              {user ? (
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Movie/Show</label>
                    <Select value={selectedMovie} onValueChange={setSelectedMovie}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a movie..." />
                      </SelectTrigger>
                      <SelectContent>
                        {mockMovies.map((movie) => (
                          <SelectItem key={movie.id} value={movie.id.toString()}>
                            {movie.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Post Type</label>
                    <Select value={postType} onValueChange={setPostType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="discussion">Discussion</SelectItem>
                        <SelectItem value="review">Review</SelectItem>
                        <SelectItem value="theory">Theory</SelectItem>
                        <SelectItem value="fan_art">Fan Art</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Title</label>
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Give your post a title..."
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Content</label>
                    <Textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Share your thoughts..."
                      rows={6}
                      maxLength={2000}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {content.length}/2000
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="spoiler"
                      checked={spoiler}
                      onChange={(e) => setSpoiler(e.target.checked)}
                      className="rounded"
                    />
                    <label htmlFor="spoiler" className="text-sm flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4 text-warning" />
                      Contains Spoilers
                    </label>
                  </div>

                  <Button type="submit" disabled={creating} className="w-full">
                    {creating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create Post"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Login to create posts</p>
                  <Button asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Posts Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
              {["all", "discussion", "review", "theory", "fan_art"].map((f) => (
                <Button
                  key={f}
                  variant={filter === f ? "hero" : "ghost"}
                  onClick={() => setFilter(f)}
                  size="sm"
                >
                  {f.charAt(0).toUpperCase() + f.slice(1).replace("_", " ")}
                </Button>
              ))}
            </div>

            {/* Posts */}
            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : filteredPosts.length === 0 ? (
              <Card className="glass-card p-12 text-center">
                <p className="text-xl text-muted-foreground">
                  No posts yet. Be the first to share your POV!
                </p>
              </Card>
            ) : (
              filteredPosts.map((post) => (
                <Card key={post.id} className="glass-card p-6 animate-fade-in hover-scale">
                  {/* Post Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={post.profiles.avatar}
                      alt={post.profiles.username}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold">{post.profiles.username}</span>
                        <Badge variant="secondary" className="text-xs">
                          {post.post_type.replace("_", " ")}
                        </Badge>
                        {post.spoiler && (
                          <Badge variant="destructive" className="text-xs">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Spoiler
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {getMovieTitle(post.movie_id)} •{" "}
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 whitespace-pre-wrap">
                    {post.content}
                  </p>

                  {/* Post Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 transition-colors ${
                        post.user_has_liked
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${post.user_has_liked ? "fill-current" : ""}`}
                      />
                      <span>{post.likes_count}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments_count}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-auto">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;