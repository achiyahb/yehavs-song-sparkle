import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import songsData from "@/data/songs.json";

const Song = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const songId = parseInt(id || "1");
  
  const song = songsData.songs.find(s => s.id === songId);
  const nextSong = songsData.songs.find(s => s.id === songId + 1);
  const prevSong = songsData.songs.find(s => s.id === songId - 1);

  if (!song) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 pb-20">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowRight className="ml-2 h-5 w-5" />
          חזרה לרשימה
        </Button>

        {/* Song Card */}
        <Card className="p-8 shadow-[var(--shadow-card)] backdrop-blur-sm bg-card/95">
          <div className="mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-sm font-medium text-primary mb-4">
              שיר מספר {song.id}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent mb-8">
              {song.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-xl md:text-2xl leading-loose whitespace-pre-wrap text-foreground">
              {song.lyrics}
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8 gap-4">
          <Button
            onClick={() => prevSong && navigate(`/song/${prevSong.id}`)}
            disabled={!prevSong}
            variant="outline"
            className="flex-1 h-14 text-lg"
          >
            <ChevronRight className="ml-2 h-5 w-5" />
            {prevSong ? prevSong.title : "אין שיר קודם"}
          </Button>
          
          <Button
            onClick={() => nextSong && navigate(`/song/${nextSong.id}`)}
            disabled={!nextSong}
            className="flex-1 h-14 text-lg bg-gradient-to-l from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            {nextSong ? nextSong.title : "אין שיר הבא"}
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Song;
