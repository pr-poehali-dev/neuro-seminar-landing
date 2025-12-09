import { Card, CardContent } from '@/components/ui/card';

const SpeakersSection = () => {
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

  return (
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
  );
};

export default SpeakersSection;
