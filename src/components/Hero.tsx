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
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-ogify-accent via-ogify-secondary to-ogify-tertiary text-transparent bg-clip-text">
              Expert IT Consulting
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-ogify-quaternary mb-12 leading-relaxed">
            We help businesses navigate digital transformation with strategic IT solutions
            and expert consulting services.
          </p>
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
  );
};

export default Hero;