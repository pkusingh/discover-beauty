import ReelsFeed from "@/components/ReelsFeed";
import HeroSearch from "@/components/HeroSearch";
import unravelIcon from "@/assets/unravel-icon.svg";
import unravelWordmark from "@/assets/unravel-wordmark.svg";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background">
      {/* Main content */}
      <div className="flex items-start justify-center gap-8 px-6 py-6">
        <ReelsFeed />
        <div className="hidden lg:flex flex-col flex-1 max-w-2xl sticky top-6 gap-4">
          {/* Logo bar */}
          <div className="flex items-center gap-3 bg-primary px-6 py-4 rounded-2xl">
            <img src={unravelIcon} alt="Unravel" className="w-8 h-8" />
            <img src={unravelWordmark} alt="Unravel" className="h-5" />
          </div>
          <HeroSearch />
        </div>
      </div>
    </main>
  );
};

export default Index;
