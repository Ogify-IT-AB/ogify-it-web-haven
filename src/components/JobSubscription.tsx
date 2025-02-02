import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const JobSubscription = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Positions</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest job opportunities by subscribing to our careers sheet.
          </p>
          <Button
            className="inline-flex items-center gap-2"
            onClick={() => window.open('https://docs.google.com/spreadsheets/create', '_blank')}
          >
            Subscribe to Job Updates
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobSubscription;