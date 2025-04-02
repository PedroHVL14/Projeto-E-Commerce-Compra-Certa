
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsOfServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Termos de Serviço</h1>
          <p className="text-gray-600 mb-8">
            Última atualização: 16 de Junho de 2023
          </p>
          
          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site e os serviços da Compra Certa, você concorda em cumprir e estar vinculado 
              a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não poderá 
              acessar ou utilizar nossos serviços.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Elegibilidade</h2>
            <p>
              Para utilizar nossos serviços, você deve ter pelo menos 18 anos de idade ou a maioridade legal 
              em sua jurisdição. Ao usar nosso site, você declara e garante que tem idade legal para formar 
              um contrato vinculativo com a Compra Certa.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Conta de Usuário</h2>
            <p>
              Algumas funcionalidades do nosso site podem exigir que você crie uma conta. Você é responsável 
              por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrem 
              em sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado 
              de sua conta.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Compras e Pagamentos</h2>
            <p>
              Ao fazer uma compra em nosso site, você concorda em fornecer informações de pagamento precisas 
              e completas. Reservamo-nos o direito de recusar ou cancelar seu pedido a qualquer momento por 
              motivos como disponibilidade do produto, erros nas informações do produto ou preço, ou suspeita de fraude.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponível em nosso site, incluindo mas não se limitando a texto, gráficos, 
              logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de 
              propriedade da Compra Certa ou de seus fornecedores de conteúdo e está protegido por leis de 
              direitos autorais e propriedade intelectual.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Uso Aceitável</h2>
            <p>
              Você concorda em não utilizar nosso site para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violar qualquer lei aplicável ou regulamento</li>
              <li>Infringir os direitos de qualquer terceiro</li>
              <li>Transmitir vírus ou códigos maliciosos</li>
              <li>Interferir na operação normal do site</li>
              <li>Realizar engenharia reversa ou tentar acessar código-fonte</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância a Compra Certa ou seus diretores, funcionários, parceiros ou agentes 
              serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou 
              punitivos decorrentes do uso ou incapacidade de usar nosso site ou serviços.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Força Maior</h2>
            <p>
              Não seremos responsáveis por qualquer falha ou atraso no desempenho de nossas obrigações 
              resultantes de causas além do nosso controle razoável, incluindo, mas não se limitando a, 
              desastres naturais, pandemias, atos de terrorismo, guerra, revoltas ou rebelião.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Lei Aplicável</h2>
            <p>
              Estes Termos de Serviço serão regidos e interpretados de acordo com as leis do Brasil, 
              sem considerar suas disposições de conflito de leis.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. 
              Alterações significativas serão notificadas através do nosso site. O uso contínuo do 
              site após tais modificações constitui sua aceitação dos novos termos.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border mt-10">
              <h3 className="text-lg font-medium mb-3">Contato</h3>
              <p className="mb-4">
                Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco.
              </p>
              <Link to="/contato">
                <Button className="bg-brand-teal hover:bg-brand-teal/90">Entre em Contato</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfServicePage;
