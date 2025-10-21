import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Music } from "lucide-react";
import songsData from "@/data/songs.json";
import heroImage from "@/assets/bat-mitzvah-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent" />
        
        <div className="container max-w-4xl mx-auto px-4 py-12 relative">
          <Card className="overflow-hidden shadow-[var(--shadow-elegant)] backdrop-blur-sm bg-card/95">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={heroImage}
                alt="בת המצווה של יהב"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-8 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
                  שירון בת המצווה
                </h1>
                <p className="text-2xl md:text-3xl font-light drop-shadow-md">
                  של יהב
                </p>
              </div>
            </div>
          </Card>
        </div>
      </header>

      {/* Songs List */}
      <main className="container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
            רשימת השירים
          </h2>
          <p className="text-muted-foreground text-lg">
            לחצו על שיר כדי לראות את המילים המלאות
          </p>
        </div>

        <div className="grid gap-4">
          {songsData.songs.map((song, index) => (
            <Card
              key={song.id}
              onClick={() => navigate(`/song/${song.id}`)}
              className="p-6 cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:scale-[1.02] active:scale-[0.98] bg-card/80 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    {song.title}
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    לחץ לצפייה במילים
                  </p>
                </div>
                <div className="shrink-0 text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <p className="text-lg">✨ מזל טוב יהב! ✨</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
