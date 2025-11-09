import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const advantages = [
  { icon: 'Trophy', title: '20 лет на рынке', description: 'Стабильные поставки и надёжность' },
  { icon: 'Shield', title: 'Контроль качества', description: 'Все сертификаты и документы' },
  { icon: 'Truck', title: 'Быстрая доставка', description: 'Собственный автопарк' },
  { icon: 'Percent', title: 'Оптовые цены', description: 'Прямые поставки от производителей' },
];

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Мясо в ассортименте<br />
                по <span className="text-primary">оптовым ценам</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                20 лет стабильных поставок — надёжный партнёр для вашего бизнеса
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="text-lg px-8">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Получить оптовый прайс
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Получить прайс-лист</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                      <Input placeholder="Ваше имя" />
                      <Input type="tel" placeholder="Телефон" />
                      <Input type="email" placeholder="Email" />
                      <Input placeholder="Название компании" />
                      <Button type="submit" className="w-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('catalog')}>
                  Смотреть каталог
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/02ccfc63-daa7-4dfb-aeb0-3081592c8e72/files/b8742dac-dc5c-4695-80be-be8334798c15.jpg"
                alt="Премиальное мясо"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={item.icon} size={32} />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
