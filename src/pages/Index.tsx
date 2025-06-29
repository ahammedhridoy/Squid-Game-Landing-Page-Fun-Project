
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Games from "../components/Games";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-squid-dark text-white overflow-x-hidden">
      <Hero />
      <Statistics />
      <Games />
      <Footer />
    </div>
  );
};

export default Index;
