import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения регистрации.",
    });
    setFormData({ name: '', phone: '', comment: '' });
  };

  return (
    <>
      <section id="registration" className="py-20 px-4 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
                  Регистрация
                </h2>
                <p className="text-xl text-muted-foreground">
                  Забронируйте место на семинаре
                </p>
                <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <p className="text-lg text-white">
                    <span className="font-bold text-primary">Депозит 1500₽</span> полностью тратится на еду и напитки
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    Ваше имя *
                  </label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    className="bg-background/50 border-border/50 text-white placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    Телефон *
                  </label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="bg-background/50 border-border/50 text-white placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    Комментарий (необязательно)
                  </label>
                  <Textarea 
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    placeholder="Расскажите о своих ожиданиях от семинара"
                    className="bg-background/50 border-border/50 text-white placeholder:text-muted-foreground focus:border-primary min-h-24"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Check" className="mr-2" size={24} />
                  Отправить заявку
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  После отправки заявки мы свяжемся с вами для подтверждения
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-heading font-bold text-white mb-2">
                Нейросети для бизнеса и SEO
              </p>
              <p className="text-muted-foreground">
                19 декабря 2025 · Lucky Pizza · 19:00–22:00
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg"
                onClick={() => window.open('https://wa.me/', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                WhatsApp
              </Button>
              <Button 
                size="lg"
                className="bg-[#0088cc] hover:bg-[#006699] text-white shadow-lg"
                onClick={() => window.open('https://t.me/', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/30 text-center text-muted-foreground">
            <p>© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 animate-slide-in-right">
        <Button 
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-[#25D366] hover:bg-[#20BA5A] shadow-xl hover:scale-110 transition-all duration-300"
          onClick={() => window.open('https://wa.me/', '_blank')}
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
        <Button 
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-[#0088cc] hover:bg-[#006699] shadow-xl hover:scale-110 transition-all duration-300"
          onClick={() => window.open('https://t.me/', '_blank')}
        >
          <Icon name="Send" size={28} />
        </Button>
      </div>
    </>
  );
};

export default RegistrationSection;
