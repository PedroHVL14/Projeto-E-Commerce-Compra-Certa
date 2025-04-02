
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <Link to={`/produto/${product.id}`} className="block">
      <div className="product-card bg-white rounded-md shadow-sm overflow-hidden border border-gray-100">
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/300x200?text=Imagem+Indisponível";
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
            <span className="text-gray-500 text-sm ml-1">
              {product.rating || "N/A"}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xl font-bold text-brand-blue">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="bg-brand-teal hover:bg-brand-teal/90 text-white"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span className="sr-only sm:not-sr-only sm:inline-block">Adicionar</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
