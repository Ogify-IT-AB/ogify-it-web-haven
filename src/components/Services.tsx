import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, LineChart, Shield, Smartphone } from "lucide-react";

const services = [
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions",
    icon: LineChart,
  },
  {
    title: "Cybersecurity",
    description: "Protect your assets with enterprise-grade security measures",
    icon: Shield,
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions for your unique business needs",
    icon: Code2,
  },
  {
    title: "Mobile Solutions",
    description: "Engage your customers with powerful mobile applications",
    icon: Smartphone,
  },
];

const Services = () => {
  return (
    <section className="py-32 bg-ogify-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-ogify-primary border-gray-700 hover:border-ogify-accent group"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-ogify-accent/10 flex items-center justify-center mb-6 group-hover:bg-ogify-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-ogify-accent" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;