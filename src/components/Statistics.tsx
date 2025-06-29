
import { TrendingUp, Users, Skull, Crown } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: "456",
      label: "Players Entered",
      color: "text-squid-teal",
      bgColor: "bg-squid-teal/10"
    },
    {
      icon: Skull,
      value: "455",
      label: "Eliminated",
      color: "text-squid-red",
      bgColor: "bg-squid-red/10"
    },
    {
      icon: Crown,
      value: "1",
      label: "Winner",
      color: "text-squid-yellow",
      bgColor: "bg-squid-yellow/10"
    },
    {
      icon: TrendingUp,
      value: "99.8%",
      label: "Elimination Rate",
      color: "text-squid-pink",
      bgColor: "bg-squid-pink/10"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Game Statistics
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The brutal reality of the Squid Game competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm p-8 text-center hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`${stat.color} w-8 h-8`} />
              </div>
              
              <div className={`font-orbitron text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Warning Message */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-squid-red/10 border border-squid-red/30 rounded-lg px-8 py-4">
            <p className="text-squid-red font-orbitron font-semibold">
              ⚠️ WARNING: Participation may result in permanent elimination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
