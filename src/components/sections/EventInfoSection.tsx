import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EventInfoSection = () => {
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

  return (
    <>
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
    </>
  );
};

export default EventInfoSection;
