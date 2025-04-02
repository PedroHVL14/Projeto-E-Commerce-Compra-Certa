
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CartItem from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const { items, subtotal, itemsCount, clearCart } = useCart();
  const shippingCost = items.length > 0 ? 15.99 : 0;
  const taxes = subtotal * 0.05; // 5% tax
  const total = subtotal + shippingCost + taxes;
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8 text-center">Seu Carrinho</h1>
          <div className="bg-white rounded-lg shadow-sm border p-10 text-center">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-medium mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-8">
              Você ainda não adicionou produtos ao seu carrinho.
            </p>
            <Link to="/produtos">
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
                Explorar produtos
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Seu Carrinho</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-medium text-lg">
                  {itemsCount} {itemsCount === 1 ? 'Item' : 'Itens'}
                </h2>
                <Button variant="ghost" size="sm" onClick={clearCart}>
                  Limpar carrinho
                </Button>
              </div>
              
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-96">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="font-medium text-lg mb-4">Resumo da Compra</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>
                    {subtotal.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span>
                    {shippingCost.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Impostos</span>
                  <span>
                    {taxes.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 my-4 pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>
                    {total.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 mt-4">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Finalizar Compra
                </Button>
              </Link>
              
              <Link to="/produtos">
                <Button variant="outline" className="w-full mt-3">
                  Continuar Comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
