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
    <section className="py-20 bg-ogify-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-ogify-accent mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;