import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import { useClarity } from "@/hooks/useClarity";
import Index from "./pages/Index";
import WritingsPage from "./pages/Writings";
import WorkPage from "./pages/Work";
import SitePage from "./pages/Site";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Microsoft Clarity tracking (BrowserRouter dışında kullanılabilir)
  useClarity({
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
            <AnalyticsWrapper>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/writings" element={<WritingsPage />} />
                <Route path="/site" element={<SitePage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnalyticsWrapper>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
