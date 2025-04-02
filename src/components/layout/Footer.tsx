
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-darkGray text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Compra Certa</h3>
            <p className="text-gray-300">
              Seu destino favorito para compras online com os melhores preços e produtos de qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/categorias" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/ofertas" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-brand-teal transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/devolucoes" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Política de Devolução
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-gray-300 mb-4">
              Rua Exemplo, 123<br />
              São Paulo, SP<br />
              contato@compracerta.com<br />
              (11) 1234-5678
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-teal">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-teal">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-teal">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Compra Certa Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
