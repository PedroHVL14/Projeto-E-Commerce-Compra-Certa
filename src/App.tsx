
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import CategoriesPage from "./pages/CategoriesPage";
import OffersPage from "./pages/OffersPage";
import NotFound from "./pages/NotFound";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/produto/:id" element={<ProductDetailPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/confirmation" element={<OrderConfirmation />} />
            <Route path="/categorias" element={<CategoriesPage />} />
            <Route path="/ofertas" element={<OffersPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/politica-de-devolucao" element={<ReturnPolicyPage />} />
            <Route path="/termos-de-servico" element={<TermsOfServicePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
