import { useState } from "react";
import destDubai from "@/assets/dest-dubai.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destLondon from "@/assets/dest-london.jpg";
import destBangkok from "@/assets/dest-bangkok.jpg";
import { MapPin, Star } from "lucide-react";

const destinations = [
  { name: "Dubai", country: "UAE", image: destDubai, rating: 4.9, price: "$320", tag: "Luxury" },
  { name: "Bali", country: "Indonesia", image: destBali, rating: 4.8, price: "$85", tag: "Nature" },
  { name: "Maldives", country: "Maldives", image: destMaldives, rating: 4.9, price: "$450", tag: "Beach" },
  { name: "Tokyo", country: "Japan", image: destTokyo, rating: 4.7, price: "$120", tag: "Culture" },
  { name: "Paris", country: "France", image: destParis, rating: 4.8, price: "$200", tag: "Romance" },
  { name: "London", country: "United Kingdom", image: destLondon, rating: 4.6, price: "$180", tag: "City" },
  { name: "Bangkok", country: "Thailand", image: destBangkok, rating: 4.5, price: "$55", tag: "Budget" },
];

const filters = ["All", "Dubai", "Bali", "Maldives", "London", "Paris", "Tokyo", "Bangkok"];

const PopularDestinations = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? destinations
    : destinations.filter((d) => d.name === activeFilter);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Where are you going?
        </h2>
        <p className="text-muted-foreground">
          Pick a popular destination or search above
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === f
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-foreground hover:bg-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((dest, i) => (
          <div
            key={dest.name}
            className="group relative rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={dest.image}
                alt={`${dest.name}, ${dest.country}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                {dest.tag}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display text-lg font-semibold text-foreground">{dest.name}</h3>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-semibold">{dest.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                <MapPin className="w-3.5 h-3.5" />
                {dest.country}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-foreground font-semibold">
                  {dest.price}
                  <span className="text-muted-foreground text-xs font-normal"> /night</span>
                </p>
                <button className="text-xs font-medium text-accent hover:underline">
                  View deals →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
