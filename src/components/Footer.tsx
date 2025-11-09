interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
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
  );
};

export default Footer;
