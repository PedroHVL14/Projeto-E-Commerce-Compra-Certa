
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada",
        description: "Agradecemos seu contato. Retornaremos em breve.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Estamos aqui para ajudar. Preencha o formulário abaixo ou utilize um de nossos canais de contato direto.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Digite seu nome"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Digite seu email"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Assunto da mensagem"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Digite sua mensagem aqui..."
                    className="min-h-[150px] resize-y"
                  />
                </div>
                
                <Button type="submit" className="bg-brand-teal hover:bg-brand-teal/90" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-medium text-lg mb-3">Informações de contato</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Mail className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p>atendimento@compracerta.com</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Telefone</p>
                      <p>0800-123-4567</p>
                      <p>(11) 98765-4321 (WhatsApp)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Endereço</p>
                      <p>Av. Paulista, 1000</p>
                      <p>Bela Vista, São Paulo - SP</p>
                      <p>CEP: 01310-100</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-3">Horário de atendimento</h3>
                <p className="text-sm text-gray-600 mb-2">Segunda a Sexta</p>
                <p className="mb-2">9h às 18h</p>
                <p className="text-sm text-gray-600 mb-2">Sábado</p>
                <p>9h às 13h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
