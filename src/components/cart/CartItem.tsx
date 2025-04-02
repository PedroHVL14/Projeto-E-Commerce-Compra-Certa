
import React from 'react';
import { Link } from 'react-router-dom';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  return (
    <div className="flex items-center py-4 border-b">
      <Link to={`/produto/${product.id}`} className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 rounded object-cover"
        />
      </Link>
      
      <div className="ml-4 flex-grow">
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleDecrement}
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
            <span className="mx-3 w-6 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleIncrement}
            >
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center">
            <span className="font-bold text-lg">
              {(product.price * quantity).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 ml-2 text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={() => removeItem(product.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
