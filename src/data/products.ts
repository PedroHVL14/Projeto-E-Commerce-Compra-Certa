
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  inStock: boolean;
  rating?: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Smart TV 55\" 4K",
    description: "Smart TV com resolução 4K, tela de 55 polegadas e sistema operacional integrado para streaming e aplicativos.",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1624179416192-3e4fcc2db652?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Eletrônicos",
    featured: true,
    inStock: true,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Smartphone Premium",
    description: "Smartphone de última geração com câmera de alta resolução, bateria de longa duração e processador potente.",
    price: 3999.99,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Eletrônicos",
    inStock: true,
    rating: 4.7,
  },
  {
    id: "3",
    name: "Notebook Ultra Slim",
    description: "Notebook leve e fino com processador rápido, tela de alta definição e longa duração de bateria.",
    price: 4599.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Computadores",
    featured: true,
    inStock: true,
    rating: 4.5,
  },
  {
    id: "4",
    name: "Fone de Ouvido Bluetooth",
    description: "Fone de ouvido sem fio com cancelamento de ruído, alta qualidade sonora e bateria de longa duração.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Acessórios",
    inStock: true,
    rating: 4.6,
  },
  {
    id: "5",
    name: "Monitor Ultrawide",
    description: "Monitor com tela ultrawide, alta taxa de atualização e resolução para uma experiência visual imersiva.",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Computadores",
    featured: true,
    inStock: true,
    rating: 4.9,
  },
  {
    id: "6",
    name: "Câmera DSLR Profissional",
    description: "Câmera profissional com sensor de alta resolução, gravação de vídeo em 4K e sistema avançado de foco.",
    price: 5899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Fotografia",
    inStock: true,
    rating: 4.7,
  },
  {
    id: "7",
    name: "Smartwatch Fitness",
    description: "Relógio inteligente com monitoramento de atividades físicas, saúde e notificações do smartphone.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Wearables",
    inStock: true,
    rating: 4.4,
  },
  {
    id: "8",
    name: "Console de Videogame",
    description: "Console de última geração com gráficos impressionantes, armazenamento amplo e jogos exclusivos.",
    price: 3799.99,
    image: "https://images.unsplash.com/photo-1591370874773-6702dfa7d117?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Games",
    featured: true,
    inStock: true,
    rating: 4.9,
  },
  {
    id: "9",
    name: "Tablet Premium",
    description: "Tablet com tela de alta definição, processador potente e bateria de longa duração para produtividade e entretenimento.",
    price: 2599.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Eletrônicos",
    inStock: true,
    rating: 4.5,
  },
  {
    id: "10",
    name: "Impressora Multifuncional",
    description: "Impressora com funções de digitalização e cópia, conexão Wi-Fi e impressão de alta qualidade.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Escritório",
    inStock: true,
    rating: 4.3,
  },
  {
    id: "11",
    name: "Caixa de Som Portátil",
    description: "Caixa de som portátil com conexão Bluetooth, resistente à água e bateria de longa duração.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Áudio",
    inStock: true,
    rating: 4.6,
  },
  {
    id: "12",
    name: "Teclado Mecânico Gamer",
    description: "Teclado mecânico projetado para jogos com iluminação RGB e respostas rápidas para melhor desempenho.",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Acessórios",
    inStock: true,
    rating: 4.8,
  },
];

export const categories = [
  "Todos",
  "Eletrônicos",
  "Computadores",
  "Acessórios",
  "Fotografia",
  "Wearables",
  "Games",
  "Áudio",
  "Escritório"
];

export const getFeaturedProducts = () => products.filter(product => product.featured);

export const getProductById = (id: string) => products.find(product => product.id === id);

export const getProductsByCategory = (category: string) => {
  if (category === "Todos") return products;
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.description.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery)
  );
};
