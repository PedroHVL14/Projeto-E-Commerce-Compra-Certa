
import React from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { Tag, Clock } from 'lucide-react';

// For demo purposes, select a few products as "on sale"
const discountedProducts = products.slice(0, 6).map(product => ({
  ...product,
  originalPrice: product.price * 1.25, // 25% higher "original" price
  discountPercentage: 20 // 20% off
}));

const OffersPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-brand-blue to-brand-teal text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ofertas Especiais</h1>
          <p className="max-w-2xl mx-auto">
            Não perca nossas ofertas por tempo limitado! Descontos incríveis em produtos selecionados.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Countdown Banner */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-brand-teal">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Clock className="h-6 w-6 text-brand-teal mr-2" />
              <h2 className="text-xl font-bold">Ofertas por tempo limitado!</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="bg-gray-100 rounded-md px-4 py-2">
                  <span className="text-xl font-bold">2</span>
                </div>
                <span className="text-sm">Dias</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-md px-4 py-2">
                  <span className="text-xl font-bold">12</span>
                </div>
                <span className="text-sm">Horas</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-md px-4 py-2">
                  <span className="text-xl font-bold">45</span>
                </div>
                <span className="text-sm">Min</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-md px-4 py-2">
                  <span className="text-xl font-bold">30</span>
                </div>
                <span className="text-sm">Seg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products on sale */}
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Tag className="h-6 w-6 mr-2 text-brand-teal" />
          Produtos em Promoção
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {discountedProducts.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-md shadow-sm overflow-hidden border border-gray-100 relative">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-red-500 hover:bg-red-600">
                  -{product.discountPercentage}%
                </Badge>
              </div>
              <div className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x200?text=Produto";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                <div className="mt-1 flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < (product.rating || 0) ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-3 flex flex-col">
                  <div className="flex items-center">
                    <span className="text-gray-500 line-through">
                      {product.originalPrice.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                    <span className="ml-2 text-red-500 text-sm font-semibold">
                      Economize {product.discountPercentage}%
                    </span>
                  </div>
                  <p className="text-xl font-bold text-brand-blue">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ou 12x de {(product.price / 12).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
                <a 
                  href={`/produto/${product.id}`}
                  className="mt-3 block w-full bg-brand-teal text-white text-center py-2 rounded-md hover:bg-brand-teal/90 transition-colors"
                >
                  Ver Oferta
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OffersPage;
