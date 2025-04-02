
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ReturnPolicyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Política de Devolução</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="lead text-lg text-gray-700 mb-8">
              Na Compra Certa, nos esforçamos para garantir que você esteja completamente satisfeito com sua compra. 
              Entendemos que às vezes um produto pode não atender às suas expectativas, e por isso oferecemos uma 
              política de devolução clara e justa.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Prazo para Devolução</h2>
            <p>
              Você tem até <strong>7 (sete) dias corridos</strong>, a contar da data de recebimento do produto, 
              para solicitar a devolução, conforme estabelecido pelo Código de Defesa do Consumidor brasileiro.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Condições para Devolução</h2>
            <p>Para que a devolução seja aceita, o produto deve:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Estar na embalagem original, com todos os acessórios e manuais</li>
              <li>Não apresentar sinais de uso ou danos causados pelo cliente</li>
              <li>Estar com as etiquetas e selos de garantia intactos</li>
              <li>Ser acompanhado da nota fiscal de compra</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Como Solicitar uma Devolução</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>Acesse sua conta no site e vá para "Meus Pedidos"</li>
              <li>Localize o pedido e selecione a opção "Solicitar Devolução"</li>
              <li>Preencha o formulário indicando o motivo da devolução</li>
              <li>Aguarde a análise do nosso time (até 48 horas úteis)</li>
              <li>Após aprovação, você receberá instruções para envio do produto</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Reembolso</h2>
            <p>
              Após recebermos e validarmos o produto devolvido, o reembolso será processado em até 
              10 dias úteis, da seguinte forma:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pagamentos com cartão de crédito: estorno na fatura do cartão</li>
              <li>Pagamentos com boleto ou transferência: reembolso via PIX ou depósito bancário</li>
              <li>O valor do frete de retorno será reembolsado apenas em casos de defeito do produto</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Produtos com Defeito</h2>
            <p>
              Para produtos com defeito de fabricação dentro do prazo de garantia, siga o procedimento:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Entre em contato com nosso suporte através do e-mail garantia@compracerta.com</li>
              <li>Envie fotos ou vídeos que evidenciem o defeito</li>
              <li>Nossa equipe técnica analisará o caso e providenciará a troca ou reparo</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Exceções</h2>
            <p>Não são elegíveis para devolução:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Produtos personalizados ou sob medida</li>
              <li>Produtos de higiene pessoal, cosméticos ou alimentos que tenham sido abertos</li>
              <li>Produtos com lacres de segurança violados</li>
              <li>Downloads ou conteúdos digitais após o acesso</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg border mt-10">
              <h3 className="text-lg font-medium mb-3">Ainda tem dúvidas?</h3>
              <p className="mb-4">
                Se você tiver qualquer dúvida sobre nossa política de devolução, 
                não hesite em entrar em contato conosco.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/faq">
                  <Button variant="outline">Ver FAQ</Button>
                </Link>
                <Link to="/contato">
                  <Button className="bg-brand-teal hover:bg-brand-teal/90">Entre em Contato</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicyPage;
