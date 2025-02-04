import { Card, CardContent } from "@/components/ui/card";
import Logo from "./Logo";

const team = [
  {
    name: "Adam Vaskovic",
    role: "CEO & Founder",
    image: "/lovable-uploads/5cd86ddf-cabd-45ba-a395-3516c084154d.png",
  }
];

const Team = () => {
  return (
    <section className="py-32 bg-ogify-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-ogify-secondary to-ogify-tertiary text-transparent bg-clip-text">
              Our Leadership Team
            </span>
          </h2>
        </div>
        <div className="max-w-xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-ogify-primary border-gray-800 hover:border-ogify-accent transition-all duration-300 group"
            >
              <div className="h-[300px] relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ogify-primary to-transparent opacity-60"></div>
              </div>
              <CardContent className="text-center py-8 relative">
                <h3 className="text-2xl font-semibold mb-2 text-ogify-quaternary">{member.name}</h3>
                <p className="text-ogify-accent">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;