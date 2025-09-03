import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Index from "./pages/Index";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";
import Academy from "./pages/Academy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const location = useLocation();
  // Scroll to element when hash changes (e.g., /#contact)
  
  // Delay to ensure page components have mounted
  setTimeout(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, 0);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <WhatsAppBubble />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/division" element={<Index />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
