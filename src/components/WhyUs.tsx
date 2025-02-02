import { CheckCircle } from "lucide-react";

const reasons = [
  "20+ years of industry experience",
  "Certified IT professionals",
  "24/7 support and maintenance",
  "Customized solutions for your business",
  "Proven track record of success",
  "Competitive pricing",
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-ogify-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose OGIFY IT?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-ogify-accent flex-shrink-0" />
                  <span className="text-gray-300">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl opacity-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;