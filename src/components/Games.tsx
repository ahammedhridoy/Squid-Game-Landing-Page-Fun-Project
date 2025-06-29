
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull, Clock, Users } from "lucide-react";

const Games = () => {
  const games = [
    {
      id: 1,
      title: "Red Light, Green Light",
      description: "Move when the doll isn't looking. Stop when it turns around. One mistake means elimination.",
      difficulty: "Easy",
      eliminated: 255,
      duration: "30 min",
      symbol: "○",
      color: "border-squid-teal"
    },
    {
      id: 2,
      title: "Sugar Honeycombs",
      description: "Extract the shape from the honeycomb candy without breaking it. Precision is key.",
      difficulty: "Medium",
      eliminated: 79,
      duration: "20 min",
      symbol: "△",
      color: "border-squid-pink"
    },
    {
      id: 3,
      title: "Tug of War",
      description: "Team strategy and strength determine survival. Losing team faces a deadly fall.",
      difficulty: "Hard",
      eliminated: 40,
      duration: "45 min",
      symbol: "□",
      color: "border-squid-yellow"
    },
    {
      id: 4,
      title: "Marbles",
      description: "Win your opponent's marbles using any game you choose. Friendship ends here.",
      difficulty: "Extreme",
      eliminated: 40,
      duration: "60 min",
      symbol: "○",
      color: "border-squid-red"
    },
    {
      id: 5,
      title: "Glass Bridge",
      description: "Choose between tempered and regular glass. One wrong step means death.",
      difficulty: "Extreme",
      eliminated: 13,
      duration: "40 min",
      symbol: "△",
      color: "border-squid-teal"
    },
    {
      id: 6,
      title: "Squid Game",
      description: "The final childhood game. Attack and defend to claim the ultimate prize.",
      difficulty: "Final",
      eliminated: 1,
      duration: "90 min",
      symbol: "□",
      color: "border-squid-pink"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500/20 text-green-400 border-green-500/50";
      case "Medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "Hard": return "bg-orange-500/20 text-orange-400 border-orange-500/50";
      case "Extreme": return "bg-red-500/20 text-red-400 border-red-500/50";
      case "Final": return "bg-purple-500/20 text-purple-400 border-purple-500/50";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/50";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            The Six Games
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Childhood games turned deadly. Each one designed to test different aspects of human nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card 
              key={game.id} 
              className={`game-card bg-black/40 backdrop-blur-sm border-2 ${game.color} hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
            >
              <CardContent className="p-6">
                {/* Game Symbol */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl font-bold text-white group-hover:animate-pulse">
                    {game.symbol}
                  </div>
                  <Badge className={`${getDifficultyColor(game.difficulty)} border font-orbitron`}>
                    {game.difficulty}
                  </Badge>
                </div>

                {/* Game Title */}
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-squid-pink transition-colors">
                  Game {game.id}: {game.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {game.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Skull className="text-squid-red mb-1" size={16} />
                    <span className="text-squid-red font-bold text-sm">{game.eliminated}</span>
                    <span className="text-gray-500 text-xs">Eliminated</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Clock className="text-squid-yellow mb-1" size={16} />
                    <span className="text-squid-yellow font-bold text-sm">{game.duration}</span>
                    <span className="text-gray-500 text-xs">Duration</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Users className="text-squid-teal mb-1" size={16} />
                    <span className="text-squid-teal font-bold text-sm">{456 - games.slice(0, game.id - 1).reduce((sum, g) => sum + g.eliminated, 0)}</span>
                    <span className="text-gray-500 text-xs">Started</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-squid-pink/20 to-squid-teal/20 rounded-lg p-8 border border-gray-800">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
              Think You Can Survive?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Only one player survived all six games. Do you have what it takes to be the next winner, 
              or will you join the 455 who didn't make it out alive?
            </p>
            <button className="font-orbitron bg-squid-pink hover:bg-squid-red text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 hover:shadow-lg hover:shadow-squid-pink/50">
              Accept the Challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
