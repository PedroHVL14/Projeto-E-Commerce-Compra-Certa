
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-brand-blue text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-teal opacity-90" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Seu destino para compras online
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Descubra os melhores produtos, com os melhores preços e entrega rápida. Tudo o que você precisa em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/produtos">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90">
                Ver produtos
              </Button>
            </Link>
            <Link to="/ofertas">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ofertas especiais
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-full">
        <div className="absolute right-0 top-0 w-full h-full bg-white/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute right-0 top-0 w-2/3 h-full bg-white/5 -skew-x-12 transform origin-top-right"></div>
      </div>
    </div>
  );
};

export default Hero;
