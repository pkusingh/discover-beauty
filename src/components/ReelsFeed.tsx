import { useState, useRef, useEffect, useCallback } from "react";
import { Heart, MessageCircle, Send, Bookmark, Search, MapPin, Play, Pause, Volume2, VolumeX, Sparkles, MoreHorizontal } from "lucide-react";
import reelMaldives from "@/assets/reel-maldives.mp4";
import reelTokyo from "@/assets/reel-tokyo.mp4";
import reelDubai from "@/assets/reel-dubai.mp4";
import reelBali from "@/assets/reel-bali.mp4";
import reelParis from "@/assets/reel-paris.mp4";
import destMaldives from "@/assets/dest-maldives.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destParis from "@/assets/dest-paris.jpg";

interface Reel {
  id: number;
  video: string;
  poster: string;
  username: string;
  avatar: string;
  location: string;
  caption: string;
  likes: string;
  comments: string;
  price: string;
  tag: string;
}

const reelsData: Reel[] = [
  {
    id: 1,
    video: reelMaldives,
    poster: destMaldives,
    username: "maldives.luxury",
    avatar: "🏝️",
    location: "Maldives",
    caption: "Wake up to this every morning 🌊 Overwater villa vibes that hit different ✨",
    likes: "24.5K",
    comments: "892",
    price: "From $450/night",
    tag: "Luxury Beach",
  },
  {
    id: 2,
    video: reelTokyo,
    poster: destTokyo,
    username: "tokyo.nights",
    avatar: "🗼",
    location: "Tokyo, Japan",
    caption: "Lost in the neon streets of Shibuya 🌸🏙️ Tokyo never sleeps and neither do we",
    likes: "18.2K",
    comments: "1.2K",
    price: "From $120/night",
    tag: "City Culture",
  },
  {
    id: 3,
    video: reelDubai,
    poster: destDubai,
    username: "dubai.premium",
    avatar: "🌇",
    location: "Dubai, UAE",
    caption: "Golden hour from the 80th floor 🌅 Dubai really is built different",
    likes: "31.8K",
    comments: "2.1K",
    price: "From $320/night",
    tag: "5-Star City",
  },
  {
    id: 4,
    video: reelBali,
    poster: destBali,
    username: "bali.paradise",
    avatar: "🌴",
    location: "Bali, Indonesia",
    caption: "Infinity pool above the jungle canopy 🌿 This is what dreams are made of",
    likes: "22.1K",
    comments: "945",
    price: "From $85/night",
    tag: "Nature Retreat",
  },
  {
    id: 5,
    video: reelParis,
    poster: destParis,
    username: "paris.amour",
    avatar: "🗼",
    location: "Paris, France",
    caption: "Seine river sunset cruise 🥂 Romance level: maximum",
    likes: "19.7K",
    comments: "1.5K",
    price: "From $200/night",
    tag: "Romance",
  },
];

const VideoReel = ({ reel, isActive }: { reel: Reel; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const handleDoubleClick = useCallback(() => {
    setLiked(true);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 800);
  }, []);

  return (
    <div className="reel-item relative w-full h-full flex-shrink-0 snap-start snap-always">
      {/* Video */}
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.poster}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onDoubleClick={handleDoubleClick}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Pause icon overlay */}
      {!isPlaying && isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
          </div>
        </div>
      )}

      {/* Double-tap heart */}
      {showHeart && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <Heart className="w-24 h-24 text-red-500 fill-current animate-ping" />
        </div>
      )}

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/20 pointer-events-none" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-[env(safe-area-inset-top,12px)] pb-2">
        <h1 className="text-lg font-display font-bold text-primary-foreground tracking-wide">Explore</h1>
        <button className="p-2">
          <Search className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>

      {/* Tag pill */}
      <div className="absolute top-14 left-4 z-10">
        <span className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg">
          {reel.tag}
        </span>
      </div>

      {/* Right action bar */}
      <div className="absolute right-3 bottom-32 z-10 flex flex-col items-center gap-5">
        <button onClick={() => setLiked(!liked)} className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Heart className={`w-6 h-6 ${liked ? "text-red-500 fill-current" : "text-primary-foreground"}`} />
          </div>
          <span className="text-xs text-primary-foreground font-semibold">{reel.likes}</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xs text-primary-foreground font-semibold">{reel.comments}</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Send className="w-6 h-6 text-primary-foreground" />
          </div>
        </button>
        <button onClick={() => setSaved(!saved)} className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Bookmark className={`w-6 h-6 ${saved ? "text-accent fill-current" : "text-primary-foreground"}`} />
          </div>
        </button>
        <button onClick={() => setIsMuted(!isMuted)}>
          <div className="w-11 h-11 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Volume2 className="w-5 h-5 text-primary-foreground" />
            )}
          </div>
        </button>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-16 z-10 px-4 pb-6">
        {/* User row */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-9 h-9 rounded-full bg-accent/30 backdrop-blur-sm flex items-center justify-center text-lg border-2 border-accent">
            {reel.avatar}
          </div>
          <span className="text-sm font-bold text-primary-foreground">{reel.username}</span>
          <button className="px-3 py-1 rounded-full border border-primary-foreground/50 text-xs font-semibold text-primary-foreground">
            Follow
          </button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mb-2">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-medium text-primary-foreground/90">{reel.location}</span>
        </div>

        {/* Caption */}
        <p className="text-sm text-primary-foreground/90 leading-relaxed mb-3 line-clamp-2">
          {reel.caption}
        </p>

        {/* Price CTA */}
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
          <Sparkles className="w-4 h-4" />
          {reel.price} — Book Now
        </button>
      </div>
    </div>
  );
};

const ReelsFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) setActiveIndex(index);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    const items = container.querySelectorAll(".reel-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-background flex justify-center py-6">
      <div
        ref={containerRef}
        className="w-full max-w-[420px] h-[85vh] overflow-y-scroll snap-y snap-mandatory scrollbar-hide rounded-2xl shadow-2xl"
      >
        {reelsData.map((reel, i) => (
          <div key={reel.id} data-index={i} className="w-full h-[85vh]">
            <VideoReel reel={reel} isActive={activeIndex === i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsFeed;
