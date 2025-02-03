import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show loading state while sending the form
    setIsSubmitting(true);

    try {
      // Send form data via EmailJS
      const response = await emailjs.send(
        "service_8a7zko6", // EmailJS service ID
        "template_h0mfgqq", // EmailJS template ID
        formData, // Form data
        "SPc9YU9ZeXW-Vq8wR" // EmailJS user ID
      );

      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error sending message",
          description: "There was an issue sending your message. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ogify-primary">Contact Us</h2>
          <p className="text-gray-600 mb-12 text-lg">
            Ready to transform your business? Get in touch with our experts today.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-gray-50 border-gray-200 focus:border-ogify-accent transition-colors"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-gray-50 border-gray-200 focus:border-ogify-accent transition-colors"
              />
            </div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="min-h-[200px] bg-gray-50 border-gray-200 focus:border-ogify-accent transition-colors"
            />
            <Button
              type="submit"
              className="w-full md:w-auto px-12 py-6 bg-ogify-accent hover:bg-blue-600 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
