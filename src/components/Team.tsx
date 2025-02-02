import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    name: "Michael Chen",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-ogify-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-64 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="text-center py-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;