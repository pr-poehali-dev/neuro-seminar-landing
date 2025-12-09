import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2024-12-19T19:00:00').getTime();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения регистрации.",
    });
    setFormData({ name: '', phone: '', comment: '' });
  };

  const speakers = [
    {
      name: 'Никита Титов',
      role: 'Бизнес-тренер и эксперт по AI-контенту',
      bio: 'Бизнес-тренер и эксперт в создании цифрового контента с помощью AI. За годы своей работы Никита помог более 3000 экспертам раскрыть свою уникальность и построить успешные стратегии продвижения, используя нейросети. Он научит вас, как автоматизировать маркетинг и повысить видимость вашего бизнеса с помощью современных AI-инструментов.',
      image: 'https://cdn.poehali.dev/files/Снимок экрана 2025-12-09 в 07.05.38.png'
    },
    {
      name: 'Алексей Яковлев',
      role: 'Эксперт в области нейросетей и цифрового маркетинга',
      bio: 'Эксперт в области нейросетей и цифрового маркетинга, с опытом работы в SEO с 2006 года (когда Рамблер был поисковой системой №1). Алексей помог более 15 компаниям внедрить AI-решения, которые позволили значительно увеличить целевой трафик и повысить прибыль. Его опыт в SEO и нейросетевых технологиях поможет вам оптимизировать процессы и достичь реальных результатов.',
      image: 'https://cdn.poehali.dev/files/alex.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Мария Соколова',
      company: 'CEO, TechStart',
      text: 'После внедрения AI-инструментов для SEO наш органический трафик вырос на 85% за 3 месяца. Никита и Алексей показали конкретные стратегии, которые реально работают.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Дмитрий Волков',
      company: 'Директор по маркетингу, E-commerce Pro',
      text: 'Автоматизация контент-маркетинга с помощью нейросетей сэкономила нам 60% бюджета. Семинар открыл глаза на возможности AI в бизнесе.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Елена Петрова',
      company: 'Founder, Digital Agency',
      text: 'Получили практические инструменты для анализа ключевых слов и оптимизации контента. За 2 месяца вышли в топ-3 по 12 ключевым запросам.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: 'Search',
      title: 'AI для SEO',
      description: 'Применение нейросетей для повышения позиций сайта, анализа ключевых слов и создания уникального контента'
    },
    {
      icon: 'Bot',
      title: 'AI-агенты',
      description: 'Автоматизация маркетинговых процессов: от генерации текстов до работы с чат-ботами'
    },
    {
      icon: 'Target',
      title: 'Персонализация',
      description: 'Практическое руководство по персонализации маркетинга для повышения продаж и вовлеченности'
    },
    {
      icon: 'TrendingUp',
      title: 'Реальные кейсы',
      description: 'Примеры из практики: как AI помогает сокращать затраты, улучшать ROI и увеличивать прибыль'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
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
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-4">
              🚀 19 декабря 2024 · 19:00–22:00
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

      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-5xl mb-2">📍</div>
                  <h3 className="text-xl font-heading font-bold text-white">Lucky Pizza</h3>
                  <p className="text-muted-foreground">2-я Красноармейская улица, дом 3<br />Санкт-Петербург</p>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl mb-2">⏰</div>
                  <h3 className="text-xl font-heading font-bold text-white">19:00–22:00</h3>
                  <p className="text-muted-foreground">3 часа практики<br />и бизнес-нетворкинга</p>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl mb-2">💰</div>
                  <h3 className="text-xl font-heading font-bold text-white">1500₽ депозит</h3>
                  <p className="text-muted-foreground">Полностью тратится<br />на еду и напитки</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 animate-fade-in">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-card/60 p-6 text-center border-b border-border/30">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 flex items-center justify-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={28} />
                    Как добраться
                  </h3>
                  <p className="text-muted-foreground">Lucky Pizza на 2-й Красноармейской улице, 3</p>
                </div>
                <div className="relative w-full h-[400px] md:h-[500px] bg-muted/20">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=30.312629%2C59.927282&mode=search&oid=1088007276&ol=biz&z=17"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ position: 'relative' }}
                    title="Яндекс.Карта - Lucky Pizza, 2-я Красноармейская улица, 3"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-xl animate-fade-in">
            <CardContent className="p-8 md:p-12 space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <Icon name="Pizza" className="text-primary" size={32} />
                  Почему мы выбрали пиццерию?
                </h3>
                <p className="text-lg">
                  Мы уверены, что обучение не должно быть скучным! На нашем семинаре вы не только получите ценные знания о том, как использовать нейросети для оптимизации SEO и маркетинга, но и насладитесь вкусной пиццей и напитками в кругу единомышленников. Мы хотим создать не только образовательное пространство, но и комфортную атмосферу для бизнес-нетворкинга, где каждый сможет поделиться опытом и завести полезные деловые связи.
                </p>
              </div>

              <div className="border-t border-border/30 pt-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                  Что вас ждет на семинаре?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <p>Конкретные шаги, как применять нейросети в SEO для повышения позиций сайта и создания уникального контента</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <p>Использование AI-агентов и инструментов для автоматизации маркетинговых процессов, от генерации текстов до работы с чат-ботами</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <p>Практическое руководство по персонализации маркетинга с помощью нейросетей для повышения продаж и вовлеченности</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <p>Примеры из реальной практики, как AI помогает бизнесам сокращать затраты, улучшать ROI и увеличивать прибыль</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/30 pt-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                  <Icon name="Users" className="text-primary" size={32} />
                  Что еще?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Icon name="Handshake" className="text-secondary" size={20} />
                      Бизнес-нетворкинг
                    </div>
                    <p className="text-sm">В перерывах у вас будет возможность познакомиться с другими предпринимателями и наладить новые партнерства</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Icon name="MessageSquare" className="text-secondary" size={20} />
                      Вопросы и ответы
                    </div>
                    <p className="text-sm">Личная консультация от экспертов по применению нейросетей в бизнесе</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/30 pt-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={32} />
                  После семинара вы сможете:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <p>Настроить нейросети для SEO, улучшить позиции вашего сайта и повысить видимость в поиске</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <p>Автоматизировать создание контента и маркетинга с помощью AI для соцсетей и email-маркетинга</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <p>Применить AI-агентов для автоматизации рутинных задач, таких как обработка заявок, ответы на вопросы и многое другое</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/30 pt-8 bg-gradient-to-r from-primary/10 to-secondary/10 -mx-8 md:-mx-12 px-8 md:px-12 py-8 -mb-8 md:-mb-12">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <Icon name="Star" className="text-primary" size={32} />
                  Почему стоит прийти?
                </h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Вы получите конкретные инструменты для внедрения AI в ваш бизнес</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Узнаете, как сократить затраты и увеличить доход с помощью нейросетевых технологий</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Знакомство с успешными предпринимателями и возможность наладить полезные деловые связи</span>
                  </p>
                </div>
                <p className="mt-6 text-lg text-white font-semibold text-center">
                  Ждем вас на семинаре, где знания и вкусная пицца идут рука об руку! 🍕✨
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
              Что вы получите
            </h2>
            <p className="text-xl text-muted-foreground">
              Практические навыки работы с AI для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={benefit.icon} className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
              Спикеры семинара
            </h2>
            <p className="text-xl text-muted-foreground">
              Эксперты с многолетним опытом внедрения AI в бизнес
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {speakers.map((speaker, index) => (
              <Card 
                key={index}
                className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-in-left overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {speaker.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {speaker.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {speaker.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
              Отзывы участников
            </h2>
            <p className="text-xl text-muted-foreground">
              Реальные результаты после внедрения AI-стратегий
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                19 декабря 2024 · Lucky Pizza · 19:00–22:00
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
            <p>© 2024 Все права защищены</p>
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
    </div>
  );
};

export default Index;