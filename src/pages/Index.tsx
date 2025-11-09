import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'price', label: 'Прайс-лист' },
    { id: 'delivery', label: 'Оплата и доставка' },
    { id: 'faq', label: 'FAQ' },
    { id: 'suppliers', label: 'Поставщикам' },
    { id: 'about', label: 'О компании' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const catalogItems = [
    { name: 'Говядина', icon: 'Beef', description: 'Премиальные отрубы говядины' },
    { name: 'Свинина', icon: 'Ham', description: 'Свежая охлажденная свинина' },
    { name: 'Птица', icon: 'Bird', description: 'Курица, индейка, утка' },
    { name: 'Баранина', icon: 'Milk', description: 'Отборная баранина' },
    { name: 'Субпродукты', icon: 'Package', description: 'Печень, сердце, язык' },
    { name: 'Полуфабрикаты', icon: 'ChefHat', description: 'Готовые к приготовлению' },
  ];

  const advantages = [
    { icon: 'Trophy', title: '20 лет на рынке', description: 'Стабильные поставки и надёжность' },
    { icon: 'Shield', title: 'Контроль качества', description: 'Все сертификаты и документы' },
    { icon: 'Truck', title: 'Быстрая доставка', description: 'Собственный автопарк' },
    { icon: 'Percent', title: 'Оптовые цены', description: 'Прямые поставки от производителей' },
  ];

  const faqItems = [
    { q: 'Какой минимальный заказ?', a: 'Минимальный заказ от 50 кг. Для постоянных клиентов возможны индивидуальные условия.' },
    { q: 'Как часто вы делаете поставки?', a: 'Поставки осуществляются ежедневно с понедельника по пятницу. Возможна срочная доставка.' },
    { q: 'Какие документы вы предоставляете?', a: 'Мы предоставляем полный пакет документов: ветеринарные свидетельства, декларации о соответствии, накладные.' },
    { q: 'Есть ли возможность заморозки?', a: 'Да, помимо охлажденной продукции у нас есть широкий ассортимент замороженного мяса.' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">ALPHA MEAT</h1>
                  <p className="text-xs text-muted-foreground">ГРУППА КОМПАНИЙ</p>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center gap-2 text-sm">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>Санкт-Петербург</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+78129000194" className="flex items-center gap-2 text-primary font-semibold text-lg">
                <Icon name="Phone" size={20} />
                +7 812 900 01 94
              </a>
              <div className="text-sm text-muted-foreground">
                Пн-Пт 09:00-18:00
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Mail" size={16} className="mr-2" />
                Письмо директору
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>

          <nav className="hidden lg:block border-t">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === item.id ? 'text-primary bg-accent' : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {mobileMenuOpen && (
            <nav className="lg:hidden border-t py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                        activeSection === item.id ? 'text-primary bg-accent' : 'text-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      <main>
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

        <section id="catalog" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Каталог продукции</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalogItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon name={item.icon} size={40} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Icon name="FileSpreadsheet" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Актуальные цены на всю продукцию. Для получения полного прайс-листа оставьте заявку.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8">
                  Запросить прайс-лист
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
          </div>
        </section>

        <section id="delivery" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Оплата и доставка</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/02ccfc63-daa7-4dfb-aeb0-3081592c8e72/files/9aa16738-e1d0-4be9-a00c-eb2977a10d8e.jpg"
                  alt="Доставка"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Удобные способы оплаты</h3>
                    <p className="text-muted-foreground">Наличный и безналичный расчет. Отсрочка платежа для постоянных клиентов.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Доставка по городу</h3>
                    <p className="text-muted-foreground">Собственный автопарк рефрижераторов. Доставка в день заказа при заказе до 12:00.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Самовывоз</h3>
                    <p className="text-muted-foreground">Возможность самовывоза с нашего склада в удобное для вас время.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg border">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="suppliers" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-6">Поставщикам</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Мы всегда открыты к сотрудничеству с новыми поставщиками качественной продукции
            </p>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Требования к продукции:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>Наличие всех необходимых сертификатов</span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>Соответствие стандартам качества</span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>Стабильные объемы поставок</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Преимущества работы с нами:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>Долгосрочные контракты</span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>Своевременная оплата</span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>Прозрачные условия сотрудничества</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить коммерческое предложение
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/02ccfc63-daa7-4dfb-aeb0-3081592c8e72/files/8d8bbbc3-55db-4989-99ef-7914e383020f.jpg"
                  alt="О компании"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg">
                  <strong className="text-primary">ALPHA MEAT</strong> — одна из ведущих компаний по оптовой поставке мяса и мясной продукции в Санкт-Петербурге и Ленинградской области.
                </p>
                <p className="text-muted-foreground">
                  За 20 лет работы мы зарекомендовали себя как надёжный партнёр для ресторанов, кафе, столовых, магазинов и других предприятий общественного питания.
                </p>
                <p className="text-muted-foreground">
                  Мы работаем напрямую с проверенными производителями, что позволяет нам гарантировать высокое качество продукции и привлекательные цены для наших клиентов.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">постоянных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">контроль качества</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-4">
                    <Icon name="Phone" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <a href="tel:+78129000194" className="text-primary text-lg hover:underline">
                        +7 812 900 01 94
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="Mail" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@alphameat.ru" className="text-primary hover:underline">
                        info@alphameat.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="MapPin" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">
                        Санкт-Петербург<br />
                        ул. Складская, д. 15
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="Clock" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Режим работы</div>
                      <div className="text-muted-foreground">
                        Пн-Пт: 09:00 - 18:00<br />
                        Сб-Вс: выходной
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Отправить сообщение</h3>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input type="tel" placeholder="Телефон" />
                    <Input type="email" placeholder="Email" />
                    <Textarea placeholder="Ваше сообщение" rows={5} />
                    <Button type="submit" className="w-full">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold">AM</span>
                </div>
                <div>
                  <div className="font-bold">ALPHA MEAT</div>
                  <div className="text-xs text-gray-400">ГРУППА КОМПАНИЙ</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Оптовые поставки мяса и мясной продукции в Санкт-Петербурге
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Говядина</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Свинина</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Птица</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Баранина</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О компании</button></li>
                <li><button onClick={() => scrollToSection('delivery')} className="hover:text-white transition-colors">Доставка</button></li>
                <li><button onClick={() => scrollToSection('suppliers')} className="hover:text-white transition-colors">Поставщикам</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 812 900 01 94</li>
                <li>info@alphameat.ru</li>
                <li>Санкт-Петербург</li>
                <li>Пн-Пт: 09:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ALPHA MEAT. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
