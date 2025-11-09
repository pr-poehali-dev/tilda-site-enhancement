import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

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

const Header = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
