import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useClarity } from "@/hooks/useClarity";
import Index from "./pages/Index";
import WritingsPage from "./pages/Writings";
import WorkPage from "./pages/Work";
import SitePage from "./pages/Site";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Google Analytics tracking - kendi tracking ID'nizi buraya ekleyin
  const { trackEvent, trackCustomEvent } = useAnalytics({
    trackingId: import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX',
    enabled: import.meta.env.PROD, // Sadece production'da çalışsın
  });

  // Microsoft Clarity tracking (İsteğe bağlı)
  const clarity = useClarity({
    projectId: import.meta.env.VITE_CLARITY_PROJECT_ID || 'CLARITY_PROJECT_ID',
    enabled: import.meta.env.PROD, // Sadece production'da çalışsın
  });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/writings" element={<WritingsPage />} />
              <Route path="/site" element={<SitePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
