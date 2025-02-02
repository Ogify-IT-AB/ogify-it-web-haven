import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyUs />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;