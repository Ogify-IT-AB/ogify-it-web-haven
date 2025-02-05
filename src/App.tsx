import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider> 
      <Helmet>
        {/* ✅ Core SEO tags */}
        <title>Ogify IT - Your Trusted Digital Partner</title>
        <meta name="description" content="Ogify IT provides cutting-edge digital solutions to enhance your business productivity and efficiency." />
        <meta name="keywords" content="IT Solutions, Software Development, Digital Transformation, AI, Web Development" />
        <meta name="author" content="Ogify IT" />
        <meta name="robots" content="index, follow" />

        {/* ✅ OpenGraph / Social Media preview */}
        <meta property="og:title" content="Ogify IT - Your Trusted Digital Partner" />
        <meta property="og:description" content="Transform your business with innovative IT solutions from Ogify IT." />
        <meta property="og:image" content="https://ogify.se/assets/logo.png" />
        <meta property="og:url" content="https://ogify.se" />
        <meta property="og:type" content="website" />

        {/* ✅ Canonical URL (Prevents Duplicate Content Issues) */}
        <link rel="canonical" href="https://ogify.se" />
      </Helmet>

      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
