import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-12-19T19:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50"></div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-2">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold">
              🚀 19 декабря 2025 · 19:00–22:00
            </div>
            <div className="text-muted-foreground text-sm md:text-base">
              Санкт-Петербург, м. Технологический институт. <span className="text-secondary font-semibold">Вход свободный!</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight">
            Нейросети для<br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse-glow">
              Бизнеса и SEO
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Как AI помогает увеличить прибыль и оптимизировать маркетинг
          </p>

          <div className="flex justify-center gap-4 my-8">
            <div className="text-center">
              <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-4 min-w-[80px]">
                <div className="text-4xl font-heading font-black text-primary">{timeLeft.days}</div>
                <div className="text-xs text-muted-foreground uppercase mt-1">Дней</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-4 min-w-[80px]">
                <div className="text-4xl font-heading font-black text-primary">{timeLeft.hours}</div>
                <div className="text-xs text-muted-foreground uppercase mt-1">Часов</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-4 min-w-[80px]">
                <div className="text-4xl font-heading font-black text-primary">{timeLeft.minutes}</div>
                <div className="text-xs text-muted-foreground uppercase mt-1">Минут</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-4 min-w-[80px]">
                <div className="text-4xl font-heading font-black text-primary">{timeLeft.seconds}</div>
                <div className="text-xs text-muted-foreground uppercase mt-1">Секунд</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Ticket" className="mr-2" size={24} />
              Зарегистрироваться
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Задать вопрос
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
