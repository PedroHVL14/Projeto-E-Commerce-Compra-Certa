
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';

const CartSidebar = () => {
  const { items, subtotal, itemsCount, clearCart } = useCart();

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Seu Carrinho</h2>
          <span className="text-sm text-gray-500">{itemsCount} {itemsCount === 1 ? 'item' : 'itens'}</span>
        </div>
        {itemsCount > 0 && (
          <Button variant="outline" size="sm" onClick={clearCart} className="text-red-500 hover:text-red-700 hover:bg-red-50">
            Limpar carrinho
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-auto">
        {items.length === 0 ? (
          <div className="text-center py-12 px-6">
            <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-medium mb-2">Seu carrinho está vazio</p>
            <p className="text-gray-500 mb-6">
              Você ainda não adicionou produtos ao seu carrinho.
            </p>
            <Link to="/produtos">
              <Button className="bg-brand-teal hover:bg-brand-teal/90">
                Explorar produtos
              </Button>
            </Link>
          </div>
        ) : (
          <div className="py-4 px-6 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-start gap-3">
                <Link to={`/produto/${item.product.id}`} className="shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/produto/${item.product.id}`} className="block font-medium text-sm line-clamp-2 hover:text-brand-teal">
                    {item.product.name}
                  </Link>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm">{item.quantity} x</span>
                    <span className="font-bold">
                      {item.product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="border-t p-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">
              {subtotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span className="text-gray-600">Frete</span>
            <span className="font-medium">A calcular</span>
          </div>
          <Separator className="my-4" />
          <Link to="/carrinho">
            <Button className="w-full mb-3 bg-brand-teal hover:bg-brand-teal/90">
              Ver carrinho
            </Button>
          </Link>
          <Link to="/checkout">
            <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Finalizar compra
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
