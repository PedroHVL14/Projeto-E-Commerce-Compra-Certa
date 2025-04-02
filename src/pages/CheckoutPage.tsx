
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import CheckoutForm from '@/components/checkout/CheckoutForm';

const CheckoutPage = () => {
  const { items } = useCart();
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
          <p className="mb-8">Você precisa adicionar produtos ao carrinho antes de realizar o checkout.</p>
          <Link to="/produtos">
            <button className="bg-brand-teal text-white px-6 py-2 rounded hover:bg-brand-teal/90">
              Explorar produtos
            </button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
        
        <CheckoutForm />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
