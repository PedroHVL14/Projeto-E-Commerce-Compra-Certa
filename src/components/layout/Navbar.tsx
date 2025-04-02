
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CartSidebar from '@/components/cart/CartSidebar';

const Navbar = () => {
  const { itemsCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?busca=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-blue">Compra Certa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/produtos" className="text-gray-700 hover:text-brand-teal transition-colors">
              Produtos
            </Link>
            <Link to="/categorias" className="text-gray-700 hover:text-brand-teal transition-colors">
              Categorias
            </Link>
            <Link to="/ofertas" className="text-gray-700 hover:text-brand-teal transition-colors">
              Ofertas
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-brand-teal transition-colors">
              FAQ
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-brand-teal transition-colors">
              Contato
            </Link>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center max-w-md flex-1 mx-6">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full px-4 py-2 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </form>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="relative p-2">
                  <ShoppingCart className="h-6 w-6" />
                  {itemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemsCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 p-0">
                <CartSidebar />
              </SheetContent>
            </Sheet>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full px-4 py-2 rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </form>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/produtos" 
                className="text-gray-700 hover:text-brand-teal py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link 
                to="/categorias" 
                className="text-gray-700 hover:text-brand-teal py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
              <Link 
                to="/ofertas" 
                className="text-gray-700 hover:text-brand-teal py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ofertas
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-700 hover:text-brand-teal py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-700 hover:text-brand-teal py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
