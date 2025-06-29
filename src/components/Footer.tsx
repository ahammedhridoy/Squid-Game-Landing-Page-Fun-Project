
import { Heart, Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-sm border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-creepster text-3xl text-squid-pink mb-4">
              SQUID GAME
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A deadly competition where childhood games become a matter of life and death. 
              456 players, one winner, ₩45.6 billion at stake.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-squid-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-squid-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-squid-yellow transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Games */}
          <div>
            <h4 className="font-orbitron text-white font-semibold mb-4">Games</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-squid-pink transition-colors">Red Light, Green Light</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-pink transition-colors">Sugar Honeycombs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-pink transition-colors">Tug of War</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-pink transition-colors">Marbles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-pink transition-colors">Glass Bridge</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-pink transition-colors">Squid Game</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-orbitron text-white font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-squid-teal transition-colors">Rules & Regulations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-teal transition-colors">Prize Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-teal transition-colors">Player Statistics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-teal transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-squid-teal transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-squid-red/10 border border-squid-red/30 rounded-lg p-4 mb-8">
          <p className="text-squid-red text-sm font-orbitron text-center">
            ⚠️ WARNING: This is a fictional recreation. Actual participation in deadly games is not recommended or legal.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Squid Game Experience. All rights reserved.
          </p>
          
          <div className="flex items-center text-gray-400 text-sm">
            Made with <Heart className="text-squid-red mx-1" size={16} /> by the Game Masters
          </div>
        </div>

        {/* Easter Egg */}
        <div className="text-center mt-8">
          <div className="inline-flex space-x-4 text-2xl opacity-30">
            <span className="hover:text-squid-pink transition-colors cursor-pointer">○</span>
            <span className="hover:text-squid-teal transition-colors cursor-pointer">△</span>
            <span className="hover:text-squid-yellow transition-colors cursor-pointer">□</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
