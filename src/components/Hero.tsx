import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-ogify-primary overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 scale-105 animate-[pulse_15s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')",
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <img 
              src="/lovable-uploads/1074d673-bf80-498e-8c38-12af51351c37.png" 
              alt="OGIFY Logo" 
              className="h-16 md:h-20 transition-all duration-500 hover:scale-105 drop-shadow-[0_0_15px_rgba(83,189,164,0.3)]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ogify-accent/20 to-ogify-secondary/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-center">
            <span className="text-white">Transform Your Business with</span>{" "}
            <span className="bg-gradient-to-r from-ogify-accent via-ogify-secondary to-ogify-tertiary text-transparent bg-clip-text">
              Expert IT Consulting
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-ogify-quaternary mb-12 leading-relaxed text-center">
            We help businesses navigate digital transformation with strategic IT solutions
            and expert consulting services.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-ogify-accent hover:bg-ogify-secondary text-white px-12 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ogify-accent/20"
              onClick={() => {
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;