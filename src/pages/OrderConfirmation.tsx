
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface LocationState {
  orderNumber: string;
  total: number;
}

const OrderConfirmation = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  
  if (!state?.orderNumber) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Página não disponível</h1>
          <p className="mb-8">Não foi possível acessar as informações do pedido.</p>
          <Link to="/">
            <Button className="bg-brand-teal hover:bg-brand-teal/90">
              Voltar para a Home
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-2">Pedido Confirmado!</h1>
          <p className="text-gray-600 mb-6">
            Seu pedido foi processado com sucesso. Obrigado por comprar conosco!
          </p>
          
          <div className="border-t border-b border-gray-200 py-6 my-6">
            <div className="mb-4">
              <span className="text-gray-600">Número do Pedido:</span>
              <span className="ml-2 font-bold">{state.orderNumber}</span>
            </div>
            
            <div>
              <span className="text-gray-600">Valor Total:</span>
              <span className="ml-2 font-bold">
                {state.total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Um email de confirmação foi enviado para o seu endereço de email com os detalhes do pedido.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-brand-teal hover:bg-brand-teal/90 min-w-[200px]">
                Voltar para a Home
              </Button>
            </Link>
            
            <Link to="/produtos">
              <Button variant="outline" className="min-w-[200px]">
                Continuar Comprando
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
