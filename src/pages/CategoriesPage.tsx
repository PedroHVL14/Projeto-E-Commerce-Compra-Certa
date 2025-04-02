
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
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

// Reusing the icon function from CategorySection
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Eletrônicos':
      return <Smartphone className="h-12 w-12 mb-4" />;
    case 'Computadores':
      return <Monitor className="h-12 w-12 mb-4" />;
    case 'Acessórios':
      return <Headphones className="h-12 w-12 mb-4" />;
    case 'Fotografia':
      return <Camera className="h-12 w-12 mb-4" />;
    case 'Wearables':
      return <Watch className="h-12 w-12 mb-4" />;
    case 'Games':
      return <Gamepad className="h-12 w-12 mb-4" />;
    case 'Áudio':
      return <Speaker className="h-12 w-12 mb-4" />;
    case 'Escritório':
      return <Printer className="h-12 w-12 mb-4" />;
    default:
      return <Smartphone className="h-12 w-12 mb-4" />;
  }
};

const CategoriesPage = () => {
  // Remove the "Todos" category
  const displayCategories = categories.filter(cat => cat !== "Todos");
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-4">Categorias</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Navegue por nossas categorias e encontre os produtos perfeitos para você. Temos uma grande variedade de opções para todas as suas necessidades.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayCategories.map((category) => (
              <Link 
                key={category}
                to={`/produtos?categoria=${encodeURIComponent(category)}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="p-8 flex flex-col items-center">
                    <div className="text-brand-teal group-hover:text-brand-blue transition-colors">
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-xl font-semibold">{category}</h3>
                    <p className="text-gray-500 text-center mt-2">Explore nossa seleção de produtos {category.toLowerCase()}</p>
                    <div className="mt-6 w-full">
                      <span className="inline-block w-full py-2 text-center text-brand-teal border border-brand-teal rounded-md group-hover:bg-brand-teal group-hover:text-white transition-all">
                        Ver produtos
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
