import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key to use the chatbot.",
        variant: "destructive",
      });
      return;
    }

    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant that provides information about Ogify IT's services and pricing. Keep responses concise and professional. For specific pricing, suggest contacting the sales team for a customized quote.",
            },
            ...messages,
            { role: "user", content: userMessage },
          ],
        }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.choices[0].message.content },
      ]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please check your API key and try again.",
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

          {!apiKey && (
            <div className="p-4 border-b">
              <Input
                type="password"
                placeholder="Enter your OpenAI API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full"
              />
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-ogify-accent text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  Typing...
                </div>
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