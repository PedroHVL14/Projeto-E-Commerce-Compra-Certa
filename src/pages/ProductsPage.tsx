
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getProductsByCategory, searchProducts, categories } from '@/data/products';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedProducts, setDisplayedProducts] = useState(getProductsByCategory("Todos"));
  
  // Get search parameters from URL
  useEffect(() => {
    const categoryParam = searchParams.get("categoria");
    const searchParam = searchParams.get("busca");
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [searchParams]);
  
  // Update displayed products whenever search term or category changes
  useEffect(() => {
    if (searchTerm) {
      setDisplayedProducts(searchProducts(searchTerm));
    } else {
      setDisplayedProducts(getProductsByCategory(selectedCategory));
    }
  }, [selectedCategory, searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // No need to update state again, the effect will handle that
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Reset search when changing category
  };

  return (
    <Layout>
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Produtos</h1>
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Filters sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-medium text-lg mb-4">Categorias</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === selectedCategory ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        category === selectedCategory ? "bg-brand-teal hover:bg-brand-teal/90" : ""
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              {/* Search and sort */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <form onSubmit={handleSearch} className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="flex-1"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button type="submit" className="bg-brand-teal hover:bg-brand-teal/90">
                    Buscar
                  </Button>
                </form>
              </div>
              
              {/* Results */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-medium text-lg">
                    {searchTerm 
                      ? `Resultados para "${searchTerm}"` 
                      : selectedCategory === "Todos" 
                        ? "Todos os Produtos" 
                        : `Categoria: ${selectedCategory}`
                    }
                  </h2>
                  <span className="text-gray-500">{displayedProducts.length} produtos</span>
                </div>
                
                <ProductGrid products={displayedProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
