
import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../products/ProductGrid';
import { getFeaturedProducts } from '@/data/products';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue">Produtos em Destaque</h2>
          <Link to="/produtos">
            <Button variant="outline">Ver Todos</Button>
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
