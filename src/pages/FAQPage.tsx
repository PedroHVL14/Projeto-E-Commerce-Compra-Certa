
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  const faqs = [
    {
      question: "Como faço para rastrear meu pedido?",
      answer: "Após a confirmação do envio, você receberá um e-mail com o código de rastreamento. Você pode acompanhar o status da entrega acessando a área 'Meus Pedidos' na sua conta ou inserindo o código no campo de rastreamento em nossa página de contato."
    },
    {
      question: "Qual é o prazo de entrega?",
      answer: "O prazo de entrega varia de acordo com a sua localização. Em geral, entregas para capitais e regiões metropolitanas ocorrem em 3-5 dias úteis. Para outras regiões, o prazo pode ser de 5-10 dias úteis. O prazo exato é informado durante o processo de checkout."
    },
    {
      question: "Como posso alterar ou cancelar meu pedido?",
      answer: "Você pode cancelar ou solicitar alterações em seu pedido dentro de até 1 hora após a compra, desde que o pedido não tenha sido enviado. Entre em contato conosco pelo e-mail atendimento@compracerta.com ou pelo telefone 0800-123-4567."
    },
    {
      question: "Vocês aceitam devolução de produtos?",
      answer: "Sim, aceitamos devoluções em até 7 dias após o recebimento do produto, conforme o Código de Defesa do Consumidor. Para mais detalhes, consulte nossa Política de Devolução."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos cartões de crédito das principais bandeiras (Visa, Mastercard, Elo, American Express), boleto bancário, PIX e transferência bancária. Para compras parceladas, oferecemos parcelamento em até 12x sem juros para compras acima de R$ 300,00."
    },
    {
      question: "Os preços incluem impostos?",
      answer: "Sim, todos os preços exibidos em nosso site já incluem os impostos aplicáveis. Não há custos adicionais além dos valores apresentados e da taxa de frete, quando aplicável."
    },
    {
      question: "Como funciona a garantia dos produtos?",
      answer: "Todos os produtos possuem garantia mínima de 90 dias contra defeitos de fabricação. Alguns itens possuem garantia estendida oferecida pelo fabricante. As informações específicas de garantia estão disponíveis na página de cada produto."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Perguntas Frequentes</h1>
          <p className="text-gray-600 mb-8">
            Encontre respostas para as perguntas mais comuns sobre nossos produtos, entregas, pagamentos e políticas.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Não encontrou o que procurava?</h2>
            <p className="mb-4">
              Entre em contato com nossa equipe de suporte através da nossa página de contato ou
              diretamente pelos canais abaixo:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Email: atendimento@compracerta.com</li>
              <li>Telefone: 0800-123-4567</li>
              <li>WhatsApp: (11) 98765-4321</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
