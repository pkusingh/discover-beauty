import ReelsFeed from "@/components/ReelsFeed";
import HeroSearch from "@/components/HeroSearch";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background flex items-start justify-center gap-8 px-6 py-6">
      <ReelsFeed />
      <div className="hidden lg:flex flex-col flex-1 max-w-2xl sticky top-6">
        <HeroSearch />
      </div>
    </main>
  );
};

export default Index;
