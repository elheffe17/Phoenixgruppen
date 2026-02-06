import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const services = [
  { id: 'renhold-drift', name: 'Renhold & Drift' },
  { id: 'facility-management', name: 'Facility Management' },
  { id: 'eiendom-utvikling', name: 'Eiendom & Utvikling' },
  { id: 'prosjekttjenester', name: 'Prosjekt- & Tjenester' },
  { id: 'skreddersydd', name: 'Skreddersydde Løsninger' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="Phoenix Gruppen AS" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-primary/50 text-sm leading-relaxed">
              Din pålitelige partner for renhold, facility management og eiendomsutvikling. 
              Vi leverer driftssikre løsninger med fokus på kvalitet og struktur.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Tjenester</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/tjenester/${service.id}`}
                    className="text-primary/50 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Hurtiglenker</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary/50 hover:text-primary transition-colors text-sm">
                  Hjem
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('om-oss')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary/50 hover:text-primary transition-colors text-sm"
                >
                  Om oss
                </button>
              </li>
              <li>
                <Link to="/kontakt" className="text-primary/50 hover:text-primary transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-primary/50 hover:text-primary transition-colors text-sm">
                  Be om tilbud
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Kontakt oss</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary/50 text-sm">
                  Dokken 1<br />
                  2870 Dokka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+4791924855" className="text-primary/50 hover:text-primary transition-colors text-sm">
                  919 24 855
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:Post@Phoenixgruppen.com" className="text-primary/50 hover:text-primary transition-colors text-sm">
                  Post@Phoenixgruppen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary/50 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Phoenix Gruppen AS. Alle rettigheter reservert.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-primary/50 hover:text-primary transition-colors"
          >
            Til toppen
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
