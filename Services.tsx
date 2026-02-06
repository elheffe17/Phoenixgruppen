import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, Home, Briefcase, Settings } from 'lucide-react';

const services = [
  {
    id: 'renhold-drift',
    title: 'Renhold & Drift',
    description: 'Profesjonelt renhold for bedrifter, kontorer og offentlige bygg. Dokumenterte rutiner og kvalitetssikring i alle ledd.',
    icon: Sparkles,
    features: ['Kontorrenhold', 'Industrirenhold', 'Vindusvask', 'Gulvbehandling'],
  },
  {
    id: 'facility-management',
    title: 'Facility Management',
    description: 'Komplett drift og vedlikehold av dine eiendommer. Strukturerte prosesser og driftssikkerhet i fokus.',
    icon: Building2,
    features: ['Teknisk vedlikehold', 'Vaktmestertjenester', 'Energioptimalisering', 'Sikkerhet'],
  },
  {
    id: 'eiendom-utvikling',
    title: 'Eiendom & Utvikling',
    description: 'Ekspertise innen eiendomsforvaltning og utvikling. Vi optimaliserer verdien av dine eiendommer.',
    icon: Home,
    features: ['Eiendomsforvaltning', 'Utviklingsprosjekter', 'Leietakeradministrasjon', 'Verdivurdering'],
  },
  {
    id: 'prosjekttjenester',
    title: 'Prosjekt- & Tjenester',
    description: 'Skreddersydde prosjektløsninger for din virksomhet. Fra planlegging til gjennomføring med høy kvalitet.',
    icon: Briefcase,
    features: ['Prosjektledelse', 'Kvalitetssikring', 'Rådgivning', 'Gjennomføring'],
  },
  {
    id: 'skreddersydd',
    title: 'Skreddersydde Løsninger',
    description: 'Har du spesielle behov? Vi utvikler skreddersydde løsninger som passer perfekt til din virksomhet.',
    icon: Settings,
    features: ['Tilpassede avtaler', 'Fleksible løsninger', 'Personlig kontakt', 'Kontinuerlig oppfølging'],
  },
];

export default function Services() {
  return (
    <section id="tjenester" className="py-24 bg-black relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Våre Tjenester
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Driftssikre løsninger –{' '}
            <span className="text-gradient">levert med kvalitet</span>
          </h2>
          <p className="text-primary/60 text-lg max-w-2xl mx-auto">
            Vi tilbyr et komplett spekter av tjenester for bedrifter og offentlig sektor. 
            Klikk på en tjeneste for å lære mer og be om tilbud.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/tjenester/${service.id}`}
              className="group relative bg-neutral-950 rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-primary/50 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-primary/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                <span>Be om tilbud</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-primary/50 mb-6">
            Usikker på hvilken tjeneste du trenger?
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <span>Ta kontakt for en uforpliktende prat</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
