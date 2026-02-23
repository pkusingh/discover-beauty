import ReelsFeed from "@/components/ReelsFeed";
import HeroSearch from "@/components/HeroSearch";
import unravelIcon from "@/assets/unravel-icon.svg";
import unravelWordmark from "@/assets/unravel-wordmark.svg";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src={unravelIcon} alt="Unravel" className="w-8 h-8" />
          <img src={unravelWordmark} alt="Unravel" className="h-5" />
        </div>
        <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          Get a Demo
        </button>
      </header>

      {/* Main content */}
      <div className="flex items-start justify-center gap-8 px-6 pb-6">
        <ReelsFeed />
        <div className="hidden lg:flex flex-col flex-1 max-w-2xl sticky top-6">
          <HeroSearch />
        </div>
      </div>
    </main>
  );
};

export default Index;
