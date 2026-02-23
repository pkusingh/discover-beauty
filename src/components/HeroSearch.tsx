import { Search, Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-travel.jpg";

const travelerTypes = [
  { label: "Any", emoji: "✨", active: true },
  { label: "Couple", emoji: "👫" },
  { label: "Luxury", emoji: "👑" },
  { label: "Budget", emoji: "🎒" },
  { label: "Solo", emoji: "🧑" },
  { label: "Biz", emoji: "🏢" },
];

const quickTags = [
  { label: "Dubai 5-star", emoji: "🏨" },
  { label: "Cheap Tokyo", emoji: "🍣" },
  { label: "Luxury Bali", emoji: "🌴" },
  { label: "Budget Bangkok", emoji: "🛕" },
  { label: "Beach Phuket", emoji: "🏖️" },
];

const HeroSearch = () => {
  const [activeType, setActiveType] = useState("Any");
  const [searchMode, setSearchMode] = useState<"search" | "aide">("aide");

  return (
    <section className="relative w-full min-h-[520px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Travel destinations around the world"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 flex flex-col items-center gap-6 py-16">
        {/* Mode tabs */}
        <div className="flex items-center gap-1 glass-panel rounded-full px-1 py-1">
          <button
            onClick={() => setSearchMode("search")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              searchMode === "search"
                ? "bg-primary text-primary-foreground"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            <Search className="w-4 h-4" />
            Search
          </button>
          <button
            onClick={() => setSearchMode("aide")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              searchMode === "aide"
                ? "bg-accent text-accent-foreground"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Aide
          </button>
        </div>

        {/* Search fields */}
        <div className="glass-panel rounded-2xl w-full p-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary">
              <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Dates</p>
                <p className="text-sm font-semibold text-foreground">Wed, 25 Feb – Thu, 27 Feb</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Destination</p>
                <p className="text-sm text-muted-foreground">Where to?</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary">
              <Users className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Guests</p>
                <p className="text-sm font-semibold text-foreground">2 Adults</p>
              </div>
            </div>
          </div>

          {/* AI Search input */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-background">
            <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
            <input
              type="text"
              placeholder='Try "cheap 5-star Tokyo this weekend" or "surprise me"'
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>

          {/* Traveler types */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="text-xs text-muted-foreground font-medium mr-1">Traveler</span>
            {travelerTypes.map((type) => (
              <button
                key={type.label}
                onClick={() => setActiveType(type.label)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeType === type.label
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                <span>{type.emoji}</span>
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick tags */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {quickTags.map((tag) => (
            <button
              key={tag.label}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-panel text-xs font-medium text-foreground hover:shadow-lg transition-all hover:scale-105"
            >
              <span>{tag.emoji}</span>
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
