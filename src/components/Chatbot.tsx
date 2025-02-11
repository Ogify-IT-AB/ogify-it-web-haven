import { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from "react-markdown";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const { toast } = useToast();

  // Your Knowledge Base for additional answers
  const knowledgeBase = [
    { question: "What services does Ogify provide?", answer: "Ogify provides IT consulting, software development, and cloud services." },
    { question: "How can I contact Ogify?", answer: "You can contact Ogify via email at info@ogify.se" },
    { question: "Who is the owner of Ogify?", answer: "Adam Vaskovic" },
    // Add more FAQ entries here
  ];

  useEffect(() => {
    if (isOpen) {
      // Add the welcome message when the chatbot is opened
      setMessages([{ role: "assistant", content: "Welcome to Ogify Chat! How can I assist you today?" }]);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // First, fetch pricing information from Supabase
      const { data: pricingData, error: pricingError } = await supabase
        .from('pricing_info')
        .select('*');

      if (pricingError) {
        throw new Error('Failed to fetch pricing information');
      }

      // Create a context string from the pricing data
      const pricingContext = pricingData
        .map(item => `${item.service_name}: ${item.description}. Price range: ${item.price_range}`)
        .join('\n');

      // Create the knowledge base context
      const knowledgeBaseContext = knowledgeBase
        .map(item => `Q: ${item.question}\nA: ${item.answer}`)
        .join('\n\n');

      // Get OpenAI API key from Supabase
      const { data: secretData, error: secretError } = await supabase
        .functions.invoke('get-secrets', {
          body: {
            secrets: ['OPENAI_API_KEY']
          }
        });

      if (secretError) {
        throw new Error('Failed to get OpenAI API key');
      }

      const apiKey = secretData.OPENAI_API_KEY;

      // Make request to OpenAI
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant for Ogify IT. You provide concise, clear, and professional answers about Ogify's services and pricing, 
              as well as frequently asked questions (FAQs) from our knowledge base. Keep your responses short and to the point. If the user asks about 
              anything unrelated to Ogify, politely inform them that you can only answer questions related to Ogify's services and knowledge base. 
              Here's our current pricing information:\n\n${pricingContext}\n\nOur knowledge base:\n\n${knowledgeBaseContext}`,
            },
            ...messages,
            { role: "user", content: userMessage },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from OpenAI');
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.choices[0].message.content },
      ]);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 h-[500px] flex flex-col">
          <div className="p-4 border-b flex justify-between items-center bg-ogify-accent text-white rounded-t-lg">
            <h3 className="font-semibold">Ogify Chat Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-ogify-accent/90 text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${msg.role === "user" ? "bg-ogify-accent text-white" : "bg-gray-100 text-gray-800"}`}
                >
                  {msg.role === "assistant" ? (
                    <ReactMarkdown className="prose prose-sm max-w-none dark:prose-invert prose-p:leading-relaxed prose-pre:p-0">
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">Typing...</div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about our services..."
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-ogify-accent hover:bg-ogify-accent/90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
