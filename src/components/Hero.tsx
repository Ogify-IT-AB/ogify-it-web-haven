import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-ogify-primary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')",
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with Expert IT Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We help businesses navigate digital transformation with strategic IT solutions
            and expert consulting services.
          </p>
          <Button
            className="bg-ogify-accent hover:bg-blue-600 text-white px-8 py-6 text-lg"
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