import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const services = [
  { id: 'renhold-drift', name: 'Renhold & Drift' },
  { id: 'facility-management', name: 'Facility Management' },
  { id: 'eiendom-utvikling', name: 'Eiendom & Utvikling' },
  { id: 'prosjekttjenester', name: 'Prosjekt- & Tjenester' },
  { id: 'skreddersydd', name: 'Skreddersydd Løsninger' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Phoenix Gruppen AS" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-primary/70'
              }`}
            >
              Hjem
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium text-primary/70 hover:text-primary transition-colors">
                  Tjenester
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black border-primary/30">
                {services.map((service) => (
                  <DropdownMenuItem key={service.id} asChild>
                    <Link
                      to={`/tjenester/${service.id}`}
                      className="cursor-pointer hover:bg-primary/10 text-primary/80"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection('om-oss')}
              className="text-sm font-medium text-primary/70 hover:text-primary transition-colors"
            >
              Om oss
            </button>

            <Link
              to="/kontakt"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/kontakt') ? 'text-primary' : 'text-primary/70'
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+4791924855" className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>919 24 855</span>
            </a>
            <Link to="/kontakt">
              <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
                Be om tilbud
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-primary/20">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/"
              className="block text-lg font-medium text-primary hover:text-primary/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hjem
            </Link>
            <div className="space-y-2">
              <span className="block text-sm font-medium text-primary/50">Tjenester</span>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/tjenester/${service.id}`}
                  className="block pl-4 text-primary/70 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('om-oss')}
              className="block text-lg font-medium text-primary hover:text-primary w-full text-left"
            >
              Om oss
            </button>
            <Link
              to="/kontakt"
              className="block text-lg font-medium text-primary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Link to="/kontakt" className="block pt-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
                Be om tilbud
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
