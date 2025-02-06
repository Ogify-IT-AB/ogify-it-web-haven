import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JobSubscription from "@/components/JobSubscription";
import Services from "@/components/Services";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyUs />
      <Team />
      <JobSubscription />
      <ContactForm />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;