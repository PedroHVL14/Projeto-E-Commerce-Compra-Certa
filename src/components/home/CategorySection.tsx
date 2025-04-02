
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { 
  Smartphone, 
  Monitor, 
  Headphones, 
  Camera, 
  Watch, 
  Gamepad, 
  Speaker, 
  Printer 
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Eletrônicos':
      return <Smartphone className="h-8 w-8 mb-4" />;
    case 'Computadores':
      return <Monitor className="h-8 w-8 mb-4" />;
    case 'Acessórios':
      return <Headphones className="h-8 w-8 mb-4" />;
    case 'Fotografia':
      return <Camera className="h-8 w-8 mb-4" />;
    case 'Wearables':
      return <Watch className="h-8 w-8 mb-4" />;
    case 'Games':
      return <Gamepad className="h-8 w-8 mb-4" />;
    case 'Áudio':
      return <Speaker className="h-8 w-8 mb-4" />;
    case 'Escritório':
      return <Printer className="h-8 w-8 mb-4" />;
    default:
      return <Smartphone className="h-8 w-8 mb-4" />;
  }
};

const CategorySection = () => {
  // Remove the "Todos" category
  const displayCategories = categories.filter(cat => cat !== "Todos");
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-blue mb-12">
          Navegue por Categorias
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayCategories.map((category) => (
            <Link 
              key={category}
              to={`/produtos?categoria=${encodeURIComponent(category)}`}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              {getCategoryIcon(category)}
              <h3 className="text-lg font-medium">{category}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
