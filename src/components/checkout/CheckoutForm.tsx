
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

type FormData = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isProcessing, setIsProcessing] = useState(false);
  const { subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const shippingCost = 15.99;
  const taxes = subtotal * 0.05; // 5% tax
  const total = subtotal + shippingCost + taxes;
  
  const onSubmit = async (data: FormData) => {
    try {
      setIsProcessing(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Pedido realizado com sucesso!');
      clearCart();
      navigate('/checkout/confirmation', { 
        state: { 
          orderNumber: `ORD-${Date.now().toString().slice(-6)}`,
          total 
        } 
      });
    } catch (error) {
      toast.error('Erro ao processar o pagamento. Tente novamente.');
      console.error('Checkout error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Shipping Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-medium mb-4">Informações de Entrega</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input 
              id="fullName" 
              placeholder="Seu nome completo" 
              {...register('fullName', { required: true })} 
            />
            {errors.fullName && <p className="text-sm text-red-500">Nome completo é obrigatório</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="seu@email.com" 
              {...register('email', { 
                required: true, 
                pattern: /^\S+@\S+$/i 
              })} 
            />
            {errors.email && <p className="text-sm text-red-500">E-mail válido é obrigatório</p>}
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Endereço</Label>
            <Input 
              id="address" 
              placeholder="Rua, número, complemento" 
              {...register('address', { required: true })} 
            />
            {errors.address && <p className="text-sm text-red-500">Endereço é obrigatório</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">Cidade</Label>
            <Input 
              id="city" 
              placeholder="Sua cidade" 
              {...register('city', { required: true })} 
            />
            {errors.city && <p className="text-sm text-red-500">Cidade é obrigatória</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">Estado</Label>
              <Input 
                id="state" 
                placeholder="Estado" 
                {...register('state', { required: true })} 
              />
              {errors.state && <p className="text-sm text-red-500">Estado é obrigatório</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="zipcode">CEP</Label>
              <Input 
                id="zipcode" 
                placeholder="00000-000" 
                {...register('zipcode', { 
                  required: true, 
                  pattern: /^\d{5}-?\d{3}$/ 
                })} 
              />
              {errors.zipcode && <p className="text-sm text-red-500">CEP válido é obrigatório</p>}
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-medium mb-4">Informações de Pagamento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="cardNumber">Número do Cartão</Label>
            <Input 
              id="cardNumber" 
              placeholder="0000 0000 0000 0000" 
              {...register('cardNumber', { 
                required: true,
                pattern: /^\d{4}(\s?\d{4}){3}$|^\d{16}$/
              })} 
            />
            {errors.cardNumber && <p className="text-sm text-red-500">Número de cartão válido é obrigatório</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Data de Validade</Label>
            <Input 
              id="expiryDate" 
              placeholder="MM/AA" 
              {...register('expiryDate', { 
                required: true,
                pattern: /^(0[1-9]|1[0-2])\/\d{2}$/
              })} 
            />
            {errors.expiryDate && <p className="text-sm text-red-500">Data válida é obrigatória (MM/AA)</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input 
              id="cvv" 
              placeholder="123" 
              {...register('cvv', { 
                required: true,
                pattern: /^\d{3,4}$/
              })} 
            />
            {errors.cvv && <p className="text-sm text-red-500">CVV válido é obrigatório</p>}
          </div>
        </div>
      </div>
      
      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-medium mb-4">Resumo do Pedido</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span>
              {subtotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Frete:</span>
            <span>
              {shippingCost.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Impostos:</span>
            <span>
              {taxes.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="border-t my-2 pt-2 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-brand-teal hover:bg-brand-teal/90 py-6"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processando...' : 'Finalizar Compra'}
      </Button>
    </form>
  );
};

export default CheckoutForm;
