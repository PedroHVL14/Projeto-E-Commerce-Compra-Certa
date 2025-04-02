
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import { toast } from 'sonner';
import { ShoppingCart, ChevronRight } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  
  const product = getProductById(id || "");
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
          <p className="mb-8">O produto que você está procurando não existe ou foi removido.</p>
          <Link to="/produtos">
            <Button>Ver todos os produtos</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-brand-teal">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <Link to="/produtos" className="text-gray-500 hover:text-brand-teal">Produtos</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-900">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-white border p-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-contain max-h-[500px]"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/500x500?text=Imagem+Indisponível";
              }}
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="flex items-center mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
                    i < (product.rating || 0) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-600 ml-2">{product.rating} de 5</span>
            </div>
            
            <div className="mt-6">
              <p className="text-3xl font-bold text-brand-blue">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Em até 12x de {(product.price / 12).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })} sem juros
              </p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Descrição</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Categoria</h3>
              <Link to={`/produtos?categoria=${encodeURIComponent(product.category)}`}>
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  {product.category}
                </span>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Adicionar ao carrinho
              </Button>
              
              <Link to="/carrinho">
                <Button size="lg" variant="outline" className="px-8">
                  Ir para o carrinho
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
