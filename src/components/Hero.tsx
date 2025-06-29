
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Clock } from "lucide-react";

const Hero = () => {
  const [countdown, setCountdown] = useState(456);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 456);
    }, 2000);

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-squid-pink/20 aspect-square flex items-center justify-center text-xs"
            >
              {Math.random() > 0.7 && (
                <div className="w-2 h-2 bg-squid-pink rounded-full animate-pulse-slow" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-30">○</div>
      <div className="absolute top-40 right-20 text-4xl animate-float opacity-20" style={{ animationDelay: '2s' }}>△</div>
      <div className="absolute bottom-32 left-20 text-5xl animate-float opacity-25" style={{ animationDelay: '4s' }}>□</div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <div className={`mb-8 ${isGlitching ? 'animate-glitch' : ''}`}>
          <h1 className="font-creepster text-6xl md:text-8xl lg:text-9xl text-squid-pink text-glow mb-4">
            SQUID
          </h1>
          <h1 className="font-creepster text-6xl md:text-8xl lg:text-9xl text-squid-teal text-glow">
            GAME
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-orbitron text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Enter the deadly competition where 456 players fight for survival and 
          <span className="text-squid-yellow font-bold"> ₩45.6 billion</span>
        </p>

        {/* Countdown Display */}
        <div className="bg-black/50 backdrop-blur-sm border-2 border-squid-pink rounded-lg p-6 mb-8 inline-block">
          <div className="flex items-center justify-center gap-4 mb-2">
            <Clock className="text-squid-pink" size={24} />
            <span className="font-orbitron text-sm text-gray-400 uppercase tracking-wider">Players Remaining</span>
          </div>
          <div className="font-orbitron text-4xl md:text-5xl text-squid-pink font-bold">
            {countdown.toString().padStart(3, '0')}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="font-orbitron text-lg px-8 py-4 bg-squid-pink hover:bg-squid-red text-white border-0 shadow-lg hover:shadow-squid-pink/50 transition-all duration-300"
          >
            <Play className="mr-2" size={20} />
            Enter the Game
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="font-orbitron text-lg px-8 py-4 border-2 border-squid-teal text-squid-teal hover:bg-squid-teal hover:text-black transition-all duration-300"
          >
            <Users className="mr-2" size={20} />
            View Rules
          </Button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-squid-pink/30">
            <Trophy className="mx-auto mb-2 text-squid-yellow" size={32} />
            <div className="font-orbitron text-2xl font-bold text-squid-yellow">₩45.6B</div>
            <div className="text-sm text-gray-400">Prize Money</div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-squid-teal/30">
            <Users className="mx-auto mb-2 text-squid-teal" size={32} />
            <div className="font-orbitron text-2xl font-bold text-squid-teal">456</div>
            <div className="text-sm text-gray-400">Total Players</div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-squid-red/30">
            <Clock className="mx-auto mb-2 text-squid-red" size={32} />
            <div className="font-orbitron text-2xl font-bold text-squid-red">6</div>
            <div className="text-sm text-gray-400">Deadly Games</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
